"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Promaily website", category: "AI" },
  { title: "Al Sans Website Templates", category: "Sans" },
  { title: "bk.cni website", category: "AI" },
  { title: "AI Integration Apps", category: "Sans" },
  { title: "AI Integration Apps", category: "Sans" },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            Portfolio
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Latest and Greatest Project
          </h2>
          <p className="text-xl text-white/70">
            I design digital solutions that resonate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-white/10 backdrop-blur-sm"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                <span className="text-white/60 text-sm">{project.category}</span>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
