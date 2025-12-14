import mongoose from "mongoose"
import bcrypt from "bcrypt"

let emailObject = {
    adminEmail: "",
    verified: false
}

let addressObject = {
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
}

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: Object,
        required: true,
        default: emailObject
    },
    address: {
        type: Object,
        required: true,
        default: addressObject
    },
    password: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: Date
    }
})

adminSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
    this.timeStamp = Date.now();
})

let adminModel = mongoose.model("admins", adminSchema);

export { adminModel };