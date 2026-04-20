"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-cyan-500 text-xs md:text-sm font-medium tracking-[0.2em] mb-4 uppercase">
          Full Stack Developer
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-8 uppercase tracking-wide">
          Kaung Myat Tun
        </h1>
        <p className="max-w-2xl text-slate-300 text-base md:text-lg lg:text-xl font-light leading-relaxed">
          Engineering high-performance web applications and scalable APIs.
          Passionate about clean code, innovative architectures, and seamless
          digital experiences.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-8 md:left-16 text-xs tracking-[0.2em] uppercase text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
