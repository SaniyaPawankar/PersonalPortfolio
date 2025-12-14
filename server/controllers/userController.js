import { adminModel } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


let handleAdminRegistration = async (req, res) => {
    try {
        let { name, email, phone, address, password } = req.body;
        if (!name || !email || !phone || !address || !password) throw ("All fields are required to get registered!");
        let existingUser = await adminModel.findOne({ $or: [{ "email": email }, { "phone": phone }] });
        if(existingUser) throw("No one can register, user has already registered!");

        let emailObject = {
            adminEmail: email, verfied: false
        }

        let admin = new adminModel({name, phone, email: emailObject, address, password})
        await admin.save();

        res.status(202).json({ message: "Admin registered  successfully!"})
        console.log("Admin registered: ", admin);
    }catch(err){
        console.log("Unable to register : ", err);
        res.status(400).json({ message: "Unable to register", error: err})
    }
}

export { handleAdminRegistration}