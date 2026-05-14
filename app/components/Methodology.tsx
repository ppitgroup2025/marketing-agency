"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Mapping",
    desc: "Deep dive into your business model, target audience, and current digital footprint.",
  },
  {
    num: "02",
    title: "Strategy Alignment",
    desc: "Crafting a bespoke roadmap encompassing design, technology, and marketing KPIs.",
  },
  {
    num: "03",
    title: "Execution & Scale",
    desc: "Agile deployment of assets and campaigns, followed by continuous optimization.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Apex Method™</h2>
              <p className="text-lg text-gray-400 mb-8">
                We don't guess. We engineer success. Our proprietary framework ensures every decision is backed by data and aligned with your revenue goals. We act as your partner, not just a vendor.
              </p>
              <a
                href="#contact"
                className="inline-flex px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Learn our process
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8 w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-[-40px] w-px bg-white/10 hidden md:block" />
                )}
                
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-white/20 bg-surface flex items-center justify-center font-display font-bold text-accent text-lg">
                  {step.num}
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
