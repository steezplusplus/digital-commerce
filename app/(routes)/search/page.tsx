import { ProductList } from '@/components/layout/search/product-list';
import { getSearchPage } from '@/lib/api';
import { sorting } from '@/lib/constants';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
};

export type SearchPageProps = {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function SearchPage(props: SearchPageProps) {
  const searchParams = await props.searchParams;
  const { q: searchValue, sort } = searchParams as { [key: string]: string };

  const selectedSort = sorting.find((item) => item.slug === sort);

  const products = await getSearchPage({
    name: searchValue,
    sortKey: selectedSort?.sortKey,
    order: selectedSort?.order,
  });

  if (products.length === 0) {
    if (searchValue !== undefined) {
      return (
        <p className="text-neutral-300">
          There are no listings for your search {searchValue && <b>&quot;{searchValue}&quot;</b>}.
        </p>
      );
    } else {
      return <p className="text-neutral-300">This store has ran out of products.</p>;
    }
  }

  return (
    <>
      <SearchResultsText numResults={products.length} searchValue={searchValue} />
      <ProductList products={products} />
    </>
  );
}

function SearchResultsText({ numResults, searchValue }: { numResults: number; searchValue?: string }) {
  if (searchValue !== undefined) {
    return (
      <p className="mb-3 text-neutral-300">
        Showing {numResults} {numResults > 1 ? 'results' : 'result'} for <b>&quot;{searchValue}&quot;</b>.
      </p>
    );
  }
}
