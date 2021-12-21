import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.customer.createMany({
    data: [
      {
        id: 1,
        name: 'Arisha Barron',
      },
      {
        id: 2,
        name: 'Branden Gibson',
      },
      {
        id: 3,
        name: 'Rhonda Church',
      },
      {
        id: 4,
        name: 'Georgina Hazel',
      },
    ],
  });

  console.log('- Seeded customers');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
