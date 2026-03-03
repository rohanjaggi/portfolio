"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = ["ML Engineer", "Data Scientist"];

const HomeComponent = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();

  // Parallax: photo drifts up as user scrolls
  const photoY = useTransform(scrollY, [0, 700], [0, -80]);
  const photoScale = useTransform(scrollY, [0, 700], [1, 1.04]);
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
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full py-16 lg:py-0 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center w-full">

          {/* Text side — slight upward drift on scroll */}
          <motion.div style={{ y: textY }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-stone-400 dark:text-stone-500 text-xs tracking-[0.32em] uppercase mb-7"
            >
              Hello, I&apos;m
            </motion.p>

            {/*
              Use clipPath instead of overflow-hidden so italic descenders
              (J, g tail in Playfair Display) are never clipped.
              inset(100% 0 0 0) = fully hidden from top → inset(0 0 -50% 0) = fully visible
              with -50% bottom giving extra room for descenders below the baseline.
            */}
            <motion.h1
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 -50% 0)" }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-stone-900 dark:text-stone-50 leading-none"
              style={{ fontSize: "clamp(4rem, 10.5vw, 8.5rem)" }}
            >
              Rohan
            </motion.h1>

            {/* Same technique — -60% bottom inset gives even more room for italic J descender */}
            <motion.h1
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 -60% 0)" }}
              transition={{ duration: 0.9, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold italic text-rose-800 dark:text-rose-400 leading-none"
              style={{ fontSize: "clamp(4rem, 10.5vw, 8.5rem)" }}
            >
              Jaggi
            </motion.h1>

            {/* Animated divider */}
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
          </motion.div>

          {/* Photo — parallax drift up on scroll */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: photoY, scale: photoScale }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Offset decorative border */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute inset-0 rounded-2xl border-2 border-rose-200 dark:border-rose-900/40 translate-x-4 translate-y-4 -z-10"
              />
              {/* Second decorative shape */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-rose-50 dark:bg-rose-950/30 -z-20 blur-2xl"
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ width: "clamp(220px, 26vw, 310px)", height: "clamp(270px, 32vw, 385px)" }}
              >
                <Image
                  src="/profile-pic.png"
                  alt="Rohan Jaggi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default select-none"
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
