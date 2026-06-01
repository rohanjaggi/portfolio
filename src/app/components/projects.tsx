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
  imagePosition?: string;
}

const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.map((tag) => (
      <span
        key={tag}
        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-[oklch(0.58_0.01_250)] border border-white/[0.06]"
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
      className="group border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-36 overflow-hidden bg-white/[0.03]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
            className={project.imageFit === "contain" ? "object-contain p-6" : "object-cover"}
          />
        </motion.div>
        <div
          className="absolute top-2.5 right-2.5 flex gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200"
        >
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-2.5 sm:p-1.5 rounded-full bg-[oklch(0.13_0.01_250/0.9)] text-[oklch(0.7_0.01_80)] hover:text-[oklch(0.75_0.12_75)] transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <Github className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-2.5 sm:p-1.5 rounded-full bg-[oklch(0.13_0.01_250/0.9)] text-[oklch(0.7_0.01_80)] hover:text-[oklch(0.75_0.12_75)] transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
            </a>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between mb-1.5">
          <h3 className="font-display font-bold text-base text-[oklch(0.92_0.01_80)] group-hover:text-[oklch(0.75_0.12_75)] transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] text-[oklch(0.62_0.09_75)] ml-2 shrink-0">
            {project.year}
          </span>
        </div>
        <p className="font-sans text-xs text-[oklch(0.58_0.01_250)] leading-relaxed mb-3 flex-grow">
          {project.description}
        </p>
        <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between">
          <TagList tags={project.tags} />
          <div className="flex gap-1.5 ml-2 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-full text-[oklch(0.45_0.01_250)] hover:text-[oklch(0.75_0.12_75)] transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-full text-[oklch(0.45_0.01_250)] hover:text-[oklch(0.75_0.12_75)] transition-colors"
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
      image: "/logos/track_efron.png",
      imagePosition: "40% center",
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
  ];

  return (
    <section
      id="projects"
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
            Projects
          </motion.h2>
        </div>

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
