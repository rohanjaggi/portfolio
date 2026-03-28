"use client"

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  location: string;
  description: string[];
  date: string;
  logo: string;
  logoDarkInvert?: boolean;
}

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-10 sm:pl-12"
    >
      {/* Dot on timeline */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.07 + 0.1, type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-0 top-5 w-4 h-4 rounded-full border-2 border-rose-800 dark:border-rose-400 bg-white dark:bg-stone-950 z-10 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-rose-800 dark:bg-rose-400" />
      </motion.div>

      <motion.div
        whileHover={{ y: -2, boxShadow: "0 8px 32px -8px rgba(0,0,0,0.10)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative border border-stone-100 dark:border-stone-800 rounded-xl p-4 sm:p-5 bg-white dark:bg-stone-900/35 transition-colors hover:border-stone-200 dark:hover:border-stone-700 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rose-800 dark:bg-rose-400 rounded-l-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700 bg-white dark:bg-stone-800 rounded-lg">
              <Image src={`/logos/${exp.logo}`} alt={exp.company} width={28} height={28} className={`object-contain ${exp.logoDarkInvert ? "dark:invert" : ""}`} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base leading-snug text-stone-900 dark:text-stone-50">
                {exp.title}
              </h3>
              <p className="font-sans text-xs text-stone-500 dark:text-stone-400">
                {exp.company} &middot; {exp.location}
              </p>
            </div>
          </div>
          <span className="font-sans text-[11px] text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800/80 px-2.5 py-1 rounded-full whitespace-nowrap self-start border border-stone-100 dark:border-stone-700/60">
            {exp.date}
          </span>
        </div>

        <ul className="space-y-1.5 pl-0.5">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.07 + 0.2 + i * 0.07 }}
              className="flex items-center gap-2 font-sans text-sm text-stone-600 dark:text-stone-400"
            >
              <span className="w-1 h-1 rounded-full bg-rose-800/50 dark:bg-rose-400/50 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ExperienceComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.85"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const experiences: Experience[] = [
    {
      title: "Data Scientist Intern",
      company: "GovTech",
      location: "Singapore",
      description: ["Responsible AI", "LLM Evaluations"],
      date: "Jan 2026 – Jun 2026",
      logo: "govtech.avif",
    },
    {
      title: "AI Engineer Intern",
      company: "Singtel",
      location: "Singapore",
      description: ["LLM-as-a-Judge", "Production grade backend service"],
      date: "May 2025 – Aug 2025",
      logo: "singtel.png",
      logoDarkInvert: true,
    },
    {
      title: "Software Engineering Intern",
      company: "Qumo AI",
      location: "Singapore",
      description: ["Full-stack development"],
      date: "Jan 2025 – May 2025",
      logo: "qumo.jpeg",
    },
    {
      title: "Business Analytics Teaching Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: ["30 students", "Data analysis with R"],
      date: "Aug 2024 – May 2025",
      logo: "nus.png",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="px-6 sm:px-12 lg:px-20 xl:px-32 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header — centred */}
        <div className="mb-16 relative text-center">
          <span
            className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif font-bold text-stone-100 dark:text-stone-800/70 select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(6rem, 14vw, 11rem)", zIndex: 0 }}
            aria-hidden
          >
            02
          </span>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
            >
              Work
            </motion.p>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-stone-900 dark:text-stone-50"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Experience
            </motion.h2>
          </div>
        </div>

        {/* Timeline — constrained and centred */}
        <div className="max-w-2xl mx-auto">
          <div ref={timelineRef} className="relative">
            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-stone-100 dark:bg-stone-800/60" />
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-rose-700 via-rose-500 to-rose-200 dark:from-rose-400 dark:via-rose-500 dark:to-rose-700/30"
            />
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceComponent;
