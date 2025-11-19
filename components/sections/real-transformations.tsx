"use client";

import { motion } from "framer-motion";
import { TrendingUp, Check, ArrowUpRight } from "lucide-react";

const transformations = [
  {
    metric: "70%",
    label: "Time Saved",
    desc: "Reduced contract review time significantly using AI tools.",
    person: "Amanda Chen",
    role: "Senior Associate"
  },
  {
    metric: "15h",
    label: "Weekly Hours Saved",
    desc: "Automated compliance monitoring processes.",
    person: "Sarah Thompson",
    role: "In-House Counsel"
  },
  {
    metric: "100%",
    label: "Accuracy",
    desc: "Eliminated manual errors in data entry and analysis.",
    person: "Michael Rodriguez",
    role: "Legal Intern"
  }
];

export function RealTransformations() {
  return (
    <section id="results" className="py-20 sm:py-28 bg-black text-white relative overflow-hidden">
       {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-900/30 border border-violet-500/20 text-violet-400 mb-6">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Real Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-8">
              Measurable <span className="text-violet-500">Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              We don't just teach theory. We deliver outcomes that redefine careers and businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900 border border-gray-800 p-8 hover:border-violet-500/50 transition-colors group relative"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-violet-500" />
              </div>
              
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                {item.metric}
              </div>
              <div className="text-violet-400 font-bold uppercase tracking-wider text-sm mb-6">
                {item.label}
              </div>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                "{item.desc}"
              </p>
              
              <div className="border-t border-gray-800 pt-6 mt-auto flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-violet-900/30 flex items-center justify-center text-violet-400 font-bold text-lg">
                    {item.person.charAt(0)}
                 </div>
                 <div>
                    <div className="font-bold text-white leading-none">{item.person}</div>
                    <div className="text-xs text-gray-500 mt-1 uppercase">{item.role}</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
