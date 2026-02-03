import multer from "multer"
// multer package is used for handling file uploads.

import path from "path"
import fs from "fs"
// path module helps in working with file extension

// Configure storage settings for multer

const storage = multer.diskStorage({
    // 'destination' tells multer where to store uploaded files 
    destination: (req, file, cb) => {
        // project images 
        // uploads is the folder where files will be saved
        // cb(null, ...) means no error + store here

        let uploadPath = "uploads/projects";

        if (req.baseUrl.includes("gallery")) {
            uploadPath = "uploads/gallery";
        } else if (req.baseUrl.includes("blogs")) {
            uploadPath = "uploads/blogs";
        }

        //Check if the upload directory already exists
        if (!fs.existsSync(uploadPath)) {
            // If the folder does not exist, create it
            // 'recursive: true' ensures that parent folders are also created if missing
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath)
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + path.extname(file.originalname)
        cb(null, uniqueName)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true)
    } else {
        cb(new Error("Only image files allowed"), false)
    }
};


// Create multer instance with storage settings
const uploadProjectImage = multer({ storage, fileFilter })

export { uploadProjectImage }

// Exporting 'upload' so we can use it in routes for uploading files