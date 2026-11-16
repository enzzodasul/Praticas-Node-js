import { createdUser } from "./controllers/create-user.js";
import { getUsers } from "./controllers/get-users.js";


export async function appRoutes(app) {

app.post('/users', createdUser)
app.get('/users',getUsers)
}
