import React, { useState } from "react";
import CodentraLogo from "./CodentraLogo";
import { ArrowUp, Copy, Check, Mail } from "lucide-react";
import {
  LinkedinIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("atifmughal00150@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#09090B] border-t border-zinc-800 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <CodentraLogo darkBackground={true} />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
              Codentra.dev is a digital products & software solutions team building high-performance web applications, SaaS platforms, and enterprise software.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-pulse" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-[#A3E635] transition-colors">
                  Services Offering
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#A3E635] transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#A3E635] transition-colors">
                  5-Step Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#A3E635] transition-colors">
                  Why Codentra.dev?
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A3E635] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Connect & Official Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-white">
              Direct Channels
            </h4>
            
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/923111783631"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white hover:border-[#A3E635] transition-colors group"
            >
              <div className="w-6 h-6 rounded-lg bg-[#A3E635] flex items-center justify-center text-[#09090B] font-bold">
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono flex-1 group-hover:text-[#A3E635] transition-colors">
                +92 311 1783631
              </span>
            </a>

            {/* Email Copy Box */}
            <a
              href="mailto:atifmughal00150@gmail.com"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white hover:border-[#A3E635] transition-colors group"
            >
              <Mail className="w-4 h-4 text-[#A3E635]" />
              <span className="font-mono flex-1 group-hover:text-[#A3E635] transition-colors">
                atifmughal00150@gmail.com
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#A3E635]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </a>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/codentra-solutions-977740418/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/codentra.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.tiktok.com/@condentra.dev0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors"
                aria-label="TikTok"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Codentra.dev. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#A3E635] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
