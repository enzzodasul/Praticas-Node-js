import {prisma} from "../../../lib/prisma.js";

export async function createdUser(request, reply) {
  try {
    const { name, email, phone } = request.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    });
    if (user) {
      return reply.status(489).send({
        message: "O Email informado já está em uso , tente outo",
      })
    }

    const userCreated = await prisma.user.create({
      data: {
        name,email,phone
      }
    })

    return userCreated
  } catch (error) {
    if(error instanceof Error){
      return reply.status(500).send({
        message:error.message
      })
    }
  }
}
