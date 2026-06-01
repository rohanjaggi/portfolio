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
      className="px-6 sm:px-12 lg:px-20 xl:px-32 py-16 sm:py-24 lg:py-40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 sm:mb-16 text-center">
          <motion.h2
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { clipPath: "inset(0% 0 -30% 0)" } : { clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-brass-metallic"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Contact
          </motion.h2>
        </div>

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
              whileHover={{ y: -5, boxShadow: "0 16px 48px -8px rgba(0,0,0,0.3)" }}
              className="group flex items-center justify-between gap-4 sm:gap-10 p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[oklch(0.75_0.12_75/0.3)] transition-all duration-300 w-full sm:min-w-[300px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/[0.04] text-[oklch(0.55_0.01_250)] group-hover:bg-[oklch(0.75_0.12_75/0.1)] group-hover:text-[oklch(0.75_0.12_75)] transition-all duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-[oklch(0.45_0.01_250)] mb-0.5 tracking-wide">
                    {method.label}
                  </p>
                  <p className="font-sans font-medium text-sm text-[oklch(0.85_0.01_80)]">
                    {method.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[oklch(0.35_0.01_250)] group-hover:text-[oklch(0.75_0.12_75)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
