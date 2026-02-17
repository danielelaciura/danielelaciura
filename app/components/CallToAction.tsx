"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-r from-amber-700 to-indigo-600">
      <div className="container mx-auto max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Have a dream project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto  text-white">
            Let&apos;s transform your vision into stunning reality. Reach out to us today and start the journey to a remarkable online presence.
          </p>
          <a href="mailto:hello@danielelaciura.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-black bg-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get In Touch
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
