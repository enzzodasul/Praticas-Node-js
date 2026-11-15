import { db } from "../../../database/db.js";


export async function getUsers(request,reply) {
    try{
     const users = new Promise((resolve,reject) => {
        db.all (`
            SELECT * FROM users order by created_at DESC
            `, (error, rows) => {
                if(error) {
                    reject(error);
                }else {
                    resolve(rows);
                }
            })

     })

     return users;

    }catch{
        if(error) {
            return reply.status(500).send({
                message: " um erro no servidor ocorreu",
                error: error.message,
            });
        }
    }
    
}