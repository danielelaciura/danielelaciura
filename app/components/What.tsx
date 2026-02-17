"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};


export default function What() {
  return (
    <section id="what-i-do" className="min-h-screen flex items-center justify-center pb-16 px-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center text-center relative z-0">

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mt-20"
          > 
            <h2 className="md:text-5xl font-bold text-black">
                What I do
            </h2>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-8 w-full max-w-5xl text-left"
          >
            {[
              { icon:"⟡", title: "Product Management", description: "Product leader bridging strategy, technology, and execution across complex digital platforms.", tags:["Roadmapping","Discovery","Delivery"]},
              { icon:"✎", title: "Design", description: "User-centered thinker, I turn ideas into user-friendly, appealing products that enhance engagement.", tags:["UX Thinking","Prototyping","User Research"] },
              { icon:"⚡︎", title: "AI", description: "Exploring AI-driven product innovation, leveraging LLMs to enhance workflows and value.", tags:["LLMs","AI Workflows","Experimentation"] },
              { icon:"➤", title: "Leadership", description: "Built and led cross-functional teams of 40+ across multiple countries.", tags:["Team Building","Coachin","Stakeholders aligment"] },
              { icon:"⚙", title: "Engineering", description: "Former developer with strong technical fluency in frontend architecture and scalable systems.", tags:["Technical Fluency","Agile Development"] },
              { icon:"↗", title: "Strategy", description: "Defined product strategy aligning business goals, market opportunities, and technical feasibility.", tags:["Vision Setting","Prioritization","Business Impact"] },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white border border-white/10 backdrop-blur-sm"
              >
                <span className="text-3xl mb-4 text-white bg-gradient-to-br to-[#ff4a00] from-[#2962b2] rounded-xl w-auto px-2">{service.icon}


                </span>
                <h3 className="text-xl text-black my-2">{service.title}</h3>
                <p className="text-black/60 text-sm">{service.description}</p>
                {
                  service.tags.map((tag, index) => (<span className="inline-flex items-center gap-x-1 py-1 px-3 mr-2 mt-2 rounded-2xl text-xs font-medium bg-[#f7f7f7] text-surface-foreground">{tag}</span>))
                }

              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
