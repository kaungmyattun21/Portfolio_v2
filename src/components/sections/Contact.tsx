"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 border-t border-slate-800/50 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-xs md:text-sm tracking-[0.2em] text-cyan-500 font-medium mb-6 uppercase">
          What&apos;s Next?
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 uppercase tracking-widest">Get In Touch</h3>
        <p className="text-slate-400 font-light leading-relaxed mb-12 text-base md:text-lg">
          Whether you have a question, a project proposal, or just want to say hi, 
          I&apos;ll try my best to get back to you! My inbox is always open. Let&apos;s build the future together.
        </p>
        
        <a 
          href="mailto:kaungmyattun212000@gmail.com" 
          className="inline-block bg-transparent border border-cyan-500/50 text-cyan-400 py-4 px-10 rounded hover:bg-cyan-900/20 hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300 cursor-none tracking-[0.2em] uppercase text-sm font-medium"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
