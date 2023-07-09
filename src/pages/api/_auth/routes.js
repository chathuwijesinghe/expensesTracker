import { loginHandle } from "../../../../controllers/UserController";

const AuthHandler = async (route, req, res) => {

    switch(route) {
        case "signin":
          return await loginHandle(req, res);
    }
    
}

export default AuthHandler;