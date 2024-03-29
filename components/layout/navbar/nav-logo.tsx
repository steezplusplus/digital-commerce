import Link from 'next/link';

import { CircleLogo } from '@/components/ui/circle-logo';

export function NavLogo({ storeName }: { storeName: string }) {
  const href = '/';
  return (
    <Link href={href} className="mr-2 flex w-full items-center justify-center md:w-auto">
      <CircleLogo />
      <h1 className="ml-2 flex-none text-sm font-medium transition duration-300 hover:opacity-75">{storeName}</h1>
    </Link>
  );
}
