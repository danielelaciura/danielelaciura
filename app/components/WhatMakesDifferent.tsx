"use client";

import { motion } from "framer-motion";

export default function WhatMakesDifferent() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            Experiences
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What makes me different?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            I craft digital experiences that align with your brand and goals, blending creativity with functionality.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {["Agency", "Trustee", "Studio"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
