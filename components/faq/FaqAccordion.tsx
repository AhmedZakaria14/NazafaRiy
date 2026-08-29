'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

interface FaqAccordionProps {
  categories: FaqCategory[];
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<string | null>('cat0-0');

  return (
    <div className="space-y-12 mb-20">
      {categories.map((cat, catIdx) => (
        <div key={catIdx} className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white pb-3 border-b border-white/10">
            {cat.category}
          </h2>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {cat.items.map((faq, itemIdx) => {
              const key = `cat${catIdx}-${itemIdx}`;
              const isOpen = openIndex === key;

              return (
                <div key={itemIdx} className="py-5">
                  <button
                    id={`faq-btn-${key}`}
                    aria-controls={`faq-panel-${key}`}
                    onClick={() => setOpenIndex(isOpen ? null : key)}
                    className="w-full flex items-center justify-between text-right gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-normal text-white group-hover:text-gray-200 transition-colors">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${key}`}
                        role="region"
                        aria-labelledby={`faq-btn-${key}`}
                        key="faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
