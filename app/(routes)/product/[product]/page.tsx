import { Metadata } from 'next';

import { ProductForm } from '@/components/product/form';
import { Gallery } from '@/components/product/gallery';
import { Container } from '@/components/ui/container';
import { getProductPage } from '@/lib/api';

export type ProductPageProps = {
  params: Promise<{
    product: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export async function generateMetadata(props: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const params = await props.params;
  const product = await getProductPage({ name: params.product });

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.colors[0]?.image as string,
          alt: product.colors[0]?.altText as string,
        },
      ],
    },
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { color: selectedColor, size: selectedSize } = (await props.searchParams) as { [key: string]: string };
  const product = await getProductPage({ name: (await props.params).product });

  return (
    <Container className="px-4 pb-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bottom-0 flex flex-col justify-center self-start md:sticky md:top-10 md:aspect-square">
          <ProductForm product={product} selectedColor={selectedColor} selectedSize={selectedSize} />
        </div>
        <Gallery colors={product.colors} />
      </div>
    </Container>
  );
}
