"use client"

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from "next-themes";

const ExperienceComponent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "Singtel",
      location: "Singapore",
      description: [
        "Designed and deployed a Python-based AI evaluation service using Flask which evaluates automated voice-bot call transcripts against 9 key LLM evaluation metrics",
        "Leveraged various evaluation libraries to enable real-time scoring of over 5000 calls per month",
        "Collaborated with cross-functional teams to refine requirements and metrics"
      ],
      date: "May 2025 - Aug 2025",
      icon: <div className="flex items-center justify-center w-full h-full rounded-full shadow-inner p-1">
              <Image 
                src="/logos/singtel.png" 
                alt="Singtel Logo" 
                width={50} 
                height={50} 
                className="relative z-10 transition-all duration-500"
              />
            </div>,
      iconBackground: "#fff",
    },
    {
      title: "Software Engineering Intern",
      company: "Qumo AI",
      location: "Singapore",
      description: [
        "Designing, developing, and maintaining AI-driven conversational forms",
        "Implemented responsive, user-friendly interfaces and dynamic features with Tailwind CSS and RadixUI",
        "Leading end-to-end feature development from ideation to deployment, including leveraging OpenAI technologies"
      ],
      date: "Jan 2025 - May 2025",
      icon: <div className="flex items-center justify-center w-full h-full rounded-full shadow-inner p-1">
              <Image 
                src="/logos/qumo.jpeg" 
                alt="Qumo AI Logo" 
                width={50} 
                height={50} 
                className="relative z-10 transition-all duration-500 rounded-full"
              />
            </div>,
      iconBackground: "#fff",
    },
    {
      title: "Research Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Co-author of a research paper targeted for publication in 2025 with a NUS Business Professor",
        "Conducted comprehensive research, data cleaning and analysis to identify key regulatory impacts on Indian cement emissions",
        "Applied advanced synthetic control methods using Stata and R/RStudio to create models tracking and predicting emissions trends"
      ],
      date: "Jun 2024 - Jul 2025",
      icon: <div className="flex items-center justify-center w-full h-full rounded-full shadow-inner p-1">
              <Image 
                src="/logos/nus.png" 
                alt="NUS Logo" 
                width={30} 
                height={30} 
                className="relative z-10 transition-all duration-500"
              />
            </div>,
      iconBackground: "#fff",
    },
    {
      title: "Business Analytics Teaching Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Taught practical tutorials and facilitated coaching sessions for 30 students",
        "Enhanced proficiency in R by applying business/data analytics techniques to real-life datasets",
        "Achieved 15% improvements in average student grades with a teaching rating of 4.75/5 through personalised tutoring"
      ],
      date: "Aug 2024 - May 2025",
      icon: <div className="flex items-center justify-center w-full h-full rounded-full shadow-inner p-1">
              <Image 
                src="/logos/nus.png" 
                alt="NUS Logo" 
                width={30} 
                height={30} 
                className="relative z-10 transition-all duration-500"
              />
            </div>,
      iconBackground: "#fff",
    },
  ];

  return (
    <div id="experience" className="py-24">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          Experience
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-5 origin-left"
        ></motion.div>
      </motion.div>
      
      <style jsx global>{`
        .vertical-timeline::before {
          background: ${isDark ? '#4b5563' : '#d1d5db'};
          width: 3px;
        }
        
        .vertical-timeline-element-icon {
          box-shadow: 0 0 0 4px ${isDark ? '#1f2937' : 'white'}, 
                      inset 0 2px 0 rgba(0, 0, 0, 0.08), 
                      0 3px 0 4px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      
      <VerticalTimeline lineColor={isDark ? "#4b5563" : "#d1d5db"}>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: isDark ? '#1f2937' : 'rgb(255, 255, 255)',
              color: isDark ? '#f3f4f6' : '#1f2937',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              padding: '2rem',
              borderRadius: '0.75rem',
            }}
            contentArrowStyle={{ 
              borderRight: `7px solid ${isDark ? '#1f2937' : 'rgb(255, 255, 255)'}` 
            }}
            date={experience.date}
            dateClassName={isDark ? "text-gray-300" : "text-gray-700"}
            iconStyle={{ 
              background: isDark ? '#374151' : '#ffffff', 
              color: isDark ? '#f3f4f6' : '#1f2937',
              boxShadow: `0 0 0 4px ${isDark ? '#1f2937' : 'white'}`
            }}
            icon={experience.icon}
          >
            <div className={isDark ? "text-gray-100" : "text-gray-900"}>
              <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
              <h4 className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-600"} mb-2`}>
                {experience.company} • {experience.location}
              </h4>
              <ul className="list-disc pl-4 space-y-1">
                {experience.description.map((item, idx) => (
                  <li key={idx} className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceComponent;