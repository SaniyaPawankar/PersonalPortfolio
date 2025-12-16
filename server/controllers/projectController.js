import { projectModel } from "../models/projectModel.js"

let addProject = async (req, res) => {
    try {
        let { title, description, techStack, githubLink, liveLink } = req.body;
        if (!title || !description || !techStack) throw ("Required fields are required!")

        if(!req.file) throw("Project image is required")
        let project = new projectModel({ title, description, techStack, githubLink, liveLink })

        await project.save();

        res.status(201).json({message: "Project added successfully", project})
    } catch (err) {
        res.status(400).json({mesage: err.message})
    }
}

let getAllProjects = async(req,res) => {

}

let deleteProject = async(req,res) => {

}

let updateProject = async(req,res) => {

}

export { createProject }