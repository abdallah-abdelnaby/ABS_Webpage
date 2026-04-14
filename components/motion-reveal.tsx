"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

const baseTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function MotionReveal({ className, delay = 0, children }: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerWrapProps = PropsWithChildren<{
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}>;

export function StaggerWrap({
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  children,
}: StaggerWrapProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: baseTransition },
      }}
    >
      {children}
    </motion.div>
  );
}
