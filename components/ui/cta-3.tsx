"use client";

import { ArrowRight, PlusIcon, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-between gap-y-6 border border-gray-200 dark:border-gray-800 bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--primary)/.08),transparent)] dark:bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--primary)/.15),transparent)] rounded-2xl px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16">
      {/* Corner Plus Icons */}
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-10 size-6 text-gray-400 dark:text-gray-600"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-10 size-6 text-gray-400 dark:text-gray-600"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6 text-gray-400 dark:text-gray-600"
        strokeWidth={1.5}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-6 text-gray-400 dark:text-gray-600"
        strokeWidth={1.5}
      />

      {/* Center Dashed Line */}
      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-gray-200 dark:border-gray-800" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-400 mx-auto"
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm font-semibold">Limited Time Offer</span>
      </motion.div>

      {/* Heading and Subtitle */}
      <div className="space-y-3 sm:space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white"
        >
          Start Your Legal AI Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-300"
        >
          Empower your legal career with the skills of tomorrow
        </motion.p>
      </div>

      {/* Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mx-auto"
      >
        <div className="inline-flex flex-col items-center gap-2 sm:gap-3 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-semibold">DueDraft Starting In</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono bg-white dark:bg-gray-800 rounded-lg px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] border border-gray-200 dark:border-gray-700">
                3
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">Days</span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400">:</span>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono bg-white dark:bg-gray-800 rounded-lg px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] border border-gray-200 dark:border-gray-700">
                21
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">Hours</span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400">:</span>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono bg-white dark:bg-gray-800 rounded-lg px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] border border-gray-200 dark:border-gray-700">
                04
              </div>
              <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">Mins</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Contact Sales
        </Button>
        <Button size="lg" className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white">
          Enroll Now
          <ArrowRight className="size-4 ml-1" />
        </Button>
      </motion.div>
    </div>
  );
}

