import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Mail,
  Clock,
  DollarSign,
  Briefcase,
} from "lucide-react";
import {
  LinkedinIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Web Development",
    budget: "$5,000 - $10,000",
    description: "",
    timeline: "1 - 2 Months",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    "Web Dev",
    "Custom Software",
    "UI/UX Design",
    "API & Backend",
    "QA & Testing",
    "Maintenance",
  ];

  const budgetRanges = [
    "Under $5k",
    "$5k - $10k",
    "$10k - $25k",
    "$25k+",
  ];

  const timelines = [
    "1-2 Weeks",
    "1 Month",
    "1-2 Months",
    "3+ Months",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#09090B] relative text-white">
      {/* Volt Glow Effect Background */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#A3E635]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Intake Information & Real Social Links */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold text-[#09090B] tracking-widest uppercase mb-2.5 bg-[#A3E635] px-3 py-1 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#09090B]" />
                <span>Start a Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Have an idea? <br />
                <span className="text-[#A3E635] glow-text-volt">Let's build it.</span>
              </h2>
              <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed">
                Tell us about your product goals, requirements, and timeline. We’ll review your request and get back within 24 hours.
              </p>
            </div>

            {/* Direct Contact Badges (WhatsApp & Email) */}
            <div className="space-y-2.5 pt-2.5 border-t border-zinc-800">
              <a
                href="https://wa.me/923111783631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A3E635] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#A3E635] flex items-center justify-center text-[#09090B] font-bold group-hover:scale-105 transition-transform shadow-md">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 block font-mono uppercase">Direct WhatsApp</span>
                  <span className="text-xs font-extrabold text-white group-hover:text-[#A3E635] transition-colors">
                    +92 311 1783631
                  </span>
                </div>
              </a>

              <a
                href="mailto:atifmughal00150@gmail.com"
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A3E635] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-[#A3E635] group-hover:bg-[#A3E635] group-hover:text-[#09090B] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 block font-mono uppercase">Direct Email</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#A3E635] transition-colors">
                    atifmughal00150@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Official Codentra Social Links */}
            <div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                Official Social Channels
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/codentra-solutions-977740418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/codentra.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@condentra.dev0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-zinc-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Compact "Start a Project" Form */}
          <div className="lg:col-span-7">
            <div className="card-obsidian-dark p-5 rounded-3xl border border-zinc-800 bg-zinc-900/95 shadow-xl relative">
              {submitted ? (
                <div className="py-6 text-center space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#A3E635]/20 border border-[#A3E635] text-[#A3E635] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    Project Proposal Received!
                  </h3>
                  <p className="text-zinc-300 text-xs max-w-md mx-auto leading-relaxed">
                    Thank you <span className="text-[#A3E635] font-bold">{formData.name}</span>. Our software architect will review your request and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-1 px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition-colors border border-zinc-700 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-300 mb-1">
                        Your Name <span className="text-[#A3E635]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-300 mb-1">
                        Work Email <span className="text-[#A3E635]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-300 mb-1 flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#A3E635]" />
                      <span>Project Service Type</span>
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                            formData.projectType === type
                              ? "bg-[#A3E635] text-[#09090B] border-[#A3E635] shadow-sm"
                              : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-300 mb-1 flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[#A3E635]" />
                        <span>Budget</span>
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-300 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A3E635]" />
                        <span>Timeline</span>
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#A3E635]"
                      >
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-300 mb-1">
                      Project Description <span className="text-[#A3E635]">*</span>
                    </label>
                    <textarea
                      required
                      rows={2.5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what product you want to build..."
                      className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#A3E635] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#09090B] font-extrabold text-xs py-2.5 rounded-xl hover:bg-[#b2f046] transition-all shadow-md active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 border-2 border-[#09090B] border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Let's Talk About Your Project</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
