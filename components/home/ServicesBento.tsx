'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/lib/servicesData';
import { ArrowUpLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ServicesBento() {
  return (
    <section
      id="services-bento-section"
      className="bg-[#F7F7F5] text-black py-20 sm:py-28 px-6 md:px-12 lg:px-16 relative"
      aria-label="خدمات النظافة المتخصصة"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black/70 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>خدماتنا المتخصصة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.2]">
              عناية احترافية فائقة
              <br />
              <span className="font-semibold text-black">لكل ركن في عقارك.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm sm:text-base text-gray-600 font-light max-w-md">
              نجمع بين المعدات الأوروبية المتقدمة والمواد الآمنة والكوادر المدربة لتقديم تجربة تنظيف فريدة في الرياض.
            </p>
            <Link
              id="view-all-services-link"
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-75 transition-opacity underline underline-offset-4"
            >
              <span>استعرض الدليل الكامل للخدمات ({servicesData.length})</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {servicesData.slice(0, 6).map((service, index) => {
            // Determine layout spans
            const isLarge = index === 0;
            const spanClass = isLarge
              ? 'md:col-span-8 lg:col-span-8 md:row-span-2 min-h-[440px] lg:min-h-[560px]'
              : index === 1
              ? 'md:col-span-4 lg:col-span-4 min-h-[280px] lg:min-h-[320px]'
              : index === 2
              ? 'md:col-span-4 lg:col-span-4 min-h-[280px] lg:min-h-[320px]'
              : 'md:col-span-6 lg:col-span-4 min-h-[300px]';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-black flex flex-col justify-end p-6 sm:p-8 ${spanClass}`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark gradient INSIDE card image only for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-light text-gray-300 tracking-wider bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {service.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpLeft className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`font-semibold tracking-tight text-white mb-2 transition-transform duration-300 group-hover:translate-x-1 ${
                    isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Pricing / Duration pill */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                    <span>{service.pricingStarting}</span>
                    <span className="text-gray-300 font-light">{service.estimatedDuration}</span>
                  </div>

                  {/* Direct Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    id={`service-card-link-${service.slug}`}
                    className="absolute inset-0 z-20"
                    aria-label={`عرض تفاصيل ${service.title}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature List */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-black/10">
          {[
            { title: 'أجهزة ألمانية وإيطالية', desc: 'تقنيات بخار وجلي متطورة' },
            { title: 'مواد عضوية معتمدة', desc: 'آمنة للأطفال والحيوانات الأليفة' },
            { title: 'تغطية شاملة للرياض', desc: 'وصول سريع لكافة الأحياء' },
            { title: 'ضمان رضا 100%', desc: 'إعادة المعالجة مجاناً إن لم ترضَ' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-black">{item.title}</h4>
                <p className="text-xs text-gray-600 font-light mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
