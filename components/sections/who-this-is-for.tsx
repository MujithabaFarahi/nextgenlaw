"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { GraduationCap, Briefcase, Scale, Search, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 sm:py-28 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-6">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Who This Is For</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Perfect for <span className="text-violet-600">Every Pro</span> <br />
            </h2>
          </motion.div>
        </div>

        <FeaturesSectionWithHoverEffects features={features} />
      </div>
    </section>
  );
}
