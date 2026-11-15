import fastfy, { fastify } from "fastify";





export const app = fastify();


const users = [];

// rota para criar usuario

app.post('/users', async(request,reply) =>{
    try {
        const{name,email,phone} = request.body;

        const user = {
            id: crypto.randomUUID(),
            name,
            email,
            phone
        }

        users.push(user);

        return reply.status(201).send(user);

    }catch(error){
        if(error){
            return reply.status(500).send({
                message:error.message
            })
        }
    }
    
});



// rota para buscar usuario

app.get('/users',async() => {
    return { users };
});