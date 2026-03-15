"use client"

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 sm:px-12 lg:px-20 xl:px-32 py-16 lg:py-24"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section header — centred */}
        <div className="mb-12 relative text-center">
          <span
            className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif font-bold text-stone-100 dark:text-stone-800/70 select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(6rem, 14vw, 11rem)", zIndex: 0 }}
            aria-hidden
          >
            01
          </span>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-stone-900 dark:text-stone-50"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              About Me
            </motion.h2>
          </div>
        </div>

        {/* 50/50 grid — photo fills left col, education fills right col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-pic.png"
              alt="Rohan Jaggi"
              width={3168}
              height={3342}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Education — vertically centred in the right column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-stone-400 dark:text-stone-500 mb-5">
              Education
            </p>

            <div className="flex items-start gap-5">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.45, type: "spring", stiffness: 200, damping: 16 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/logos/nus.png"
                  alt="NUS"
                  width={52}
                  height={52}
                  className="rounded-xl shadow-sm border border-stone-100 dark:border-stone-700"
                />
              </motion.div>

              <div>
                <h3
                  className="font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug mb-1"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
                >
                  National University of Singapore
                </h3>
                <p className="font-sans text-sm text-rose-800 dark:text-rose-400 font-medium mb-3">
                  BSc. Business Analytics (Honours)
                </p>
                <div className="space-y-1.5">
                  {[
                    "Machine Learning & Financial Analytics Specialisation",
                    "Minor in Economics",
                    "Aug 2023 – May 2027",
                  ].map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 font-sans text-sm text-stone-500 dark:text-stone-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-600 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
