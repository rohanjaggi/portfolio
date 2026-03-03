"use client"

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 xl:px-32 py-8 border-t border-stone-100 dark:border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-serif font-bold text-rose-800 dark:text-rose-400 text-sm">
          Rohan Jaggi
        </span>
        <p className="font-sans text-xs text-stone-400 dark:text-stone-600">
          Built with Next.js, Tailwind CSS & Framer Motion &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
