import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, HelpCircle, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { FaqAccordion } from '@/components/faq/FaqAccordion';

export const metadata: Metadata = {
  title: `الأسئلة الشائعة | كل ما تحتاج معرفته عن خدمات النظافة | ${siteConfig.name}`,
  description: 'إجابات شاملة ومفصلة عن كافة الأسئلة الشائعة حول خدمات تنظيف الفلل، جلي الرخام، غسيل الكنب بالبخار، الأسعار، الضمان، وطرق الحجز في الرياض.',
  keywords: [
    'اسئلة شائعة تنظيف منازل بالرياض',
    'كم سعر تنظيف الفلل بالرياض',
    'طريقة حجز شركة تنظيف بالرياض',
    'ضمان خدمات النظافة',
    'تنظيف كنب بالبخار تجفيف سريع',
    'جلي الرخام بالماس والكريستال'
  ],
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: `الأسئلة الشائعة حول خدمات النظافة | ${siteConfig.name}`,
    description: 'إجابات موثوقة ومفصلة حول مدة العمل، الأسعار، الضمان، والمواد المستخدمة في خدمات صفوة الرياض.',
    url: `${siteConfig.url}/faq`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

const faqCategories = [
  {
    category: 'عام وعمليات الحجز',
    items: [
      {
        q: 'كيف يمكنني حجز خدمة نظافة في الرياض؟',
        a: 'يمكنك الحجز بسهولة عبر موقعنا الإلكتروني من خلال صفحة "طلب خدمة"، أو عبر التواصل المباشر مع خدمة العملاء عبر واتساب أو الاتصال الهاتفي. يتم تأكيد الموعد خلال دقائق معدودة.',
      },
      {
        q: 'هل تقدمون خدمات النظافة في نفس اليوم بالرياض؟',
        a: 'نعم، بفضل انتشار أسطولنا في مختلف قطاعات الرياض (الشمال، الشرق، الغرب، الجنوب، والوسط)، نوفر خدمة الحجز الفوري في نفس اليوم وفق توفر السعة التشغيلية.',
      },
      {
        q: 'ما هي طرق الدفع المتاحة لديكم؟',
        a: 'نقبل الدفع عبر مدى، فيزا، ماستركارد، Apple Pay، والتحويل البنكي، بالإضافة إلى الدفع عند اكتمال الخدمة واستلام العقار.',
      },
    ],
  },
  {
    category: 'الفلل والشقق السكنية',
    items: [
      {
        q: 'ما الذي تشمله خدمة تنظيف الفلل الجديدة بعد التشطيب؟',
        a: 'تشمل إزالة بقايا الدهانات والإسمنت والجبس من الأرضيات والنوافذ، تنظيف واجهات الزجاج، غسيل الخزانات العلوية والأرضية، تطهير المطابخ ودورات المياه، وجلي وتلميع الأرضيات.',
      },
      {
        q: 'هل أحتاج للتواجد في المنزل طوال فترة التنظيف؟',
        a: 'ليس بالضرورة؛ حيث يتولى مشرف جودة مخصص إدارة ومتابعة الفريق بدقة. يمكنك تسليم المفاتيح للمشرف والعودة عند اكتمال العمل للاستلام والتقييم النهائي.',
      },
    ],
  },
  {
    category: 'الكنب، السجاد والمجالس',
    items: [
      {
        q: 'هل يترك غسيل الكنب والسجاد بالبخار أي بلل أو رطوبة؟',
        a: 'نستخدم أجهزة الحقن والاستخلاص الإيطالية ذات قدرة الشفط الفائقة التي تسحب 95% من الرطوبة، مما يتيح جفاف الكنب والسجاد تماماً خلال ساعتين إلى 3 ساعات كحد أقصى.',
      },
      {
        q: 'هل تؤثر مواد التنظيف على ألوان وجودة الأقمشة الحساسة مثل المخمل والحرير؟',
        a: 'نقوم بإجراء اختبار نقطي مسبق على جزء مخفي من النسيج لتحديد مستوى الحموضة المناسب (pH Neutral)، واستخدام منظفات إنزيمية متخصصة تحافظ على ثبات الألوان ونعومة النسيج.',
      },
    ],
  },
  {
    category: 'جلي وتلميع الرخام',
    items: [
      {
        q: 'ما هو الفرق بين الجلي بالماس والجلي بالكريستال؟',
        a: 'الجلي بالماس هو مرحلة معالجة عميقة لإزالة الخدوش وفروق المناسيب بين ألواح الرخام، بينما مرحلة الكريستال الإيطالي هي طبقة حماية ولمعان فائق تعيد للرخام بريقه الزجاجي الطبيعي دون أي طبقات شمعية مصطنعة.',
      },
      {
        q: 'هل يسبب جلي الرخام تصاعد أي غبار أو أتربة في المنزل؟',
        a: 'إطلاقاً، نعتمد تقنية الجلي المائي الإيطالية الحديثة مع أجهزة شفط الرواسب، مما يضمن بيئة عمل نظيفة تماماً دون أي إزعاج لأهل المنزل.',
      },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-white">الأسئلة الشائعة</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>مركز المساعدة والإجابات الشاملة</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-6">
            الأسئلة الأكثر شيوعاً
            <br />
            <span className="font-semibold text-white">حول خدماتنا في الرياض.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
            جمعنا لك هنا كافة التفاصيل المتعلقة بآلية العمل، المواد المعتمدة، مدد التنفيذ، ومعايير الجودة والضمان.
          </p>
        </div>

        {/* Categories Accordion */}
        <FaqAccordion categories={faqCategories} />

        {/* CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl liquid-glass border border-white/15 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            هل لديك استفسار آخر لم تجد إجابته هنا؟
          </h3>
          <p className="text-sm text-gray-300 font-light max-w-xl mx-auto">
            فريق خدمة العملاء متاح للإجابة الفورية وتحديد أفضل باقة مناسبة لعقارك.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              id="faq-cta-booking-btn"
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all shadow-xl"
            >
              <span>طلب الخدمة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
            >
              صفحة التواصل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
