import express from "express"
import { uploadProjectImage } from "../middlewares/upload.js";

import { uploadFile } from "../controllers/chatController.js"
import { handleAdminRegistration } from "../controllers/userController.js";
import { addProject, getAllProjects, deleteProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/chat", async(req,res) => {
    try{
        const question = req.query.q || "What is AI";
        const answer = await getResponse(question);
        res.json({answer})
    }catch(err){
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
    }
})


router.post("/register", handleAdminRegistration)

router.get("/projects", getAllProjects)

router.post("/addprojects", uploadProjectImage.single("image"), addProject)

router.delete("/projects/:id", deleteProject);

export { router }