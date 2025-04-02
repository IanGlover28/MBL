import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Load the Chatbase script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Ensure Chatbase is initialized before sending a welcome message
    script.onload = () => {
      if (window.chatbase) {
        window.chatbase("sendMessage", "👋 Welcome! How can I assist you today?");
      }
    };
  }, []);

  return null; // No UI needed for this component
};

export default Chatbot;
