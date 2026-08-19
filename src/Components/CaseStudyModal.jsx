import React, { useState } from "react";
import {
  X,
  ArrowRight,
  Code2,
  Layers,
  Trophy,
  Building2,
  UserCheck,
  Terminal,
  ExternalLink,
  Check,
} from "lucide-react";

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-[#E4E4E7] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-[#09090B]">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7] bg-[#09090B] text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-extrabold text-[#09090B] bg-[#A3E635] rounded-full uppercase shadow-sm">
              {project.category}
            </span>
            <span className="text-xs text-zinc-300 font-mono hidden sm:inline-block">
              Client: {project.client}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#A3E635] text-[#09090B] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md hover:bg-[#b2f046] transition-colors"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#F4F4F5] border-b border-[#E4E4E7] text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-[#09090B] text-[#A3E635] shadow-md"
                : "text-[#52525B] hover:text-[#09090B]"
            }`}
          >
            Overview & Business Results
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "tech"
                ? "bg-[#09090B] text-[#A3E635] shadow-md"
                : "text-[#52525B] hover:text-[#09090B]"
            }`}
          >
            Technical Architecture & Code
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "features"
                ? "bg-[#09090B] text-[#A3E635] shadow-md"
                : "text-[#52525B] hover:text-[#09090B]"
            }`}
          >
            Delivered Features
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left">
          
          {/* Banner Graphic */}
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#E4E4E7] shadow-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base font-medium max-w-xl">
                  {project.subtitle}
                </p>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A3E635] text-[#09090B] font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:bg-[#b2f046] transition-transform hover:scale-105 shrink-0"
                >
                  <span>Visit Live URL</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Project Meta Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] text-xs">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#84CC16]" />
                  <div>
                    <span className="text-[#52525B] block">Client Organization</span>
                    <span className="font-extrabold text-[#09090B]">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-[#84CC16]" />
                  <div>
                    <span className="text-[#52525B] block">Codentra's Role</span>
                    <span className="font-extrabold text-[#09090B]">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Overview Grid: Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#F4F4F5] border border-[#E4E4E7]">
                  <h3 className="text-base font-extrabold text-[#09090B] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    The Problem
                  </h3>
                  <p className="text-[#52525B] text-sm leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F4F4F5] border border-[#E4E4E7]">
                  <h3 className="text-base font-extrabold text-[#09090B] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]" />
                    Our Engineering Solution
                  </h3>
                  <p className="text-[#52525B] text-sm leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Business Impact / Results */}
              <div className="p-6 rounded-2xl bg-[#09090B] text-white border border-zinc-800">
                <h3 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#A3E635]" />
                  Measurable Business Impact & Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] mb-1">
                        {res.metric}
                      </div>
                      <div className="text-xs text-zinc-400 font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Technology Stack Used */}
              <div>
                <h3 className="text-sm font-extrabold text-[#09090B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#84CC16]" />
                  Technology Stack & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] text-xs font-extrabold text-[#09090B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Code Blueprint */}
              <div>
                <h3 className="text-xs font-mono font-bold text-[#52525B] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#84CC16]" />
                  Architecture Code Snippet
                </h3>
                <pre className="bg-[#09090B] text-zinc-200 p-5 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800">
                  <code>{`// ${project.title} — Codentra Architecture Config
export const projectConfig = {
  name: "${project.title}",
  client: "${project.client}",
  liveUrl: "${project.liveUrl || 'N/A'}",
  stack: ${JSON.stringify(project.techStack)},
  qaStandard: "100% Automated Edge Case Audits",
};`}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-lg font-extrabold text-[#09090B] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#84CC16]" />
                Delivered Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]">
                    <Check className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#09090B] font-extrabold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Call to Action */}
          <div className="pt-4 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#52525B]">
              Need a similar product built for your business?
            </p>
            <button
              onClick={() => {
                onClose();
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#09090B] font-extrabold text-sm px-6 py-3 rounded-full hover:bg-[#b2f046] transition-colors shadow-md cursor-pointer"
            >
              <span>Build Something Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
