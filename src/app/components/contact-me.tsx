"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "rohan.jaggi@u.nus.edu",
      href: "mailto:rohan.jaggi@u.nus.edu",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "/in/rohan-jaggi",
      href: "https://linkedin.com/in/rohan-jaggi",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 sm:px-12 lg:px-20 xl:px-32 py-24 lg:py-40 relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-100/30 dark:bg-rose-950/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section header — centred */}
        <div className="mb-16 relative text-center">
          <span
            className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif font-bold text-stone-100 dark:text-stone-800/70 select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(6rem, 14vw, 11rem)", zIndex: 0 }}
            aria-hidden
          >
            04
          </span>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-3"
            >
              Say Hello
            </motion.p>
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-stone-900 dark:text-stone-50"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Get In Touch
            </motion.h2>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-sans text-stone-500 dark:text-stone-400 text-base mb-10 text-center leading-relaxed"
        >
          Whether it&apos;s a project, opportunity, or just a conversation — I&apos;d love to hear from you.
        </motion.p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.48 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, boxShadow: "0 16px 48px -8px rgba(0,0,0,0.12)" }}
              className="group flex items-center justify-between gap-10 p-6 rounded-2xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900/30 hover:border-stone-200 dark:hover:border-stone-700 transition-all duration-300 min-w-[300px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/40 group-hover:text-rose-800 dark:group-hover:text-rose-400 transition-all duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="font-sans text-xs text-stone-400 dark:text-stone-500 mb-0.5 tracking-wide">
                    {method.label}
                  </p>
                  <p className="font-sans font-medium text-sm text-stone-800 dark:text-stone-200">
                    {method.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-stone-300 dark:text-stone-600 group-hover:text-rose-800 dark:group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
