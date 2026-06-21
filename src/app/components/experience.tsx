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
  logoBgWhite?: boolean;
  logoSize?: number;
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
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.07 + 0.1, type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-0 top-5 w-4 h-4 rounded-full border-2 border-[oklch(0.75_0.12_75)] bg-[oklch(0.13_0.01_250)] z-10 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.12_75)]" />
      </motion.div>

      <motion.div
        whileHover={{ y: -2, boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative border border-white/[0.06] rounded-xl p-4 sm:p-5 bg-white/[0.02] transition-colors hover:border-white/[0.1] overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm border border-white/[0.08] rounded-lg ${exp.logoBgWhite ? "bg-white" : "bg-white/[0.04]"}`}>
              <Image src={`/logos/${exp.logo}`} alt={exp.company} width={exp.logoSize ?? 28} height={exp.logoSize ?? 28} className="object-contain" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base leading-snug text-[oklch(0.92_0.01_80)]">
                {exp.title}
              </h3>
              <p className="font-sans text-xs text-[oklch(0.55_0.01_250)]">
                {exp.company} &middot; {exp.location}
              </p>
            </div>
          </div>
          <span className="font-mono text-[11px] text-[oklch(0.62_0.09_75)] px-2.5 py-1 rounded-full whitespace-nowrap self-start border border-[oklch(0.75_0.12_75/0.15)]">
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
              className="flex items-center gap-2 font-sans text-sm text-[oklch(0.58_0.01_250)]"
            >
              <span className="w-1 h-1 rounded-full bg-[oklch(0.75_0.12_75/0.5)] flex-shrink-0" />
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
      title: "Summer Analyst",
      company: "BlackRock",
      location: "Singapore",
      description: ["Aladdin", "Client Business"],
      date: "Jun 2026 – Aug 2026",
      logo: "blackrock.png",
      logoBgWhite: true,
      logoSize: 38,
    },
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
      logoBgWhite: true,
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
      className="px-6 sm:px-12 lg:px-20 xl:px-32 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 sm:mb-16 text-center">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-brass-metallic"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div ref={timelineRef} className="relative">
            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-white/[0.06]" />
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-[oklch(0.75_0.12_75)] via-[oklch(0.62_0.09_75)] to-transparent"
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
