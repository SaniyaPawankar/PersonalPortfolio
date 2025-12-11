import multer from "multer"
// multer package is used for handling file uploads.

import path from "path"
// path module helps in working with file extension

// Configure storage settings for multer

const storage = multer.diskStorage({
    // 'destination' tells multer where to store uploaded files 
    destination: (req, file, cb) => {
        cb(null, "/server/uploads");
        // uploads is the folder where files will be saved
        // cb(null, ...) means no error + store here
    },

    filename: (req, file, cb) => {
        const uploadPath = Date.now() + file.originalname
        cb(null, uploadPath)
    }
})


// Create multer instance with storage settings
const upload = multer({ storage })

export { upload }

// Exporting 'upload' so we can use it in routes for uploading files