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

const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.status(200).json({ projects });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


let deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await projectModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


let updateProject = async(req,res) => {

}

export { addProject, getAllProjects, deleteProject }