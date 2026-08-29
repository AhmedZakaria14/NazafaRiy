import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData, ServiceItem } from '@/lib/servicesData';
import { blogPosts } from '@/lib/blogData';
import { areasData } from '@/lib/areasData';
import { siteConfig } from '@/lib/siteConfig';
import {
  Sparkles,
  ArrowLeft,
  ArrowUpLeft,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Cpu,
  Wrench,
  MessageSquare,
  HelpCircle,
  MapPin,
  BookOpen,
  PhoneCall
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'الخدمة غير متوفرة',
    };
  }

  return {
    title: `${service.title} بالرياض | ${siteConfig.name}`,
    description: `${service.shortDesc} أفضل الأسعار والضمانات مع أحدث الأجهزة الألمانية في جميع أحياء الرياض.`,
    keywords: [
      service.title,
      `${service.title} بالرياض`,
      `شركة ${service.title}`,
      `اسعار ${service.title}`,
      'خدمات نظافة في الرياض',
      'شركة تنظيف منازل بالرياض'
    ],
    openGraph: {
      title: `${service.title} بالرياض | ${siteConfig.name}`,
      description: service.shortDesc,
      images: [{ url: service.image }],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedBlogArticles = blogPosts.filter((b) =>
    b.relatedServices.includes(service.slug) || b.relatedServices.includes(service.id)
  ).slice(0, 2);

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // Service Schema JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'الرياض',
        addressRegion: 'منطقة الرياض',
        addressCountry: 'SA',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'الرياض',
    },
    description: service.fullDesc,
    offers: {
      '@type': 'Offer',
      price: service.pricingStarting.replace(/[^\d]/g, '') || '300',
      priceCurrency: 'SAR',
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-24">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Top Header */}
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-light flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            خدماتنا
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{service.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
              {service.shortDesc}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link
              id="service-direct-book-btn"
              href={`/request-service?service=${service.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl w-full sm:w-auto text-center"
            >
              <span>احجز هذه الخدمة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              id="service-direct-whatsapp-btn"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`مرحباً صفوة الرياض، أود الاستفسار عن ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-white/15 liquid-glass transition-colors w-full sm:w-auto text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>استفسار فوري عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Visual Hero Image with Specs Overlay */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/10">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
          
          {/* Quick Badges inside visual */}
          <div className="absolute bottom-6 right-6 left-6 flex flex-wrap items-center justify-between gap-4 text-xs font-light">
            <div className="flex flex-wrap items-center gap-3">
              <span className="liquid-glass border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>المدة المتوقعة: {service.estimatedDuration}</span>
              </span>
              <span className="liquid-glass border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-md">
                السعر يبدأ من: {service.pricingStarting}
              </span>
            </div>
            <span className="liquid-glass border border-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-md flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ضمان جودة معتمد 100%</span>
            </span>
          </div>
        </div>

        {/* Editorial Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-14">
            {/* Encyclopedic Overview & Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">نطاق الخدمة والمعايير الفنية</h2>
              <p className="text-base text-gray-300 font-light leading-relaxed">
                {service.fullDesc}
              </p>
              {service.detailedOverview && (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300 font-light leading-relaxed whitespace-pre-line">
                  {service.detailedOverview.trim()}
                </div>
              )}
            </div>

            {/* Riyadh Specific Care & Climate Protection */}
            {service.riyadhSpecificCare && service.riyadhSpecificCare.length > 0 && (
              <div className="liquid-glass rounded-2xl p-7 border border-white/15 space-y-4">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>معايير مخصصة لبيئة ومناخ مدينة الرياض</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.riyadhSpecificCare.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="liquid-glass-card rounded-2xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span>مميزات الخدمة وضمانات الجودة</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">مراحل وخطوات التنفيذ المعتمدة</h3>
              <div className="space-y-4">
                {service.workflow.map((wStep, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start gap-4 hover:border-white/25 transition-colors"
                  >
                    <span className="text-2xl font-light text-gray-400 bg-white/5 px-3 py-1 rounded-lg border border-white/10 shrink-0">
                      {wStep.step}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{wStep.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {wStep.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Technology */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-white" />
                <span>الأجهزة والتقنيات والمواد المستخدمة</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.equipment.map((eq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <Wrench className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200 font-light">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQ Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-white" />
                  <span>الأسئلة الشائعة حول {service.title}</span>
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, fIdx) => (
                    <details
                      key={fIdx}
                      className="group liquid-glass-card rounded-xl p-5 border border-white/10 transition-all [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-medium text-white group-hover:text-gray-200">
                        <span>{faq.q}</span>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg mr-2">
                          ↓
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed pt-2 border-t border-white/10">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Related Blog Guides */}
            {relatedBlogArticles.length > 0 && (
              <div className="p-6 rounded-2xl liquid-glass border border-white/15 space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <h4 className="text-base font-medium">أدلة ومقالات موسوعية ننصح بقراءتها</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBlogArticles.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/blog/${b.slug}`}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all block group"
                    >
                      <span className="text-[11px] text-gray-400 block mb-1">{b.category}</span>
                      <h5 className="text-xs sm:text-sm font-medium text-white group-hover:text-gray-200 line-clamp-2 leading-snug">
                        {b.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass-card rounded-2xl p-7 sticky top-28 space-y-6 shadow-2xl">
              <h3 className="text-lg font-semibold text-white">طلب حجز مباشر</h3>
              
              <div className="space-y-3 text-xs text-gray-300 pb-4 border-b border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">الخدمة:</span>
                  <span className="font-medium text-white text-left">{service.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">التسعير الأولي:</span>
                  <span className="font-medium text-white">{service.pricingStarting}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">المدة المتوقعة:</span>
                  <span className="font-medium text-white">{service.estimatedDuration}</span>
                </div>
                {service.pricingNote && (
                  <p className="text-[10px] text-gray-400 font-light pt-1 leading-normal">
                    * {service.pricingNote}
                  </p>
                )}
              </div>

              {/* Ideal for list */}
              <div className="space-y-2">
                <span className="text-xs text-gray-400 font-light block">الخدمة مثالية لـ:</span>
                <div className="flex flex-wrap gap-1.5">
                  {service.idealFor.map((item, idx) => (
                    <span key={idx} className="text-[11px] bg-white/10 text-gray-200 px-2.5 py-1 rounded-md font-light">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Area Coverage */}
              {service.relatedAreas && service.relatedAreas.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs text-gray-400 font-light flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>تغطية فورية في:</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {service.relatedAreas.map((area, idx) => (
                      <span key={idx} className="text-[11px] text-gray-300 bg-white/5 px-2 py-0.5 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Link
                id="service-sidebar-book-btn"
                href={`/request-service?service=${service.slug}`}
                className="w-full text-center bg-white text-black py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all block shadow-lg"
              >
                المتابعة إلى نموذج الحجز
              </Link>

              <a
                id="service-sidebar-call-btn"
                href={`tel:${siteConfig.phone}`}
                className="w-full text-center text-xs text-gray-300 hover:text-white py-2.5 rounded-xl border border-white/15 liquid-glass flex items-center justify-center gap-2 transition-colors block"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span>اتصال مباشر: {siteConfig.phone}</span>
              </a>

              <p className="text-[11px] text-center text-gray-400 font-light">
                لا يلزم الدفع المسبق • تأكيد فوري عبر واتساب
              </p>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-light text-white">خدمات أخرى قد تهمك</h3>
            <Link href="/services" className="text-xs text-gray-400 hover:text-white underline underline-offset-4 flex items-center gap-1">
              <span>جميع الخدمات</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rService) => (
              <Link
                key={rService.id}
                href={`/services/${rService.slug}`}
                className="liquid-glass-card rounded-2xl p-6 group hover:border-white/30 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-[11px] text-gray-400 mb-2 block">{rService.category}</span>
                  <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors mb-2 leading-snug">
                    {rService.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-light line-clamp-2 leading-relaxed">
                    {rService.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>{rService.pricingStarting}</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
