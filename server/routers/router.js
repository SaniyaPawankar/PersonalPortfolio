import express from "express"
import { uploadProjectImage } from "../middlewares/upload.js";


import { handleAdminRegistration, handleAdminLogin } from "../controllers/userController.js";
import { addProject, getAllProjects, deleteProject, getProjectById, updateProject } from "../controllers/projectController.js";
import { createNewReview, getAllReviews } from "../controllers/reviewsController.js";
import { authAdmin } from "../middlewares/authMiddleware.js"
import { chatController } from "../controllers/chatController.js";

const router = express.Router();

router.post("/chat", chatController)

router.post("/register", handleAdminRegistration)

router.post("/admin/login", handleAdminLogin)

router.get("/projects", getAllProjects)

router.post("/addprojects", authAdmin, uploadProjectImage.single("image"), addProject);

router.get("/projects/:id", getProjectById)

router.put("/projects/:id/edit", authAdmin, uploadProjectImage.single("image"), updateProject)

router.delete("/projects/:id", authAdmin, deleteProject);

router.get("/reviews", getAllReviews);
router.post("/submit_review", createNewReview)

export { router }