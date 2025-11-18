"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TrendingUp } from "lucide-react";

const caseStudies = [
  {
    name: 'Amanda Chen',
    role: 'Senior Associate',
    before: 'Spending 20+ hours weekly on contract review',
    after: 'Reduced contract review time by 70% using AI tools',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Legal Intern',
    before: 'Limited hands-on experience with legal tech',
    after: 'Built a compliance AI tool adopted by entire firm',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Sarah Thompson',
    role: 'In-House Counsel',
    before: 'Manual tracking of regulatory changes',
    after: 'Automated compliance monitoring saving 15 hours/week',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
  {
    name: 'Ritika Malhotra',
    role: 'Associate Counsel',
    before: 'Manual clause comparison across versions',
    after: 'Automated redline analysis cut review time by 60%',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
  },
  {
    name: 'Abhay Joshi',
    role: 'Litigation Associate',
    before: 'Hours spent drafting routine petitions',
    after: 'Reusable AI templates deliver filings in minutes',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400',
  },
  {
    name: 'Nadia Rahman',
    role: 'Compliance Analyst',
    before: 'Tracking regulatory updates manually',
    after: 'AI alerts streamline monitoring and reporting',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
];

const transformationTestimonials = caseStudies.map((study) => ({
  name: study.name,
  designation: study.role,
  quote: `Before: ${study.before}. After: ${study.after}.`,
  src: study.image,
}));

export function RealTransformations() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Before & After</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real <span className="text-violet-600 dark:text-violet-400">Transformations</span>
          </h2>
        </div>
        <AnimatedTestimonials
          testimonials={transformationTestimonials}
          autoplay
          className="pt-0"
        />
      </div>
    </section>
  );
}

