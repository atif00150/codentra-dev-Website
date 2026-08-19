import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Mail,
  Clock,
  DollarSign,
  Briefcase,
  ExternalLink,
  AlertCircle,
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
    projectType: "Web Development",
    budget: "$5,000 - $10,000",
    timeline: "1 - 2 Months",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isActivationNeeded, setIsActivationNeeded] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsActivationNeeded(false);

    try {
      // 1. Submit to FormSubmit Endpoint for atifmughal00150@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/atifmughal00150@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 New Project Inquiry from ${formData.name} (Codentra.dev)`,
          Name: formData.name,
          Email: formData.email,
          "Service Type": formData.projectType,
          Budget: formData.budget,
          Timeline: formData.timeline,
          Message: formData.description,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success !== "false") {
        setLoading(false);
        setSubmitted(true);
        // Check if FormSubmit sent a first-time activation warning
        if (data.message && data.message.includes("activation")) {
          setIsActivationNeeded(true);
        }
      } else {
        // Fallback: Launch Gmail Compose directly with pre-filled inquiry text
        launchGmailCompose();
      }
    } catch (err) {
      // Fallback: Launch Gmail Compose directly
      launchGmailCompose();
    }
  };

  const launchGmailCompose = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=atifmughal00150@gmail.com&su=${encodeURIComponent(
      `Project Inquiry: ${formData.projectType} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.description}`
    )}`;
    
    window.open(gmailUrl, "_blank");
    setLoading(false);
    setSubmitted(true);
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

            {/* Direct Contact Badges (WhatsApp & Direct Mail Compose) */}
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

              {/* Direct Mail Compose Link */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atifmughal00150@gmail.com&su=New%20Project%20Inquiry%20-%20Codentra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A3E635] transition-colors group"
                title="Click to open Email Compose Window directly"
              >
                <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-[#A3E635] group-hover:bg-[#A3E635] group-hover:text-[#09090B] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <span className="text-[9px] text-zinc-400 block font-mono uppercase flex items-center gap-1">
                    <span>Direct Email (Click to Compose)</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#A3E635]" />
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-[#A3E635] transition-colors">
                    atifmughal00150@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Official Codentra.dev Social Links */}
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

          {/* Right Column: Direct Email Delivery "Start a Project" Form */}
          <div className="lg:col-span-7">
            <div className="card-obsidian-dark p-5 sm:p-6 rounded-3xl border border-zinc-800 bg-zinc-900/95 shadow-xl relative">
              {submitted ? (
                <div className="py-6 text-center space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#A3E635]/20 border border-[#A3E635] text-[#A3E635] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    Inquiry Processed for Delivery!
                  </h3>
                  <p className="text-zinc-300 text-xs max-w-md mx-auto leading-relaxed">
                    Thank you <span className="text-[#A3E635] font-bold">{formData.name}</span>. Your project inquiry has been dispatched to <span className="font-mono text-white">atifmughal00150@gmail.com</span>.
                  </p>

                  {/* 1-Time Activation Alert Notice */}
                  {isActivationNeeded && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-left max-w-md mx-auto space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>First-Time Setup: Check Your Gmail Inbox / Spam</span>
                      </div>
                      <p className="text-zinc-300 text-[11px] leading-relaxed">
                        FormSubmit sent a 1-time activation email to <strong className="text-white">atifmughal00150@gmail.com</strong>. Open your Gmail, click <em>"Activate Form"</em>, and all future inquiries will drop straight into your Inbox!
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap justify-center gap-2">
                    <button
                      type="button"
                      onClick={launchGmailCompose}
                      className="px-4 py-2 rounded-xl bg-[#A3E635] text-[#09090B] font-extrabold text-xs hover:bg-[#b2f046] transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Also Open in Gmail Directly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition-colors border border-zinc-700 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
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
                        name="name"
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
                        name="email"
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
                        className="w-full px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-[#A3E635] text-xs focus:outline-none focus:border-[#A3E635]"
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
                        <span>Sending to atifmughal00150@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Proposal (Direct Email Delivery)</span>
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
