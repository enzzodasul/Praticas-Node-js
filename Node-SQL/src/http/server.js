import { app } from "./app.js";

app.listen({
    port:3000,
}).then(() => {
    console.log("servidor rodando na porta http://localhost:3000")
});