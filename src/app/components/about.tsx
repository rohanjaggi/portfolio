"use client"

import Image from "next/image";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Code2, Server } from "lucide-react";

const CCAItem = ({ 
  logo, 
  role, 
  organization 
}: { 
  logo: string;
  role: string;
  organization: string;
}) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
  >
    <div className="flex-shrink-0">
      <Image
        src={`/logos/${logo}`}
        alt={`${organization} logo`}
        width={40}
        height={40}
        className="rounded-lg"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 leading-tight">
        {role}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {organization}
      </p>
    </div>
  </motion.div>
);

const EducationItem = ({ 
  logo, 
  school, 
  degree,
  details 
}: { 
  logo: string;
  school: string;
  degree: string;
  details: string[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="mb-2"
      >
        <Image
          src={`/logos/${logo}`}
          alt={`${school} logo`}
          width={50}
          height={50}
          className="rounded-lg"
        />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2"
      >
        {school}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base text-gray-600 dark:text-gray-400 mb-3"
      >
        {degree}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-sm bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
      >
        <ul className="list-disc pl-6 space-y-2 text-left text-sm text-gray-600 dark:text-gray-400">
          {details.map((detail, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            >
              {detail}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const AboutComponent = () => {
  const [open, setOpen] = useState(false);
  
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const tabsRef = useRef(null);
  const buttonRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const tabsInView = useInView(tabsRef, { once: true, amount: 0.3 });
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.5 });
  
  const ccas = [
    {
      logo: "gdsc.png",
      role: "Product Associate",
      organization: "Google Developer Student Club"
    },
    {
      logo: "nav.jpg",
      role: "Innovations and Insights Associate",
      organization: "NUS Alumni Ventures"
    },
    {
      logo: "nus_fintech.jpeg",
      role: "Machine Learning Analyst",
      organization: "NUS Fintech Society"
    },
    {
      logo: "nus_invest.jpeg",
      role: "Human Resource Executive",
      organization: "NUS Investment Society"
    }
  ];

  const education = [{
    logo: "nus.png",
    school: "National University of Singapore",
    degree: "BSc. Business Analytics (Honours)",
    details: [
      "Specialisation in Machine Learning",
      "Second Major in Economics",
      "Aug 2023 - May 2027"
    ]
  }];

  const techStack = {
    frontend: [
      { name: "React", logo: "react.svg" },
      { name: "Next.js", logo: "next.svg" },
      { name: "TypeScript", logo: "typescript.svg" },
      { name: "Tailwind CSS", logo: "tailwind.svg" },
    ],
    backend: [
      { name: "Node.js", logo: "node.svg" },
      { name: "Python", logo: "python.svg" },
      { name: "Java", logo: "java.svg" },
      { name: "PostgreSQL", logo: "postgres.svg" },
    ],
    tools: [
      { name: "Git", logo: "git.svg" },
      { name: "Docker", logo: "docker.svg" },
      { name: "VS Code", logo: "vscode.svg" },
      { name: "Jupyter", logo: "jupyter.svg" },
    ]
  };

  return (
    <div className="py-12 px-4 sm:px-6 md:px-8">
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          About Me
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-8 origin-left"
        ></motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
          className="flex-shrink-0 mb-8 md:mb-0"
        >
          <Image
            src="/about-pic.png"
            alt="About Me Picture"
            width={400}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </motion.div>

        <motion.div 
          ref={tabsRef}
          initial={{ opacity: 0, x: 50 }}
          animate={tabsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
          className="flex-1 w-full md:max-w-lg space-y-6"
        >
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="ccas">Co-Curriculars</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="mt-3">
              <Card>
                <CardContent className="p-3 min-h-[280px] flex items-center justify-center">
                  <div className="w-full">
                    {education.map((edu, index) => (
                      <EducationItem
                        key={index}
                        logo={edu.logo}
                        school={edu.school}
                        degree={edu.degree}
                        details={edu.details}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ccas" className="mt-3">
              <Card>
                <CardContent className="p-6 min-h-[280px]">
                  <div className="space-y-2">
                    {ccas.map((cca, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <CCAItem
                          logo={cca.logo}
                          role={cca.role}
                          organization={cca.organization}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <motion.div 
            ref={buttonRef}
            initial={{ opacity: 0, y: 20 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-4"
          >
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-lg font-medium px-6 py-2 
                  bg-black text-white 
                  hover:bg-gray-800 hover:text-gray-200 
                  dark:bg-white dark:text-black 
                  dark:hover:bg-gray-200 dark:hover:text-gray-800 
                    transition-colors"
                >
                  View My Tech Stack
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">
                    Tech Stack
                  </DialogTitle>
                  <DialogDescription className="text-center text-base text-gray-600 dark:text-gray-400 mb-5">
                    Technologies I work with
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-8">
                  {/* Frontend section with animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">Frontend</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {techStack.frontend.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                          className="flex flex-col items-center"
                        >
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-2">
                            <Image
                              src={`/logos/${tech.logo}`}
                              alt={`${tech.name} logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Backend section with animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Server className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">Backend</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {techStack.backend.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * index + 0.3, type: "spring", stiffness: 200 }}
                          className="flex flex-col items-center"
                        >
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-2">
                            <Image
                              src={`/logos/${tech.logo}`}
                              alt={`${tech.name} logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tools section with animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 20.5L10.5 3.5M10.5 3.5L6 8.5M10.5 3.5L15 8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h3 className="font-semibold text-lg">Tools</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {techStack.tools.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * index + 0.5, type: "spring", stiffness: 200 }}
                          className="flex flex-col items-center"
                        >
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-2">
                            <Image
                              src={`/logos/${tech.logo}`}
                              alt={`${tech.name} logo`}
                              width={40}
                              height={40}
                            />
                          </div>
                          <span className="text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutComponent;