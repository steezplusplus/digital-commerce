import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Product } from '@prisma/client';

export interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error('Item already in cart.');
        }

        set({ items: [...get().items, data] });
        toast.success('Item added to cart.');
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
