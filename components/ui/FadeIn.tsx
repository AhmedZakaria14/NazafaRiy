'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  id?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
  distance = 16,
  id,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...initialPos }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
