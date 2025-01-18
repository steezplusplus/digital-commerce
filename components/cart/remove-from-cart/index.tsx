'use client';

import { X } from 'lucide-react';

import { useCart } from '@/hooks/use-cart';

type RemoveFromCartProps = {
  inventoryId: string;
};

export function RemoveFromCart({ inventoryId }: RemoveFromCartProps) {
  const cart = useCart();

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    cart.removeProduct(inventoryId);
  };

  return (
    <button
      className="w-auto rounded-md border border-neutral-200 bg-white p-1 transition hover:opacity-75 dark:border-neutral-800 dark:bg-transparent"
      onClick={removeProduct}
    >
      <X size="18" />
    </button>
  );
}
