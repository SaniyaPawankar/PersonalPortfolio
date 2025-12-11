import express from "express"
import dotenv from "dotenv"
// import { GoogleGenAI } from "@google/genai"
import { router } from "./routers/router.js"

const app = express();

dotenv.config({path: "./config.env"})

const port = process.env.PORT || 5030

app.use(express.json());
app.use(express.urlencoded({extended : true}))

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY})

// async function getResponse(){
//     const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: "Explain how AI works in a few words",
//     });
//     console.log(response.text);

// }

// getResponse();

app.get("/api",router)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

