import Image from 'next/image';

export function CartImage({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="relative mr-2 h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
      <Image fill src={src || ''} alt={alt || ''} className="object-cover object-center" sizes="30vw" />
    </div>
  );
}

export function LoadingCartImage() {
  return (
    <div className="mr-2 aspect-square h-24 w-24 animate-pulse rounded-md bg-gray-100 dark:bg-gray-700 sm:h-48 sm:w-48" />
  );
}
