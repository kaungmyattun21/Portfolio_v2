"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#hero");
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020617]/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6 md:px-16 w-full">
        <div className="text-xl md:text-2xl font-bold tracking-[0.2em] cursor-none">
          <Link
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            className="hover:text-cyan-400 transition-colors"
          >
            KMT
          </Link>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium">
          <Link
            href="#info"
            onClick={(e) => handleScroll(e, "info")}
            className="hover:text-cyan-400 transition-colors cursor-none py-2"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={(e) => handleScroll(e, "experience")}
            className="hover:text-cyan-400 transition-colors cursor-none py-2"
          >
            Experience
          </Link>
          <Link
            href="#work"
            onClick={(e) => handleScroll(e, "work")}
            className="hover:text-cyan-400 transition-colors cursor-none py-2"
          >
            Work
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-cyan-400 transition-colors cursor-none py-2"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex gap-4 text-[10px] tracking-widest uppercase font-medium">
          <Link
            href="#experience"
            onClick={(e) => handleScroll(e, "experience")}
            className="hover:text-cyan-400 transition-colors cursor-none"
          >
            Exp
          </Link>
          <Link
            href="#work"
            onClick={(e) => handleScroll(e, "work")}
            className="hover:text-cyan-400 transition-colors cursor-none"
          >
            Work
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-cyan-400 transition-colors cursor-none"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
