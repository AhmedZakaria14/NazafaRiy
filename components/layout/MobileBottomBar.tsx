'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar after scrolling past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="mobile-bottom-bar-fixed"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-3 inset-x-3 z-40 sm:hidden"
        >
          <div className="liquid-glass rounded-2xl p-2 border border-white/20 shadow-2xl flex items-center justify-between gap-2">
            <a
              id="mobile-bar-call"
              href={`tel:${siteConfig.phone}`}
              className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="اتصال هاتفي"
            >
              <Phone className="w-4 h-4 mb-0.5 text-gray-200" />
              <span className="text-[11px] font-medium">اتصال</span>
            </a>

            <a
              id="mobile-bar-whatsapp"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً، أود حجز خدمة نظافة في الرياض')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="واتساب"
            >
              <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-400" />
              <span className="text-[11px] font-medium">واتساب</span>
            </a>

            <Link
              id="mobile-bar-book"
              href="/request-service"
              className="flex-[1.6] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-black font-semibold text-xs shadow-md active:scale-95 transition-transform"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>اطلب خدمة</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
