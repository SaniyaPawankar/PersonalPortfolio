import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const getAIResponse = async (question) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
                You are an AI assistant for a MERN stackk portfolio website.
                Reply briefly and only related to MERN stack, projects, skills, or services.
                User's question: ${question}
            `
        });

        console.log(response.text);
        return response.text;

    } catch (error) {
        console.error("Error generating AI response:", error.message || error);
        return "Something went wrong while generating the response.";
    }
};

export {getAIResponse}

