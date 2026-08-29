'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'هل تستخدمون مواد تنظيف آمنة للأطفال والحيوانات الأليفة؟',
      a: 'نعم، نعتمد حصرياً على منظفات ومعقمات عضوية حاصلة على اعتمادات الهيئة العامة للغذاء والدواء ومعايير السلامة الأوروبية، خالية تماماً من الأحماض الكاوية أو الروائح النفاذة المزعجة.',
    },
    {
      q: 'كم يستغرق تنظيف الفيلا أو الشقة السكنية؟',
      a: 'تعتمد المدة على المساحة ونوع الخدمة؛ تتراوح مدة تنظيف الشقق بين ساعتين ونصف إلى 4 ساعات، بينما تستغرق الفلل من 4 إلى 8 ساعات مع فريق عمل متكامل ومشرف جودة ميداني.',
    },
    {
      q: 'هل توفرون ضماناً على إزالة بقع الكنب والمجالس؟',
      a: 'نقدم ضمان الجودة ورضا العميل بنسبة 100%. يتم فحص نوع النسيج مسبقاً وتطبيق المعالجة الإنزيمية الدقيقة. وفي حال وجود أي ملاحظة نقوم بإعادة المعالجة فوراً دون أي تكلفة إضافية.',
    },
    {
      q: 'هل يمكن حجز موعد في نفس اليوم أو فترات مسائية؟',
      a: 'نعم، بفضل انتشار أسطولنا في أحياء شمال، شرق، غرب، وسط، وجنوب الرياض، نوفر خدمات الطوارئ والمواعيد في نفس اليوم، بالإضافة إلى جداول مسائية مرنة للشركات والمنازل.',
    },
    {
      q: 'كيف تتم عملية جلي وتلميع الرخام بدون غبار؟',
      a: 'نستخدم مكائن جلي إيطالية تعتمد على نظام الجلي المائي بالماس الطبيعي ومزودة بأنظمة شفط متقدمة، مما يمنع انبعاث أي غبار أو أتربة في المنزل ويحافظ على سلامة الأثاث والديكورات.',
    },
  ];

  return (
    <section
      id="faq-section"
      className="bg-[#F7F7F5] text-black py-20 sm:py-28 px-6 md:px-12 lg:px-16 relative"
      aria-label="الأسئلة الشائعة"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black/70 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>إجابات واضحة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black leading-[1.2]">
            الأسئلة الأكثر تداولاً
            <br />
            <span className="font-semibold text-black">حول خدماتنا في الرياض.</span>
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-right gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg md:text-xl font-normal text-black group-hover:text-gray-800 transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black shrink-0 transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra FAQ Link */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="text-xs sm:text-sm text-black underline underline-offset-4 font-medium hover:opacity-70 transition-opacity"
          >
            عرض كافة الأسئلة الشائعة وتفاصيل الحجز والأسعار →
          </Link>
        </div>
      </div>
    </section>
  );
}
