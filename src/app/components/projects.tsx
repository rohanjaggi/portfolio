"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  imageFit?: "cover" | "contain";
}

const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <span
        key={tag}
        className="font-sans text-[11px] px-2.5 py-1 rounded-full bg-stone-50 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 border border-stone-100 dark:border-stone-700/60"
      >
        {tag}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
  >
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group border border-stone-100 dark:border-stone-800 rounded-2xl overflow-hidden bg-white dark:bg-stone-900/35 hover:border-stone-200 dark:hover:border-stone-700 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.11)] dark:hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden bg-stone-100 dark:bg-stone-800">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={project.imageFit === "contain" ? "object-contain p-6" : "object-cover"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
        {/* Links appear on hover */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-2.5 right-2.5 flex gap-1.5"
        >
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <Github className="h-3 w-3" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between mb-1.5">
          <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 group-hover:text-rose-800 dark:group-hover:text-rose-400 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <span className="font-sans text-[10px] text-stone-400 dark:text-stone-500 ml-2 shrink-0">
            {project.year}
          </span>
        </div>
        <p className="font-sans text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3 flex-grow">
          {project.description}
        </p>
        <div className="pt-3 border-t border-stone-50 dark:border-stone-800/60 flex items-center justify-between">
          <TagList tags={project.tags} />
          <div className="flex gap-1.5 ml-2 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-full text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-full text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.06 });

  const projects: Project[] = [
    {
      title: "TrackEfron",
      year: "2026",
      description: "Full-stack movie and TV tracking application with a personalised recommendation engine built from scratch.",
      image: "/logos/trackefron.png",
      tags: ["Next.js", "TypeScript", "Python", "Recommendation Engine"],
      github: "https://github.com/rohanjaggi/TrackEfron",
      live: "https://track-efron.vercel.app",
    },
    {
      title: "Resurect",
      year: "2025",
      description: "Resume optimiser leveraging ML for individuals to receive tailored insights into their skills, and targeted recommendations.",
      image: "/logos/resurect.png",
      tags: ["Python", "FastAPI", "jobLib", "SpaCy", "React", "Tailwind CSS"],
      github: "https://github.com/pastchum/htmlheroes",
      live: "https://youtu.be/HGL1Ke0WO5k",
    },
    {
      title: "Nomsters",
      year: "2025",
      description: "Full-stack app for discovering and sharing food places in Singapore, featuring reviews and a dynamic map interface.",
      image: "/logos/nomster.png",
      imageFit: "contain",
      tags: ["Vue.js", "Vite", "Firebase", "PrimeVue", "Google Maps API"],
      live: "https://nomster-13cf2.web.app/",
    },
    {
      title: "HashGen for TikTok",
      year: "2024",
      description: "TikTok hashtag generator using ML to help creators boost visibility and engagement.",
      image: "/logos/tiktok.png",
      tags: ["React", "Next.js", "Python", "Hugging Face", "OpenAI"],
      github: "https://github.com/jensenhuangyankai/tiktok-techjam2024",
    },
  ];

  return (
    <section
      id="projects"
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
            03
          </span>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
            >
              Personal
            </motion.p>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-stone-900 dark:text-stone-50"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Projects
            </motion.h2>
          </div>
        </div>

        {/* Uniform 2-col grid — centred */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsComponent;
