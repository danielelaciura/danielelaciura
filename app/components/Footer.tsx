"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm">
            All rights reserved ©2025
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Changelog
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              License
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
