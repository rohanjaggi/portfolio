"use client"

import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 xl:px-32 py-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-brass-metallic text-sm">
          Rohan Jaggi
        </span>

        <p className="font-sans text-xs text-[oklch(0.45_0.01_250)] order-last sm:order-none">
          Built with Next.js &amp; Framer Motion &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/rohan-jaggi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-[oklch(0.45_0.01_250)] hover:text-[oklch(0.75_0.12_75)] transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/rohanjaggi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-[oklch(0.45_0.01_250)] hover:text-[oklch(0.75_0.12_75)] transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
