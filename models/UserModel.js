import mongoose from "mongoose";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}|;:'",.<>?]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: [true, "email must be unique"]
    },
    fullname: {
        type: String,
        required: [true, "fullname is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        validate: {
            validator: passwordRegex,
            message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
        }
    },
    phone: {
        type: Number,
        required: [false, "phone is required"]
    },
    countrycode: {
        type: Number,
        required: [false, "countrycode is required"]
    },
    country: {
        type: String,
        required: [false, "country is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
        validate: {
            validator: emailRegex,
            message: 'Please provide a valid email address custom@test.com'
        }
    },
    status: {
        type: String,
        default: "active",
        enum: ["inactive", "active", "delete"]
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
});

userSchema.plugin(require('mongoose-bcrypt'), {
    fields: ['password'],
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;