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
  gradient?: string;
  tags: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
}

const TagList = ({ tags }: { tags: string[] }) => (
  <p className="font-mono text-[11px] leading-relaxed text-[oklch(0.6_0.01_250)]">
    {tags.slice(0, 4).map((tag, i) => (
      <span key={tag}>
        {i > 0 && <span className="text-[oklch(0.42_0.01_250)]">{"  ·  "}</span>}
        {tag}
      </span>
    ))}
  </p>
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
          <div
            className="absolute inset-0"
            style={{ background: project.gradient }}
          />
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display font-bold text-base text-[oklch(0.92_0.01_80)] group-hover:text-[oklch(0.75_0.12_75)] transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] text-[oklch(0.62_0.09_75)] ml-2 shrink-0">
            {project.year}
          </span>
        </div>
        <p className="font-sans text-xs text-[oklch(0.68_0.01_250)] leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>
        <TagList tags={project.tags} />
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2.5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-lg border border-white/[0.12] text-[oklch(0.82_0.01_80)] font-mono text-[11px] tracking-wide hover:border-white/25 hover:text-[oklch(0.92_0.01_80)] hover:bg-white/[0.03] transition-colors">
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              aria-label={`${project.liveLabel ?? "Live Demo"} — ${project.title}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-lg bg-[oklch(0.75_0.12_75)] text-[oklch(0.16_0.01_250)] font-mono text-[11px] font-medium tracking-wide hover:bg-[oklch(0.80_0.12_75)] transition-colors">
              {project.liveLabel ?? "Live Demo"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
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
      title: "Polymbappe",
      year: "2026",
      description: "Probabilistic 2026 World Cup forecasting system with Bayesian hierarchical Dixon-Coles models, LightGBM ensemble stacking, and 100K-iteration Monte Carlo simulation. Live edge detection against Polymarket using credible-interval filtering and Kelly staking.",
      image: "/logos/polymbappe.jpg",
      imagePosition: "50% center",
      tags: ["Bayesian Hierarchical", "Dixon-Coles", "LightGBM Stacking", "LangGraph"],
      github: "https://github.com/pastchum/polymbappe",
    },
    {
      title: "Quadfather",
      year: "2026",
      description: "Telegram Mini App for AI-powered nutrition and fitness tracking. Includes an 8-model LLM vision benchmark across 300 food images and an autonomous 28-iteration prompt optimisation system that improved macro estimation accuracy by 15%.",
      image: "/logos/quadfather.png",
      imagePosition: "50% center",
      tags: ["8-Model Vision Benchmark", "Prompt Autooptimisation", "BYOK Multi-Provider", "grammY"],
      github: "https://github.com/rohanjaggi/quadfather",
      live: "https://t.me/quadfather_bot",
      liveLabel: "Open Bot",
    },
    {
      title: "Rusty",
      year: "2026",
      description: "High-performance LLM API gateway in Rust routing requests across OpenAI, Anthropic, Gemini, OpenRouter, and Ollama. Features SHA256 request caching, token-bucket rate limiting, SSE streaming, and a real-time cost-tracking JSONL ledger.",
      gradient: "linear-gradient(135deg, #2d0c02 0%, #6b1a07 100%)",
      tags: ["Rust", "Axum / Tokio", "SHA256 Caching", "SSE Streaming"],
      github: "https://github.com/rohanjaggi/rusty",
    },
    {
      title: "Calcapone",
      year: "2026",
      description: "AI productivity assistant replacing Todoist and Google Calendar. Natural language task and reminder management via Telegram bot and web dashboard, with pgvector semantic search, multi-provider LLMs (BYOK), and bi-directional Google Calendar sync.",
      image: "/logos/calcapone.png",
      tags: ["pgvector", "Hybrid Reranking", "Gemini Embeddings", "BYOK"],
      github: "https://github.com/rohanjaggi/calcapone",
      live: "https://t.me/calcapone_bot",
      liveLabel: "Open Bot",
    },
    {
      title: "TrackEfron",
      year: "2026",
      description: "Full-stack media tracker with a personalised recommendation engine built from scratch — 4-stream candidate retrieval (FAISS, SVD on MovieLens 25M, watchlist, popularity), 6-signal weighted scoring, and MMR diversity reranking.",
      image: "/logos/track_efron.png",
      imagePosition: "50% center",
      tags: ["4-Stream Retrieval", "FAISS", "SVD", "MMR Reranking"],
      github: "https://github.com/rohanjaggi/TrackEfron",
      live: "https://track-efron.vercel.app",
      liveLabel: "Visit Site",
    },
    {
      title: "Graham",
      year: "2026",
      description: "Equity intelligence platform combining AI-powered qualitative research with quantitative portfolio optimisation. Built mean-variance optimiser from scratch using projected gradient descent with 5 objective functions, DCF valuation, and tail-risk stress testing.",
      image: "/logos/graham.png",
      imagePosition: "50% center",
      tags: ["Mean-Variance Optimiser", "Projected Gradient Descent", "DCF Valuation", "Expected Shortfall"],
      github: "https://github.com/rohanjaggi/graham",
      live: "https://graham-blue.vercel.app/",
      liveLabel: "Visit Site",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsComponent;
