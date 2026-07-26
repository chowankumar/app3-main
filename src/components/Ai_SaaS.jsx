import React, { useState, useEffect, useRef } from "react";
import Squares from "./AI_Component";
import { ArrowUpRight } from "lucide-react";

const services = ["AI Chatbot", "Automate my Business", "Create AI SaaS Platform"];

const responses = {
  chatbot: "We build AI chatbots to handle customer support, bookings, and FAQs efficiently.",
  automation: "We create AI automation systems to run your business processes on autopilot.",
  saas: "We develop scalable AI SaaS platforms with dashboards, analytics, and user management.",
};

const Ai_SaaS = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedService, setTypedService] = useState("");
  const [activeResponse, setActiveResponse] = useState("");
  const [responseTyping, setResponseTyping] = useState("");

  const typingRef = useRef(null); // store ongoing typing timeout

  // Auto-type animated service in input-like div
  useEffect(() => {
    const currentService = services[serviceIndex];
    const typingSpeed = 100;
    const pauseTime = 2000;

    if (charIndex < currentService.length) {
      const timeout = setTimeout(() => {
        setTypedService(currentService.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setServiceIndex((serviceIndex + 1) % services.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, serviceIndex]);

  // Handle prompt click with safe typing
 
  const handlePrompt = (key) => {
  // Cancel any ongoing typing
  if (typingRef.current) {
    clearTimeout(typingRef.current.timeoutId);
  }

  setActiveResponse(key);
  setResponseTyping("");

  const text = responses[key];
  const typingSpeed = 40;

  const typeChar = (index) => {
    if (index < text.length) {
      setResponseTyping((prev) => prev + text[index]);
      typingRef.current.timeoutId = setTimeout(() => typeChar(index + 1), typingSpeed);
    } else {
      typingRef.current = null; // finished typing
    }
  };

  typingRef.current = { timeoutId: null };
  typeChar(0);
};


   
  return (
    <section className="py-20 px-4 bg-[#00303C] border-1">
      <div className="relative max-w-[1120px] mx-auto rounded-2xl overflow-hidden bg-[rgb(0,48,60)] border border-[#043743]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares
            speed={1}
            squareSize={50}
            direction="up"
            borderColor="#0a4b5a"
            hoverFillColor="#00303C"
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#C6FD07] text-[#C6FD07] text-sm">
            AI · SaaS · Automation
          </span>

          <h1 className="text-xl md:text-5xl font-bold text-white max-w-4xl mx-auto">
            Ask Our <span className="text-[#C6FD07]">AI</span> What We Can Build For You
          </h1>

          <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
            Experience how our AI-powered systems think, respond, and solve real business problems.
          </p>

          {/* Input-like Auto-typing Div */}
          <div className="mt-10 max-w-3xl mx-auto bg-[#00303C] border border-white/10 rounded-full flex items-center px-3 py-3 text-left">
  <span className="text-gray-400 text-sm md:text-base select-none">We offer</span>
  <span className="text-[#C6FD07] text-sm md:text-base font-medium italic ml-1 ">{typedService}</span>
</div>

          {/* Prompt Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handlePrompt("chatbot")}
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
            >
              Build me an AI Chatbot
            </button>
            <button
              onClick={() => handlePrompt("automation")}
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
            >
              Automate my Business
            </button>
            <button
              onClick={() => handlePrompt("saas")}
              className="px-5 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
            >
              Create AI SaaS Platform
            </button>
          </div>

          {/* AI Response Below Tabs */}
          {activeResponse && (
            <div className="mt-6 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 text-left text-gray-200 text-sm leading-relaxed animate-fadeIn">
              <span className="block text-[#C6FD07] font-medium mb-2">
                AI Response
              </span>
              {responseTyping}
            </div>
          )}

          <p className="mt-4 text-xs text-white/50 text-center mx-auto">
            AI demo responses are illustrative. Live AI systems are custom built per client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ai_SaaS;
