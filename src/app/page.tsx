import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";
import ExperienceComponent from "./components/experience";
import ProjectsComponent from "./components/projects";
import ContactComponent from "./components/contact-me";

const marqueeItems = [
  "ML Engineer",
  "Data Scientist",
  "AI Engineer",
  "Full Stack Developer",
  "Research Assistant",
  "Teaching Assistant",
  "NUS Business Analytics",
  "Open to Opportunities",
];

// Doubled for seamless CSS marquee loop
const MarqueeStrip = () => (
  <div className="border-y border-stone-100 dark:border-stone-800/50 py-3.5 overflow-hidden bg-stone-50/50 dark:bg-stone-900/20">
    <div className="flex animate-marquee whitespace-nowrap">
      {[0, 1].map((copy) => (
        <span
          key={copy}
          className="font-sans text-[10px] tracking-[0.28em] uppercase text-stone-400 dark:text-stone-600 flex-shrink-0"
        >
          {marqueeItems.map((item, j) => (
            <span key={j}>
              {item}
              <span className="mx-7 text-rose-700/40 dark:text-rose-400/30">·</span>
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
        <MarqueeStrip />
        <AboutComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <ContactComponent />
      </main>
    </div>
  );
}
