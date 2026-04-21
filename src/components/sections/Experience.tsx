"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 border-t border-slate-800/50">
      <div className="flex items-center gap-6 mb-12">
        <div className="w-12 h-px bg-slate-700"></div>
        <h2 className="text-sm tracking-[0.2em] uppercase text-slate-300 font-medium">
          Experience
        </h2>
      </div>

      <div className="flex flex-col gap-16">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-slate-800/50 pb-16 last:border-0 last:pb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="md:col-span-1">
              <span className="text-xs text-slate-300 tracking-widest uppercase mt-1 block">
                {exp.period}
              </span>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-lg md:text-xl font-medium tracking-wide uppercase mb-2">
                {exp.role}
              </h3>
              <h4 className="text-xs md:text-sm text-cyan-500 tracking-widest uppercase mb-6">
                {exp.company}
              </h4>
              <p className="text-slate-300 font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
