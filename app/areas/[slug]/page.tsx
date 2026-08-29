import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { areasData } from '@/lib/areasData';
import { servicesData } from '@/lib/servicesData';
import { blogPosts } from '@/lib/blogData';
import { siteConfig } from '@/lib/siteConfig';
import { MapPin, Clock, ArrowLeft, ArrowUpLeft, ShieldCheck, CheckCircle2, MessageSquare, BookOpen } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areasData.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areasData.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: 'المنطقة غير متوفرة',
    };
  }

  return {
    title: `${area.title} | ${siteConfig.name}`,
    description: `${area.description} تغطية شاملة لأحياء ${area.neighborhoods.slice(0, 5).join('، ')} بأحدث الأجهزة الألمانية.`,
    keywords: [
      area.title,
      `شركة تنظيف ${area.name}`,
      `تنظيف منازل ${area.name}`,
      `تنظيف فلل ${area.name}`,
      ...area.neighborhoods.map((n) => `تنظيف ${n}`)
    ],
    openGraph: {
      title: `${area.title} | ${siteConfig.name}`,
      description: area.description,
    },
    alternates: {
      canonical: `${siteConfig.url}/areas/${area.slug}`,
    },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = areasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const relatedBlogArticles = blogPosts.filter((b) =>
    b.relatedAreas.includes(area.name) || b.relatedAreas.includes(area.slug)
  );

  // LocalBusiness Area Schema
  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${area.name}`,
    description: area.description,
    telephone: siteConfig.phone,
    areaServed: area.neighborhoods.map((nh) => ({
      '@type': 'AdministrativeArea',
      name: nh,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'الرياض',
      addressRegion: area.name,
      addressCountry: 'SA',
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-light flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/areas" className="hover:text-white transition-colors">
            مناطق الخدمة
          </Link>
          <span>/</span>
          <span className="text-white">{area.name}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>تغطية متخصصة في {area.name}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-4">
              {area.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
              {area.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link
              id="area-book-btn"
              href={`/request-service?area=${area.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl w-full sm:w-auto text-center"
            >
              <span>طلب خدمة في {area.name}</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-xs text-emerald-400 font-light flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>متوسط زمن الوصول: {area.responseTime}</span>
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Left / Main Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Neighborhoods List */}
            <div className="liquid-glass-card rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  الأحياء المشمولة في {area.name}
                </h2>
                <span className="text-xs text-gray-400 font-light">
                  {area.neighborhoods.length} أحياء رئيسية
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {area.neighborhoods.map((nh, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs sm:text-sm text-gray-200 font-light hover:border-white/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{nh}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Region Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">مميزات الخدمة في هذا النطاق</h3>
              <div className="space-y-3">
                {area.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 font-light leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Requested Services in Area */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">الخدمات الأكثر طلباً في {area.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesData.slice(0, 4).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="p-5 rounded-2xl liquid-glass border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-gray-200 transition-colors mb-1 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-light line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>{service.pricingStarting}</span>
                      <ArrowUpLeft className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Blog Guides for Area */}
            {relatedBlogArticles.length > 0 && (
              <div className="liquid-glass-card rounded-2xl p-6 border border-white/15 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-medium">أدلة ومقالات مخصصة لسكان {area.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBlogArticles.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/blog/${b.slug}`}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all block group"
                    >
                      <span className="text-[11px] text-gray-400 block mb-1">{b.category}</span>
                      <h4 className="text-xs sm:text-sm font-medium text-white group-hover:text-gray-200 line-clamp-2 leading-snug">
                        {b.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right / Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass-card rounded-2xl p-7 sticky top-28 space-y-6 shadow-2xl">
              <h3 className="text-lg font-semibold text-white">حجز سريع في {area.name}</h3>
              
              <div className="space-y-3 text-xs text-gray-300 pb-4 border-b border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">النطاق الجغرافي:</span>
                  <span className="font-medium text-white">{area.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">زمن الاستجابة:</span>
                  <span className="font-medium text-emerald-400">{area.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">جاهزية الأسطول:</span>
                  <span className="font-medium text-white">متاح طوال 24 ساعة</span>
                </div>
              </div>

              <Link
                id="area-sidebar-book-btn"
                href={`/request-service?area=${area.slug}`}
                className="w-full text-center bg-white text-black py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all block shadow-lg"
              >
                طلب موعد فوري
              </Link>

              <a
                id="area-sidebar-whatsapp-btn"
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`مرحباً صفوة الرياض، أود حجز خدمة تنظيف في ${area.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-xs text-gray-300 hover:text-white py-3 rounded-xl border border-white/15 liquid-glass flex items-center justify-center gap-2 transition-colors block"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب سريعة</span>
              </a>

              <p className="text-[11px] text-center text-gray-400 font-light">
                فريق معتمد • مواد مصرحة • التزام تام بالمواعيد
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
