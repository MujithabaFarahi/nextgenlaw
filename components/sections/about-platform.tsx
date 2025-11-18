"use client";

import { Features } from "@/components/ui/features";
import { Brain, Users, Clock, Award, Rocket, MessageCircle, Target } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Brain,
    title: "AI-Driven Legal Training",
    description:
      "Learn how to use real-world AI tools built for modern legal practice",
    image: "/5.png",
  },
  {
    id: 2,
    icon: Users,
    title: "Guided by Legal Tech Experts",
    description:
      "Insights from practitioners who actively use AI in global legal workflows",
    image: "/6.png",
  },
  {
    id: 3,
    icon: Clock,
    title: "Learn Your Way",
    description:
      "Live workshops, replays, and flexible self-paced modules designed for busy legal professionals",
    image: "/7.png",
  },
  {
    id: 4,
    icon: Award,
    title: "Globally Recognized Certification",
    description:
      "Earn credentials that signal your AI-readiness to employers and clients",
    image: "/8.png",
  },
  {
    id: 5,
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Unlock opportunities in legal ops, legal tech, and AI-powered practice",
    image: "/9.png",
  },
  {
    id: 6,
    icon: MessageCircle,
    title: "Global Legal Tech Community",
    description:
      "Connect with peers, mentors, and innovators adopting AI across 100+ countries",
    image: "/10.png",
  },
];

export function AboutPlatform() {
  return (
    <section id="about" className="pt-20 pb-10 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header with badge and description */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-8">
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">About the Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why This <span className="text-violet-600 dark:text-violet-400">Community</span> Exists
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Legal AI is reshaping the future of law yet only 02% of legal professionals use it today. NextGenLaws exists to bridge that gap by helping you understand, adopt, and master legal tech and AI for your daily workflow. From drafting to research to automation, we empower you to stay ahead, not behind.
          </p>
        </div>
      </div>
      
      <Features
        primaryColor="violet-500"
        progressGradientLight="bg-gradient-to-r from-violet-400 to-violet-500"
        progressGradientDark="bg-gradient-to-r from-violet-300 to-violet-400"
        features={features}
      />
    </section>
  );
}

