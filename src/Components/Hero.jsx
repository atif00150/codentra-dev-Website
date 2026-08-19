import React from "react";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Bot,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import AiProductSimulator from "./AiProductSimulator";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
      {/* Crisp Visible High-Tech Box Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-animated pointer-events-none z-0" />

      {/* Floating Animated AI Badges on Sides */}
      <div className="hidden lg:block absolute top-28 left-8 z-20 animate-float-slow pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white backdrop-blur-md border border-[#E4E4E7] shadow-xl text-xs font-extrabold text-[#09090B] hover-lift">
          <Bot className="w-4 h-4 text-[#84CC16] animate-bounce-slow" />
          <span>AI Software Architecture</span>
          <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping" />
        </div>
      </div>

      <div className="hidden lg:block absolute top-36 right-10 z-20 animate-float-reverse pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#09090B] text-white shadow-xl text-xs font-extrabold border border-zinc-800 hover-lift">
          <Zap className="w-4 h-4 text-[#A3E635] animate-bounce-slow" />
          <span>Rapid 10x Delivery</span>
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-28 left-12 z-20 animate-float-reverse pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white backdrop-blur-md border border-[#E4E4E7] shadow-lg text-[11px] font-bold text-[#09090B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>100% QA Verified</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E4E4E7] text-xs font-bold text-[#09090B] shadow-sm hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-[#84CC16] animate-spin" />
            <span className="text-[#09090B] font-extrabold">Codentra.dev</span>
            <span className="text-[#71717A]">•</span>
            <span className="text-[#52525B]">Digital Products & Software Solutions</span>
          </div>

          {/* Compact Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#09090B] leading-[1.12]">
            We Build Digital Products That{" "}
            <span className="relative inline-block bg-[#A3E635] text-[#09090B] px-3 py-0.5 rounded-xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              Move Businesses Forward.
            </span>
          </h1>

          {/* Compact Subheadline */}
          <p className="text-base sm:text-lg text-[#52525B] max-w-xl font-normal leading-relaxed">
            Codentra.dev helps businesses turn ideas into modern websites, custom software, and scalable digital experiences built for performance.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#A3E635] text-[#09090B] font-extrabold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:bg-[#b2f046] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)] hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={() => scrollToSection("#work")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-[#09090B] font-bold text-sm px-6 py-3 rounded-full border border-[#E4E4E7] hover:border-zinc-400 hover:scale-105 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-[#84CC16] animate-pulse" />
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Key Value Micro Features */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-5 text-[11px] font-semibold text-[#52525B]">
            <div className="flex items-center gap-1.5 hover:text-[#09090B] transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Next.js & .NET/Python</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-[#09090B] transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Figma Precision</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-[#09090B] transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Enterprise QA Guarantee</span>
            </div>
          </div>
        </div>

        {/* Compact AI Product Simulator Showcase */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto hover-lift">
          <AiProductSimulator />
        </div>
      </div>
    </section>
  );
}
