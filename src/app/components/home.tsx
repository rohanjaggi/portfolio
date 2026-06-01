"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = ["ML Engineer", "Data Scientist"];

const HomeComponent = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();

  const photoY = useTransform(scrollY, [0, 800], [0, -50]);
  const textY = useTransform(scrollY, [0, 500], [0, -30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        style={{ y: photoY }}
        className="absolute top-16 left-0 bottom-0 w-[52%] hidden lg:block pointer-events-none select-none"
      >
        <div
          className="absolute inset-0"
          style={{
            maskImage: [
              "linear-gradient(to left,   transparent 0%, black 40%, black 100%)",
              "linear-gradient(to top,    transparent 0%, black 14%, black 100%)",
              "linear-gradient(to bottom, transparent 0%, black 5%,  black 100%)",
            ].join(", "),
            WebkitMaskImage: [
              "linear-gradient(to left,   transparent 0%, black 40%, black 100%)",
              "linear-gradient(to top,    transparent 0%, black 14%, black 100%)",
              "linear-gradient(to bottom, transparent 0%, black 5%,  black 100%)",
            ].join(", "),
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <Image
            src="/mee.jpg"
            alt="Rohan Jaggi"
            fill
            className="object-cover object-[center_15%]"
            sizes="(max-width: 1023px) 0px, 52vw"
            priority
          />
        </div>
      </motion.div>

      <div className="relative z-10 w-full flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[52%_48%]">
          <div className="hidden lg:block" />

          <div className="flex items-center justify-center px-6 sm:px-12 lg:px-12 xl:px-20 py-10 sm:py-16 lg:py-0">
            <motion.div style={{ y: textY }} className="w-full max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start">

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-mono text-[oklch(0.62_0.09_75)] text-xs tracking-[0.2em] uppercase mb-7"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 -50% 0)" }}
                transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-[oklch(0.92_0.01_80)] leading-none"
                style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}
              >
                Rohan
              </motion.h1>

              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 -60% 0)" }}
                transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-brass-metallic pb-2"
                style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", lineHeight: 1.1 }}
              >
                Jaggi
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="origin-center lg:origin-left h-px w-full max-w-xs bg-[oklch(0.75_0.12_75/0.3)] my-7"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.88 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-9 h-6"
              >
                <span className="font-sans text-[oklch(0.55_0.01_250)] text-sm">
                  Aspiring
                </span>
                <div className="relative h-full flex items-center min-w-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 22, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -22, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="font-sans font-bold text-[oklch(0.92_0.01_80)] text-sm absolute whitespace-nowrap"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <a
                  href="https://linkedin.com/in/rohan-jaggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.12_75)] text-[oklch(0.13_0.01_250)] rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-[oklch(0.82_0.12_75)] hover:shadow-[0_8px_24px_-4px_oklch(0.75_0.12_75/0.35)] hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/rohanjaggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.1] text-[oklch(0.85_0.01_80)] rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-[oklch(0.75_0.12_75/0.4)] hover:text-[oklch(0.75_0.12_75)] hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-default select-none z-10 bg-transparent border-none hidden sm:flex"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[oklch(0.45_0.01_250)]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5 text-[oklch(0.45_0.01_250)]" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HomeComponent;
