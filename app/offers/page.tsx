import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Sparkles, ArrowLeft, CheckCircle2, ShieldCheck, Tag, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: `باقات وعروض النظافة بالرياض | خصومات حصرية وضمان فندقي | ${siteConfig.name}`,
  description: 'اكتشف باقات وعروض صفوة الرياض الحصرية لتنظيف الفلل، الشقق، المجالس، المكيفات والعقود الدورية بأسعار تنافسية وضمان جودة 100%.',
  keywords: [
    'عروض تنظيف منازل بالرياض',
    'خصومات تنظيف فلل بالرياض',
    'باقات تنظيف مجالس بالبخار',
    'اسعار تنظيف الشقق بالرياض',
    'عروض تنظيف المكيفات بالرياض',
    'عروض جلي الرخام بالرياض'
  ],
  alternates: {
    canonical: `${siteConfig.url}/offers`,
  },
  openGraph: {
    title: `باقات وعروض النظافة بالرياض | ${siteConfig.name}`,
    description: 'باقات متكاملة وخصومات مميزة على خدمات تنظيف الفلل والشقق والمفروشات بالرياض.',
    url: `${siteConfig.url}/offers`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function OffersPage() {
  const offersSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'باقات وعروض صفوة الرياض',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'باقة الفيلا الملكية الشاملة',
        price: '1200',
        priceCurrency: 'SAR',
        description: 'العناية الفندقية الفائقة للمساحات الكبيرة والفلل والقصور',
        url: `${siteConfig.url}/offers#royal-villa`,
      },
      {
        '@type': 'Offer',
        name: 'باقة الشقة المتكاملة',
        price: '480',
        priceCurrency: 'SAR',
        description: 'نقاء وانتعاش تفصيلي للشقق السكنية والعائلات',
        url: `${siteConfig.url}/offers#luxury-apartment`,
      },
      {
        '@type': 'Offer',
        name: 'باقة المجالس والضيافة النجية',
        price: '450',
        priceCurrency: 'SAR',
        description: 'استعادة رونق وفخامة المجالس والسجاد قبل المناسبات',
        url: `${siteConfig.url}/offers#majlis-care`,
      },
      {
        '@type': 'Offer',
        name: 'باقة الصيف المتكاملة (مكيفات + خزانات)',
        price: '550',
        priceCurrency: 'SAR',
        description: 'صيانة تنفسية ومائية شاملة للوقاية من حرارة وغبار الصيف',
        url: `${siteConfig.url}/offers#summer-refresh`,
      },
    ],
  };

  const packages = [
    {
      id: 'royal-villa',
      title: 'باقة الفيلا الملكية الشاملة',
      subtitle: 'العناية الفندقية الفائقة للمساحات الكبيرة',
      tag: 'الأكثر طلباً للفلل',
      popular: true,
      price: 'من 1,200 ريال',
      originalPrice: '1,500 ريال',
      features: [
        'تنظيف عميق لجميع الغرف والصالات ودورات المياه',
        'جلي وتلميع الصالة الرئيسية بالماس الإسباني',
        'غسيل مجلسين رجالي ونسائي بالبخار الساخن',
        'تعقيم مركزي للمطبخ وإزالة دهانات الأفران',
        'تلميع النوافذ والواجهات الزجاجية للفيلا',
        'تبخير ملكي بالعود الطبيعي والمستكة الفاخرة',
        'مشرف جودة مخصص مع تقرير تسليم تفصيلي'
      ],
      idealFor: 'الفلل المستقلة، الدوبلكسات، والقصور',
      slug: 'villa-cleaning-riyadh'
    },
    {
      id: 'luxury-apartment',
      title: 'باقة الشقة المتكاملة',
      subtitle: 'نقاء وانتعاش تفصيلي للشقق السكنية',
      tag: 'مثالية للعائلات',
      popular: false,
      price: 'من 480 ريال',
      originalPrice: '600 ريال',
      features: [
        'تنظيف وتطهير شامل لكافة الغرف والممرات',
        'غسيل طقم الكنب الأساسي بالرغوة الجافة',
        'تلميع السيراميك والبورسلان وإزالة تكلسات الفواصل',
        'تنظيف زجاج النوافذ والمطابخ والأبواب',
        'تعقيم مضاد للبكتيريا وتعطير بزيوت اللافندر'
      ],
      idealFor: 'الشقق السكنية من 3 إلى 5 غرف',
      slug: 'home-cleaning-riyadh'
    },
    {
      id: 'majlis-hospitality',
      title: 'باقة المجالس والضيافة',
      subtitle: 'استقبال ضيوفك بأعلى درجات النظافة والفخامة',
      tag: 'عناية خاصة بالأقمشة',
      popular: false,
      price: 'من 390 ريال',
      originalPrice: '500 ريال',
      features: [
        'غسيل كنب المجلس والسجاد بالحقن والاستخلاص المائي',
        'إزالة البقع المستعصية والعصائر والقهوة',
        'تلميع الطاولات الرخامية والتحف والجبسيات',
        'تطهير مساند الظهر والوسائد بالأشعة والبخار',
        'تبخير ملكي برائحة العود والمروكي الأصلي'
      ],
      idealFor: 'المجالس الرجالية والنسائية وصالات الاستقبال',
      slug: 'majlis-cleaning-riyadh'
    },
    {
      id: 'periodic-care',
      title: 'باقة الصيانة والنظافة الدورية',
      subtitle: 'زيارات منتظمة تحافظ على لمعان ونقاء منزلك',
      tag: 'عقود شهرية وسنوية',
      popular: false,
      price: 'خصم 25% على العقود',
      originalPrice: '',
      features: [
        'جدولة زيارات أسبوعية أو نصف شهرية ثابتة',
        'نفس طاقم العمل المتمرس لتأمين أقصى درجات الراحة',
        'صيانة دورية للأرضيات والأقمشة والزجاج',
        'أولوية الحجز في مواسم الأعياد والمناسبات',
        'تقارير جودة شهرية وفواتير ضريبية معتمدة'
      ],
      idealFor: 'المنازل المشغولة، الفلل، والمقرات الإدارية',
      slug: 'office-cleaning-riyadh'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
      />
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-white">العروض والباقات</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <Tag className="w-3.5 h-3.5 text-white" />
            <span>باقات متكاملة بقيمة مضافة</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-6">
            باقات وعروض النظافة
            <br />
            <span className="font-semibold text-white">المصممة لعقارات الرياض.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            اختر الباقة المتكاملة التي تجمع عدة خدمات معاً لتوفر الوقت والجهد والتكلفة، مع الالتزام بأعلى مقاييس الجودة والتعقيم.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'liquid-glass border-2 border-white/40 shadow-2xl bg-black/60'
                  : 'liquid-glass-card hover:border-white/25'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 right-8 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-black" />
                  <span>{pkg.tag}</span>
                </span>
              )}

              <div>
                {!pkg.popular && (
                  <span className="inline-block text-xs font-light text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-4">
                    {pkg.tag}
                  </span>
                )}

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    {pkg.title}
                  </h2>
                  <div className="flex items-baseline gap-2">
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-400 line-through font-light">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold text-white">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-light mb-8">
                  {pkg.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400 font-light">
                  مثالية لـ: {pkg.idealFor}
                </span>
                <Link
                  id={`offer-book-btn-${pkg.id}`}
                  href={`/request-service?service=${pkg.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-md"
                >
                  <span>حجز هذه الباقة</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">هل ترغب في باقة مخصصة لمنزلك؟</h3>
              <p className="text-xs text-gray-400 font-light">تواصل مع خبرائنا لتصميم جدول وباقة مخصصة تناسب مساحتك وميزانيتك تماماً.</p>
            </div>
          </div>
          <Link
            id="offers-custom-contact-btn"
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 transition-colors shrink-0"
          >
            تواصل مع استشاري النظافة
          </Link>
        </div>
      </div>
    </div>
  );
}
