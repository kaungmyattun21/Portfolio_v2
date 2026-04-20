"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import projectsData from "@/data/projects.json";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && project.images?.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 1500);
    } else if (!isHovered) {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images]);

  return (
    <motion.div
      className={`flex flex-col ${index % 2 !== 0 ? "md:mt-32" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className="aspect-video relative mb-6 rounded-lg overflow-hidden glass-panel group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {project.images &&
          project.images.length > 0 &&
          project.images[currentImageIndex] ? (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative"
            >
              <Image
                src={project.images[currentImageIndex] || "/next.svg"}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority={index === 0}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-slate-800/50 flex flex-col items-center justify-center text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-4 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Image Placeholder</span>
            </div>
          )}
        </AnimatePresence>

        {/* Carousel Indicators */}
        {project.images?.length > 1 && isHovered && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_: any, idx: number) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  idx === currentImageIndex ? "bg-cyan-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-light uppercase tracking-wide">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group/link flex items-center gap-2 px-3 py-1.5 border border-cyan-500/20 rounded hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 cursor-none"
            aria-label="View Github Repository"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-500/80">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-3.5 h-3.5 text-cyan-500/80 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        )}
        {project.isPrivate && (
          <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-700/30 rounded text-[10px] uppercase tracking-widest text-slate-500 font-medium whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Private
          </div>
        )}
      </div>

      <p className="text-slate-400 font-light leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="text-[10px] uppercase tracking-wider border border-slate-700/50 px-3 py-1 rounded-sm text-slate-400 bg-slate-800/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Works() {
  return (
    <section
      id="work"
      className="py-24 px-8 md:px-16 border-t border-slate-800/50"
    >
      <div className="flex items-center gap-6 mb-16">
        <div className="w-12 h-px bg-slate-700"></div>
        <h2 className="text-sm tracking-[0.2em] uppercase text-slate-400 font-medium">
          Selected Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
