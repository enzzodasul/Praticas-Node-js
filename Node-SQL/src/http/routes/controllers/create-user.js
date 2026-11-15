import { db } from "../../../database/db.js";


export async function createUser(request,reply) {
    try {
        const {nome,email} = request.body;

        db.run(`
            INSERT INTO users (nome, email)
            VALUES (?,?)`,
        [nome,email]
    )
    

    return reply.status(201).send({
        message: "usuario criado com sucesso", 
    });

    }catch (error) {
        if(error)
        {
            return reply.status(500).send({
                message: "um erro no servidor ocorreu",
                error: error.message
            })
        }    
    }
}