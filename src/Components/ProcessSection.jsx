import React from "react";
import {
  Search,
  Palette,
  Code,
  CheckSquare,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      icon: Search,
      desc: "Requirements gathering, technical scope definition, BRD document, and sprint roadmap planning.",
      badge: "Discovery & Scope",
    },
    {
      step: "02",
      title: "Design",
      icon: Palette,
      desc: "Interactive Figma wireframes, UI/UX design tokens, user journey mapping, and prototype alignment.",
      badge: "Figma UI/UX",
    },
    {
      step: "03",
      title: "Develop",
      icon: Code,
      desc: "Clean Next.js 15, React 19, TypeScript codebase, ASP.NET Core & Python FastAPI backend integration.",
      badge: "Full-Stack Build",
    },
    {
      step: "04",
      title: "Test",
      icon: CheckSquare,
      desc: "Rigorous manual testing, API load audits, Playwright E2E suites, and multi-device QA validation.",
      badge: "Automated QA",
    },
    {
      step: "05",
      title: "Launch",
      icon: Rocket,
      desc: "Production Vercel/AWS cloud deployment, domain SSL configuration, and 24/7 ongoing SLA support.",
      badge: "SSL & SLA Live",
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-16 bg-white relative text-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#09090B] tracking-widest uppercase mb-2 bg-[#A3E635] px-3.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#09090B]" />
              <span>Simple 5-Step Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
              How We Work & Deliver Quality
            </h2>
          </div>
          <p className="text-[#52525B] max-w-md text-xs sm:text-sm leading-relaxed font-normal">
            A clear 5-step engineering roadmap to transform your product idea into a high-performance web application.
          </p>
        </div>

        {/* Simple 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="ai-glass-card-white p-5 rounded-2xl border border-[#E4E4E7] bg-white flex flex-col justify-between hover-lift group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#84CC16] group-hover:text-[#A3E635] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#09090B] border border-zinc-800 text-[#A3E635] flex items-center justify-center group-hover:bg-[#A3E635] group-hover:text-[#09090B] transition-all shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-extrabold text-[#09090B] mb-2 group-hover:text-[#84CC16] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#52525B] text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Badge Tag */}
                <div className="pt-3 mt-4 border-t border-[#E4E4E7]">
                  <span className="text-[10px] font-mono font-bold text-[#09090B] bg-[#F4F4F5] border border-[#E4E4E7] px-2.5 py-0.5 rounded-md inline-block">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
