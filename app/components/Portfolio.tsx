"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const projects = [
  {
    client: "Aura Hospitality",
    category: "Web & Performance",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    metric: "+150% Bookings",
  },
  {
    client: "Evolve Real Estate",
    category: "Brand & Digital",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    metric: "$20M Pipeline",
  },
];

const partners = ["Google Partner", "HubSpot Solutions", "Meta Business", "Next.js", "Supabase"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative z-10 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work that speaks for itself.</h2>
            <p className="text-gray-400">Award-winning campaigns and digital products for premium brands.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
            View All Cases <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-surface"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="self-end px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold">
                  {project.metric}
                </div>
                
                <div>
                  <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-3xl font-bold">{project.client}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="flex justify-center gap-1 mb-8 text-accent">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight mb-8">
            "Apex didn't just build a website; they engineered a growth engine. We doubled our high-intent visitors within a year."
          </blockquote>
          <p className="font-semibold">— Sarah Jenkins, CMO at Evolve Real Estate</p>
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-12 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Trusted Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map(partner => (
              <span key={partner} className="font-display font-bold text-xl md:text-2xl">{partner}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
