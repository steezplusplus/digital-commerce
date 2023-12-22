import Image from 'next/image';
import Link from 'next/link';

import { Color } from '@prisma/client';
import { ProductWithColor } from 'lib/api';

// TODO A11y: Buttons to pause and resume where the user left off
// TODO A11y: a11y attributes
// TODO Feat: Adjustable animation speed
// TODO Feat: Show color name
// TODO Style: Label looks bad while Price loading.

export function Marquee({ products, ariaLabelledBy }: { products: ProductWithColor[]; ariaLabelledBy: string }) {
  return (
    <article aria-labelledby={ariaLabelledBy} className="flex w-full overflow-hidden whitespace-nowrap">
      <div className="relative">
        <ul className="flex motion-safe:animate-marquee">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
        <ul className="absolute top-0 flex motion-safe:animate-marquee2">
          {products.map((product) => {
            return <MarqueeFrame colors={product.colors} name={product.name} key={product.id} slug={product.slug} />;
          })}
        </ul>
      </div>
    </article>
  );
}

function MarqueeFrame({ colors, name, slug }: { colors: Color[]; name: string; slug: string }) {
  return (
    <>
      {colors.map((color) => {
        return (
          <li key={color.id} className="relative mx-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Link href={`/product/${slug}?color=${color.value}`} className="relative h-full w-full">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
                <Image src={color.image} alt={color.altText} fill sizes="33vw" className="object-cover object-center" />
                <MarqueeLabel name={name} />
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}

function MarqueeLabel({ name }: { name: string }) {
  return (
    <div className="absolute bottom-0 w-full opacity-0 transition group-hover:opacity-100">
      <div
        className="
          w-full
          rounded-md
          border
          bg-neutral-100
          px-2
          py-1
          text-sm
          tracking-widest
          text-neutral-600
          hover:underline
          hover:opacity-75
          dark:bg-neutral-800
          dark:text-neutral-200
        "
      >
        <p className="line-clamp-2 flex flex-grow items-center justify-center leading-none tracking-tight">{name}</p>
      </div>
    </div>
  );
}