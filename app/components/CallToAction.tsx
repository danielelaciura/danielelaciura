"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            Contact Us
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a dream project?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s transform your vision into stunning reality. Reach out to us today and start the journey to a remarkable online presence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
