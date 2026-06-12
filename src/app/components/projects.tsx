"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  year: string;
  description: string;
  image?: string;
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
        {project.image ? (
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
              className={project.imageFit === "contain" ? "object-contain p-6" : "object-cover"}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[oklch(0.18_0.02_75)] to-[oklch(0.13_0.01_250)]">
            <span className="font-display text-4xl font-bold text-[oklch(0.72_0.14_75/0.2)] select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
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
      title: "Tailor",
      year: "2026",
      description: "AI-powered career knowledge management system. Stores achievements in structured markdown, then orchestrates job search, resume tailoring, gap analysis, and interview prep across 10 workflows.",
      tags: ["Claude Code", "MCP Servers", "Python", "Markdown KB"],
    },
    {
      title: "TrackEfron",
      year: "2026",
      description: "Full-stack movie and TV tracking application with a two-stage ML recommendation pipeline — retrieval via FAISS embeddings then reranking with learned preferences.",
      image: "/logos/track_efron.png",
      imagePosition: "40% center",
      tags: ["Next.js", "TypeScript", "FastAPI", "FAISS", "scikit-learn"],
      github: "https://github.com/rohanjaggi/TrackEfron",
      live: "https://track-efron.vercel.app",
    },
    {
      title: "Calcapone",
      year: "2026",
      description: "Telegram-first task and calendar AI assistant. Natural language parsing, voice transcription, Google Calendar sync with conflict detection, and multi-turn conversation memory.",
      tags: ["Next.js", "Prisma", "Telegram Bot API", "Google Calendar", "Multi-LLM"],
    },
    {
      title: "Graham",
      year: "2026",
      description: "Long-term equity intelligence platform combining DCF valuation, mean-variance portfolio optimisation, stock screening, and tail risk analysis with historical stress scenarios.",
      tags: ["Next.js", "Supabase", "Finnhub", "SEC EDGAR", "Portfolio Optimisation"],
    },
    {
      title: "Polymbappe",
      year: "2026",
      description: "Probabilistic forecasting toolkit for the 2026 FIFA World Cup. Elo ratings, Dixon-Coles models, 50k+ tournament simulations, and edge detection against bookmaker lines.",
      tags: ["Python", "PyMC", "LightGBM", "Polars", "Streamlit"],
    },
    {
      title: "Quadfather",
      year: "2026",
      description: "AI nutrition and fitness tracker built as a Telegram Mini App. Estimates macros from meal photos, generates daily coaching insights, and tracks workouts with progressive overload.",
      tags: ["Next.js", "Prisma", "Telegram Mini App", "Multi-LLM", "Apple Shortcuts"],
    },
    {
      title: "rusty-gateway",
      year: "2026",
      description: "High-performance LLM API gateway in Rust. Multi-provider routing, deterministic request caching, per-key rate limiting, automatic failover, and cost tracking — all behind an OpenAI-compatible API.",
      tags: ["Rust", "Axum", "Tokio", "OpenAI-compatible", "Rate Limiting"],
    },
    {
      title: "rusty-research",
      year: "2026",
      description: "Declarative automated experimentation engine. Define experiments in YAML, point at any eval command — handles iteration, checkpointing, convergence detection, and crash recovery via JSONL ledger.",
      tags: ["Rust", "Bayesian Optimisation", "Grid Search", "CLI"],
    },
    {
      title: "Resurect",
      year: "2025",
      description: "Resume optimiser leveraging ML for individuals to receive tailored insights into their skills, and targeted recommendations.",
      image: "/logos/resurect.png",
      tags: ["Python", "FastAPI", "SpaCy", "React", "Tailwind CSS"],
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsComponent;
