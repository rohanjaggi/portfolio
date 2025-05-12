"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactComponent = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  
  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10 text-rose-900 dark:text-rose-300" />,
      title: "Email",
      value: "rohan.jaggi@u.nus.edu",
      link: "mailto:rohan.jaggi@u.nus.edu",
    },
    {
      icon: <Linkedin className="h-10 w-10 text-[#0077B5]" />,
      title: "LinkedIn",
      value: "Rohan Jaggi",
      link: "https://linkedin.com/in/rohan-jaggi",
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
    hidden: { y: 20, opacity: 0 },
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
    <div id="contact" className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-5 origin-left"
        ></motion.div>
      </motion.div>

      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pb-5 pt-0">
                <a 
                  href={method.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-900 dark:text-rose-300 hover:text-rose-700 dark:hover:text-rose-300 font-medium text-lg flex items-center group"
                >
                  {method.value}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactComponent;