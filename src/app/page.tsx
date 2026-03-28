import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";
import ExperienceComponent from "./components/experience";
import ProjectsComponent from "./components/projects";
import ContactComponent from "./components/contact-me";

import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn,
  SiPandas, SiNumpy, SiJupyter, SiReact, SiDocker, SiPostgresql,
  SiFastapi, SiFlask, SiNextdotjs, SiR,
} from "@icons-pack/react-simple-icons";

const techStack = [
  { name: "Python",       icon: <SiPython      size={15} color="currentColor" /> },
  { name: "R",            icon: <SiR            size={15} color="currentColor" /> },
  { name: "PyTorch",      icon: <SiPytorch     size={15} color="currentColor" /> },
  { name: "TensorFlow",   icon: <SiTensorflow  size={15} color="currentColor" /> },
  { name: "scikit-learn", icon: <SiScikitlearn size={15} color="currentColor" /> },
  { name: "FastAPI",      icon: <SiFastapi     size={15} color="currentColor" /> },
  { name: "Flask",        icon: <SiFlask       size={15} color="currentColor" /> },
  { name: "Next.js",      icon: <SiNextdotjs   size={15} color="currentColor" /> },
  { name: "React",        icon: <SiReact       size={15} color="currentColor" /> },
  { name: "Pandas",       icon: <SiPandas      size={15} color="currentColor" /> },
  { name: "NumPy",        icon: <SiNumpy       size={15} color="currentColor" /> },
  { name: "PostgreSQL",   icon: <SiPostgresql  size={15} color="currentColor" /> },
  { name: "Docker",       icon: <SiDocker      size={15} color="currentColor" /> },
  { name: "Jupyter",      icon: <SiJupyter     size={15} color="currentColor" /> },
];

const TechMarquee = () => (
  <div className="border-y border-stone-100 dark:border-stone-800/50 py-3.5 overflow-hidden bg-stone-50/50 dark:bg-stone-900/20">
    <div className="flex animate-marquee whitespace-nowrap">
      {[0, 1].map((copy) => (
        <span
          key={copy}
          className="flex items-center flex-shrink-0 text-stone-400 dark:text-stone-600"
        >
          {techStack.map((tech, j) => (
            <span key={j} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.22em] uppercase">
                {tech.icon}
                {tech.name}
              </span>
              <span className="mx-6 text-rose-700/40 dark:text-rose-400/30">·</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HomeComponent />
        <AboutComponent />
        <TechMarquee />
        <ExperienceComponent />
        <ProjectsComponent />
        <ContactComponent />
      </main>
    </div>
  );
}
