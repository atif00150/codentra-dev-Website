import React, { useState } from "react";
import { caseStudies } from "../data/caseStudiesData";
import CaseStudyModal from "./CaseStudyModal";
import {
  ArrowUpRight,
  FolderGit2,
  ExternalLink,
} from "lucide-react";

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((p) => p.filterCategory === filter);

  return (
    <section id="work" className="py-14 sm:py-16 bg-white relative text-[#09090B] overflow-hidden">
      {/* Background Subtle Box Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern-animated opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#09090B] tracking-widest uppercase mb-2 bg-[#A3E635] px-3.5 py-1 rounded-full shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-[#09090B]" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
              Proof of Work & Live Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F4F4F5] border border-[#E4E4E7] p-1.5 rounded-xl self-start md:self-auto shadow-sm">
            {[
              { id: "all", label: "All Projects" },
              { id: "saas", label: "⚡ SaaS Platforms" },
              { id: "python", label: "🐍 Python & AI" },
              { id: "software", label: "💻 Custom Software" },
              { id: "web", label: "🌐 Web Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#09090B] text-[#A3E635] shadow-md scale-105"
                    : "text-[#52525B] hover:text-[#09090B]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 3-Column Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-white-clean rounded-2xl overflow-hidden border border-[#E4E4E7] bg-white flex flex-col justify-between group shadow-sm hover:border-[#A3E635] transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden bg-[#09090B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold font-mono px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-[#09090B] rounded-full border border-[#E4E4E7] shadow-sm">
                    {project.category}
                  </span>

                  {/* Impact / Live Badge */}
                  <span className={`absolute bottom-3 right-3 text-[10px] font-extrabold font-mono px-2.5 py-0.5 rounded-full shadow-sm ${
                    project.liveUrl
                      ? "bg-[#A3E635] text-[#09090B] animate-pulse"
                      : "bg-[#A3E635] text-[#09090B]"
                  }`}>
                    {project.badge}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#09090B] mb-1.5 group-hover:text-[#84CC16] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#52525B] text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-[#09090B] bg-[#F4F4F5] border border-[#E4E4E7] px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#E4E4E7]">
                <span className="text-[11px] font-mono text-[#52525B]">
                  Client: <strong className="text-[#09090B]">{project.client}</strong>
                </span>

                <div className="flex items-center gap-1.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-[#A3E635] text-[#09090B] px-2.5 py-1 rounded-lg shadow-sm hover:bg-[#b2f046] transition-colors cursor-pointer"
                      title="Open Live App"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#09090B] group-hover:text-[#84CC16] transition-colors cursor-pointer bg-[#F4F4F5] group-hover:bg-[#09090B] group-hover:text-white px-2.5 py-1 rounded-lg border border-[#E4E4E7]"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#84CC16]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Case Study Modal when clicked */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
