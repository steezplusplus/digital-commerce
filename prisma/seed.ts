import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Starting seed...');

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.store.deleteMany();

  const store = await prisma.store.create({
    data: {
      name: 'My store',
      categories: {
         create: [
          { 
            name: 'Jackets',
            products: {
              create: [
                { 
                  name: 'Bomber Jacket' ,
                  description: 'The multi-season must-have jacket: light and classic for daily wear, with a soft fleece lining for extra warmth.',
                  price: 50.00,
                  image: 'https://placehold.co/600x400/png'
                }
              ]
            }
          },
          { 
            name: 'Shirts',
            products: {
              create: [
                { 
                  name: 'T-Shirt',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png'
                },
                { 
                  name: 'Prism T-Shirt',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png'
                },
                { 
                  name: 'Circles T-Jacket',
                  description: '60% combed ringspun cotton/40% polyester jersey tee.',
                  price: 25.00,
                  image: 'https://placehold.co/600x400/png'
                },
              ]
            }
          },
          { 
            name: 'Drinkware',
            products: {
              create: [
                { 
                  name: 'Cup',
                  description: '12oz double wall ceramic body with a padded bottom.',
                  price: 15.00,
                  image: 'https://placehold.co/600x400/png'
                },
                { 
                  name: 'Mug',
                  description: '12 oz Beck Cork-Bottom Mug.',
                  price: 15.00,
                  image: 'https://placehold.co/600x400/png'
                }
              ]
            }
          },
        ],
      },
    },
  });

  console.info('🌲 Finished seed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });