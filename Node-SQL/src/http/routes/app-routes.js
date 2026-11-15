import {createUser} from "./controllers/create-user.js"
import { getUsers } from "./controllers/get-users.js";



export async function appRoutes(app) {
    app.post('/users',createUser);
    app.get('/users', getUsers);

}