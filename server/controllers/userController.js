import { adminModel } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({ path: "../config.env" })


let handleAdminRegistration = async (req, res) => {
    try {
        let { name, email, phone, address, password } = req.body;
        if (!name || !email || !phone || !address || !password) throw ("All fields are required to get registered!");
        let existingUser = await adminModel.findOne({ $or: [{ "email": email }, { "phone": phone }] });
        if (existingUser) throw ("No one can register, user has already registered!");

        let emailObject = {
            adminEmail: email, verfied: false
        }

        let admin = new adminModel({ name, phone, email: emailObject, address, password })
        await admin.save();

        res.status(202).json({ message: "Admin registered  successfully!" })
        console.log("Admin registered: ", admin);
    } catch (err) {
        console.log("Unable to register : ", err);
        res.status(400).json({ message: "Unable to register", error: err })
    }
}


let handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const admin = await adminModel.findOne({ "email.adminEmail":email });

        if (!admin) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const comparePassword = await bcrypt.compare(password, admin.password);

        if (!comparePassword) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const tokenPayload = {
            email: admin.email.adminEmail,
            name: admin.name
        };

        const token = jwt.sign(
            tokenPayload,
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Admin logged in successfully",
            token
        });

    } catch (err) {
        console.error("Unable to login", err);
        res.status(500).json({ message: "Login Failed" });
    }
};


export { handleAdminRegistration, handleAdminLogin }