"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { GraduationCap, Briefcase, Scale, Search, Building2, Users } from "lucide-react";

const personas = [
  {
    title: "Law Students",
    benefit: "Get ahead with cutting-edge AI skills before graduation",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "Associates",
    benefit: "Work smarter and advance faster in your firm",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    title: "Senior Attorneys",
    benefit: "Lead digital transformation and stay competitive",
    icon: <Scale className="w-8 h-8" />,
  },
  {
    title: "Legal Researchers",
    benefit: "Automate research and uncover insights 10x faster",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "In-House Counsel",
    benefit: "Streamline compliance and contract management",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Legal Ops Teams",
    benefit: "Build efficient workflows and reduce costs",
    icon: <Users className="w-8 h-8" />,
  },
];

const features = personas.map((persona) => ({
  title: persona.title,
  description: persona.benefit,
  icon: persona.icon,
}));

export function WhoThisIsFor() {
  return (
    <section className="py-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Who This Is For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perfect for <span className="text-violet-600 dark:text-violet-400">Every Legal Professional</span>
          </h2>
        </div>

        <FeaturesSectionWithHoverEffects features={features} />
      </div>
    </section>
  );
}

