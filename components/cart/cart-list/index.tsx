'use client';

import { useEffect, useState } from 'react';

import { CartCard, LoadingCartCard } from '@/components/cart/cart-list/cart-card';
import { useCart } from '@/hooks/use-cart';

export function CartList() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cart = useCart();

  // Avoid using browser API's during server side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <ul className="lg:col-span-7">
        <LoadingCartCard />
        <LoadingCartCard />
      </ul>
    );
  }

  if (cart.products.length === 0) {
    return (
      <ul className="flex h-full items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 lg:col-span-7">
        <li>
          <h3 className="text-lg">Your cart currently has no products.</h3>
        </li>
      </ul>
    );
  }

  return (
    <ul className="lg:col-span-7">
      {cart.products.map((cartProduct) => (
        <CartCard key={cartProduct.inventoryId} cartProduct={cartProduct} />
      ))}
    </ul>
  );
}
