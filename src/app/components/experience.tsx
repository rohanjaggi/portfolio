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
  logoRound?: boolean;
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
      className="relative pl-10 sm:pl-14"
    >
      {/* Dot on timeline */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.07 + 0.1, type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-0 top-5 w-5 h-5 rounded-full border-2 border-rose-800 dark:border-rose-400 bg-white dark:bg-stone-950 z-10 flex items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-rose-800 dark:bg-rose-400" />
      </motion.div>

      <motion.div
        whileHover={{ y: -3, boxShadow: "0 12px 40px -8px rgba(0,0,0,0.12)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="border border-stone-100 dark:border-stone-800 rounded-2xl p-5 sm:p-7 bg-white dark:bg-stone-900/35 transition-colors hover:border-stone-200 dark:hover:border-stone-700"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-11 h-11 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700 bg-white dark:bg-stone-800 ${exp.logoRound ? "rounded-full" : "rounded-xl"}`}>
              <Image
                src={`/logos/${exp.logo}`}
                alt={exp.company}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-snug text-stone-900 dark:text-stone-50">
                {exp.title}
              </h3>
              <p className="font-sans text-sm text-stone-500 dark:text-stone-400">
                {exp.company} &middot; {exp.location}
              </p>
            </div>
          </div>
          <span className="font-sans text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800/80 px-3 py-1.5 rounded-full whitespace-nowrap self-start border border-stone-100 dark:border-stone-700/60">
            {exp.date}
          </span>
        </div>

        <ul className="space-y-2.5">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.07 + 0.22 + i * 0.08 }}
              className="flex items-start gap-2.5 font-sans text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-800/50 dark:bg-rose-400/50 flex-shrink-0 mt-[0.42rem]" />
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

  // Animate the timeline line drawing down as you scroll through the section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.85"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const experiences: Experience[] = [
    {
      title: "AI Engineer Intern",
      company: "Singtel",
      location: "Singapore",
      description: [
        "Designed and deployed a Python-based AI evaluation service using Flask which evaluates automated voice-bot call transcripts against 9 key LLM evaluation metrics",
        "Leveraged various evaluation libraries to enable real-time scoring of over 5000 calls per month",
        "Collaborated with cross-functional teams to refine requirements and metrics",
      ],
      date: "May 2025 – Aug 2025",
      logo: "singtel.png",
    },
    {
      title: "Software Engineering Intern",
      company: "Qumo AI",
      location: "Singapore",
      description: [
        "Designing, developing, and maintaining AI-driven conversational forms",
        "Implemented responsive, user-friendly interfaces and dynamic features with Tailwind CSS and RadixUI",
        "Leading end-to-end feature development from ideation to deployment, including leveraging OpenAI technologies",
      ],
      date: "Jan 2025 – May 2025",
      logo: "qumo.jpeg",
      logoRound: true,
    },
    {
      title: "Research Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Co-author of a research paper targeted for publication in 2025 with a NUS Business Professor",
        "Conducted comprehensive research, data cleaning and analysis to identify key regulatory impacts on Indian cement emissions",
        "Applied advanced synthetic control methods using Stata and R/RStudio to create models tracking and predicting emissions trends",
      ],
      date: "Jun 2024 – Jul 2025",
      logo: "nus.png",
    },
    {
      title: "Business Analytics Teaching Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Taught practical tutorials and facilitated coaching sessions for 30 students",
        "Enhanced proficiency in R by applying business/data analytics techniques to real-life datasets",
        "Achieved 15% improvements in average student grades with a teaching rating of 4.75/5 through personalised tutoring",
      ],
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

        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
          >
            02 /
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

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Background (static) line */}
          <div className="absolute left-[9px] top-4 bottom-4 w-px bg-stone-100 dark:bg-stone-800/60" />

          {/* Animated line that draws in on scroll */}
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: "top" }}
            className="absolute left-[9px] top-4 bottom-4 w-px bg-gradient-to-b from-rose-700 via-rose-500 to-rose-200 dark:from-rose-400 dark:via-rose-500 dark:to-rose-700/30"
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
