"use client"

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactComponent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Parallax on the large heading
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -14 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="font-sans text-rose-800 dark:text-rose-400 text-xs tracking-[0.28em] uppercase mb-6"
        >
          04 /
        </motion.p>

        {/* Large headline with parallax */}
        <motion.div style={{ y: headingY }} className="mb-16 lg:mb-24">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -50% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-stone-900 dark:text-stone-50 leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Let&apos;s
          </motion.h2>
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -60% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold italic text-rose-800 dark:text-rose-400 leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            connect.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-sans text-stone-500 dark:text-stone-400 text-base mt-6 max-w-md leading-relaxed"
          >
            Whether it&apos;s a project, opportunity, or just a conversation — I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-4">
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
