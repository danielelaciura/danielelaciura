"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa"; // make sure react-icons is installed

export default function AboutUs() {
  return (
    <section id="about-me" className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="md:text-5xl font-bold text-black">
          About Me
        </h2>
      </motion.div>

      <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        className="rounded-2xl backdrop-blur-sm"
      >

        <div className="bg-white relative p-10 rounded-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

            <div className="text-left">
              <h3 className="mb-2">Here is a bit about me</h3>

              <p className="text-sm mb-4 leading-[1.8]">
                I’m a qualified Product Leader with more than 15 years of experience in the tech field and travel industry.{" "}
              </p>
              <p className="text-sm mb-4 leading-[1.8]">
                I kicked off my career working as a developer for almost 10 years, gaining a solid technical fluency and a clear understanding of the product development life cycle.
              </p>
              <p className="text-sm mb-4 leading-[1.8]">
                Beyond my technological background, I have developed significant expertise in the travel industry, collaborating with international suppliers and clients and leading a team of over 40 people.
              </p>
              <p className="text-sm mb-4 leading-[1.8]">
                I’m able to bring a blend of technical expertise, user-focused design, and strategic product management. I enjoy collaborating with teams to achieve shared goals with curiosity and adaptability.
              </p>

              <div className="flex gap-4 mt-4">
              {/* CV Button */}
                <a
                  href="https://drive.google.com/file/d/1BOixjARVzCO36_2W629ILvwrqt3C304M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-xs rounded-xl border text-black font-semibold hover:shadow-lg hover:shadow-blu-500/50 transition-all"
                  >
                    See full CV
                  </motion.button>
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/daniele-la-ciura/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-xs flex rounded-xl border text-black font-semibold hover:shadow-lg gap-4 hover:shadow-blu-500/50 transition-all"
                  >
                    <FaLinkedin size={16} /> LinkedIn
                  </motion.button>
                </a>
              </div>
            </div>

            <div className="text-left">
              <div className="grid gap-5">
                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                  <h3 className="md:text-4xl font-semibold tracking-tight text-black">
                    <span className="bg-indigo-500 bg-gradient-to-r to-[#ff4a00] from-[#2962b2] bg-clip-text text-transparent">
                      +7  
                    </span>{" "}
                    years of experience
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    In travel tech and high technology industries, across product, engineering, and delivery.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                  <h3 className="text-xl md:text-4xl font-semibold tracking-tight text-black">
                    <span className="bg-indigo-500 bg-gradient-to-r to-[#ff4a00] from-[#2962b2] bg-clip-text text-transparent">
                    +40 </span>{" "}
                     people led
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    Built and guided cross-functional teams with a strong focus on outcomes and execution.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                  <h3 className="text-xl md:text-4xl font-semibold tracking-tight text-black">
                    <span className="bg-indigo-500 bg-gradient-to-r to-[#ff4a00] from-[#2962b2] bg-clip-text text-transparent">
                    +15
                    </span>{" "}
                    years coding background
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70">
                    Deep technical fluency to collaborate with engineers and make better product decisions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>


      </motion.div>

    </section>
  );
}
