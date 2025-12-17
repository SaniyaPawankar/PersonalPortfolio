import React, { useState } from "react";
import textImg from "../assets/text.png";
import { X } from "lucide-react";

const ChatBot = () => {

  const [openChat, setOpenChat] = useState(false);

  const chat = () => {
    setOpenChat(!openChat)
  }

  return (
    <div>
      <button className="absolute bottom-5 right-5" onClick={chat}>
        <img
          src={textImg}
          alt="chat icon"
          className="w-12 h-12 "
        />
      </button>

      {
        openChat &&
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] border border-white">
           <button
              onClick={() => setOpenChat(false)}
              className="text-gray-400 hover:text-white transition top-0"
            >
              <X size={20} />
            </button>
        </div>
      }

    </div>
  );
};

export default ChatBot;
