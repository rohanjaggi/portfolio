"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {

  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex justify-between items-center mt-8 py-4 px-10 z-50">
      <div className="w-1/4 flex justify-start items-center">
        <a href="/" className="font-bold text-2xl">
          Rohan Jaggi
        </a>
      </div>
      <div className='flex-1 flex justify-center'>
        <div className='hidden md:flex items-center justify-center gap-8 rounded-full px-12 py-3 
          bg-white dark:bg-gray-800 
          shadow-sm dark:shadow-gray-700
          border border-gray-200 dark:border-gray-700'>
          <a href="/top" className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">Home</a>
          <a href="/about" className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">About Me</a>
          <a href="/experience" className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">Experience</a>
          <a href="/projects" className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">Projects</a>
          <a href="/contact" className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">Contact Me</a>
        </div>
      </div>
      <div className="w-1/4 flex justify-end items-center">
        <Button 
          variant="outline" 
          className="rounded-full p-6  bg-white dark:bg-gray-800 
          shadow-sm dark:shadow-gray-700
          border border-gray-200 dark:border-gray-700"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;