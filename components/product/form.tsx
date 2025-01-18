import { Color, Inventory, Product, Size } from '@prisma/client';

import { AddToCart } from '@/components/cart/add-to-cart';
import { Radio } from '@/components/product/radio';
import { Price } from '@/components/ui/price';

export function ProductForm({
  product,
  selectedSize,
  selectedColor,
}: {
  product: Product & { inventory: Inventory[]; colors: Color[]; sizes: Size[] };
  selectedSize?: string;
  selectedColor?: string;
}) {
  const newSize = product.sizes.find((size) => size.value === selectedSize);
  const newColor = product.colors.find((color) => color.value === selectedColor) as Color;
  const newInventory = product.inventory.find((inv) => inv.colorId === newColor?.id && inv.sizeId === newSize?.id);

  return (
    <div className="rounded-md border border-neutral-200 bg-white px-4 py-6 dark:border-neutral-800 dark:bg-transparent">
      <h2 className="mb-3 border-b border-neutral-200 pb-4 text-4xl font-semibold dark:border-neutral-800">
        {product.name}
      </h2>
      <ColorSelection colors={product.colors} />
      <SizeSelection sizes={product.sizes} />
      <h4 className="text-sm text-gray-500">
        <Price amount={String(product.price)} />
      </h4>
      <p className="mb-4 mt-2">{product.description}</p>
      <AddToCart product={product} selectedSize={newSize} selectedColor={newColor} selectedInventory={newInventory} />
    </div>
  );
}

function ColorSelection({ colors }: { colors: Color[] }) {
  return (
    <>
      <h3 className="mb-1 text-lg">Colors</h3>
      <fieldset className="mb-2 flex flex-wrap gap-1 text-sm">
        {colors.map((color) => {
          return <Radio key={color.id} name="color" value={color.value} displayName={color.name} />;
        })}
      </fieldset>
    </>
  );
}

function SizeSelection({ sizes }: { sizes: Size[] }) {
  return (
    <>
      <h3 className="mb-1 text-lg">Sizes</h3>
      <fieldset className="mb-2 flex flex-wrap gap-1 text-sm">
        {sizes.map((size) => {
          return <Radio key={size.id} name="size" value={size.value} displayName={size.name} />;
        })}
      </fieldset>
    </>
  );
}
