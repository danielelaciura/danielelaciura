"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "My Mission",
    description: "I craft digital experiences that align with your brand and goals, blending creativity with functionality.",
  },
  {
    title: "My Vision",
    description: "Committed to creating digital solutions that enhance user interaction and increase conversion",
  },
  {
    title: "My Focus",
    description: "Is centered to meet your specific needs, driving success",
  },
];


export default function WhatMakesDifferent() {
  return (
    <section id="what" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What makes me different?
          </h2>
 
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl  p-1 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-black mb-3">{card.title}</h3>
              <p className="text-black/70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
