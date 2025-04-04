"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex justify-between items-center mt-8 py-4 px-10">
      <div className="w-1/4 flex justify-start items-center">
        <Link href="/" className="font-bold text-2xl">
          Rohan Jaggi
        </Link>
      </div>

      <div className="fixed left-1/2 -translate-x-1/2 z-50">
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center justify-center gap-4 rounded-full px-5 py-3 
            bg-white/80 dark:bg-gray-800/80 
            shadow-sm dark:shadow-gray-700
            border border-gray-200 dark:border-gray-700
            backdrop-blur-sm">
            <NavigationMenuItem>
              <Link href="/top" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  About Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/experience" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Experience
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="text-lg font-bold hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-colors">
                  Contact Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="w-1/4 flex justify-end items-center">
        <Button 
          variant="outline" 
          className="rounded-full p-6 py-7 bg-white dark:bg-gray-800 
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