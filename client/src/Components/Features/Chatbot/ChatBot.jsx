import React, { useState } from "react";
import axios from "axios";
import chatbot from "../../../assets/chatbot.png";
import { X } from "lucide-react";

const ChatBot = () => {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [questionCount, setQuestionCount] = useState(0); // track questions

  const userId = "portfolioUser"; // simple identifier

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("http://localhost:5020/api/chat", {
        question: message,
        userId
      });

      const botMsg = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);

      setQuestionCount((prev) => {
        const newCount = prev + 1;

        // If this was the second question, immediately add final contact message
        if (newCount >= 2) {
          setMessages((prevMsgs) => [
            ...prevMsgs,
            { sender: "bot", text: "For more details contact Saniya" }
          ]);
        }

        return newCount;
      });
    } catch (err) {
      console.log(err);
    }

    setMessage("");
  };


  return (
    <div>
      {/* Chat Button */}
      <button
        className="fixed bottom-5 right-5"
        onClick={() => setOpenChat(!openChat)}
      >
        <img src={chatbot} alt="chat icon" className="w-12 h-12" />
      </button>

      {openChat && (
        <div className="fixed bottom-0 right-5 w-[350px] h-[420px] bg-white shadow-xl rounded-xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <h3 className="font-semibold">AI Assistant</h3>
            <button onClick={() => setOpenChat(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"
                  }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                    }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
              disabled={questionCount >= 2}
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-lg"
              disabled={questionCount >= 2}
            >
              Send
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
