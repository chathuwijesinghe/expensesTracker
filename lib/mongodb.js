import mongoose from "mongoose";

const { DB_URL } = process.env.DB_URL;

if(!DB_URL){
    throw new Error("Invalid environment variable")
}

export const connectToMongoDB = async () => {
    try {
        const {connection} = await mongoose.connect(DB_URL)

        if(connection.readyState === 1) {
            console.log("db connected");
            Promise.resolve(true)
        }
    } catch (error) {
        Promise.reject(error)
    }
}