import React from "react";
import {
  Cpu,
  Layers,
  Smartphone,
  Target,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

export default function WhyCodentra() {
  const pillars = [
    {
      title: "Modern Tech Stack",
      icon: Cpu,
      badge: "Next.js 15 + .NET / Python",
      metric: "99.9%",
      metricLabel: "Code Quality",
      desc: "We build using Next.js 15, React 19, TypeScript, ASP.NET Core, and Python FastAPI for maximum performance and security.",
    },
    {
      title: "Clean Architecture",
      icon: Layers,
      badge: "Modular Boundaries",
      metric: "<15ms",
      metricLabel: "API Response Latency",
      desc: "Structured codebase with reusable components, type-safe API schemas, and modular system boundaries designed to scale.",
    },
    {
      title: "100% Responsive Design",
      icon: Smartphone,
      badge: "Multi-Device Tested",
      metric: "100%",
      metricLabel: "Mobile Compatibility",
      desc: "Every interface is built mobile-first, ensuring smooth rendering across mobile phones, tablets, laptops, and wide desktops.",
    },
    {
      title: "Business-Focused Solutions",
      icon: Target,
      badge: "Conversion-Driven",
      metric: "3.5x",
      metricLabel: "Avg Conversion Growth",
      desc: "We focus on clear business objectives, user retention, and features that generate direct revenue for your brand.",
    },
    {
      title: "Quality-Driven QA",
      icon: ShieldCheck,
      badge: "Playwright Automation",
      metric: "0",
      metricLabel: "Critical Bugs Guarantee",
      desc: "Rigorous manual testing, Playwright automated checks, and edge-case validation ensure zero critical bugs in production.",
    },
    {
      title: "Direct Codentra.dev Team",
      icon: Zap,
      badge: "No Middle Management",
      metric: "24/7",
      metricLabel: "SLA Dedicated Support",
      desc: "No bloated agency middle management. You work directly with experienced lead software engineers and product architects.",
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-16 bg-white relative text-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#09090B] tracking-widest uppercase mb-2 bg-[#A3E635] px-3.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#09090B] animate-spin" />
              <span>Engineering Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
              Why Leading Brands Choose Codentra.dev
            </h2>
          </div>
          <p className="text-[#52525B] max-w-md text-sm leading-relaxed font-normal">
            Why founders, startups, and enterprises partner with Codentra.dev to engineer and scale their software products.
          </p>
        </div>

        {/* Live System Guarantee Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#09090B] text-white border border-zinc-800 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-ping" />
            <span className="text-xs font-extrabold text-white">
              Codentra.dev Quality Guarantee: 100% Automated QA, Type-Safe Codebase & SLA Support
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
            <span>✔ Playwright Verified</span>
            <span>✔ Zero Bugs</span>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="ai-glass-card-white p-6 rounded-2xl border border-[#E4E4E7] bg-white hover:border-[#A3E635] transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#09090B] border border-zinc-800 flex items-center justify-center text-[#A3E635] group-hover:bg-[#A3E635] group-hover:text-[#09090B] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold text-[#09090B] bg-[#A3E635]/30 border border-[#A3E635] px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#09090B] mb-2 group-hover:text-[#84CC16] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#52525B] text-xs leading-relaxed mb-4 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#52525B]">
                    {item.metricLabel}
                  </span>
                  <span className="text-xs font-extrabold text-[#09090B] bg-[#F4F4F5] px-2.5 py-1 rounded-lg border border-[#E4E4E7] group-hover:bg-[#09090B] group-hover:text-[#A3E635] transition-colors">
                    {item.metric}
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
