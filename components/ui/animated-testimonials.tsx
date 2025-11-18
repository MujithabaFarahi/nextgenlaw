"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  // Helper function to parse and style the quote
  const parseQuote = (quote: string) => {
    const parts = quote.split(/(\bBefore:\s*|\bAfter:\s*)/);
    return parts.map((part, idx) => {
      if (part === "Before: " || part === "Before:") {
        return { type: "before-label", text: "Before" };
      } else if (part === "After: " || part === "After:") {
        return { type: "after-label", text: "After" };
      } else if (part.trim()) {
        const isAfterSection = parts.slice(0, idx).some((p) => p.includes("After"));
        return { type: isAfterSection ? "after-text" : "before-text", text: part.trim() };
      }
      return null;
    }).filter(Boolean);
  };

  const rotationMap = useMemo(
    () =>
      testimonials.map((_, idx) => {
        const values = [-10, -6, -2, 2, 6, 10];
        return values[idx % values.length];
      }),
    [testimonials],
  );

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20",
        className,
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotationMap[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotationMap[index],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotationMap[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <div className="mt-8 space-y-6">
              {parseQuote(testimonials[active].quote).map((segment: any, segIdx: number) => {
                if (segment.type === "before-label") {
                  return (
                    <motion.div
                      key={`segment-${segIdx}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 font-semibold text-gray-500 dark:text-gray-400">
                        <span className="inline-flex w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center shrink-0">
                          <span className="text-xs">✕</span>
                        </span>
                        <span className="text-sm uppercase tracking-wide">{segment.text}</span>
                      </div>
                    </motion.div>
                  );
                } else if (segment.type === "before-text") {
                  const words = segment.text.split(" ");
                  return (
                    <motion.p
                      key={`segment-${segIdx}`}
                      className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {words.map((word: string, wordIdx: number) => (
                        <motion.span
                          key={`${word}-${wordIdx}`}
                          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * wordIdx }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                  );
                } else if (segment.type === "after-label") {
                  return (
                    <motion.div
                      key={`segment-${segIdx}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 font-semibold text-violet-600 dark:text-violet-400">
                        <span className="inline-flex w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-500/20 items-center justify-center shrink-0">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-sm uppercase tracking-wide">{segment.text}</span>
                      </div>
                    </motion.div>
                  );
                } else if (segment.type === "after-text") {
                  const words = segment.text.split(" ");
                  return (
                    <motion.p
                      key={`segment-${segIdx}`}
                      className="text-lg text-violet-700 dark:text-violet-300 font-medium leading-relaxed"
                    >
                      {words.map((word: string, wordIdx: number) => (
                        <motion.span
                          key={`${word}-${wordIdx}`}
                          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * wordIdx + 0.4 }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

