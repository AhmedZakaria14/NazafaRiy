'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition Component
 * Provides a subtle, luxury page transition (0 to 1 opacity, 10px to 0 vertical lift over 300ms)
 * for all multi-page routes, adhering strictly to 'prefers-reduced-motion'.
 */
export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3, // 300ms transition
        ease: [0.22, 1, 0.36, 1], // Smooth, luxury easing curve
      }}
      className={`w-full flex-1 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}
