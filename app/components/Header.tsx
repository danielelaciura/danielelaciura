"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto mt-10 navigation-menu">

        <nav className="w-4/5 mx-auto bg-white/60 shadow p-5 backdrop-blur-sm rounded-2xl">

          {/* Top Row */}
          <div className="flex items-center justify-between">

            {/* ALWAYS visible payoff */}
            <div className="w-auto">
              <Link href="#home">
                I’m <span className="font-semibold">Daniele La Ciura.</span> <br />
                A Digital PM, Leader and Consultant
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#what-i-do" className="hover:text-white transition-colors">
                What I do
              </Link>
              <Link href="#about-me" className="hover:text-white transition-colors">
                About me
              </Link>
              <Link href="#what" className="hover:text-white transition-colors">
                What makes me different
              </Link>
              <Link
                href="#contact"
                className="hover:text-white transition-colors border px-2 py-2 rounded-xl"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex flex-col gap-4 mt-4 lg:hidden">
              <Link href="#what-i-do">What I do</Link>
              <Link href="#about-me">About me</Link>
              <Link href="#what">What makes me different</Link>
              <Link
                href="#contact"
                className="border px-2 py-2 rounded-xl w-fit"
              >
                Get in touch
              </Link>
            </div>
          )}

        </nav>
      </div>

      {/* <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white"
        >
          Hi
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="hover:text-white transition-colors">
            Home 
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            About me
          </Link>
          <Link href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                What makes me different
          </Link>

        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 text-black font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all"
        >
          Contact Me
        </motion.button>
      </nav> */}
    </motion.header>
  );
}
