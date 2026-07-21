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

        <div className="mb-12 text-center">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-brass-metallic"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="rounded-2xl overflow-hidden w-full max-w-[17rem] sm:max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <Image
              src="/about-pic.png"
              alt="Rohan Jaggi"
              width={3168}
              height={3342}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="font-mono text-xs tracking-[0.22em] uppercase text-[oklch(0.62_0.09_75)] mb-5">
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
                  className="rounded-xl shadow-sm border border-white/[0.08]"
                />
              </motion.div>

              <div>
                <h3
                  className="font-display font-bold text-[oklch(0.92_0.01_80)] leading-snug mb-1"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
                >
                  National University of Singapore
                </h3>
                <p className="font-sans text-sm text-[oklch(0.75_0.12_75)] font-medium mb-3">
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
                      className="flex items-center gap-2 font-sans text-sm text-[oklch(0.58_0.01_250)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.75_0.12_75/0.5)] flex-shrink-0" />
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
