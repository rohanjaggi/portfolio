"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Building2, GraduationCap } from 'lucide-react';

const ExperienceComponent = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "DBS Bank",
      location: "Singapore",
      description: [
        "Developed full-stack applications using React and Spring Boot",
        "Implemented CI/CD pipelines using Jenkins",
        "Collaborated with cross-functional teams"
      ],
      date: "May 2024 - Aug 2024",
      icon: <Building2 className="w-5 h-5" />,
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
      date: "Jan 2024 - Apr 2024",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBackground: "#fff",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: 'rgb(255, 255, 255)',
              color: '#1f2937',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              padding: '2rem',
              borderRadius: '0.75rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBackground, color: '#1f2937' }}
            icon={experience.icon}
          >
            <div className="dark:text-gray-900">
              <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
              <h4 className="font-semibold text-gray-600 mb-2">
                {experience.company} • {experience.location}
              </h4>
              <ul className="list-disc pl-4 space-y-1">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">
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