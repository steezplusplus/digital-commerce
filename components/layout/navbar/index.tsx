import { Suspense } from 'react';

import { CheckoutLink } from '@/components/cart/checkout-link';
import { NavLogo } from '@/components/layout/navbar/nav-logo';
import { ProductSearch, ProductSearchSkeleton } from '@/components/layout/navbar/product-search';
import { SearchModalDisclosure } from '@/components/layout/navbar/search-modal-disclosure';
import { getCategories, getStore } from '@/lib/api';
import { NavLinks } from './nav-links';

export async function Navbar() {
  const store = await getStore();
  const categories = await getCategories();

  return (
    <nav className="flex w-full items-center justify-between p-4">
      {/* Mobile search */}
      <div className="flex flex-none md:hidden">
        <SearchModalDisclosure />
      </div>

      <div className="flex w-full items-center">
        {/* Logo */}
        <div className="flex w-full items-center md:w-1/3">
          <NavLogo storeName={store.name} />
          <ul className="ml-4 hidden gap-x-2 lg:flex">
            <NavLinks categories={categories} />
          </ul>
        </div>

        {/* Desktop & Laptop search */}
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<ProductSearchSkeleton />}>
            <ProductSearch />
          </Suspense>
        </div>

        {/* Checkout Link */}
        <div className="flex justify-end md:w-1/3">
          <CheckoutLink />
        </div>
      </div>
    </nav>
  );
}
