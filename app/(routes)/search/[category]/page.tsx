import { Metadata } from 'next';

import { ProductList } from '@/components/layout/search/product-list';
import { getCategory, getCategoryPage } from '@/lib/api';
import { sorting } from '@/lib/constants';

export type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const params = await props.params;
  const category = await getCategory({ name: params.category });
  return {
    title: category.name,
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;

  const { category: categoryParam } = await params;
  const { sort } = (await searchParams) as { [key: string]: string };
  const selectedSort = sorting.find((item) => item.slug === sort);

  const category = await getCategoryPage({
    name: categoryParam,
    sortKey: selectedSort?.sortKey,
    order: selectedSort?.order,
  });

  if (category.products.length === 0) {
    return <NoResults />;
  }

  return <ProductList products={category.products} />;
}

function NoResults() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="text-neutral-300">No products found in this category.</p>
    </div>
  );
}
