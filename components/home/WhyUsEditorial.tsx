'use client';

import React from 'react';
import { Sparkles, Shield, Cpu, Users, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyUsEditorial() {
  const stats = [
    { value: '+12,500', label: 'فيلا ومنزل ومقر تم خدمته بالرياض' },
    { value: '99.8%', label: 'نسبة رضا العملاء وتقييم 5 نجوم' },
    { value: '45 دقيقة', label: 'متوسط سرعة استجابة فرق العمل' },
    { value: '100%', label: 'منظفات عضوية آمنة ومعتمدة' },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: 'تقنيات أوروبية فائقة الدقة',
      desc: 'نستخدم مكائن جلي الرخام الكوكبي Klindex وأجهزة البخار الحار Kärcher بدرجة 180° مئوية لضمان تعقيم عميق دون إتلاف الأنسجة.',
    },
    {
      icon: Users,
      title: 'كوادر محترفة ومشرف جودة',
      desc: 'كل عملية تنظيف يقودها مشرف جودة ميداني للتأكد من تطبيق معايير السلامة والتسليم الدقيق وفق قائمة التدقيق المعيارية.',
    },
    {
      icon: Shield,
      title: 'مواد عضوية معتمدة صحياً',
      desc: 'نستخدم محاليل تنظيف وتطهير خالية من المواد الكاوية أو الروائح النفاذة، آمنة تماماً للأطفال والحوامل والحيوانات الأليفة.',
    },
    {
      icon: Award,
      title: 'لمسة التعطير الملكي',
      desc: 'نختتم جلسات تنظيف المجالس والفلل ببروتوكول التبخير بالعود الفاخر والزيوت العطرية النقية لتدوم رائحة الانتعاش أياماً.',
    },
  ];

  return (
    <section
      id="why-us-section"
      className="bg-black text-white py-20 sm:py-28 px-6 md:px-12 lg:px-16 relative overflow-hidden border-t border-b border-white/10"
      aria-label="فلسفة صفوة الرياض"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>فلسفة العناية بالمكان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] text-white">
            نؤمن أن النظافة
            <br />
            <span className="font-semibold text-white">ليست مجرد خدمة تقليدية.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light mt-6 leading-relaxed">
            إنها إحساس بالسكينة والفخامة ينعكس في كل زاوية من منزلك. نعيد لكل تفصيلة بريقها الأصلي لنمنحك بيئة صحية تليق بأسلوب حياتك في الرياض.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-16 border-b border-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-light leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid with Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="liquid-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
