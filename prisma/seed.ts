import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const insertedUser = await prisma.user.upsert({
    where: { email: "ex@mple.com" },
    update: {},
    create: {
      email: "ex@mple.com",
      name: "Ex Ample",
      posts: {
        create: [
          {
            type: "POST",
            title: "Join the most amazing community",
            description:
              "Welcome! We're thrilled you're considering be here. You'll be joining a friendly, fun, fast-paced, innovative, and inspiring community.",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
