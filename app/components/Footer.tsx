"use client";

import { ArrowRight, Aperture } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-surface border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Aperture className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Apex.
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Strategy-led digital experiences for premium brands worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-accent transition-all font-semibold text-sm text-gray-400">
                In
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-accent transition-all font-semibold text-sm text-gray-400">
                Ig
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-accent transition-all font-semibold text-sm text-gray-400">
                Gh
              </a>
            </div>
          </div>

          {/* Locations & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Global Offices</h4>
            <ul className="space-y-6">
              <li>
                <strong className="block text-white mb-1">Sana'a (HQ)</strong>
                <p className="text-gray-400 text-sm">Sana'a<br />Yemen</p>
              </li>
              <li>
                <strong className="block text-white mb-1">Get in touch</strong>
                <a href="mailto:ppitgroup2025@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  ppitgroup2025@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Insights, trends, and strategy tips delivered monthly.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-black border border-white/10 border-r-0 rounded-l-xl px-4 py-3 w-full text-sm focus:outline-none focus:border-primary text-white"
              />
              <button className="bg-white text-black px-4 rounded-r-xl font-semibold hover:bg-gray-200 transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Apex Agency. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
