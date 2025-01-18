import Image from 'next/image';

import { QuickShopDisclosure } from '@/components/quick-shop/quick-shop-disclosure';
import { ProductWithColor } from '@/lib/api';

export function ProductImage({ product }: { product: ProductWithColor }) {
  const { colors } = product;
  const featuredImage = colors[0];

  return (
    <div className="group/image relative aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
      <Image
        fill
        alt={featuredImage?.altText || ''}
        src={featuredImage?.image || ''}
        className="aspect-square rounded-md object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div className="absolute bottom-0 w-full opacity-0 transition group-hover/image:opacity-100">
        <QuickShopDisclosure product={product} />
      </div>
    </div>
  );
}
