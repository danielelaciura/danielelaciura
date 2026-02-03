"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white"
        >
          Camelo
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
            Project
          </Link>
          <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Testimonial
          </Link>
          <Link href="#faq" className="text-white/80 hover:text-white transition-colors">
            Faq
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all"
        >
          Contact Us
        </motion.button>
      </nav>
    </motion.header>
  );
}
