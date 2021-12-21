import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const customers = [
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
  ];

  const seeds = [];
  for (const customer of customers) {
    seeds.push(
      prisma.customer.create({
        data: {
          id: customer.id,
          name: customer.name,
          accounts: {
            create: [
              {
                balance: BigInt(0),
              },
            ],
          },
        },
      }),
    );
  }

  await Promise.all(seeds);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
