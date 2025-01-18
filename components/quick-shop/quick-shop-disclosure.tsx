'use client';

import { Button } from '@/components/ui/button';
import { useQuickShop } from '@/hooks/use-quick-shop-modal';
import { ProductWithColor } from '@/lib/api';

export function QuickShopDisclosure({ product }: { product: ProductWithColor }) {
  const quickShopModal = useQuickShop();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    quickShopModal.onOpen(product);
  };

  return (
    <Button
      className="w-full bg-neutral-100 text-neutral-600 hover:underline hover:opacity-75 dark:bg-neutral-800 dark:text-neutral-200"
      onClick={onPreview}
    >
      Quick Shop
    </Button>
  );
}
