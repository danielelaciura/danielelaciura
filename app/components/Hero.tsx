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
    <section className="min-h-screen flex items-center justify-center px-1">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center relative z-0">

          {/* <div className="w-70 h-70 bg-[#E7E7E7] absolute top-[-10] left-60">
            <div className="w-50 h-50 bg-[#A6E7AE] absolute top-30 left-40 opacity-30">
            </div>
          </div> */}

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="md:text-2xl mt-10 m-6 leading-tight text-black z-10"
          >
            Crafting innovative {" "}
            <span className="bg-indigo-500 bg-gradient-to-r to-[#ff4a00] from-[#2962b2] bg-clip-text text-transparent">
            digital products
            </span>{" "}
            <br />as a Product Leader
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            variants={itemVariants}
            className="text-lg mb-8 max-w-2xl z-10"
          >
            Hello, I’m Daniele. I design and build elegant, timeless digital experiences. Welcome.
          </motion.p>

          {/* Get In Touch Button */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >

          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
