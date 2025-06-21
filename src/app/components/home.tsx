"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownIcon, Github, Linkedin, Twitter } from "lucide-react";

const HomeComponent = () => {
  const [occupation, setOccupation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const occupations = ["ML Engineer", "Data Scientist"];
  const [delta, setDelta] = useState(150);
  const [isPaused, setIsPaused] = useState(false);
  const pauseDuration = 2000; 
  
  useEffect(() => {
    if (isPaused) return;
    
    let ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => { clearTimeout(ticker) };
  }, [occupation, isDeleting, isPaused]);
  
  const tick = () => {
    let i = loopNum % occupations.length;
    let fullText = occupations[i];
    
    if (isPaused) {
      return;
    }
    
    let updatedText = isDeleting 
      ? fullText.substring(0, occupation.length - 1) 
      : fullText.substring(0, occupation.length + 1);

    setOccupation(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsPaused(true);
      
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
        setDelta(200);
      }, pauseDuration);
      
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <div id="home" className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-8 mb-16">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.2 
          }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <motion.div 
            className="absolute inset-[-20px] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <svg className="w-full h-full" viewBox="0 0 340 340">
              <motion.circle 
                cx="170" 
                cy="170" 
                r="160" 
                fill="none" 
                stroke="rgba(100, 100, 100, 0.15)" 
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                className="dark:stroke-gray-400/15"
              />
              <motion.circle 
                cx="170" 
                cy="170" 
                r="155" 
                fill="none" 
                stroke="rgba(120, 120, 120, 0.2)" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
                className="dark:stroke-gray-400/20"
              />
            </svg>
          </motion.div>

          <motion.div 
            className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ 
              duration: 5, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-full overflow-hidden border-[3px] border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <Image 
              src="/profile-pic.png" 
              alt="Profile Picture" 
              width={300} 
              height={300} 
              className="rounded-full relative z-10 grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-4">
          <motion.h2 
            className="text-2xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-5xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            Rohan Jaggi
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="h-8" 
          >
            <span className="text-2xl text-gray-700 dark:text-gray-300">Aspiring </span>
            <span className="text-2xl font-semibold text-rose-800 dark:text-rose-400 relative">
              {occupation}
            </span>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { 
              name: 'LinkedIn', 
              icon: <Linkedin className="h-5 w-5 transition-transform duration-300" />, 
              url: 'https://linkedin.com/in/rohan-jaggi',
              bgColor: "bg-[#0077B5]",
              textColor: "text-white",
              hoverColor: "hover:bg-[#006399]"
            },
            { 
              name: 'GitHub', 
              icon: <Github className="h-5 w-5 transition-transform duration-300" />, 
              url: 'https://github.com/rohanjaggi',
              bgColor: "bg-[#24292e]",
              textColor: "text-white",
              hoverColor: "hover:bg-[#1a1f24]"
            }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${social.bgColor} ${social.textColor} ${social.hoverColor} px-5 py-2 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/20 flex items-center space-x-2 group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15 
              }}
              whileHover={{ 
                y: -3,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }
              }}
              whileTap={{ 
                scale: 0.97,
                transition: { 
                  type: "spring", 
                  stiffness: 500,
                  damping: 10 
                }
              }}
            >
              <span className="group-hover:scale-110 inline-block transition-transform duration-300">
                {social.icon}
              </span>
              <span className="font-medium transition-transform duration-300">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeComponent;