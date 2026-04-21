"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section
      id="info"
      className="py-24 px-8 md:px-16 border-t border-slate-800/50"
    >
      <div className="flex items-center gap-6 mb-12">
        <div className="w-12 h-px bg-slate-700"></div>
        <h2 className="text-sm tracking-[0.2em] uppercase text-slate-300 font-medium">
          About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="relative w-64 lg:w-64 mx-auto lg:mx-0 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full aspect-square relative rounded-lg overflow-hidden glass-panel"
          >
            <div className="w-full h-full relative">
              <Image
                src="/kmt.jpeg"
                alt="Kaung Myat Tun"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover"
                priority={true}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-base md:text-xl font-light leading-relaxed text-slate-300 space-y-4 md:space-y-6"
        >
          <p>
            I am a Software Engineer focused on System Design and Clean
            Architecture. While I specialize in React.js, Next.js and Express.js
            my passion lies in writing scalable, maintainable code that solves
            complex engineering challenges.
          </p>
          <p>
            With a strong foundation in Clean Code principles, I strive to build
            "future-proof" systems—whether it's architecting multi-tenancy
            environments at work or exploring Event-Driven designs in my
            personal projects. I don't just build features; I engineer quality
            software.
          </p>

          <div className="pt-8">
            <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase text-cyan-500 font-medium mb-6">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-xs md:text-sm tracking-widest uppercase text-slate-300">
              {[
                "TypeScript",
                "React & Next.js",
                "Node & Express",
                "PostgreSQL",
                "MongoDB",
                "Prisma",
                "Tanstack Query",
                "Tailwind CSS",
                "Docker",
              ].map((tech) => (
                <div key={tech} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
