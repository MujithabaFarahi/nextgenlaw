"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { CallToAction } from "@/components/ui/cta-3";

export function Footer() {
  return (
    <>
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <CallToAction />
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-200 dark:border-gray-800 py-8 sm:py-10 md:py-12 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sm:col-span-2 md:col-span-1"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center">
                    <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold">
                    NextGen<span className="text-violet-600 dark:text-violet-400">Laws</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Empowering legal professionals to master AI and transform their careers.
                </p>
              </motion.div>

              {/* Programs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Programs</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      AI for Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      DueDraft Masterclass
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Legal Tech
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Company</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Legal</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6 sm:pt-7 md:pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400"
            >
              <p>© 2025 NextGenLaws. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

