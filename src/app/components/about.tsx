"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
import { Code2, Server, BrainCircuit, Wrench } from "lucide-react";

import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiMysql,
  SiSupabase,
  SiFastapi,
  SiFlask,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiTensorflow,
  SiOpenai,
  SiGit,
  SiDocker,
} from '@icons-pack/react-simple-icons';

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

const TechIcon = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="flex flex-col items-center"
    whileHover={{ y: -2 }}
  >
    <div className="bg-gray-50 dark:bg-gray-200 p-3 rounded-lg mb-2 flex items-center justify-center h-[60px] w-[60px] shadow-sm">
      {icon}
    </div>
    <span className="text-sm text-center">{name}</span>
  </motion.div>
);

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
      { name: "React", icon: <SiReact size={30} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} color="#000000" /> },
      { name: "Vue.js", icon: <SiVuedotjs size={30} color="#4FC08D" /> },
      { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#06B6D4" /> },
      { name: "HTML/CSS", icon: <SiHtml5 size={30} color="#E34F26" /> }
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs size={30} color="#339933" /> },
      { name: "Python", icon: <SiPython size={30} color="#3776AB" /> },
      { name: "Java", icon: <SiOpenjdk size={30} color="#007396" /> },
      { name: "MySQL", icon: <SiMysql size={30} color="#4479A1" /> },
      { name: "Supabase", icon: <SiSupabase size={30} color="#3ECF8E" /> },
      { name: "FastAPI", icon: <SiFastapi size={30} color="#009688" /> },
      { name: "Flask", icon: <SiFlask size={30} color="#000000" /> }
    ],
    dataScience: [
      { name: "Jupyter", icon: <SiJupyter size={30} color="#F37626" /> },
      { name: "Pandas", icon: <SiPandas size={30} color="#150458" /> },
      { name: "NumPy", icon: <SiNumpy size={30} color="#013243" /> },
      { name: "Matplotlib", icon: <SiPlotly size={30} color="#3F4F75" /> },
      { name: "TensorFlow", icon: <SiTensorflow size={30} color="#FF6F00" /> },
      { name: "OpenAI API", icon: <SiOpenai size={30} color="#412991" /> }
    ],
    tools: [
      { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
      { name: "Docker", icon: <SiDocker size={30} color="#2496ED" /> },
      { 
      name: "VS Code", 
      icon: (
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/logos/vscode.svg"
            alt="VS Code logo"
            width={30}
            height={30}
          />
        </div>
      ) 
    },
    { 
      name: "Microsoft Azure", 
      icon: (
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/logos/azure.png"
            alt="Microsoft Azure logo"
            width={30}
            height={30}
          />
        </div>
      ) 
    }
    ]
  };

  return (
    <div id="about" className="py-12 px-4 sm:px-6 md:px-8">
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
              <DialogContent className="max-w-[85vw] sm:max-w-5xl max-h-[95vh] overflow-y-auto px-10 pt-8">
                <DialogHeader className="sticky top-0 backdrop-blur-md bg-white/90 dark:bg-gray-950/90 pb-2 z-10 pt-0">
                  <DialogTitle className="text-2xl font-bold text-center mb-1">
                    Tech Stack
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Technologies I work with
                  </DialogDescription>
                  <div className="w-16 h-1 bg-rose-900 dark:bg-rose-300 rounded mx-auto mb-2"></div>
                </DialogHeader>

                <div className="grid gap-6 py-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-rose-900 dark:text-rose-300" />
                      <h3 className="font-semibold text-lg">Frontend</h3>
                    </div>
                    <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
                      {techStack.frontend.map((tech, index) => (
                        <TechIcon 
                          key={index} 
                          name={tech.name} 
                          icon={tech.icon} 
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-5 h-5 text-rose-900 dark:text-rose-300" />
                      <h3 className="font-semibold text-lg">Backend</h3>
                    </div>
                    <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
                      {techStack.backend.map((tech, index) => (
                        <TechIcon 
                          key={index} 
                          name={tech.name} 
                          icon={tech.icon} 
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BrainCircuit className="w-5 h-5 text-rose-900 dark:text-rose-300" />
                      <h3 className="font-semibold text-lg">Data Science</h3>
                    </div>
                    <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
                      {techStack.dataScience.map((tech, index) => (
                        <TechIcon 
                          key={index} 
                          name={tech.name} 
                          icon={tech.icon} 
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="w-5 h-5 text-rose-900 dark:text-rose-300" />
                      <h3 className="font-semibold text-lg">Tools</h3>
                    </div>
                    <div className="grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
                      {techStack.tools.map((tech, index) => (
                        <TechIcon 
                          key={index} 
                          name={tech.name} 
                          icon={tech.icon} 
                        />
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