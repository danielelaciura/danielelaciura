"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    icon: "⟡",
    title: "My Mission",
    description: "I craft digital experiences that align with your brand and goals, blending creativity with functionality.",
  },
  {
    icon: "⟡",
    title: "My Vision",
    description: "Committed to creating digital solutions that enhance user interaction and increase conversion.",
  },
  {
    icon: "⟡",
    title: "My Focus",
    description: "Is centered to meet your specific needs, driving success to thrive your business.",
  },
];

export default function WhatMakesDifferent() {
  return (
    <section id="what" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl mt-10 md:text-5xl font-bold text-black mb-6">
            What makes me different?
          </h2>

          <div className="bg-white relative p-10 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-10">
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
                <span className="text-3xl mb-4 text-white bg-[#ff4a00] rounded-xl w-auto px-2">{card.icon}</span>
                <h3 className="text-xl mt-4 font-semibold text-black mb-3">{card.title}</h3>
                <p className="text-black leading-relaxed text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          </div>
        </motion.div>
      </div>

    </section>
  );
}
