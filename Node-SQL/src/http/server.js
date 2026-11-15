import { app } from "./app.js";
import '../database/db.js';
import '../database/migrations/create-table.js';


app.listen({
    port:3000,
}).then(() => {
    console.log("servidor rodando na porta http://localhost:3000")
});