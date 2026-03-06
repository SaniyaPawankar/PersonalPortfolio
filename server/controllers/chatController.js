import { GoogleGenerativeAI } from "@google/generative-ai";

const chatController = async (req, res) => {
  try {

    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        reply: "Please ask a question."
      });
    }

    // console.log("Gemini API Key: ", process.env.GEMINI_API_KEY)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
You are an AI assistant for the portfolio website of Saniya Pawankar.

Your job is to help visitors understand her work, skills, and projects.

About Saniya:
- MERN Stack Developer
- Skills: MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs
- Builds full stack web applications
- Interested in modern web development and scalable backend systems

Rules:
1. Answer in 2-3 short sentences.
2. Only answer about skills, projects, MERN stack, or development.
3. If unrelated say:
"I can only answer questions related to Saniya's portfolio. Please contact her through the contact section."

User Question:
${question}
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    res.status(200).json({ reply });

  } catch (error) {

    console.error("Gemini error:", error);

    res.status(500).json({
      reply: "AI assistant is currently unavailable."
    });
  }
};

export { chatController };