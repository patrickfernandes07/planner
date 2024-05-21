import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.expense.upsert({
    where: { id: 1 },
    update: {},
    create: {
      description: 'Expense test',
      value: parseFloat('10.50'),
      dueDate: new Date('2024-06-25T00:00:00Z'),
      payDate: null,
      movementId: null,
    },
  });
  console.log(post1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
