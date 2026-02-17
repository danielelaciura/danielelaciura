"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black/90">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-black text-sm">
            All rights reserved ©2026
          </p>

          <a href="mailto:hello@danielelaciura.com" className="text-sm text-bold">
             hello@danielelaciura.com
          </a>

        </motion.div>
      </div>
    </footer>
  );
}
