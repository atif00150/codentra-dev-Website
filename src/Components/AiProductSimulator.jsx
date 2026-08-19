import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Send,
  Sparkles,
  RefreshCw,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

export default function AiProductSimulator() {
  const fullScript = [
    {
      id: 1,
      sender: "ai",
      text: "Hi! I'm the Codentra AI assistant. Ask me anything about pricing, timelines, or how we build digital products.",
    },
    {
      id: 2,
      sender: "user",
      text: "How much does a custom SaaS platform or web app cost?",
    },
    {
      id: 3,
      sender: "ai",
      text: "Modern web apps start from $1,500 and enterprise SaaS platforms start from $3,500 depending on features, API integrations, and scope.",
    },
    {
      id: 4,
      sender: "user",
      text: "Can Codentra build custom Python FastAPI or Next.js backends?",
    },
    {
      id: 5,
      sender: "ai",
      text: "Yes! We engineer production-ready Next.js 15, ASP.NET Core, and Python FastAPI backends within 1-3 weeks with 100% type safety.",
    },
    {
      id: 6,
      sender: "user",
      text: "How do we kick off a project with Codentra?",
    },
    {
      id: 7,
      sender: "ai",
      text: "Simply click 'Start a Project' below or reach out on WhatsApp (+92 311 1783631) for an instant architecture review!",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [customMessages, setCustomMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const chatContainerRef = useRef(null);

  const samplePrompts = [
    { label: "💰 Pricing", query: "What is your pricing structure for custom software?" },
    { label: "⚡ Timelines", query: "How fast can Codentra deliver a full web application?" },
    { label: "🐍 Python & AI", query: "Do you build Python AI bots & automation pipelines?" },
    { label: "🚀 Start", query: "How do we kick off a new project with Codentra?" },
  ];

  // Auto-Popup Message Animation Loop
  useEffect(() => {
    if (!isPlaying) return;

    if (visibleCount < fullScript.length) {
      const nextMsg = fullScript[visibleCount];

      if (nextMsg.sender === "ai") {
        setIsTyping(true);
        const timer = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount((prev) => prev + 1);
        }, 1400);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } else {
      const loopTimer = setTimeout(() => {
        setVisibleCount(1);
        setCustomMessages([]);
      }, 5000);
      return () => clearTimeout(loopTimer);
    }
  }, [visibleCount, isPlaying]);

  // Auto-scroll chat container to bottom on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleCount, customMessages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim() || isTyping) return;

    setIsPlaying(false);
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
    };

    setCustomMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = "Codentra builds high-performance digital products tailored to your exact business requirements.";
      const q = query.toLowerCase();

      if (q.includes("price") || q.includes("cost") || q.includes("pricing")) {
        aiResponseText = "Our web applications start from $1,500 and full SaaS platforms range from $3,500 - $8,000 with complete QA verification.";
      } else if (q.includes("time") || q.includes("fast") || q.includes("timeline")) {
        aiResponseText = "Most web projects deliver in 1-2 weeks, while complex SaaS platforms take 2-4 weeks with weekly sprint updates.";
      } else if (q.includes("python") || q.includes("bot") || q.includes("ai")) {
        aiResponseText = "We specialize in Python 3.12, FastAPI, Scrapy bot automation, PyTorch ML models, and Docker cloud microservices.";
      } else if (q.includes("start") || q.includes("kick") || q.includes("hire")) {
        aiResponseText = "You can click 'Start a Project' below or contact us directly on WhatsApp (+92 311 1783631) for an instant proposal!";
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiResponseText,
      };

      setCustomMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleReplayScript = () => {
    setCustomMessages([]);
    setVisibleCount(1);
    setIsPlaying(true);
    setIsTyping(false);
  };

  const activeMessages = [
    ...fullScript.slice(0, visibleCount),
    ...customMessages,
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto my-2">
      {/* Exact-Bound Background Shadow Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-[#A3E635]/20 blur-md pointer-events-none" />

      {/* Main Card Container */}
      <div className="relative rounded-2xl border border-zinc-800 bg-[#09090B] shadow-[0_10px_30px_rgba(9,9,11,0.8)] overflow-hidden font-sans text-white">
        
        {/* Compact Header Bar */}
        <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping" />
            <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-[#A3E635]" />
              <span>AI Concierge Live Chat</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-[#A3E635] transition-colors border border-zinc-800 cursor-pointer shadow-sm"
              title={isPlaying ? "Pause Auto Simulation" : "Play Auto Simulation"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#A3E635]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#A3E635]" />
                  <span>Auto</span>
                </>
              )}
            </button>

            <button
              onClick={handleReplayScript}
              className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-[#A3E635] transition-colors border border-zinc-800 cursor-pointer shadow-sm"
              title="Replay Simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Compact Sample Prompt Chips */}
        <div className="px-4 py-2 bg-zinc-900/70 border-b border-zinc-800/80 flex flex-wrap items-center gap-1 text-[11px]">
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p.query)}
              disabled={isTyping}
              className="px-2 py-0.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-[#A3E635] border border-zinc-800 text-[10px] font-bold transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Chat Messages Body */}
        <div
          ref={chatContainerRef}
          className="p-4 space-y-3 max-h-[300px] min-h-[220px] overflow-y-auto bg-[#09090B] scroll-smooth text-left"
        >
          {activeMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 transition-all duration-500 animate-fadeIn ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-7 h-7 rounded-xl bg-zinc-900 border border-zinc-800 text-[#A3E635] flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-sm">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`p-3 rounded-xl text-xs leading-relaxed shadow-sm transition-all ${
                  msg.sender === "user"
                    ? "bg-[#A3E635] text-[#09090B] font-extrabold rounded-tr-sm max-w-[85%] sm:max-w-[78%]"
                    : "bg-zinc-900/90 border border-zinc-800 text-zinc-200 font-medium rounded-tl-sm max-w-[85%] sm:max-w-[78%]"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}

          {/* Live Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2.5 animate-fadeIn">
              <div className="w-7 h-7 rounded-xl bg-zinc-900 border border-zinc-800 text-[#A3E635] flex items-center justify-center font-bold shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 rounded-tl-sm flex items-center gap-1 text-[11px] text-[#A3E635] font-mono shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1.5 text-zinc-400 font-sans font-medium text-[11px]">Codentra AI typing...</span>
              </div>
            </div>
          )}
        </div>

        {/* Compact Interactive Input Form Footer */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Codentra AI a question..."
              className="flex-1 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs px-3.5 py-2 rounded-xl focus:outline-none focus:border-[#A3E635] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="px-3.5 py-2 rounded-xl bg-[#A3E635] text-[#09090B] font-extrabold text-xs hover:bg-[#b2f046] transition-colors flex items-center gap-1.5 disabled:opacity-40 cursor-pointer shadow-sm"
            >
              <span>Send</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
            <span>codentra.studio/chat</span>
            <span className="text-[#A3E635] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-ping" />
              <span>live simulation</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
