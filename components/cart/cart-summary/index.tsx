'use client';

import { CartCheckoutButton } from '@/components/cart/cart-checkout-button';
import { Price } from '@/components/ui/price';
import { useCart } from '@/hooks/use-cart';

export function CartSummary() {
  const cart = useCart();

  const totalPrice = cart.products.reduce((sum, product) => {
    return (sum += Number(product.productPrice));
  }, 0);

  return (
    <div className="mt-6 rounded-lg border border-neutral-200 px-4 py-6 dark:border-neutral-800 sm:p-6 md:sticky md:top-10 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="mb-6 text-lg font-medium">Order summary</h2>
      <div className="border-t border-neutral-200 py-4 dark:border-neutral-800">
        <h3 className="mb-1 font-medium">Order total</h3>
        <h4 className="text-lg font-medium">
          <Price amount={String(totalPrice)} />
        </h4>
      </div>
      <CartCheckoutButton />
    </div>
  );
}
