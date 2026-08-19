import React from "react";
import {
  Code,
  Globe,
  Database,
  Layers,
  Cpu,
  Server,
  Palette,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

export default function TechStackTicker() {
  const technologies = [
    { name: "React 19", category: "Frontend", icon: Globe },
    { name: "Next.js 15", category: "Framework", icon: Zap },
    { name: "TypeScript", category: "Language", icon: Code },
    { name: "ASP.NET Core", category: "Backend", icon: Server },
    { name: "Python / FastAPI", category: "Backend & AI", icon: Cpu },
    { name: "Tailwind CSS v4", category: "Styling", icon: Layers },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "Figma Tokens", category: "UI/UX Design", icon: Palette },
    { name: "QA & Playwright", category: "Testing", icon: ShieldCheck },
    { name: "Docker Cloud", category: "DevOps", icon: Sparkles },
  ];

  return (
    <section className="py-6 bg-white overflow-hidden relative">
      <div className="text-center mb-4">
        <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#71717A] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>Trusted Engineering Stack & AI Technologies</span>
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-3 py-1 shrink-0">
          {[...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] hover:border-[#A3E635] transition-all duration-300 hover:scale-105 cursor-default group shadow-sm shrink-0"
              >
                <Icon className="w-3.5 h-3.5 text-[#84CC16] group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xs font-extrabold text-[#09090B] group-hover:text-[#09090B]">
                  {tech.name}
                </span>
                <span className="text-[9px] text-[#52525B] bg-white border border-[#E4E4E7] px-1.5 py-0.5 rounded uppercase font-mono font-bold">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
