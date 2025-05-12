"use client"

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 }); 
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) sectionObserver.observe(element);
    });
    
    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) sectionObserver.unobserve(element);
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="flex justify-center items-center mt-8 py-4 px-10">
      <div className="fixed z-50">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center gap-2 rounded-md px-5 py-1.5 
            bg-white/80 dark:bg-gray-800/80 
            shadow-sm dark:shadow-gray-700
            border border-gray-200 dark:border-gray-700
            backdrop-blur-sm">
            <NavigationMenuItem className="mr-2">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={`px-3 py-1.5 rounded-md text-lg font-bold text-rose-900 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-200 transition-colors ${
                  activeSection === 'home' 
                    ? 'bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600' 
                    : 'hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                }`}
              >
                Rohan Jaggi
              </a>
            </NavigationMenuItem>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>
            
            <NavigationMenuItem>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`px-3 py-1.5 rounded-md text-md font-medium transition-all ${
                  activeSection === 'about' 
                    ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40' 
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                }`}
              >
                About Me
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#experience" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experience');
                }}
                className={`px-3 py-1.5 rounded-md text-md font-medium transition-all ${
                  activeSection === 'experience' 
                    ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40' 
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                }`}
              >
                Experience
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className={`px-3 py-1.5 rounded-md text-md font-medium transition-all ${
                  activeSection === 'projects' 
                    ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40' 
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                }`}
              >
                Projects
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`px-3 py-1.5 rounded-md text-md font-medium transition-all ${
                  activeSection === 'contact' 
                    ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40' 
                    : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                }`}
              >
                Contact
              </a>
            </NavigationMenuItem>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>
            
            <NavigationMenuItem className="ml-2">
              <motion.button
                onClick={toggleTheme}
                disabled={isAnimating}
                whileTap={{ scale: 0.9 }}
                className="flex justify-center items-center w-10 h-10 rounded-md 
                  bg-white dark:bg-gray-800
                  shadow-sm dark:shadow-gray-700
                  border border-gray-200 dark:border-gray-700
                  transition-colors"
              >
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isAnimating ? [0, 90] : 0,
                    scale: isAnimating ? [1, 0] : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {theme === 'dark' ? (
                    <Moon className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Sun className="h-5 w-5 text-amber-500" />
                  )}
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{
                    rotate: isAnimating ? [90, 0] : 90,
                    scale: isAnimating ? [0, 1] : 0,
                  }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="absolute"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-amber-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-blue-400" />
                  )}
                </motion.div>
              </motion.button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Navbar;