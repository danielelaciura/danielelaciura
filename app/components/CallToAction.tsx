"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { supabase } from "../utils/client";

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  privacy: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

export default function CallToAction() {
  const [form, setForm] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("contacts").insert([
      {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        message: form.message,
      },
    ]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        privacy: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-18 px-6 bg-gradient-to-r from-amber-700 to-indigo-600"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Have a dream project?
          </h2>
          <p className="text-md max-w-2xl mx-auto text-white">
            Let&apos;s transform your vision into stunning reality. Reach out
            today and start the journey to a remarkable online presence.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 space-y-5"
        >
          {/* First name / Last name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                required
                value={form.first_name}
                onChange={handleChange}
                placeholder="Jane"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                required
                value={form.last_name}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            />
          </div>

          {/* Privacy */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacy"
              id="privacy"
              required
              checked={form.privacy}
              onChange={handleChange}
              className="mt-1 h-4 w-4 accent-white cursor-pointer"
            />
            <label
              htmlFor="privacy"
              className="text-white/80 text-sm cursor-pointer"
            >
              I agree to the processing of my personal data in accordance with
              the Privacy Policy.
            </label>
          </div>

          {/* Feedback messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/25 border border-green-300/40 text-green-100"
              >
                <FaCheckCircle className="shrink-0 text-green-300 text-xl" />
                <div>
                  <p className="font-semibold text-sm">Message sent!</p>
                  <p className="text-xs text-green-200">I&apos;ll get back to you as soon as possible.</p>
                </div>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-red-500/25 border border-red-300/40 text-red-100"
              >
                <FaExclamationCircle className="shrink-0 text-red-300 text-xl" />
                <div>
                  <p className="font-semibold text-sm">Something went wrong.</p>
                  <p className="text-xs text-red-200">Please try again or email me directly at hello@danielelaciura.com.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <div className="text-center pt-2">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-black bg-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
