import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import { Footer } from 'components/layout/footer';
import { Container } from 'components/ui/container';
import { Price } from 'components/ui/price';
import { getFeaturedProducts, getLatestArrivals } from 'lib/api';

export default async function Home() {
  const latestArrivals = await getLatestArrivals({ take: 4 });
  const featuredProducts = await getFeaturedProducts({ take: 4 });

  return (
    <>
      <Container>
        <h2 className="my-3 pl-2 text-xl">Latest Arrivals</h2>
        <ul className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {latestArrivals.map((product) => {
            return (
              <li key={product.id} className="relative aspect-square">
                <Link href={`/product/${product.productSlug}?color=${product.value}`} className="h-full w-full">
                  <Image
                    fill
                    alt={product.altText}
                    src={product.image}
                    className="aspect-square rounded-md object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </Link>
                <h2>{product.name}</h2>
                <Price amount={String(product.price)} />
              </li>
            );
          })}
        </ul>
        <h2 className="my-3 pl-2 text-xl">Featured Products</h2>
        <ul className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => {
            return (
              <li key={product.id} className="relative aspect-square">
                <Link href={`/product/${product.productSlug}?color=${product.value}`} className="h-full w-full">
                  <Image
                    fill
                    alt={product.altText}
                    src={product.image}
                    className="aspect-square rounded-md object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </Link>
                <h2>{product.name}</h2>
                <Price amount={String(product.price)} />
              </li>
            );
          })}
        </ul>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
