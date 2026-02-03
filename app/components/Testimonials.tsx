"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Minem",
    quote: "The team transformed my ideas into stunning functional designs. A great effort to overall end user experience.",
  },
  {
    name: "Lepard",
    quote: "Collaborating with Jody was effortless. They maintained clear communication, addressing every detail and surpassing my expectations.",
  },
  {
    name: "Desya",
    quote: "Their expertise led to a well-informed process, resulting in a beautiful and functional final product.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-end mb-6">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
            Testimonial
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
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-white/70">
            Experience Our Service Through the Eyes of Our Clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{testimonial.name}</h3>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">{testimonial.quote}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
