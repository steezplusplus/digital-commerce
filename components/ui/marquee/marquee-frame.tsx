import Image from 'next/image';
import Link from 'next/link';

import { ProductWithColor } from '@/lib/api';

// TODO Wrong `sizes` attribute on <Image />
export function MarqueeFrame({ product }: { product: ProductWithColor }) {
  const { colors, slug } = product;

  return (
    <>
      {colors.map((color) => {
        const href = `/product/${slug}?color=${color.value}`;
        return (
          <li key={color.id} className="group/frame mx-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Link href={href} className="relative block aspect-square rounded-md bg-gray-100 dark:bg-gray-700">
              <Image
                src={color.image}
                alt={color.altText}
                fill
                sizes="33vw"
                className="aspect-square rounded-md object-cover"
              />
              <div className="absolute bottom-0 w-full opacity-0 transition group-hover/frame:opacity-100">
                <p className="flex w-full items-center justify-center rounded-md border bg-neutral-100 text-sm tracking-widest text-neutral-600 hover:underline hover:opacity-75 dark:bg-neutral-800 dark:text-neutral-200">
                  Go to Product
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export function LoadingMarqueeFrame() {
  return (
    <li className="group/frame mx-2 h-24 w-24 animate-pulse overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700 sm:h-48 sm:w-48" />
  );
}
