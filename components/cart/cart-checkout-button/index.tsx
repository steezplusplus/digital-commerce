'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useCart } from '@/hooks/use-cart';

export function CartCheckoutButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const cart = useCart();

  // Avoid hydration error from using localstorage from useCart()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[34px] w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-700" />;
  }

  const handleCheckout = () => {
    if (!cart.products.length) {
      return toast.error('There are no products in your cart. Add products to your cart to continue.');
    }
    cart.removeAll();
    return toast.success('Thanks for checking out my demo.');
  };

  return (
    <button
      className="disabled:cursor-opacity-50 w-full rounded-md border px-2 py-1 text-xl tracking-widest transition hover:opacity-75 disabled:cursor-not-allowed"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
}
