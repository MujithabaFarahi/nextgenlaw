"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Globe, MessageSquare, Calendar, Users, Briefcase, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const communityBenefits = [
  {
    id: 1,
    title: "Discord Community",
    date: "24/7 Access",
    content: "Join our private Discord server with 20,000+ active members. Share insights, ask questions, and build lasting connections.",
    category: "Community",
    icon: MessageSquare,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Networking Events",
    date: "Monthly",
    content: "Connect with 100+ legal professionals every month through virtual and hybrid networking sessions across 160+ countries.",
    category: "Events",
    icon: Calendar,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Career Mentorship",
    date: "1-on-1",
    content: "Get personalized guidance from experienced legal tech professionals to accelerate your career growth and transformation.",
    category: "Growth",
    icon: Users,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Job Board Access",
    date: "Exclusive",
    content: "Access exclusive job opportunities in legal tech, legal ops, and AI-powered practice from leading firms worldwide.",
    category: "Career",
    icon: Briefcase,
    relatedIds: [3, 6],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Learning Groups",
    date: "Ongoing",
    content: "Join peer-led study groups and collaborative learning sessions to master legal AI tools together.",
    category: "Education",
    icon: BookOpen,
    relatedIds: [1, 6],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "Expert Webinars",
    date: "Weekly",
    content: "Learn from industry experts through weekly webinars covering the latest trends in legal tech and AI innovation.",
    category: "Learning",
    icon: Award,
    relatedIds: [4, 5],
    status: "completed" as const,
    energy: 92,
  },
];

export function GlobalCommunity() {
  return (
    <section id="community" className="py-20 sm:py-28 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-6">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Global Community</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Join Our <br />
              <span className="text-violet-600">Network</span>
            </h2>
          </motion.div>
        </div>

        {/* Stats and Orbital Timeline Side by Side */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 items-center">
            {/* Stats Section */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="text-center bg-violet-50 dark:bg-violet-950/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-violet-100 dark:border-violet-900/30">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">20,000+</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">Active Community Members</p>
                </div>
                <div className="text-center bg-violet-50 dark:bg-violet-950/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-violet-100 dark:border-violet-900/30">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">160+</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">Countries Represented</p>
                </div>
                <div className="text-center bg-violet-50 dark:bg-violet-950/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-violet-100 dark:border-violet-900/30">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">100+</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">Monthly Events & Meetups</p>
                </div>
              </div>
            </div>

            {/* Interactive Orbital Timeline */}
            <div className="order-1 lg:order-2">
              <div className="text-center mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1 px-2">
                  Explore Community Benefits
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-0 px-4">
                  Click on any node to learn more
                </p>
              </div>
              <RadialOrbitalTimeline timelineData={communityBenefits} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
