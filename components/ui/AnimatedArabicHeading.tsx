'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedArabicHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
  wordDelay?: number;
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
}

export function AnimatedArabicHeading({
  text,
  className = '',
  initialDelay = 0.2,
  wordDelay = 0.06,
  as: Component = 'h1',
  id,
}: AnimatedArabicHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  
  // Split lines by newline
  const lines = text.split('\n');

  if (shouldReduceMotion) {
    return (
      <Component id={id} className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </Component>
    );
  }

  let totalWordCount = 0;

  return (
    <Component id={id} className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.trim().split(/\s+/);
        return (
          <span key={lineIndex} className="block whitespace-pre-wrap overflow-hidden py-0.5">
            {words.map((word, wordIndex) => {
              const currentWordIndex = totalWordCount++;
              const delay = initialDelay + currentWordIndex * wordDelay;

              return (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap overflow-visible ms-0 me-2.5"
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
}
