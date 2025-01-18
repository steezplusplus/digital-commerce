'use client';

import Link from 'next/link';

import { Gallery } from '@/components/ui/gallery';
import { Modal } from '@/components/ui/modal';
import { Price } from '@/components/ui/price';
import { useQuickShop } from '@/hooks/use-quick-shop-modal';
import { ProductWithColor } from '@/lib/api';

export function QuickShopModal() {
  const quickShopModal = useQuickShop();
  const product = quickShopModal.product;

  if (!product) {
    return null;
  }

  return (
    <Modal open={quickShopModal.isOpen} onClose={quickShopModal.onClose} title={product.name}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery colors={product.colors} />
        </div>
        <div className="h-full sm:col-span-8 lg:col-span-7">
          <ProductModalInfo product={product} />
        </div>
      </div>
      <ProductModalLink slug={product.slug} onClose={quickShopModal.onClose} />
    </Modal>
  );
}

function ProductModalInfo({ product }: { product: ProductWithColor }) {
  return (
    <div className="flex h-full flex-col gap-y-4">
      <h4>{product.description}</h4>
      <h4>
        <Price amount={String(product.price)} />
      </h4>
    </div>
  );
}

function ProductModalLink({ slug, onClose }: { slug: string; onClose: () => void }) {
  return (
    <Link
      className="mt-4 flex w-full justify-center rounded-md border bg-neutral-900 px-2 py-1 text-sm tracking-widest text-white transition hover:opacity-75 dark:bg-neutral-50 dark:text-black"
      href={`/product/${slug}`}
      onClick={() => onClose()}
    >
      Go to product page
    </Link>
  );
}
