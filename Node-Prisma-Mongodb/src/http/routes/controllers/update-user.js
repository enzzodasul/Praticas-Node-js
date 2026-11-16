import { prisma } from "../../../lib/prisma.js"


export  async function updateUser(request,reply) {

  try{
    const {id} = request.params
    const {name,email,phone} = request.body

    const user = await prisma.user.update({
      where: {id},
      data: {
        name,email,phone
      }
    })
    return user

  }catch(error) {
    if(error instanceof Error){
      return reply.status(500).send({
        message:error.message
      })
    }

  }

}
