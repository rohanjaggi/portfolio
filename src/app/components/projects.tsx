"use client"

import { useState, useRef } from "react";
import Image from "next/image";
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
      description: "Time series forecasting platform that uses advanced ML algorithms to predict future trends with high accuracy.",
      image: "/projects/project1.jpg", 
      tags: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com/rohanjaggi/project1",
      live: "https://project1-demo.com",
    },
    {
      title: "Nomsters",
      description: "Interactive dashboard for real-time data visualization with customizable charts and filtering capabilities.",
      image: "/projects/project2.jpg",
      tags: ["D3.js", "React", "Node.js", "MongoDB"],
      github: "https://github.com/rohanjaggi/project2",
      live: "https://project2-demo.com",
    },
    {
      title: "NUS Buffet Buddy",
      description: "AI-powered text analysis tool that extracts insights, sentiment, and key topics from large document collections.",
      image: "/projects/project3.jpg",
      tags: ["Python", "Spacy", "BERT", "Flask", "Vue.js"],
      github: "https://github.com/rohanjaggi/project3",
    },
    {
      title: "HashGen for TikTok",
      description: "Content recommendation system using collaborative filtering and deep learning to deliver personalized suggestions.",
      image: "/projects/project4.jpg",
      tags: ["PyTorch", "AWS", "GraphQL", "TypeScript"],
      github: "https://github.com/rohanjaggi/project4",
      live: "https://project4-demo.com",
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
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-60"
                  animate={{
                    opacity: hoveredIndex === index ? 0.8 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-full w-full bg-gray-100 dark:bg-gray-800"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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