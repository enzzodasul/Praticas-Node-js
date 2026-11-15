import { db } from "../../../database/db.js";


export async function createUser(request,reply) {
    try {
        const {name,email} = request.body;

        db.run(`
            INSERT INTO users (name, email)
            VALUES (?,?)`,
        [name,email]
    )
    
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