import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        default: "",
    },
    liveLink: {
        type: String,
        default: "",
    },
    // timeStamps: {
    //     type: Date
    // }
})

let projectModel = mongoose.model("projects", projectSchema)

export { projectModel }