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
      {/* Full-bleed photo — starts below navbar, left side */}
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
            priority
          />
        </div>
      </motion.div>

      {/*
        Full-width 2-column grid so the right column is always exactly
        the right half of the screen, regardless of viewport width.
        Left col = empty spacer (photo shows through). Right col = text.
      */}
      <div className="relative z-10 w-full flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[52%_48%]">

          {/* Left: spacer — photo fills this on desktop */}
          <div className="hidden lg:block" />

          {/* Right: text centred within the right half */}
          <div className="flex items-center justify-center px-6 sm:px-12 lg:px-12 xl:px-20 py-16 lg:py-0">
            <motion.div style={{ y: textY }} className="w-full max-w-lg">

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-stone-400 dark:text-stone-500 text-xs tracking-[0.32em] uppercase mb-7"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 -50% 0)" }}
                transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-stone-900 dark:text-stone-50 leading-none"
                style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}
              >
                Rohan
              </motion.h1>

              <motion.h1
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 -60% 0)" }}
                transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold italic text-rose-800 dark:text-rose-400 leading-none"
                style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}
              >
                Jaggi
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left h-px w-full max-w-xs bg-gradient-to-r from-stone-300 dark:from-stone-700 to-transparent my-7"
              />

              {/* Role switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.88 }}
                className="flex items-center gap-3 mb-9 h-6"
              >
                <span className="font-sans text-stone-500 dark:text-stone-400 text-sm">
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
                      className="font-sans font-bold text-stone-900 dark:text-stone-100 text-sm absolute whitespace-nowrap"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="https://linkedin.com/in/rohan-jaggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-[#006399] hover:shadow-[0_8px_24px_-4px_rgba(0,119,181,0.4)] hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/rohanjaggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-stone-700 dark:hover:bg-white hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </motion.div>

              {/* Mobile photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 lg:hidden"
              >
                <div
                  style={{
                    width: "clamp(220px, 70vw, 300px)",
                    height: "clamp(220px, 70vw, 300px)",
                    maskImage: "radial-gradient(ellipse 78% 82% at 50% 42%, black 38%, transparent 82%)",
                    WebkitMaskImage: "radial-gradient(ellipse 78% 82% at 50% 42%, black 38%, transparent 82%)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/mee.jpg"
                      alt="Rohan Jaggi"
                      fill
                      className="object-cover object-[center_15%]"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default select-none z-10"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-stone-300 dark:text-stone-600">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5 text-stone-300 dark:text-stone-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeComponent;
