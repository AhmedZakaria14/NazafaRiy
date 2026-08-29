'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MapPin, Truck, Sparkle } from 'lucide-react';
import Link from 'next/link';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: 'اختر نوع الخدمة والموعد',
      desc: 'حدد الخدمة المطلوبة (فلل، شقق، كنب، مجالس، رخام) والوقت الأنسب لجدولك اليومي عبر موقعنا أو عبر واتساب.',
    },
    {
      number: '02',
      icon: MapPin,
      title: 'حدد موقعك في الرياض',
      desc: 'أرسل موقع منزلك أو مقرك في أي حي من أحياء شمال، شرق، غرب، جنوب، أو وسط الرياض لنصلك في الموعد المحدد.',
    },
    {
      number: '03',
      icon: Truck,
      title: 'يصلك فريقنا المتخصص بمعداته',
      desc: 'فريق عمل متكامل بقيادة مشرف جودة مجهز بأحدث ماكينات البخار والجلي والمواد المعقمة المعتمدة.',
    },
    {
      number: '04',
      icon: Sparkle,
      title: 'نعتني بكل التفاصيل ونسلمك المكان',
      desc: 'تنفيذ دقيق لكافة متطلبات النظافة والتعقيم والتعطير مع فحص تسليم مفصل يضمن رضاك التام بنسبة 100%.',
    },
  ];

  return (
    <section
      id="process-section"
      className="bg-white text-black py-20 sm:py-28 px-6 md:px-12 lg:px-16 relative"
      aria-label="خطوات العمل"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black/70 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>آلية العمل السلسة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.2]">
              أربع خطوات بسيطة
              <br />
              <span className="font-semibold text-black">لتجربة نظافة استثنائية.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-700 font-light max-w-md">
            صممنا بروتوكول عمل منظم يضمن لك تجربة مريحة وخالية من الفوضى، من أول نقرة حجز وحتى استلام المكان معطراً.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between pt-6 border-t-2 border-black/15 hover:border-black transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-light tracking-tighter text-black/50 group-hover:text-black transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <span className="text-[11px] font-medium text-gray-500 group-hover:text-black transition-colors">
                  خطوة {step.number} من 04
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner inside process */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#000000] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
              جاهز لحجز موعدك مع فريق صفوة الرياض؟
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              خدمة حجز فورية في أقل من دقيقة، نصلك في أي حي داخل مدينة الرياض.
            </p>
          </div>
          <Link
            id="process-cta-btn"
            href="/request-service"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-md shrink-0"
          >
            احجز موعدك الآن
          </Link>
        </div>
      </div>
    </section>
  );
}
