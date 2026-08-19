import React, { useState } from "react";
import {
  Globe,
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Bot,
  X,
  Terminal,
  Clock,
  Check,
} from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      category: "Frontend & Web Apps",
      icon: Globe,
      aiTag: "⚡ Next.js 15 SSR Engine",
      estTime: "1 - 2 Weeks",
      description:
        "Modern websites and web applications built for extreme performance, mobile responsiveness, and maximum conversion rates.",
      deliverables: [
        "React 19 & Next.js 15 SSR / SSG Architecture",
        "TypeScript Type-Safe Reliability",
        "Tailwind CSS Modern Styling & Animations",
        "SEO Metadata, Open Graph & Schema Markup",
        "Lighthouse 95+ Performance Audit Score",
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      aiBlueprint: `// Codentra.dev Web Engineering Standards
export const webConfig = {
  framework: "Next.js 15 App Router",
  styling: "Tailwind CSS + Micro-Animations",
  performance: "Lighthouse 95+ Score Guarantee",
};`,
    },
    {
      id: "custom-software",
      title: "Custom Software",
      category: "SaaS & Enterprise Systems",
      icon: Monitor,
      aiTag: "🤖 Multi-Tenant SaaS Architecture",
      estTime: "2 - 4 Weeks",
      description:
        "Tailor-made business applications, internal management portals, and SaaS platforms engineered around your specific business workflows.",
      deliverables: [
        "Interactive Real-Time Analytics Dashboards",
        "Custom B2B & Client Management Portals",
        "Role-Based Access Control (RBAC) & OAuth2",
        "Scalable Cloud Multi-Tenant Database Schema",
        "Automated PDF & Excel Export Engines",
      ],
      techStack: ["React", "ASP.NET Core", "Python FastAPI", "PostgreSQL"],
      aiBlueprint: `// Codentra.dev SaaS Architecture Spec
export const saasArchitecture = {
  backend: "ASP.NET Core / Python FastAPI",
  database: "PostgreSQL Multi-Tenant",
  auth: "OAuth2 SSO + Multi-Factor Auth",
};`,
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      category: "Product Design & Interfaces",
      icon: Palette,
      aiTag: "🎨 Figma Token Design System",
      estTime: "1 Week",
      description:
        "Clean, intuitive interfaces that turn complex features into simple, delightful user experiences that convert visitors into buyers.",
      deliverables: [
        "Figma Interactive Prototypes & Wireframes",
        "Comprehensive Design Systems & Color Tokens",
        "User Journey Mapping & Usability Testing",
        "Mobile-First Responsive Interface Guidelines",
      ],
      techStack: ["Figma", "Design Systems", "Prototyping"],
      aiBlueprint: `// Codentra.dev Design Token System
export const designTokens = {
  theme: "Codentra Electric Volt & Obsidian",
  typography: "Plus Jakarta Sans & Inter",
};`,
    },
    {
      id: "api-backend",
      title: "API & Backend Development",
      category: "Server Architecture & APIs",
      icon: Server,
      aiTag: "⚙️ ASP.NET Core & FastAPI < 12ms",
      estTime: "1 - 2 Weeks",
      description:
        "Robust, secure server-side infrastructure, RESTful APIs, microservices, and database design built for heavy enterprise workloads.",
      deliverables: [
        "ASP.NET Core & Python FastAPI Web APIs",
        "PostgreSQL & Redis In-Memory Caching",
        "Third-Party Payment & Webhook Integrations",
        "Swagger / OpenAPI Interactive Documentation",
      ],
      techStack: ["ASP.NET Core", "Python FastAPI", "REST APIs"],
      aiBlueprint: `// Codentra.dev High-Performance Backend Core
export const backendSpec = {
  runtime: ".NET 9 / Python 3.12 FastAPI",
  caching: "Redis Distributed Caching",
};`,
    },
    {
      id: "qa-testing",
      title: "QA & Software Testing",
      category: "Quality Assurance",
      icon: ShieldCheck,
      aiTag: "🧪 100% Automated QA & Audit",
      estTime: "Integrated",
      description:
        "Comprehensive manual and automated testing to ensure your product operates bug-free across all devices and edge cases.",
      deliverables: [
        "Structured Manual Testing & Edge-Case Audits",
        "Detailed Bug Reporting & Tracking Logs",
        "Playwright End-to-End Automated Test Suites",
      ],
      techStack: ["Manual Testing", "Test Cases", "Playwright"],
      aiBlueprint: `// Codentra.dev QA Quality Assurance Standard
export const qaSuite = {
  e2eTesting: "Playwright Automated Test Runner",
  bugGuarantee: "Zero Critical Bugs in Production",
};`,
    },
    {
      id: "maintenance",
      title: "Website Maintenance & Support",
      category: "Ongoing Operations",
      icon: Wrench,
      aiTag: "🔧 24/7 SLA Monitoring & Patches",
      estTime: "Monthly SLA",
      description:
        "Ongoing support, security updates, feature enhancements, and continuous optimization to keep your digital products running flawlessly.",
      deliverables: [
        "Rapid Bug Fixes & Feature Enhancements",
        "Security Patches & Dependency Audits",
        "Server Health & SLA Monitoring",
      ],
      techStack: ["Support SLA", "Monitoring", "Security Patches"],
      aiBlueprint: `// Codentra.dev Maintenance & Support SLA
export const supportConfig = {
  responseWindow: "< 2 Hours Critical Response",
};`,
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category.toLowerCase().includes(activeTab));

  return (
    <section id="services" className="py-14 sm:py-16 bg-white relative text-[#09090B] overflow-hidden">
      {/* Crisp Visible High-Tech Box Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-animated pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#09090B] tracking-widest uppercase mb-2 bg-[#A3E635] px-3.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#09090B] animate-spin" />
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
              Client-Oriented Digital Services
            </h2>
          </div>
          <p className="text-[#52525B] max-w-md text-sm leading-relaxed font-normal">
            We design, build, and maintain complete digital solutions engineered to achieve your business goals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 pb-3 border-b border-[#E4E4E7]">
          {[
            { id: "all", label: "All Services" },
            { id: "frontend", label: "Web Development" },
            { id: "saas", label: "Custom Software" },
            { id: "design", label: "UI/UX Design" },
            { id: "server", label: "API & Backend" },
            { id: "quality", label: "QA & Testing" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#09090B] text-[#A3E635] shadow-md scale-105"
                  : "bg-[#F4F4F5] text-[#52525B] border border-[#E4E4E7] hover:text-[#09090B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="ai-glass-card-white rounded-2xl p-6 flex flex-col justify-between group border border-[#E4E4E7] bg-white shadow-sm hover:border-[#A3E635]"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#09090B] bg-[#A3E635]/30 border border-[#A3E635] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-sm">
                      <Bot className="w-3 h-3 text-[#09090B]" />
                      <span>{service.aiTag}</span>
                    </span>
                  </div>

                  {/* Top Service Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#09090B] border border-zinc-800 flex items-center justify-center text-[#A3E635] group-hover:bg-[#A3E635] group-hover:text-[#09090B] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#52525B] uppercase tracking-wider bg-[#F4F4F5] border border-[#E4E4E7] px-2 py-0.5 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-extrabold text-[#09090B] mb-2 group-hover:text-[#84CC16] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#52525B] text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet Points */}
                  <div className="space-y-1.5 mb-4">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#09090B] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-[#52525B] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>{service.estTime}</span>
                  </div>

                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#09090B] group-hover:text-[#84CC16] transition-colors cursor-pointer bg-[#F4F4F5] group-hover:bg-[#09090B] group-hover:text-white px-3 py-1.5 rounded-lg border border-[#E4E4E7]"
                  >
                    <span>AI Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive AI Service Modal Specification Drawer */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-[#E4E4E7] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-[#09090B]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7] bg-[#09090B] text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#A3E635] text-[#09090B] flex items-center justify-center font-bold">
                  {React.createElement(selectedServiceModal.icon, { className: "w-4 h-4" })}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    {selectedServiceModal.title}
                  </h3>
                  <span className="text-xs text-[#A3E635] font-mono">
                    {selectedServiceModal.aiTag}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider mb-1">
                  Service Description
                </h4>
                <p className="text-sm text-[#09090B] font-medium leading-relaxed">
                  {selectedServiceModal.description}
                </p>
              </div>

              {/* Full Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider mb-2">
                  Full Service Deliverables List
                </h4>
                <div className="space-y-2 bg-[#F4F4F5] p-4 rounded-2xl border border-[#E4E4E7]">
                  {selectedServiceModal.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#09090B]">
                      <Check className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Spec Code Blueprint */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#84CC16]" />
                  <span>AI Tech Specification & Config</span>
                </h4>
                <pre className="bg-[#09090B] text-zinc-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800">
                  <code>{selectedServiceModal.aiBlueprint}</code>
                </pre>
              </div>

              {/* Modal CTA */}
              <div className="pt-3 border-t border-[#E4E4E7] flex items-center justify-between gap-4">
                <div className="text-xs text-[#52525B] font-mono">
                  Est. Timeline: <span className="font-bold text-[#09090B]">{selectedServiceModal.estTime}</span>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedServiceModal(null)}
                  className="inline-flex items-center gap-2 bg-[#A3E635] text-[#09090B] font-extrabold text-xs px-5 py-2.5 rounded-full hover:bg-[#b2f046] transition-colors shadow-md cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
