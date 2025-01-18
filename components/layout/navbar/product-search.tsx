'use client';

import { SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { createUrl } from '@/lib/utils';

const searchId = 'search-id';

type SearchProps = {
  callback?: () => void;
};

export function ProductSearch(props: SearchProps) {
  const { callback } = props;
  const router = useRouter();
  const params = useSearchParams();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement.search as HTMLInputElement;
    const newParams = new URLSearchParams(params.toString());

    if (inputElement.value) {
      newParams.set('q', inputElement.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));

    if (callback) {
      callback();
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <label className="sr-only" htmlFor={searchId}>
        Search products
      </label>
      <input
        placeholder="Search products..."
        key={params?.get('q')}
        type="text"
        name="search"
        id={searchId}
        autoComplete="off"
        defaultValue={params?.get('q') || ''}
        className="w-full rounded-md border border-neutral-200 bg-white py-2 pl-8 pr-4 text-sm dark:border-neutral-800 dark:bg-transparent"
      />
      <SearchIcon size="16" color="gray" className="absolute left-2 top-2.5" />
    </form>
  );
}

export function ProductSearchSkeleton() {
  return (
    <form className="relative">
      <label className="sr-only" htmlFor={searchId}>
        Search products
      </label>
      <input
        placeholder="Search products..."
        type="text"
        name="search"
        id={searchId}
        autoComplete="off"
        className="w-full rounded-md border border-neutral-200 bg-white py-2 pl-8 pr-4 text-sm dark:border-neutral-800 dark:bg-transparent"
      />
      <SearchIcon size="16" color="gray" className="absolute left-2 top-2.5" />
    </form>
  );
}
