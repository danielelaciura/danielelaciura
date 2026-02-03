"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center text-white text-4xl">
                  J
                </div>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/50 to-yellow-500/50 blur-xl"
            />
          </motion.div>

          {/* Avail For Hire Tag */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm">
              Avail For Hire
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting innovative digital{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              experiences
            </span>{" "}
            as a Web Designer
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 mb-8 max-w-2xl"
          >
            Hey, I&apos;m Jody, welcome to my world. I love building beautiful, timeless websites & digital experiences with Webflow.
          </motion.p>

          {/* Get In Touch Button */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Skill Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {["Webflow", "Figma", "Sketch"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl"
          >
            {[
              { title: "Web Developer", description: "over 7 years of expertise in web development" },
              { title: "Graphic Designer", description: "over 7 years of expertise in web development" },
              { title: "UX Designer", description: "over 7 years of expertise in web development" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            {["Tech", "Designer", "Startup"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-white/80 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
