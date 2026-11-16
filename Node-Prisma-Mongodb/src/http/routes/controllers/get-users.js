import { prisma } from '../../../lib/prisma.js';

export async function getUsers(_, reply) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })


    return users
  } catch (error) {
    if(error instanceof Error){
      return reply.status(500).send({
        message:error.message
      })
    }
  }
}
