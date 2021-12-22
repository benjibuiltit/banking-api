import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const customers = [
    {
      id: 'c3da5c8f-7dbc-4a91-9a45-537d59d16ff1',
      name: 'Arisha Barron',
      accountId: 'dcfe5b27-5d92-4259-80cd-b9c3389fbc8c',
    },
    {
      id: '124fc4b9-3f6d-4277-bcfc-ab72fd38bc11',
      name: 'Branden Gibson',
    },
    {
      id: 'fd193988-1597-44f0-8722-b6c7d93cc435',
      name: 'Rhonda Church',
    },
    {
      id: '02cd8e9a-99cf-45f3-a2c9-88f2589fe705',
      name: 'Georgina Hazel',
    },
  ];

  const seeds = [];
  for (const [index, customer] of customers.entries()) {
    seeds.push(
      prisma.customer.create({
        data: {
          id: customer.id,
          name: customer.name,
          accounts: {
            create: [
              {
                id: index ? undefined : customer.accountId,
                balance: index ? BigInt(1000) : BigInt(5000),
                transfersFrom: index
                  ? {
                      create: [
                        {
                          amount: 1000,
                          toAccountId: customers[0]?.accountId,
                        },
                      ],
                    }
                  : undefined,
                deposits: {
                  create: [
                    {
                      amount: 2000,
                    },
                  ],
                },
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
