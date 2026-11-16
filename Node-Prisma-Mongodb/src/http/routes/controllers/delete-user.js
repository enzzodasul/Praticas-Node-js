import { prisma } from "../../../lib/prisma.js"


export  async function deleteUser(request,reply) {

  try{
    const {id} = request.params


    await prisma.user.delete({
      where: {id}
    })

    return reply.status(200).send

  }catch(error) {
    if(error instanceof Error){
      return reply.status(500).send({
        message:error.message
      })
    }

  }

}
