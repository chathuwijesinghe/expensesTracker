import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type:String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"]
    },
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be at least 4 characters long"],        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [4, "Full name should be at least 4 characters long"],   
        select: false     
    }
})

const User = models.User || model("User", UserSchema)

export default User;