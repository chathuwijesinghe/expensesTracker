import UserServices from "../services/UserServices"

export const loginHandle = async (req, res) => {

    try {
        if (req.method === "POST") {
            if (!req.body) return res.status(400).json({ error: "Data is missing" })

            if(await UserServices.CheckIfUserExist(req.body)) return res.status(400).json({ error: "user exist" }) ;
    
            const result = await UserServices.SignInUser(req.body)
            
            if(!result) return res.status(400).json({ error: "Can't save user" })

            return res.status(201).json({ data: result, msg: "saved" })
        }
        else {
            return res.status(405).json({ error: "Method not allowed" })
        }
    } catch (error) {
        return res.status(500).json({ error:error })
    }
}

export const getAll = async (req, res) => {}