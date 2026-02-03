"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  "How long does it take to build a website?",
  "Do you offer website maintenance?",
  "How much does it cost to build a website?",
  "What is the difference between web design and web development?",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            FAQ
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
            Your Questions, Our Answers
          </h2>
          <p className="text-xl text-white/70">
            Got questions? Feel free to reach out to our incredible support team, 7 days a week.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{faq}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/60 text-2xl font-light"
                >
                  +
                </motion.div>
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-white/70"
                >
                  <p>This is a placeholder answer for the FAQ item. You can customize this content as needed.</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
