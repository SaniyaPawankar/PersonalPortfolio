// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY
// });

// const getResponse = async (question) => {
//     try {
//         const response = await ai.models.generateContent({
//             model: "gemini-2.5-flash",
//             contents: `
//                 We are Tech Sync Services who work on MERN stack domain.
//                 Whatever user asks, reply in short and only related to MERN.
//                 User's question: ${question}
//             `
//         });

//         console.log(response.text);
//         return response.text;

//     } catch (error) {
//         console.error("Error generating AI response:", error.message || error);
//         return "Something went wrong while generating the response.";
//     }
// };

const uploadFile = (req,res) => {
   if(!req.file){
    let result = res.status(400).json({msg: "No file uploaded"})
    return result
   }
   return res.status(200).json({success: true, msg: "File uploaded successfully!", file: req.file})
}

// multer puts uploaded file info in req.file

export { uploadFile };
