"use client"

import Image from "next/image";
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
  <div className="flex items-center space-x-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
  </div>
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
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-2">
      <Image
        src={`/logos/${logo}`}
        alt={`${school} logo`}
        width={50}
        height={50}
        className="rounded-lg"
      />
    </div>
    <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
      {school}
    </h3>
    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
      {degree}
    </p>
    <div className="w-full max-w-sm bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
      <ul className="list-disc pl-6 space-y-2 text-left text-sm text-gray-600 dark:text-gray-400">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const AboutComponent = () => {
  const [open, setOpen] = useState(false);
  
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
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        About Me
      </h2>
      <div className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-6"></div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/about-pic.png"
            alt="About Me Picture"
            width={400}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="flex-1 w-full md:max-w-lg space-y-6">
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
                      <CCAItem
                        key={index}
                        logo={cca.logo}
                        role={cca.role}
                        organization={cca.organization}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-4">
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
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">Frontend</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {techStack.frontend.map((tech, index) => (
                        <div
                          key={index}
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
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Server className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">Backend</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {techStack.backend.map((tech, index) => (
                        <div
                          key={index}
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
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
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
                        <div
                          key={index}
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;