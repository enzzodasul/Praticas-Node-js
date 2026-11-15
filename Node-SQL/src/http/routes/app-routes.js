import {createUser} from "./controllers/create-user.js"
import { getUsers } from "./controllers/get-users.js";
import { updateUser } from "./controllers/update-user.js";


export async function appRoutes(app) {
    app.post('/users',createUser);
    app.get('/users', getUsers);
    app.put('/users/:id', updateUser);
}