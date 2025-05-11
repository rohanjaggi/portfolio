"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  return (
    <nav className="flex justify-center items-center mt-8 py-4 px-10">
      <div className="fixed z-50">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center gap-4 rounded-md px-5 py-1.5 
            bg-white/80 dark:bg-gray-800/80 
            shadow-sm dark:shadow-gray-700
            border border-gray-200 dark:border-gray-700
            backdrop-blur-sm">
            <NavigationMenuItem className="mr-2">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold text-rose-900 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-200 transition-colors">
                  Rohan Jaggi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>
            
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-md font-bold text-gray-600 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  About Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/experience" legacyBehavior passHref>
                <NavigationMenuLink className="text-md font-bold text-gray-600 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className="text-md font-bold text-gray-600 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="text-md font-bold text-gray-600 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Contact
                </NavigationMenuLink>
              </Link>
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