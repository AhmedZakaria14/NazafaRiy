import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesBento } from '@/components/home/ServicesBento';
import { WhyUsEditorial } from '@/components/home/WhyUsEditorial';
import { ProcessSection } from '@/components/home/ProcessSection';
import { AreasSection } from '@/components/home/AreasSection';
import { FaqSection } from '@/components/home/FaqSection';
import { HomeCtaSection } from '@/components/home/HomeCtaSection';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `${siteConfig.name} | شركة تنظيف بالرياض وخدمات نظافة فاخرة للمنازل والفلل`,
  description: 'شركة تنظيف بالرياض متخصصة في تنظيف الفلل والقصور، جلي الرخام بالماس، غسيل الكنب والمجالس بالبخار، تنظيف المكيفات والخزانات بأحدث الأجهزة الألمانية وضمان شامل.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | خدمات نظافة فاخرة بالرياض`,
    description: 'أفضل شركة تنظيف بالرياض لتنظيف الفلل والمنازل والمجالس وجلي الرخام بمستوى فندقي وضمان 100%.',
    url: siteConfig.url,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden bg-black text-white">
      {/* 1. Cinematic Raw Video Hero */}
      <HeroSection />

      {/* 2. Editorial Off-White Bento Grid for Services */}
      <ServicesBento />

      {/* 3. Dark Cinematic Why Us & Philosophy */}
      <WhyUsEditorial />

      {/* 4. Clean White Large Numbered Steps Process */}
      <ProcessSection />

      {/* 5. Riyadh Coverage Editorial Grid */}
      <AreasSection />

      {/* 6. Minimalist Editorial FAQ */}
      <FaqSection />

      {/* 7. High-Impact Dark CTA */}
      <HomeCtaSection />
    </div>
  );
}
