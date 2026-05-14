"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Strategy & Creative",
    icon: <Lightbulb size={32} />,
    description: "Building resilient brands through research, positioning, and stunning visual identity.",
    features: ["Brand Identity & Strategy", "UI/UX Design", "Content & Copywriting", "Video Production"],
    color: "from-blue-500 to-primary",
  },
  {
    title: "Performance Marketing",
    icon: <TrendingUp size={32} />,
    description: "Data-driven campaigns that maximize ROI and drive scalable growth.",
    features: ["SEO & SEM", "Social Media Management", "Media Buying & Ads", "Email & Influencer Marketing"],
    color: "from-purple-500 to-secondary",
  },
  {
    title: "Technology & UX",
    icon: <Code2 size={32} />,
    description: "High-performance web and mobile applications built for scale and conversion.",
    features: ["Web Development", "App Development", "E-commerce Solutions", "Digital Transformation"],
    color: "from-sky-400 to-accent",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="py-24 relative z-10 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise that drives impact.</h2>
          <p className="text-lg text-gray-400">
            We offer end-to-end digital capabilities designed to transform your business and outpace the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8">{service.description}</p>
              
              <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-accent transition-colors">
                Explore {service.title.split(' ')[0]} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
