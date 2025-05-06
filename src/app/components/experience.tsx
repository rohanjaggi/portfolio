"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Building2, GraduationCap } from 'lucide-react';
import { useTheme } from "next-themes";

const ExperienceComponent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  
  const experiences = [
    {
      title: "Digital AI Software Engineering Intern",
      company: "Singtel",
      location: "Singapore",
      description: [
        "To be continued..."
      ],
      date: "May 2025 - Aug 2025",
      icon: <Building2 className="w-5 h-5" />,
      iconBackground: "#fff",
    },
    {
      title: "Software Engineering Intern",
      company: "Qumo AI",
      location: "Singapore",
      description: [
        "Conducted research on machine learning algorithms",
        "Published paper in international conference",
        "Developed predictive models using Python"
      ],
      date: "Jan 2025 - May 2025",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBackground: "#fff",
    },
    {
      title: "Research Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Conducted research on machine learning algorithms",
        "Published paper in international conference",
        "Developed predictive models using Python"
      ],
      date: "Jun 2024 - Jul 2025",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBackground: "#fff",
    },
    {
      title: "Teaching Assistant",
      company: "National University of Singapore",
      location: "Singapore",
      description: [
        "Conducted research on machine learning algorithms",
        "Published paper in international conference",
        "Developed predictive models using Python"
      ],
      date: "Aug 2024 - May 2025",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBackground: "#fff",
    },
  ];

  return (
    <div className="py-24">
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