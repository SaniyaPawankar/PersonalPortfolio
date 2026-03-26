import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: "unread"
    }

},
    {
        timestamps: true
    }
)

const contactModel = mongoose.model("contacts", contactSchema);

export { contactModel }