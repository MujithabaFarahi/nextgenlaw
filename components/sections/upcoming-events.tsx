"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Transform Your Legal Practice with AI",
    subtitle: "DueDraft.ai Masterclass",
    description:
      "Dive deep into AI-powered contract automation, ignite your legal tech skills, and build momentum toward the future of law practice.",
    date: "Dec 5 - 10, 2025",
    place: "Online & Hybrid",
    timezone: "Eastern",
    badge: "IN-PERSON & VIRTUAL",
    logo: "/4.png",
    gradientFrom: "from-violet-600 via-purple-500 to-pink-500",
    link: "/due",
  },
];

export function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const currentEvent = events[currentIndex];

  return (
    <section id="upcoming-events" className="pt-8 sm:pt-10 pb-12 sm:pb-16 md:pb-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-4 sm:mb-6 md:mb-8"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">Coming Soon</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 px-2"
          >
            <span className="text-gray-900 dark:text-white">Upcoming </span>
            <span className="bg-linear-to-r from-violet-600 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              Events
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
          >
            Don't miss our next groundbreaking legal-tech event
          </motion.p>

          {/* Explore all events link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-1"
            >
              Explore all events
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Event Card */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, shown on md and up */}
          <div className="hidden md:flex absolute right-0 -top-20 items-center gap-2 z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-violet-600 dark:hover:border-violet-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-violet-600 dark:hover:border-violet-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>

          {/* Event Card */}
          <Link href={currentEvent.link}>
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group bg-linear-to-br ${currentEvent.gradientFrom} h-[480px] sm:h-[500px] md:h-[550px]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={currentEvent.logo}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-violet-600/80 via-purple-500/70 to-pink-500/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between text-white">
                {/* Top Badge */}
                <div className="flex items-start justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white" />
                    {currentEvent.badge}
                  </motion.div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center max-w-3xl my-4 sm:my-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                  >
                    {currentEvent.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-2xl mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                  >
                    {currentEvent.description}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-white text-violet-600 rounded-lg text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm pb-16 sm:pb-0"
                >
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mb-0.5 sm:mb-1">
                      DATE
                    </div>
                    <div className="font-semibold text-xs sm:text-sm">{currentEvent.date}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mb-0.5 sm:mb-1">
                      PLACE
                    </div>
                    <div className="font-semibold text-xs sm:text-sm">{currentEvent.place}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mb-0.5 sm:mb-1">
                      TIMEZONE
                    </div>
                    <div className="font-semibold text-xs sm:text-sm">{currentEvent.timezone}</div>
                  </div>
                </motion.div>

                {/* Logo/Branding - Bottom Right - Hidden on very small mobile */}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-sm px-3 sm:px-5 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-lg">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">DueDraft</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-white/70 uppercase tracking-wider">
                    Masterclass
                  </div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ width: "200%" }}
              />
            </motion.div>
          </Link>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-violet-600 dark:bg-violet-400"
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

