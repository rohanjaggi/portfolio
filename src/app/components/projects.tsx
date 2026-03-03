"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  imageFit?: "cover" | "contain";
  accent?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.13,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group border border-stone-100 dark:border-stone-800 rounded-2xl overflow-hidden bg-white dark:bg-stone-900/35 hover:border-stone-200 dark:hover:border-stone-700 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-stone-100 dark:bg-stone-800">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={project.imageFit === "contain" ? "object-contain p-8" : "object-cover"}
            />
          </motion.div>

          {/* Hover gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          />

          {/* Link icons that appear on hover */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-3 right-3 flex gap-2"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-3.5 w-3.5 text-stone-700 dark:text-stone-200" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3.5 w-3.5 text-stone-700 dark:text-stone-200" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-50 leading-snug group-hover:text-rose-800 dark:group-hover:text-rose-400 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <p className="font-sans text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-stone-50 dark:border-stone-800/60">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[11px] px-2.5 py-1 rounded-full bg-stone-50 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 border border-stone-100 dark:border-stone-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.08 });

  const projects: Project[] = [
    {
      title: "Resurect",
      description: "Resume optimiser leveraging ML for individuals to receive tailored insights into their skills, and targeted recommendations.",
      image: "/logos/resurect.png",
      tags: ["Python", "FastAPI", "jobLib", "SpaCy", "React", "Tailwind CSS"],
      github: "https://github.com/pastchum/htmlheroes",
      live: "https://youtu.be/HGL1Ke0WO5k",
    },
    {
      title: "Nomsters",
      description: "Full-stack application for discovering and sharing food places in Singapore, featuring reviews, and a dynamic map interface.",
      image: "/logos/nomster.png",
      imageFit: "contain",
      tags: ["Vue.js", "Vite", "Firebase", "PrimeVue", "Google Maps API"],
      live: "https://nomster-13cf2.web.app/",
    },
    {
      title: "NUS Buffet Buddy",
      description: "Full-stack application designed to reduce food waste in NUS by advertising extra food to the wider NUS public to consume.",
      image: "/logos/buffet-buddy.png",
      tags: ["React Native", "TypeScript", "Firebase"],
      github: "https://github.com/rohanjaggi/NUS-Buffet-Buddy",
    },
    {
      title: "HashGen for TikTok",
      description: "TikTok video hashtag generator using ML for creators to boost visibility and engagement of their content.",
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

        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
          >
            03 /
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
