import { db } from "../../../database/db.js";


export async function updateUser(request,reply) {
    try {
     const { id } = request.params;
     const {nome,email} = request.body;


     db.run(`
         UPDATE users SET nome = ? ,email = ? WHERE id = ?`,
          [nome,email,id]
        );

        return reply.status(200).send({
            message: "Usuario atualizado com sucesso",
        });

    } catch (error) {
        if (error) {
            return reply.status(500).send({
                message: "Um erro no servidor ocorreu",
                error: error.message,
            });
        }
    }
}