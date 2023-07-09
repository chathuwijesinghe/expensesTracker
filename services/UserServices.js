
const CheckIfUserExist = async (data) => {
    try {
        const UserModel = require('../models/UserModel');

        const userExists = await UserModel.findOne({ email: data.email, status: {$ne: "delete"} })

        if (userExists) {
            return true;
        }

        return false;
    } catch (error) {
        return null;
    }
}

const SignInUser = async (data) => {
    try {
        const UserModel = require('../models/UserModel');

        const userExists = await UserModel.findOne({ email: data.email, status: {$ne: "delete"} })

        if (userExists) {
            return null;
        }
        else {
            const result = await UserModel.create({
                fullname: data.fullname,
                email: data.email,
                password: data.password,
                username: data.username
            })

            if(!result) return null;

            return result;
        }
    } catch (error) {
        return null;
    }
}

const UserServices = {
    CheckIfUserExist,
    SignInUser
}

export default UserServices;