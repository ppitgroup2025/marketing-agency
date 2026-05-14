"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const goals = ["New Website", "Performance Marketing", "Brand Identity", "Digital Transformation"];
const budgets = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    budget: "",
    name: "",
    company: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mocking Supabase submission
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something extraordinary.</h2>
            <p className="text-gray-400">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>

          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full pt-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                  <p className="text-gray-400">Our strategy team will be in touch shortly.</p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Goals */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold mb-6">What are you looking to achieve?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {goals.map((goal) => (
                          <button
                            key={goal}
                            onClick={() => {
                              setFormData({ ...formData, goal });
                              handleNext();
                            }}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              formData.goal === goal
                                ? "border-primary bg-primary/10 text-white"
                                : "border-white/10 hover:border-white/30 text-gray-400 hover:text-white"
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Budget */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold mb-6">What is your estimated budget?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {budgets.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => {
                              setFormData({ ...formData, budget });
                              handleNext();
                            }}
                            className={`p-4 rounded-xl border text-left transition-all ${
                              formData.budget === budget
                                ? "border-primary bg-primary/10 text-white"
                                : "border-white/10 hover:border-white/30 text-gray-400 hover:text-white"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Details */}
                  {step === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-xl font-semibold mb-6">Your Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">Name</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-surface border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">Company</label>
                          <input
                            required
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-surface border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm text-gray-400">Email</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-surface border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting..." : "Send Request"}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form Navigation */}
          {!isSuccess && step > 1 && (
            <button
              onClick={handleBack}
              className="mt-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>
          )}

          {/* Progress Indicators */}
          {!isSuccess && (
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step ? "w-8 bg-primary" : i < step ? "w-2 bg-primary/50" : "w-2 bg-white/10"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
