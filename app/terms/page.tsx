import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: `الشروط والأحكام والضمان | ${siteConfig.name}`,
  description: 'الشروط والأحكام ومعايير الضمان والالتزام الخاصة بحجز وتنفيذ خدمات النظافة لدى شركة صفوة الرياض.',
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: `الشروط والأحكام | ${siteConfig.name}`,
    description: 'الشروط والأحكام وضوابط جودة الخدمة وضمان الـ 72 ساعة لدى صفوة الرياض.',
    url: `${siteConfig.url}/terms`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function TermsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">الشروط والأحكام</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
          <FileText className="w-3.5 h-3.5 text-white" />
          <span>شروط الخدمة والتعاقد</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
          الشروط والأحكام
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. نطاق تقديم الخدمة</h2>
            <p>
              تُقدم خدمات {siteConfig.name} داخل النطاق العمراني لمدينة الرياض وضواحيها المعتمدة. يتم تحديد التكلفة النهائية بناءً على المعاينة الميدانية أو التفاصيل المقدمة من العميل عند الحجز.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. فحص التسليم وضمان الجودة</h2>
            <p>
              يلتزم العميل (أو من ينوب عنه) بفحص الأعمال المنفذة بمرافقة مشرف الجودة قبل مغادرة الفريق. في حال وجود أي ملاحظة، يتم تصحيحها فوراً دون أي رسوم إضافية.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. إلغاء وإعادة جدولة المواعيد</h2>
            <p>
              يمكن للعميل تعديل أو إلغاء الموعد مجاناً قبل ساعتين على الأقل من موعد الزيارة المحدد، وذلك لتمكيننا من إعادة توجيه الفرق الميدانية.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. المواد والمعدات</h2>
            <p>
              تلتزم الشركة بتوفير كافة الأجهزة والمعدات والمنظفات اللازمة لتنفيذ الخدمة وفق أعلى المعايير الصحية والبيئية المعتمدة في المملكة العربية السعودية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
