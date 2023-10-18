'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { createUrl } from 'lib/utils';

const searchId = 'search-id';

export function Search() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const newPath = path === '/' || path.startsWith('/product') ? '/search' : path;

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

    router.push(createUrl(newPath, newParams));
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
        className="w-full rounded-lg border bg-white py-2 pl-8 pr-4 text-sm text-black dark:border-neutral-800 dark:bg-transparent dark:text-white"
      />
      <SearchIcon size="16" color="gray" className="absolute left-2 top-3" />
    </form>
  );
}
