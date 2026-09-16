import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: `من نحن | معايير الفخامة والريادة في خدمات النظافة | ${siteConfig.name}`,
  description: 'تعرف على قصة صفوة الرياض، معاييرنا القياسية في خدمات النظافة الفاخرة، وفلسفتنا في العناية بالمساكن والمنشآت الراقية بأحدث التقنيات. للتواصل المباشر: 0575386029.',
  keywords: [
    'عن صفوة الرياض',
    'شركة تنظيف معتمدة بالرياض',
    'افضل شركة نظافة بالرياض',
    'رؤية صفوة الرياض',
    'خدمات نظافة فندقية بالرياض',
    '0575386029'
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `من نحن | ${siteConfig.name}`,
    description: 'قصة ورؤية صفوة الرياض في إعادة صياغة مفهوم النظافة الفاخرة والعناية بالعقارات في الرياض. هاتف: 0575386029.',
    url: `${siteConfig.url}/about`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `من نحن - ${siteConfig.name}`,
    description: 'تعرف على معاييرنا وفريق عملنا في تقديم خدمات النظافة الفاخرة في مدينة الرياض.',
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`,
      description: siteConfig.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressLocality: 'الرياض',
        addressRegion: 'منطقة الرياض',
        addressCountry: 'SA',
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Editorial Hero */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pb-20 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">من نحن</span>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-6">
            <span>رؤيتنا وقيمنا الأساسية</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight leading-[1.18] text-white mb-8">
            نؤمن أن النظافة
            <br />
            <span className="font-semibold text-white">ليست مجرد خدمة.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
            إنها إحساس بالسكينة والفخامة يبدأ من أدق التفاصيل غير المرئية، لينعكس على صحة أفراد عائلتك وإنتاجية فريق عملك.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-light block">
              قصة صفوة الرياض
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-snug">
              إعادة تعريف معايير النظافة
              <br />
              <span className="font-semibold text-white">في العاصمة الرياض.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              تأسست شركة صفوة الرياض لتضع حداً للأساليب التقليدية العشوائية في قطاع النظافة. انطلقنا من قناعة راسخة بأن الفلل والقصور والشقق الفاخرة في الرياض تستحق معاملة فندقية خاصة تجمع بين التقنيات المتطورة والسرية والأمانة التامة.
            </p>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              نستثمر بشكل دائم في أحدث ماكينات استخلاص الأتربة الألمانية ومعدات جلي الرخام الإيطالية، ونعتمد منظفات عضوية مصرحة بيئياً وصحياً من الهيئة العامة للغذاء والدواء.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl liquid-glass border border-white/10">
                <span className="text-2xl font-semibold text-white block mb-1">+10 سنوات</span>
                <span className="text-xs text-gray-400 font-light">خبرة تراكمية في إدارة النظافة</span>
              </div>
              <div className="p-4 rounded-xl liquid-glass border border-white/10">
                <span className="text-2xl font-semibold text-white block mb-1">100%</span>
                <span className="text-xs text-gray-400 font-light">كوادر مدربة وتحت إشراف مباشر</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="معايير صفوة الرياض"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute bottom-6 right-6 left-6 p-6 rounded-2xl liquid-glass border border-white/15">
              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                &ldquo;نهتم بكل زاوية لا تراها العين المجردة، لأن التميز الحقيقي يكمن في ما هو غير مرئي.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#0A0A0A] py-20 px-6 md:px-12 lg:px-16 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              الركائز التي نبني عليها ثقتكم
            </h2>
            <p className="text-sm text-gray-400 font-light">
              مبادئ لا نساوم عليها في كل زيارة لأي منزل أو شركة بالرياض.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="liquid-glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">الأمان والموثوقية التامة</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                جميع أفراد الطاقم خاضعون للتحقق الأمني والفحص الطبي، ويلتزمون بالسرية والخصوصية التامة داخل العقارات السكنية.
              </p>
            </div>

            <div className="liquid-glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">دقة التفاصيل المعمارية</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                ندرك قيمة المواد الفاخرة من رخام طبيعي وأخشاب نبيلة وأقمشة مستوردة، ونستخدم المواد المناسبة التي تحافظ عليها.
              </p>
            </div>

            <div className="liquid-glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">ضمان الرضا الفوري</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                لا نغادر الموقع حتى يقوم العميل بفحص العمل بمرافقة مشرف الجودة والتأكد من مطابقة النتائج لتوقعاته الكاملة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pt-20 text-center">
        <div className="p-10 sm:p-14 rounded-3xl liquid-glass border border-white/15 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            انضم إلى أكثر من 12,000 عميل يثقون بنا في الرياض
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl mx-auto">
            احجز زيارة لفيلتك أو شقتك أو مقر عملك واستمتع بأعلى مستويات النظافة والترتيب.
          </p>
          <div className="pt-2">
            <Link
              id="about-cta-btn"
              href="/request-service"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl"
            >
              اطلب خدمتك الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
