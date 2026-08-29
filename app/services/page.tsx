import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/lib/servicesData';
import { ArrowUpLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `خدمات النظافة المتخصصة بالرياض | دليل الخدمات والأسعار | ${siteConfig.name}`,
  description: 'دليل خدمات النظافة الشاملة في الرياض: تنظيف الفلل، المنازل، الشقق، المجالس، الكنب، جلي وتلميع الرخام، تنظيف الواجهات الزجاجية والتنظيف بعد التشطيب بأحدث المعدات الألمانية.',
  keywords: [
    'خدمات تنظيف بالرياض',
    'اسعار تنظيف الفلل بالرياض',
    'شركات تنظيف المنازل في الرياض',
    'جلي رخام بالرياض',
    'غسيل مجالس وكنب بالرياض',
    'تنظيف مكيفات بالرياض',
    'تنظيف بعد التشطيب بالرياض',
    'تنظيف خزانات مياه بالرياض'
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: `خدمات النظافة المتخصصة بالرياض | ${siteConfig.name}`,
    description: 'استكشف قائمة خدمات صفوة الرياض الشاملة للعناية بالفلل والمنازل والمفروشات والرخام بأعلى المقاييس.',
    url: `${siteConfig.url}/services`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servicesData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.shortDesc,
      url: `${siteConfig.url}/services/${service.slug}`,
    })),
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      {/* Editorial Header */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pb-16 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">خدماتنا</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <span>خدمات متكاملة بمعايير عالمية</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-6">
            خدمات تنظيف متخصصة
            <br />
            <span className="font-semibold text-white">لكل مساحة وتفصيلة.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            نقدم مجموعة متكاملة من خدمات النظافة والتعقيم والصيانة الدورية للمساكن والمقرات الإدارية في الرياض، مدعومة بأحدث التجهيزات والمواد العضوية الآمنة.
          </p>
        </div>
      </section>

      {/* Services Full List Grid */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="liquid-glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 text-xs font-light text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 block">السعر التقديري</span>
                  <span className="text-sm font-semibold text-white">{service.pricingStarting}</span>
                </div>

                <Link
                  id={`service-detail-btn-${service.slug}`}
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-medium hover:bg-gray-100 transition-colors"
                >
                  <span>التفاصيل والحجز</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards Banner */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
              هل تبحث عن خطة تنظيف مخصصة لمقرك أو عقارك؟
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              نوفر زيارات معاينة مجانية للفلل الكبرى والمقرات التجارية لتقييم المساحات وتحديد الأجهزة والمواد المناسبة بأدق التفاصيل.
            </p>
          </div>
          <Link
            id="services-custom-request-btn"
            href="/request-service"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl shrink-0"
          >
            طلب معاينة أو حجز مخصص
          </Link>
        </div>
      </section>
    </div>
  );
}
