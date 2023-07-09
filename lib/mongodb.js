import config from "../app.config";

export const connectToMongoDB = async () => {
    try {
        const mongoose = require("mongoose");
        mongoose.set('strictQuery', false);
        mongoose.connect(`mongodb+srv://${config.dbuser}:${config.dbpassword}@cluster0.m0x8k.mongodb.net/?retryWrites=true&w=majority`);
        const db = mongoose.connection;
        db.on('error', () => {
            console.error.bind("Cannot connect to db")
        })
        db.once('open', () => {
            console.log("Db connected")
        })
    } catch (error) {
        console.log(error);
    }
}