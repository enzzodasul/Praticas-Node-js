import { app } from "./app.js";

app.listen({
    port:3333
}).then(() => console.log('HTTP server running on "http://localhost:3333" '))

// get - buscar 
// post - cadastrar 
// put - atualizar 
// delete - deletar
