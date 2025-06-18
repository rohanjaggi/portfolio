"use client"

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="flex justify-center items-center mt-8 py-4 px-5 sm:px-10">
      <div className="fixed z-50">
        <div className="hidden sm:block">
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
              
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`px-3 py-1.5 rounded-md text-md font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/40' 
                        : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                    }`}
                  >
                    {item.label}
                  </a>
                </NavigationMenuItem>
              ))}
              
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

        <div className="sm:hidden">
          <div className="flex items-center justify-between gap-2 rounded-md px-4 py-2 
            bg-white/80 dark:bg-gray-800/80 
            shadow-sm dark:shadow-gray-700
            border border-gray-200 dark:border-gray-700
            backdrop-blur-sm">
            
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="px-2 py-1.5 text-lg font-bold text-rose-900 dark:text-rose-300"
            >
              Rohan Jaggi
            </a>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                disabled={isAnimating}
                whileTap={{ scale: 0.9 }}
                className="flex justify-center items-center w-9 h-9 rounded-md 
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
                    <Moon className="h-4 w-4 text-blue-400" />
                  ) : (
                    <Sun className="h-4 w-4 text-amber-500" />
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
                    <Sun className="h-4 w-4 text-amber-500" />
                  ) : (
                    <Moon className="h-4 w-4 text-blue-400" />
                  )}
                </motion.div>
              </motion.button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex justify-center items-center w-9 h-9 rounded-md 
                  bg-white dark:bg-gray-800
                  shadow-sm dark:shadow-gray-700
                  border border-gray-200 dark:border-gray-700
                  transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-rose-900 dark:text-rose-300" />
                ) : (
                  <Menu className="h-5 w-5 text-rose-900 dark:text-rose-300" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 mt-2 rounded-md overflow-hidden
                  bg-white/90 dark:bg-gray-800/90 
                  shadow-md dark:shadow-gray-700
                  border border-gray-200 dark:border-gray-700
                  backdrop-blur-sm
                  origin-top"
              >
                <div className="py-2">
                  {navItems.map((item) => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block px-5 py-3 text-md font-medium transition-all ${
                        activeSection === item.id
                          ? 'text-rose-900 dark:text-rose-300 bg-rose-100/60 dark:bg-rose-900/20' 
                          : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100/60 dark:hover:bg-gray-700/30'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;