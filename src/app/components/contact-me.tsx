"use client"

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactComponent = () => {
  // You can remove the unused form state and handler
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
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-rose-900 dark:bg-rose-300 rounded mb-5"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
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