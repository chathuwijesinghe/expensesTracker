import { getAll } from "../../../../controllers/UserController";

const UserHandler = async (route, req, res) => {

    switch(route) {
        case "users":
          return await getAll(req, res);
    }
    
}

export default UserHandler;