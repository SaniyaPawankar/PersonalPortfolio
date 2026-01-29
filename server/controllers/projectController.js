import { projectModel } from "../models/projectModel.js"

let addProject = async (req, res) => {
  try {
    const { title, description, techStack, githubLink, liveLink } = req.body;

    if (!title || !description || !techStack || !req.file) {
      return res.status(400).json({ message: "Required fields missing" })
    }

    const project = await projectModel.create({
      title,
      description,
      techStack: techStack.split(","),
      image: `/uploads/projects/${req.file.filename}`,
      githubLink,
      liveLink,
    })

    res.status(201).json({ message: "Project created successfully", project })

  } catch (err) {
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


const getProjectById = async (req, res) => {
  try {
    const { id } = req.params
    const project = await projectModel.findById(id)

    if (!project) {
      return res.status(404).json({ message: "Project Not Found" })
    }

    res.status(200).json({ project })
  } catch (err) {
    console.error("Error fetching project:", error);
    res.status(500).json({ message: "Server error" });
  }
}

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


let updateProject = async (req, res) => {

  try {
    const { id } = req.params;
    const { title, description, techStack, githubLink, liveLink } = req.body;

    // Find the existing project 
    const project = await projectModel.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }

    // Update project details

    if (title) project.title = title;
    if (description) project.description = description;
    if (techStack) project.techStack = techStack.split(",");
    if (githubLink) project.githubLink = githubLink;
    if (liveLink) project.liveLink = liveLink;

    if (req.file) {
      project.image = `/uploads/projects/${req.file.filename}`;
    }

    await project.save();

    res.status(200).json({ msg: "Project updated successfully!", project })
  } catch (err) {
    console.error("Update project error: ", err)
    res.status(500).json("Failed to make changes")
  }

}

export { addProject, getAllProjects, deleteProject, getProjectById, updateProject }