// import jwt from "jsonwebtoken"
// import dotenv from "dotenv"

// dotenv.config({path: "../config.env"})

// const authAdmin = (req,res,next) => {
//     const token = req.headers.authorization

//     if(!token) {
//         return res.status(400).json({ message: "Unauthorized!"})
//     }

//     try{
//         jwt.verify(token, process.env.JWT_SECRET)
//         next();
//     }catch(err){
//         res.status(401).json({ message: "Invalid Token"})
//     }
// }

// export { authAdmin }


import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const authAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check token
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized! Token missing" });
    }

    //Extract token from "Bearer token"
    const token = authHeader.split(" ")[1];

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Attach admin data to request
        req.admin = decoded;

        //Move to next controller
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};

export { authAdmin };
