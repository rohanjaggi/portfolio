"use client"

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Code2, Server, BrainCircuit, Wrench } from "lucide-react";

import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiPython, SiOpenjdk, SiMysql, SiSupabase, SiFastapi, SiFlask,
  SiJupyter, SiPandas, SiNumpy, SiPlotly, SiTensorflow, SiOpenai, SiGit, SiDocker,
} from "@icons-pack/react-simple-icons";

const TechIcon = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.08 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="flex flex-col items-center gap-2"
  >
    <div className="bg-white dark:bg-stone-800 p-2.5 sm:p-3 rounded-xl flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shadow-sm border border-stone-100 dark:border-stone-700 hover:border-stone-200 dark:hover:border-stone-600 transition-colors">
      {icon}
    </div>
    <span className="text-[10px] sm:text-xs text-center text-stone-400 dark:text-stone-500 font-sans leading-tight">
      {name}
    </span>
  </motion.div>
);

const TechSection = ({
  icon, label, items, delay,
}: {
  icon: React.ReactNode; label: string;
  items: { name: string; icon: React.ReactNode }[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.45 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-rose-800 dark:text-rose-400">{icon}</span>
      <h3 className="font-sans font-semibold text-sm text-stone-700 dark:text-stone-300 tracking-wide">
        {label}
      </h3>
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3 sm:gap-4">
      {items.map((t) => <TechIcon key={t.name} name={t.name} icon={t.icon} />)}
    </div>
  </motion.div>
);

const AboutComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.12 });

  // Subtle parallax on the photo as the section scrolls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const ccas = [
    { logo: "gdsc.png", role: "Product Associate", organization: "Google Developer Student Club" },
    { logo: "nav.jpg", role: "Innovations and Insights Associate", organization: "NUS Alumni Ventures" },
    { logo: "nus_fintech.jpeg", role: "Machine Learning Analyst", organization: "NUS Fintech Society" },
    { logo: "nus_invest.jpeg", role: "Human Resource Executive", organization: "NUS Investment Society" },
  ];

  const education = [{
    logo: "nus.png",
    school: "National University of Singapore",
    degree: "BSc. Business Analytics (Honours)",
    details: ["Specialisation in Machine Learning", "Second Major in Economics", "Aug 2023 – May 2027"],
  }];

  const techStack = {
    frontend: [
      { name: "React", icon: <SiReact size={26} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={26} color="#000000" /> },
      { name: "Vue.js", icon: <SiVuedotjs size={26} color="#4FC08D" /> },
      { name: "TypeScript", icon: <SiTypescript size={26} color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={26} color="#06B6D4" /> },
      { name: "HTML/CSS", icon: <SiHtml5 size={26} color="#E34F26" /> },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs size={26} color="#339933" /> },
      { name: "Python", icon: <SiPython size={26} color="#3776AB" /> },
      { name: "Java", icon: <SiOpenjdk size={26} color="#007396" /> },
      { name: "MySQL", icon: <SiMysql size={26} color="#4479A1" /> },
      { name: "Supabase", icon: <SiSupabase size={26} color="#3ECF8E" /> },
      { name: "FastAPI", icon: <SiFastapi size={26} color="#009688" /> },
      { name: "Flask", icon: <SiFlask size={26} color="#000000" /> },
    ],
    dataScience: [
      { name: "Jupyter", icon: <SiJupyter size={26} color="#F37626" /> },
      { name: "Pandas", icon: <SiPandas size={26} color="#150458" /> },
      { name: "NumPy", icon: <SiNumpy size={26} color="#013243" /> },
      { name: "Matplotlib", icon: <SiPlotly size={26} color="#3F4F75" /> },
      { name: "TensorFlow", icon: <SiTensorflow size={26} color="#FF6F00" /> },
      { name: "OpenAI API", icon: <SiOpenai size={26} color="#412991" /> },
    ],
    tools: [
      { name: "Git", icon: <SiGit size={26} color="#F05032" /> },
      { name: "Docker", icon: <SiDocker size={26} color="#2496ED" /> },
      { name: "VS Code", icon: <Image src="/logos/vscode.svg" alt="VS Code" width={26} height={26} /> },
      { name: "Azure", icon: <Image src="/logos/azure.png" alt="Azure" width={26} height={26} /> },
    ],
  };

  return (
    <section
      id="about"
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
            01 /
          </motion.p>
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-stone-900 dark:text-stone-50"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">

          {/* Photo with parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border-2 border-stone-200 dark:border-stone-700/60 translate-x-3 translate-y-3 -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-md"
                style={{ width: "clamp(260px, 28vw, 340px)" }}>
                <Image
                  src="/about-pic.png"
                  alt="Rohan Jaggi"
                  width={340}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-1 bg-stone-100 dark:bg-stone-800/50 rounded-xl p-1">
                <TabsTrigger
                  value="education"
                  className="rounded-xl font-sans text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-stone-700 data-[state=active]:shadow-sm transition-all"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="ccas"
                  className="rounded-xl font-sans text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-stone-700 data-[state=active]:shadow-sm transition-all"
                >
                  Co-Curriculars
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education">
                <div className="border border-stone-100 dark:border-stone-800 rounded-2xl p-7 bg-white dark:bg-stone-900/30 min-h-[270px] flex items-center">
                  {education.map((edu) => (
                    <div key={edu.school} className="flex flex-col items-center text-center w-full gap-5">
                      <motion.div
                        initial={{ scale: 0, rotate: -8 }}
                        animate={inView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.5, type: "spring", stiffness: 180, damping: 14 }}
                      >
                        <Image
                          src={`/logos/${edu.logo}`}
                          alt={edu.school}
                          width={60}
                          height={60}
                          className="rounded-xl shadow-sm"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mb-1.5">
                          {edu.school}
                        </h3>
                        <p className="font-sans text-stone-500 dark:text-stone-400 text-sm mb-5">
                          {edu.degree}
                        </p>
                        <div className="flex flex-col gap-2">
                          {edu.details.map((d, i) => (
                            <motion.div
                              key={d}
                              initial={{ opacity: 0, y: 8 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: 0.6 + i * 0.1 }}
                              className="flex items-center justify-center gap-2 font-sans text-sm text-stone-600 dark:text-stone-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-800/60 dark:bg-rose-400/60 flex-shrink-0" />
                              {d}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ccas">
                <div className="border border-stone-100 dark:border-stone-800 rounded-2xl p-6 bg-white dark:bg-stone-900/30 min-h-[270px]">
                  <div className="space-y-1">
                    {ccas.map((cca, i) => (
                      <motion.div
                        key={cca.organization}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.38 + i * 0.09 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors cursor-default"
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-stone-100 dark:border-stone-700">
                          <Image
                            src={`/logos/${cca.logo}`}
                            alt={cca.organization}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-sans font-semibold text-sm text-stone-900 dark:text-stone-100 leading-snug">
                            {cca.role}
                          </p>
                          <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                            {cca.organization}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-xl font-sans font-medium py-5 text-sm border-stone-200 dark:border-stone-700 hover:border-rose-800 dark:hover:border-rose-400 hover:text-rose-800 dark:hover:text-rose-400 transition-all duration-200"
                >
                  View My Tech Stack
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl">
                <DialogHeader className="sticky top-0 backdrop-blur-md bg-white/90 dark:bg-stone-950/90 pb-4 z-[5] pt-2">
                  <DialogTitle className="font-serif text-2xl font-bold text-center">Tech Stack</DialogTitle>
                  <DialogDescription className="font-sans text-center text-stone-500 text-sm">
                    Technologies I work with
                  </DialogDescription>
                  <div className="w-10 h-[2px] bg-rose-800 dark:bg-rose-400 rounded mx-auto mt-2" />
                </DialogHeader>
                <div className="grid gap-8 pb-2">
                  <TechSection icon={<Code2 size={15} />} label="Frontend" items={techStack.frontend} delay={0} />
                  <TechSection icon={<Server size={15} />} label="Backend" items={techStack.backend} delay={0.08} />
                  <TechSection icon={<BrainCircuit size={15} />} label="Data Science" items={techStack.dataScience} delay={0.16} />
                  <TechSection icon={<Wrench size={15} />} label="Tools" items={techStack.tools} delay={0.24} />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
