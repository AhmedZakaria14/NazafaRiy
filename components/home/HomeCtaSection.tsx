'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Sparkles, ArrowLeft, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function HomeCtaSection() {
  return (
    <section
      id="home-cta-section"
      className="bg-black text-white py-20 sm:py-28 px-6 md:px-12 lg:px-16 relative overflow-hidden"
      aria-label="طلب الخدمة الفوري"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-white/20 text-xs sm:text-sm font-light text-gray-200 mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span>احصل على تجربة تنظيف فاخرة وراقية</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.18] mb-6">
          نعيد لمساحتك رونقها ونقاءها
          <br />
          <span className="font-semibold text-white">بأعلى معايير الفخامة في الرياض.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          سواء كنت بحاجة لتنظيف فيلتك، شقتك، مجلسك، أو مقرك التجاري، نضمن لك عناية فائقة بكل تفصيلة مع ضمان الرضا الكامل.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            id="home-cta-book-btn"
            href="/request-service"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-medium text-base hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 active:scale-98 shadow-2xl"
          >
            <span>احجز خدمتك الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <a
            id="home-cta-whatsapp-btn"
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً صفوة الرياض، أود الاستفسار وحجز خدمة نظافة')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-base text-white liquid-glass border border-white/25 hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5 active:scale-98 shadow-2xl"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>استشارة عبر واتساب</span>
          </a>
        </div>

        {/* Guarantee Chips */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400 font-light pt-8 border-t border-white/10">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ضمان جودة معتمد 100%</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>معدات ألمانية وإيطالية حديثة</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>تغطية شاملة لكافة أحياء الرياض</span>
          </span>
        </div>
      </div>
    </section>
  );
}
