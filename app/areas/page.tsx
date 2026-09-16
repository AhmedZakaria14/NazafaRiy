import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { areasData } from '@/lib/areasData';
import { siteConfig } from '@/lib/siteConfig';
import { MapPin, Clock, ArrowUpLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: `مناطق الخدمة وأحياء الرياض | تغطية شاملة لكافة الأحياء | ${siteConfig.name}`,
  description: 'نطاق تغطية خدمات النظافة الفاخرة في كافة أحياء شمال، شرق، غرب، جنوب، ووسط الرياض مع سرعة استجابة فائقة وضمان فندقي. للحجز والاستفسار: 0575386029.',
  keywords: [
    'شركة تنظيف شمال الرياض',
    'شركة تنظيف شرق الرياض',
    'شركة تنظيف غرب الرياض',
    'شركة تنظيف جنوب الرياض',
    'شركة تنظيف وسط الرياض',
    'تنظيف منازل حطين والملقا',
    'تنظيف فلل النرجس والياسمين',
    'تنظيف مجالس الروضة وقرطبة',
    'خدمات نظافة الرياض',
    '0575386029'
  ],
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
  openGraph: {
    title: `مناطق الخدمة وأحياء الرياض | ${siteConfig.name}`,
    description: 'تغطية متكاملة لكافة أحياء الرياض مع سرعة وصول فائقة وضمان جودة 100%. اتصل بنا: 0575386029.',
    url: `${siteConfig.url}/areas`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function AreasPage() {
  const areasListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: areasData.map((area, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: area.title,
      description: area.description,
      url: `${siteConfig.url}/areas/${area.slug}`,
    })),
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasListSchema) }}
      />
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pb-16 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">مناطق الخدمة</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>تغطية العاصمة الرياض بالكامل</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-6">
            نصلك في كل ركن وحي
            <br />
            <span className="font-semibold text-white">داخل مدينة الرياض.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            أسطول سيارات متكامل مجهز بأحدث ماكينات ومواد النظافة موزع جغرافياً في الرياض ليضمن سرعة وصول فائقة والتزاماً صارماً بالمواعيد المحددة.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasData.map((area) => (
            <div
              key={area.id}
              className="liquid-glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-light text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>الاستجابة: {area.responseTime}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpLeft className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {area.name}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Neighborhoods */}
                <div className="space-y-2">
                  <span className="text-xs text-gray-400 font-light block">أبرز الأحياء المخدومة:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.neighborhoods.map((nh, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-gray-200 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {nh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-light">
                  {area.popularServices[0]}
                </span>
                <Link
                  id={`area-detail-link-${area.slug}`}
                  href={`/areas/${area.slug}`}
                  className="text-xs font-medium text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
                >
                  استعراض خدمات المنطقة →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Prompt */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
              هل حيّك غير مدرج في القائمة أعلاه؟
            </h3>
            <p className="text-sm text-gray-400 font-light">
              نغطي أيضاً الضواحي والمخططات الجديدة في الرياض ومحيطها. تواصل معنا لتأكيد وصول أقرب فريق لك.
            </p>
          </div>
          <Link
            id="areas-book-custom-btn"
            href="/request-service"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl shrink-0"
          >
            اطلب خدمة لموقعك الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
