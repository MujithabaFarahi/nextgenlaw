"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

const events = [
  {
    id: 1,
    title: "DueDraft.ai Masterclass",
    subtitle: "Transform Your Legal Practice",
    description: "The definitive workshop for legal professionals ready to master AI automation. Stop drafting manually. Start leading strategically.",
    date: "Dec 5 - 10, 2025",
    place: "Virtual & In-Person (New York)",
    timezone: "EST / GMT-5",
    status: "SELLING FAST",
    image: "/4.png",
  },
];

export function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-20 sm:py-24 md:py-32 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden relative">
       {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-6">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Upcoming Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight mb-8">
              Unlock Your <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-purple-600">Potential</span>
            </h2>
            <Link href="#" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-violet-600 transition-colors">
              View Full Calendar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Premium Event Card */}
        <div className="relative">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-none bg-gray-900 dark:bg-black overflow-hidden border-l-4 border-violet-600 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[500px] overflow-hidden">
                   <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                   <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                   />
                   {/* Status Badge */}
                   <div className="absolute top-6 left-6 z-20 bg-white text-black text-xs font-black px-4 py-2 uppercase tracking-widest">
                      {event.status}
                   </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative bg-gray-900 text-white">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Calendar className="w-32 h-32" />
                   </div>
                   
                   <div className="relative z-10">
                      <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-4">
                        {event.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-violet-500/20 rounded-lg">
                            <Calendar className="w-5 h-5 text-violet-400" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Date</div>
                            <div className="text-base font-semibold">{event.date}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="p-2 bg-violet-500/20 rounded-lg">
                            <MapPin className="w-5 h-5 text-violet-400" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</div>
                            <div className="text-base font-semibold">{event.place}</div>
                          </div>
                        </div>
                      </div>

                      <Link href="/due" className="w-full">
                        <button className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold uppercase tracking-widest transition-all shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 flex items-center justify-center gap-2 group-hover:-translate-y-0.5">
                          Reserve Your Seat
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
