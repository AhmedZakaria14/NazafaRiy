import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: `سياسة الخصوصية وسرية البيانات | ${siteConfig.name}`,
  description: 'سياسة الخصوصية وسرية البيانات لدى شركة صفوة الرياض لخدمات النظافة الفاخرة وفق أنظمة حماية البيانات في المملكة العربية السعودية.',
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  openGraph: {
    title: `سياسة الخصوصية | ${siteConfig.name}`,
    description: 'سياسة الخصوصية وسرية بيانات العملاء لدى صفوة الرياض.',
    url: `${siteConfig.url}/privacy-policy`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">سياسة الخصوصية</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>حماية وسرية بيانات العملاء</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
          سياسة الخصوصية
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
          <p>
            في {siteConfig.name}، نولي سرية وخصوصية بيانات عملائنا في مدينة الرياض أقصى درجات العناية والالتزام بالأنظمة المعمول بها في المملكة العربية السعودية.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. البيانات التي نجمعها</h2>
            <p>
              نقوم بجمع البيانات الضرورية لتقديم خدمة النظافة وتنفيذ المواعيد بدقة، وتشمل: الاسم، رقم الجوال، عنوان العقار والحي في الرياض، وتفاصيل الخدمة المطلوبة.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. استخدام البيانات</h2>
            <p>
              تُستخدم بياناتك حصراً لتنسيق وصول الفريق الميداني، إصدار الفواتير الضريبية، ومتابعة جودة الخدمة ورضا العميل بعد التنفيذ. لا نقوم إطلاقاً ببيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. سرية وخصوصية العقارات</h2>
            <p>
              يلتزم كافة أفراد الطاقم والمشرفين بتوقيع اتفاقيات سرية صارمة تحظر تصوير أو نشر أي محتوى يخص عقارات ومنازل العملاء دون إذن مسبق ومكتوب.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. التواصل والتعديل</h2>
            <p>
              يحق لك في أي وقت طلب تعديل أو حذف بياناتك من سجلاتنا عبر التواصل معنا على البريد: {siteConfig.email} أو عبر رقم خدمة العملاء المباشر.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
