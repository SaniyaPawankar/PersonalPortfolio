import { projectModel } from "../models/projectModel.js"

let addProject = async(req,res) => {
    try{
        const { title, description, techStack, githubLink, liveLink} = req.body;

        if(!title || !description || !techStack || !req.file){
            return res.status(400).json({message: "Required fields missing"})
        }

        const project = await projectModel.create({
            title,
            description,
            techStack: techStack.split(","),
            image: `/uploads/gallery/${req.file.filename}`,
            githubLink,
            liveLink,
        })

        res.status(201).json({ message: "Project created successfully", project})

    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

let getAllProjects = async(req,res) => {

}

let deleteProject = async(req,res) => {

}

let updateProject = async(req,res) => {

}

export { addProject }