import express from "express"
import { uploadProjectImage } from "../middlewares/upload.js";


import { handleAdminRegistration, handleAdminLogin } from "../controllers/userController.js";
import { addProject, getAllProjects, deleteProject, getProjectById, updateProject } from "../controllers/projectController.js";
import { authAdmin } from "../middlewares/authMiddleware.js"

const router = express.Router();

router.get("/chat", async (req, res) => {
    try {
        const question = req.query.q || "What is AI";
        const answer = await getResponse(question);
        res.json({ answer })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
    }
})


router.post("/register", handleAdminRegistration)

router.post("/admin/login", handleAdminLogin)

router.get("/projects", getAllProjects)

router.post("/addprojects", authAdmin, uploadProjectImage.single("image"), addProject);

router.get("/projects/:id", getProjectById)

router.put("/projects/:id/edit", authAdmin, uploadProjectImage.single("image"), updateProject)

router.delete("/projects/:id", authAdmin, deleteProject);

export { router }