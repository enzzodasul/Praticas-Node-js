import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //onde iremos consultar banco de dados

    const user =await prisma.user.create({
        data: {
            name: "Alice",
            email:"alice@gmail.com",

        },
    })
    console.log("Created user: ", user)
}

main()
  .then(async() =>{
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    Process.exit(1);
  });