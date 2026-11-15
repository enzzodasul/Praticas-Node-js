import { db } from "../../../database/db.js";


export async function deleteUser(request,reply){
    try {
        const {id}= request.params;

        db.run(`
            DELETE FROM users WHERE id = ?`,
        [id]
    );

    return reply.status(200).send({
        message: "Usuario deletado com sucesso"
    });

    } catch (error) {
        if (error) {
            return reply.status(500).send({
                message: "um erro no servidor ocorreu",
                error: error.message,
            });
        }
    }
}