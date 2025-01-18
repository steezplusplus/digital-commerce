'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';

import { Color } from '@prisma/client';

export function Gallery({ colors }: { colors: Color[] }) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <GalleryTab colors={colors} />
      </div>
      <Tab.Panels>
        <GalleryPanel colors={colors} />
      </Tab.Panels>
    </Tab.Group>
  );
}

function GalleryTab({ colors }: { colors: Color[] }) {
  return (
    <Tab.List className="grid grid-cols-4 gap-6">
      {colors.map((color) => {
        return (
          <Tab
            key={color.id}
            className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700"
          >
            {({ selected }) => (
              <div>
                <span
                  className={`absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-600 ${
                    selected ? 'ring-2 ring-offset-1' : ''
                  } `}
                >
                  <Image
                    fill
                    src={color.image}
                    alt={color.altText}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 20vw"
                  />
                </span>
              </div>
            )}
          </Tab>
        );
      })}
    </Tab.List>
  );
}

function GalleryPanel({ colors }: { colors: Color[] }) {
  return (
    <Tab.Panels className="aspect-square w-full">
      {colors.map((color) => {
        return (
          <Tab.Panel key={color.id} className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
            <div className="relative aspect-square h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-600 sm:rounded-lg">
              <Image
                fill
                src={color.image}
                alt={color.altText}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Tab.Panel>
        );
      })}
    </Tab.Panels>
  );
}
