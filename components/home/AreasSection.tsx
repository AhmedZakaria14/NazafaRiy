'use client';

import React from 'react';
import Link from 'next/link';
import { areasData } from '@/lib/areasData';
import { MapPin, ArrowUpLeft, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function AreasSection() {
  return (
    <section
      id="areas-section"
      className="bg-[#0D0D0D] text-white py-20 sm:py-28 px-6 md:px-12 lg:px-16 border-t border-b border-white/10"
      aria-label="تغطية أحياء ومناطق الرياض"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-3">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>نطاق الخدمة في العاصمة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.2]">
              نغطي كافة أحياء الرياض
              <br />
              <span className="font-semibold text-white">بسرعة استجابة فائقة.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <p className="text-sm sm:text-base text-gray-300 font-light max-w-md">
              أسطول سيارات مجهز متمركز في النقاط الحيوية بالرياض للوصول لمنزلك أو مقرك في غضون 45 إلى 60 دقيقة.
            </p>
            <Link
              id="view-all-areas-link"
              href="/areas"
              className="text-xs text-gray-300 hover:text-white underline underline-offset-4 inline-flex items-center gap-1.5 pt-2"
            >
              <span>استعرض كافة الأحياء والمناطق التفصيلية</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Areas Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasData.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="liquid-glass-card rounded-2xl p-7 flex flex-col justify-between hover:border-white/30 transition-all group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-light text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{area.responseTime}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpLeft className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {area.name}
                </h3>

                <p className="text-xs text-gray-300 font-light leading-relaxed mb-4 line-clamp-2">
                  {area.description}
                </p>

                {/* Neighborhoods Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {area.neighborhoods.slice(0, 5).map((nh, nIdx) => (
                    <span
                      key={nIdx}
                      className="text-[11px] text-gray-300 font-light bg-white/5 px-2 py-0.5 rounded-md"
                    >
                      {nh}
                    </span>
                  ))}
                  {area.neighborhoods.length > 5 && (
                    <span className="text-[11px] text-gray-400 font-light px-1 py-0.5">
                      +{area.neighborhoods.length - 5} أحياء أخرى
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>أبرز الخدمات: {area.popularServices[0]}</span>
              </div>

              <Link
                href={`/areas/${area.slug}`}
                id={`area-card-link-${area.slug}`}
                className="absolute inset-0 z-20"
                aria-label={`تغطية خدمات النظافة في ${area.name}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
