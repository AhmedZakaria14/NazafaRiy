'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedArabicHeading } from '@/components/ui/AnimatedArabicHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const heroVideoUrl =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4';
  const posterImageUrl =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop';

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white"
      aria-label="المقدمة الرئيسية"
    >
      {/* Background Video - RAW with no full dark overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterImageUrl}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Top Spacer for fixed navbar */}
      <div className="h-24 md:h-28 w-full shrink-0" aria-hidden="true" />

      {/* Hero Content Wrapper at the bottom of the viewport */}
      <div className="flex-1 flex flex-col justify-end pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Right Column (Arabic Start): Main Headline, Description & CTA */}
          <div className="lg:col-span-8 flex flex-col items-start text-right">
            {/* Main H1 - Animated Word by Word without breaking Arabic cursive ligatures */}
            <AnimatedArabicHeading
              id="hero-main-title"
              text={`نظافة تليق بمكانك\nفي كل زاوية من الرياض.`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.18] tracking-[-0.015em] text-white hero-text-shadow mb-4 sm:mb-5"
              initialDelay={0.2}
              wordDelay={0.06}
            />

            {/* Description */}
            <FadeIn delay={0.8} duration={1.0} className="w-full">
              <p
                id="hero-main-description"
                className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl hero-subtle-shadow mb-6 sm:mb-8"
              >
                شركة تنظيف بالرياض تقدم خدمات متخصصة للمنازل والفلل والشقق والمجالس والمكاتب، بأيدي فرق مدربة ومعدات حديثة تمنح المكان رونقاً استثنائياً يدوم.
              </p>
            </FadeIn>

            {/* Buttons Row */}
            <FadeIn delay={1.1} duration={0.9} className="w-full">
              <div id="hero-actions-row" className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  id="hero-primary-btn"
                  href="/request-service"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 sm:px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 active:scale-98 shadow-xl"
                >
                  <span>اطلب خدمة الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <Link
                  id="hero-secondary-btn"
                  href="/services"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white liquid-glass border border-white/25 hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5 active:scale-98 shadow-xl"
                >
                  استكشف خدماتنا
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Left Column (Arabic End): Floating Glass Tag Card & Trust Metrics */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-4">
            <FadeIn delay={1.3} duration={1.0}>
              <div
                id="hero-floating-glass-tag"
                className="liquid-glass border border-white/20 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-lg"
              >
                <p className="text-base sm:text-lg md:text-xl font-light text-white tracking-wide">
                  منازل. فلل. مجالس. مكاتب.
                </p>
                <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs text-gray-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ضمان الجودة ورضا العملاء 100%</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
