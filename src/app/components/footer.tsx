"use client"

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 mt-8"
    >
      <p className="mb-2">
        Created by Rohan Jaggi
      </p>
      <p>
        Built with Next.js, Tailwind CSS, and Framer Motion © {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
};

export default Footer;