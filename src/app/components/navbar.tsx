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
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-md p-2 bg-white dark:bg-gray-800 
                  shadow-sm dark:shadow-gray-700
                  border border-gray-200 dark:border-gray-700"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Navbar;