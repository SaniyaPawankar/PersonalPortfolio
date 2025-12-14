import express from "express"
import { upload } from "../middlewares/upload.js";

import { uploadFile } from "../controllers/controller.js"
import { handleAdminRegistration } from "../controllers/userController.js";

const router = express.Router();

// router.get("/chat", async(req,res) => {
//     try{
//         const question = req.query.q || "What is AI";
//         const answer = await getResponse(question);
//         res.json({answer})
//     }catch(err){
//         console.log(err);
//         res.status(500).json({ msg: "Internal server error" });
//     }
// })

// Route for uploading file

router.post("/register", handleAdminRegistration)

router.post("/upload", upload.single("file"), uploadFile)

export { router }