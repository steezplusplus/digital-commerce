import Image from 'next/image';
import Link from 'next/link';

import { getCategories, getStore } from 'lib/api';

export async function Footer() {
  const store = await getStore();
  const categories = await getCategories({});

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 p-6  dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
            <Image
              alt="logo image"
              src="/logo.jpg"
              className="mb-2 h-12 w-12 rounded-full"
              width="48"
              height="48"
            />
            {store.name}
          </Link>
          <Link
            className="text-blue-500 hover:text-blue-700 hover:underline"
            href="https://github.com/steezplusplus/ez-commerce"
          >
            View source code
          </Link>
          <p className="font-semibold">Made by Jesse Breuer-Penello</p>
        </div>
        <nav>
          <p className="mb-1">Categories</p>
          <ul className="flex flex-col gap-y-2">
            <li className="font-light text-blue-500 hover:text-blue-700 hover:underline">
              <Link href={`/search`}>All</Link>
            </li>
            {categories.map((category) => {
              return (
                <li
                  className="font-light text-blue-500 hover:text-blue-700 hover:underline"
                  key={category.id}
                >
                  <Link href={`/search/${category.slug}`}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}