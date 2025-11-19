"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Users, Clock, Award, ArrowRight, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    title: "AI-Driven Legal Training",
    description: "Don't just learn theory. Master real-world AI tools built specifically for modern legal practice. From prompt engineering to automated drafting, we cover the skills that matter.",
    image: "/5.png",
    icon: Brain,
  },
  {
    id: 2,
    title: "Guided by Industry Experts",
    description: "Gain insights from practicing attorneys and legal technologists who are actively deploying AI in global firms today. Learn from those who are actually doing it.",
    image: "/6.png",
    icon: Users,
  },
  {
    id: 3,
    title: "Flexible, Self-Paced Learning",
    description: "Designed for the busy professional. Access bite-sized modules, live workshop replays, and downloadable resources on your schedule, whenever you need them.",
    image: "/7.png",
    icon: Clock,
  },
  {
    id: 4,
    title: "Globally Recognized Certification",
    description: "Stand out in a crowded market. Earn credentials that validate your AI expertise to employers and clients worldwide, signaling you are ready for the future.",
    image: "/8.png",
    icon: Award,
  },
];

export function AboutPlatform() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-6">
               <Target className="w-3 h-3 sm:w-4 sm:h-4" />
               <span className="text-xs sm:text-sm font-semibold">About the Platform</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Why We <span className="text-violet-600">Exist</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-800 dark:text-gray-200 leading-tight max-w-3xl font-bold tracking-tight">
              "Legal AI is reshaping the future of law yet only 02% of legal professionals use it today. NextGenLaws bridges that gap."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Interactive Feature List (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(index)}
                className={cn(
                  "group cursor-pointer p-6 rounded-2xl transition-all duration-300 border-l-4",
                  activeFeature === index 
                    ? "bg-gray-50 dark:bg-gray-900 border-violet-600" 
                    : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-900/50"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={cn(
                    "text-xl font-bold transition-colors",
                    activeFeature === index ? "text-violet-600" : "text-gray-900 dark:text-white"
                  )}>
                    {feature.title}
                  </h3>
                  {activeFeature === index && (
                    <motion.div layoutId="active-arrow" transition={{ duration: 0.2 }}>
                      <ArrowRight className="w-5 h-5 text-violet-600" />
                    </motion.div>
                  )}
                </div>
                <p className={cn(
                  "text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300",
                  activeFeature === index ? "opacity-100 max-h-40 mt-2 block" : "opacity-60"
                )}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Sticky Image Preview (Desktop) */}
          <div className="hidden lg:block lg:col-span-7 h-[650px] sticky top-24 rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-12 w-full">
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.2 }}
                   >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold uppercase tracking-widest mb-4">
                        {(() => {
                          const Icon = features[activeFeature].icon;
                          return <Icon className="w-3 h-3" />;
                        })()}
                        Highlight
                     </div>
                     <h3 className="text-4xl font-black text-white mb-4 leading-tight">
                        {features[activeFeature].title}
                     </h3>
                     <p className="text-lg text-gray-200 max-w-xl">
                        {features[activeFeature].description}
                     </p>
                   </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile View: Stacked Cards */}
          <div className="lg:hidden col-span-1 space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                 <div className="h-56 overflow-hidden relative">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                       <feature.icon className="w-6 h-6 mb-2 text-violet-400" />
                    </div>
                 </div>
                 <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
