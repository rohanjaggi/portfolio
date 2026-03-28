"use client"

import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 xl:px-32 py-8 border-t border-stone-100 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif font-bold text-rose-800 dark:text-rose-400 text-sm">
          Rohan Jaggi
        </span>

        <p className="font-sans text-xs text-stone-400 dark:text-stone-600 order-last sm:order-none">
          Built with Next.js &amp; Framer Motion &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/rohan-jaggi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-stone-400 dark:text-stone-600 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/rohanjaggi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-stone-400 dark:text-stone-600 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
