// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToMongoDB } from "../../../lib/mongodb"
import AuthHandler from "./_auth/routes";
import UserHandler from "./_user/routes";

export default async function handler(req, res) {
  try {
    
    connectToMongoDB(); 

    const method = req.query?.method[0] ?? ""
    const route = req.query?.method[1] ?? ""

    if(method == "v1") {
      await AuthHandler(route, req, res);

      await UserHandler(route, req, res);
    }

  } catch (error) {
    return res.status(500).json({ error: "Internal server error" }) 
  }
}
