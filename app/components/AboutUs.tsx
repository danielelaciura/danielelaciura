"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "Our Mission",
    description: "Committed to creating templates that enhance user interaction and increase",
  },
  {
    title: "Our Vision",
    description: "Empower everyone to build effective websites affordably",
  },
  {
    title: "Our Focus",
    description: "is centered to meet the specific needs of our clients, driving success",
  },
];

export default function AboutUs() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            About Us
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
            We are a passionate and dedicated team of design professionals
          </h2>
          <p className="text-xl text-white/70">
            Experience Our Service Through the Eyes of Our Clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-white/70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
