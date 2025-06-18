"use client"

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Resurect",
      description: "Resume optimiser leveraging ML for individuals to receive tailored insights into their skills, and targeted recommendations.",
      image: "/logos/resurect.png", 
      tags: ["Python", "FastAPI", "jobLib", "SpaCy", "React", "TailWind CSS"],
      github: "https://github.com/pastchum/htmlheroes",
      live: "https://youtu.be/HGL1Ke0WO5k",
    },
    {
      title: "Nomsters",
      description: "Full-stack application for discovering and sharing food places in Singapore, featuring reviews, and a dynamic map interface.",
      image: "/logos/nomster.png",
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
      github: "https://github.com/jensenhuangyankai/tiktok-techjam2024"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, 
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="projects" className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          Projects
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-5 origin-left"
        ></motion.div>
      </motion.div>

      <motion.div
        ref={projectsRef}
        variants={containerVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative"
          >
            <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-30"
                  animate={{
                    opacity: hoveredIndex === index ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-full w-full bg-gray-100 dark:bg-gray-800"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: project.title === "Nomsters" ? 'contain' : 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: project.title === "Nomsters" ? '#f0f1f3' : undefined
                  }}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-3 right-3 z-20 flex space-x-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 text-gray-700 dark:text-gray-200" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700 dark:text-gray-200" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <CardHeader className="pb-2 pt-4 px-5">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 pb-4 px-5 flex-grow">
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-100/50 dark:bg-gray-800/50 text-xs py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsComponent;