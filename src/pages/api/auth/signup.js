import { hash } from "bcryptjs";
import { connectToMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import mongoose from "mongoose";

const handler = async (req, res) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })

        const { fullName, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(409).json({ error: "User already exists" })
        }
        else {
            if (password.length < 6)
                return res.status(409).json({ error: "Password should be 6 at least 6 characters" })

            const hashedPassword = await hash(password, 12)

            User.create({
                fullName,
                email,
                hashedPassword
            }, (error, data) => {
                if (error && error instanceof mongoose.Error.ValidationError) {
                    for (let field in error.errors) {
                        const msg = error.error[field].message
                        return res.status(409).json({ error: msg })
                    }
                }

                const user = {
                    email: data.email,
                    fullName: data.fullName,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    user
                })
            })

        }
    }
    else {
        res.status(405).json({ error: "Method not allowed" })
    }
}

export default handler;