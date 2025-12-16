import express from "express"
import dotenv from "dotenv"
// import { GoogleGenAI } from "@google/genai"
import { router } from "./routers/router.js"
import cors from "cors"
import "./database/connect.js"
import path from "path"

const app = express();

dotenv.config({path: "./config.env"})

const port = process.env.PORT || 5030

app.use(cors({
    origin: "*",         // allow all origins OR replace "*" with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")))

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY})

// async function getResponse(){
//     const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: "Explain how AI works in a few words",
//     });
//     console.log(response.text);

// }

// getResponse();

app.use("/api",router)

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

