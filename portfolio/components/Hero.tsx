"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Kaushik Tiwari
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
          Software Engineer focused on building clean, scalable web and mobile
          applications.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg text-sm font-medium"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-lg text-sm"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
