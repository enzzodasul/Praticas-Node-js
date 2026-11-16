import { createdUser } from "./controllers/create-user.js";
import { deleteUser } from "./controllers/delete-user.js";
import { getUsers } from "./controllers/get-users.js";
import { updateUser } from "./controllers/update-user.js";


export async function appRoutes(app) {

app.post('/users', createdUser)
app.get('/users',getUsers)
app.put('/user/:id',updateUser)
app.delete('/user/:id',deleteUser)
}
