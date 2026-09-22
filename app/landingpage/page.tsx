'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { SafwaLogo } from '@/components/ui/SafwaLogo';
import {
  Phone,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Star,
  ChevronDown,
  ArrowLeft,
  MapPin,
  Award,
  Calendar,
  Building2,
  Home,
  Check,
  BadgeCheck,
  Headphones,
  Users,
  Sparkles,
} from 'lucide-react';

interface ServiceOffer {
  id: string;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  unit?: string;
  tag?: string;
  desc: string;
  features: string[];
}

const servicesList: ServiceOffer[] = [
  {
    id: 'apartment',
    name: 'تنظيف شامل للشقق',
    category: 'شقق سكنية',
    price: '299 ر.س',
    priceNum: 299,
    tag: 'العرض الأكثر طلباً',
    desc: 'تنظيف فندقي متكامل لجميع الغرف، الصالات، دورات المياه والمطابخ بأحدث ماكينات البخار وتلميع السيراميك.',
    features: [
      'غسيل وتلميع الأرضيات والممرات',
      'تعقيم عميق للمطابخ ودورات المياه',
      'تنظيف النوافذ ومجاري الألمنيوم',
      'مسح الأبواب والإنارة والجبسيات',
    ],
  },
  {
    id: 'floor',
    name: 'تنظيف دور كامل',
    category: 'أدوار مستقلة',
    price: '350 ر.س',
    priceNum: 350,
    tag: 'عرض خاص',
    desc: 'عناية شاملة للأدوار المستقلة والملحقات، تشمل المجالس الواسعة، المطابخ الكبيرة، والممرات بأيدي عمالة متخصصة.',
    features: [
      'تنظيف شامل للمجالس وصالات الاستقبال',
      'إزالة بقع الدهون والزيوت من المطابخ',
      'غسيل وتطهير كافة دورات المياه والمستودع',
      'تنظيف وتعقيم البلكونات والنوافذ',
    ],
  },
  {
    id: 'villa',
    name: 'تنظيف وتجهيز الفلل',
    category: 'فلل وقصور',
    price: '750 ر.س',
    priceNum: 750,
    tag: 'باقة متكاملة',
    desc: 'برنامج نظافة شامل لكامل مرافق الفيلا من الداخل والخارج، متضمناً الحوش الخارجي، المداخل، والأسطح.',
    features: [
      'تنظيف داخلي متكامل لكافة الأدوار والغرف',
      'غسيل الحوش والمداخل والأرضيات الخارجية',
      'تنظيف وتلميع الدرج والدرابزين الزجاجي/الحديد',
      'طاقم عمل كامل بقيادة مشرف ميداني مسؤول',
    ],
  },
  {
    id: 'sofa',
    name: 'غسيل مجالس وكنب بالبخار الحار',
    category: 'مفروشات وأقمشة',
    price: '199 ر.س',
    priceNum: 199,
    tag: 'تجفيف سريع',
    desc: 'تقنية البخار الحار 140 درجة لشفط الأتربة العميقة، القضاء على حشرات الفراش والبكتيريا، وإزالة أصعب البقع.',
    features: [
      'إزالة البقع العنيدة والمستعصية',
      'تعقيم حراري ومكافحة مسببات الحساسية',
      'شفط مائي قوي وتجفيف خلال 60 دقيقة',
      'مواد حماية للأقمشة من الاتساخ المستقبلي',
    ],
  },
  {
    id: 'ac',
    name: 'غسيل وصيانة المكيفات السبليت',
    category: 'تكييف وتبريد',
    price: '79 ر.س',
    priceNum: 79,
    unit: 'للمكيف',
    tag: 'ضمان الكفاءة',
    desc: 'تنظيف عميق للوحدات الداخلية والخارجية بمضخات الضغط مع عزل وحماية الجدران والأثاث المحيط.',
    features: [
      'غسيل كامل للفلاتر والكويل والمروحة الداخلية',
      'تسليك مجرى الصرف لمنع تسريب المياه',
      'فحص قياس غاز الفريون وكفاءة التبريد',
      'تعقيم ضد الروائح الكريهة والعفن الداخلي',
    ],
  },
  {
    id: 'marble',
    name: 'جلي وتلميع الرخام الإيطالي',
    category: 'أرضيات ورخام',
    price: '15 ر.س',
    priceNum: 15,
    unit: 'للمتر المربع',
    tag: 'كريستال إسباني',
    desc: 'معالجة فواصل التمدد، إزالة الخدوش بالأقراص الماسية، وتطبيق طبقة تلميع وحماية بلورية فائقة الانعكاس.',
    features: [
      'إزالة التموجات والخدوش السطحية والعميقة',
      'تعبئة الفواصل بمادة الجولي المطابقة للون الرخام',
      'تلميع بمادة الكريستال الإسبانية الأصلية',
      'ضمان لمعان ومقاومة لامتصاص السوائل',
    ],
  },
];

const trustPillars = [
  {
    title: 'كوادر فنية مدربة ومعتمدة',
    desc: 'عمالة نظامية متخصصة ومقيمة تخضع لفحوصات دورية وتدريب احترافي على أعلى معايير العناية بالممتلكات.',
  },
  {
    title: 'منظفات ألمانية مصرحة وصديقة للبيئة',
    desc: 'نستخدم مستحضرات آمنة تماماً على صحة الأطفال، كبار السن، والحيوانات الأليفة، بدون روائح كيميائية نفاذة.',
  },
  {
    title: 'دقة المواعيد وسرعة التواجد',
    desc: 'فرق عمل متمركزة في مختلف قطاعات الرياض (الشمال، الشرق، الغرب، والجنوب) لضمان الوصول في الموعد المحدد.',
  },
  {
    title: 'ضمان ذهبي لإعادة التنظيف مجاناً',
    desc: 'لا تنتهي مهمتنا إلا برضاك التام؛ يحق للعميل طلب إعادة تنظيف أي ملاحظة مجاناً خلال فترة الضمان.',
  },
  {
    title: 'تسعير واضح وعقود واضحة',
    desc: 'أسعار نهائية وثابتة بدون أي رسوم خفية أو تكاليف إضافية لنقل العمالة والمعدات داخل نطاق مدينة الرياض.',
  },
  {
    title: 'إشراف فني وخدمة عملاء مستمرة',
    desc: 'مشرف ميداني مباشر لكل فريق عمل للتأكد من تطبيق قائمة الجودة، مع دعم هاتفي فوري على مدار الساعة.',
  },
];

const customerReviews = [
  {
    name: 'عبدالله السبيعي',
    district: 'حي الملقا - الرياض',
    service: 'تنظيف شقة 299 ريال',
    rating: 5,
    comment:
      'التزام بالميعاد بالدقيقة وفريق العمل محترم ومحترف جداً. نظفوا المطبخ والحمامات بدرجة فندقية ما شاء الله. السعر 299 ريال شامل كل شيء بدون أي زيادة.',
  },
  {
    name: 'أم فيصل الشمري',
    district: 'حي النرجس - الرياض',
    service: 'تنظيف دور وفيلا',
    rating: 5,
    comment:
      'جربت شركات كثيرة بالرياض، لكن صفوة الرياض صراحة مميزين بالحرص والأمانة والمواد اللي بدون روائح مزعجة. المشرف كان دقيق في كل زاوية.',
  },
  {
    name: 'م. خالد القحطاني',
    district: 'حي الروضة - الرياض',
    service: 'غسيل كنب ومجالس بالبخار',
    rating: 5,
    comment:
      'الكنب رجع جديد بعد ما كان فيه بقع قهوة قديمة وصعبة. التجفيف كان سريع جداً واستلمت المجلس معقم وريحته نظافة منعشة. أنصح بالتعامل معهم بشدة.',
  },
];

const faqs = [
  {
    q: 'ما الذي تشمله خدمة تنظيف الشقة بسعر 299 ريال؟',
    a: 'تشمل الخدمة تنظيفاً شاملاً لكافة أجزاء الشقة: غسيل وتلميع الأرضيات، مسح وتطهير الجدران والأسقف، تنظيف وتعقيم المطبخ من الدهون، تنظيف وتطهير دورات المياه كاملة، مسح الأبواب والشبابيك ومجاري الألمنيوم، وتعطير المكان بمواد منعشة تدوم طويلاً.',
  },
  {
    q: 'هل توجد أي مبالغ أو مصاريف إضافية للنقل والمعدات؟',
    a: 'لا، الأسعار المعلنة نهائية وشاملة أجور العمالة، المعدات الكهربائية الألمانية، ومواد التنظيف والتعقيم لكافة أحياء ومناطق الرياض دون أي تكلفة إضافية.',
  },
  {
    q: 'كيف يتم تأكيد الحجز وموعد وصول الفريق؟',
    a: 'بمجرد اختيار الخدمة والضغط على زر الحجز عبر الواتساب أو الاتصال بالرقم 0575386029، يتواصل معك منسق الحجوزات لتحديد الساعة المناسبة لموقعك، ويصلك الفريق الميداني في الموعد المحدد مباشرة.',
  },
  {
    q: 'ما هو الضمان المقدم على الخدمة؟',
    a: 'نلتزم بسياسة الضمان الذهبي: تتم معاينة كافة الأعمال برفقة العميل قبل مغادرة الفريق، وفي حال وجود أي ملاحظة تتم معالجتها فوراً أو إعادة تنظيف المكان مجاناً.',
  },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const getWhatsAppLink = (serviceName: string, price: string) => {
    const message = `السلام عليكم، أود حجز ${serviceName} بسعر ${price} المعلن في الموقع.`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#08101e] text-slate-100 font-sans selection:bg-[#c99738] selection:text-[#08101e] pb-32 sm:pb-24 antialiased">
      {/* ===================== TOP NOTIFICATION BAR ===================== */}
      <div className="bg-[#0b172d] border-b border-[#1f3152] py-2.5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-medium text-white">خدمات النظافة الميدانية متاحة الآن في جميع أحياء الرياض</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">حجز فوري ومعاينة مجانية</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-[#e2ad47] font-bold hover:text-white transition-colors"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* ===================== MAIN WRAPPER ===================== */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        {/* ===================== BRAND HERO CARD ===================== */}
        <header
          id="hero-header"
          className="relative rounded-2xl bg-gradient-to-b from-[#0e1d38] to-[#0a1529] border border-[#1e335a] p-6 sm:p-10 shadow-xl overflow-hidden"
        >
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#162a4d0f_1px,transparent_1px),linear-gradient(to_bottom,#162a4d0f_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Brand Identity */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-[#1b2f52]">
            <div className="flex items-center gap-3.5">
              <SafwaLogo size={48} />
              <div className="text-right">
                <div className="text-lg font-bold text-white tracking-tight">{siteConfig.name}</div>
                <div className="text-xs text-slate-400 font-normal">المؤسسة الرائدة لخدمات النظافة الفندقية بالرياض</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132342] border border-[#233a66] text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#e2ad47]" />
              <span>عمالة نظامية • ضمان معتمد</span>
            </div>
          </div>

          {/* Main Title & Value Proposition */}
          <div className="relative text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold text-[#e2ad47] bg-[#e2ad47]/10 border border-[#e2ad47]/30 px-3 py-1 rounded-md mb-4">
              عروض الموسم الحصرية لمدينة الرياض
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              خدمات تنظيف فندقية متكاملة <br className="hidden sm:inline" />
              <span className="text-[#e2ad47]">للشقق، الأدوار والفلل</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6 max-w-xl mx-auto">
              نوفر لك طواقم عمل متمرسة وأحدث معدات التنظيف بالبخار ومكائن جلي الرخام بمستوى يليق بمنزلك، مع الالتزام التام بالأسعار الثابتة والضمان الشامل.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto pt-2 pb-2 border-y border-[#182949] text-center">
              <div className="p-2">
                <div className="text-base sm:text-xl font-bold text-white font-mono">+1,850</div>
                <div className="text-[11px] sm:text-xs text-slate-400">عميل في الرياض</div>
              </div>
              <div className="p-2 border-x border-[#182949]">
                <div className="text-base sm:text-xl font-bold text-[#e2ad47] font-mono">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">ضمان رضا الجودة</div>
              </div>
              <div className="p-2">
                <div className="text-base sm:text-xl font-bold text-white font-mono">4.9 / 5</div>
                <div className="text-[11px] sm:text-xs text-slate-400">تقييم موثق</div>
              </div>
            </div>
          </div>
        </header>

        {/* ===================== DIRECT PRICE HIGHLIGHT BANNER ===================== */}
        <section
          id="pricing-highlights"
          aria-label="قائمة الأسعار الفورية"
          className="mt-6 rounded-2xl bg-[#0c182e] border border-[#1b3054] p-5 sm:p-6 shadow-md"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="text-xs font-semibold text-[#e2ad47] mb-1">حجز مباشر وفوري</div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                باقات التنظيف الأساسية بأسعار معلنة وثابتة
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                اضغط على الباقة المطلوبة للانتقال الفوري إلى واتساب لتأكيد الموعد بالخدمة والسعر:
              </p>
            </div>

            {/* Price Cards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <a
                id="btn-fast-apartment-299"
                href={getWhatsAppLink('تنظيف شقة كاملة', '299 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-[#10203d] hover:bg-[#152a50] border border-[#233a64] hover:border-[#e2ad47] text-center transition-all duration-200 cursor-pointer"
                title="طلب حجز تنظيف شقة 299 ريال"
              >
                <div className="text-[11px] text-slate-300 font-medium">تنظيف شقة</div>
                <div className="text-lg sm:text-xl font-black text-[#e2ad47] my-0.5 font-mono">299</div>
                <div className="text-[10px] text-slate-400">ريال سعودي</div>
              </a>

              <a
                id="btn-fast-floor-350"
                href={getWhatsAppLink('تنظيف دور كامل', '350 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-[#10203d] hover:bg-[#152a50] border border-[#233a64] hover:border-[#e2ad47] text-center transition-all duration-200 cursor-pointer"
                title="طلب حجز تنظيف دور 350 ريال"
              >
                <div className="text-[11px] text-slate-300 font-medium">تنظيف دور</div>
                <div className="text-lg sm:text-xl font-black text-[#e2ad47] my-0.5 font-mono">350</div>
                <div className="text-[10px] text-slate-400">ريال سعودي</div>
              </a>

              <a
                id="btn-fast-villa-750"
                href={getWhatsAppLink('تنظيف فيلا كاملة', '750 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-[#10203d] hover:bg-[#152a50] border border-[#233a64] hover:border-[#e2ad47] text-center transition-all duration-200 cursor-pointer"
                title="طلب حجز تنظيف فيلا 750 ريال"
              >
                <div className="text-[11px] text-slate-300 font-medium">تنظيف فيلا</div>
                <div className="text-lg sm:text-xl font-black text-[#e2ad47] my-0.5 font-mono">750</div>
                <div className="text-[10px] text-slate-400">ريال سعودي</div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES DETAILED CATALOG ===================== */}
        <section id="services-catalog" className="mt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              تفاصيل الخدمات والأسعار
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              اختر الخدمة المناسبة لمنزلك، واضغط على زر الحجز لإرسال تفاصيل الخدمة والسعر مباشرة لفريق خدمة العملاء عبر واتساب.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {servicesList.map((service) => {
              const waUrl = getWhatsAppLink(service.name, `${service.priceNum} ريال`);
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="rounded-2xl bg-[#0b172c] border border-[#1b2f52] p-5 sm:p-6 flex flex-col justify-between hover:border-[#2b487c] transition-all duration-200"
                >
                  <div>
                    {/* Header: Category & Price Tag */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                          {service.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                          {service.name}
                        </h3>
                      </div>

                      <div className="text-left shrink-0">
                        <div className="text-lg sm:text-xl font-extrabold text-[#e2ad47] font-mono">
                          {service.price}
                        </div>
                        {service.unit && (
                          <div className="text-[10px] text-slate-400 font-light">{service.unit}</div>
                        )}
                      </div>
                    </div>

                    {/* Tag badge */}
                    {service.tag && (
                      <div className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-md mb-3">
                        <BadgeCheck className="w-3 h-3" />
                        <span>{service.tag}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-3 border-t border-[#162744] mb-5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#e2ad47] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary WhatsApp Action */}
                  <a
                    id={`wa-btn-${service.id}`}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#1f3760] hover:bg-[#27467a] active:bg-[#172c4e] text-white text-xs sm:text-sm font-bold flex items-center justify-between transition-colors duration-200 border border-[#2b4c84]"
                    title={`حجز ${service.name} بـ ${service.price}`}
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                      <span>حجز الخدمة عبر واتساب ({service.priceNum} ر.س)</span>
                    </span>
                    <ArrowLeft className="w-4 h-4 text-slate-300" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== WHY CHOOSE US ===================== */}
        <section id="why-choose-us" className="mt-14">
          <div className="rounded-2xl bg-[#0a1529] border border-[#1b2f52] p-6 sm:p-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-semibold text-[#e2ad47] uppercase tracking-wider block mb-1">
                معايير الأداء والاحترافية
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                لماذا يفضل عملاؤنا صفوة الرياض؟
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                نجمع بين الخبرة الميدانية الطويلة والالتزام الصارم بمعايير النظافة والتعقيم الفندقي.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trustPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0e1d38]/70 border border-[#1a2f54] text-right"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#142647] border border-[#213a68] flex items-center justify-center text-xs font-bold text-[#e2ad47] mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== REAL REVIEWS ===================== */}
        <section id="customer-reviews" className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-[#e2ad47] uppercase tracking-wider block mb-1">
              تجارب حقيقية
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              آراء وتقييمات عملائنا في أحياء الرياض
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              أكثر من 1,480 تقييم معتمد من أصحاب المنازل والفلل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0b172c] border border-[#1b2f52] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#e2ad47] mb-3">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-[#e2ad47]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#162744] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{rev.name}</div>
                    <div className="text-[11px] text-slate-400">{rev.district}</div>
                  </div>
                  <span className="text-[10px] text-[#e2ad47] bg-[#e2ad47]/10 px-2 py-0.5 rounded">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== CONTACT & DIRECT BOOKING BOX ===================== */}
        <section
          id="direct-contact-cta"
          className="mt-14 rounded-2xl bg-gradient-to-r from-[#0d1e3d] via-[#102449] to-[#0d1e3d] border border-[#233e6f] p-6 sm:p-10 text-center shadow-lg"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#18315c] border border-[#274b88] text-[#e2ad47] mb-4">
            <PhoneCall className="w-5 h-5" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            هل لديك أي استفسار أو طلب خاص؟
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            فريق خدمة العملاء جاهز للرد على اتصالاتكم ورسائلكم لتحديد الموعد الأنسب وتقديم المعاينة الميدانية المجانية.
          </p>

          <div className="mb-6">
            <a
              id="cta-phone-large"
              href={`tel:${siteConfig.phone}`}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#e2ad47] hover:text-white font-mono transition-colors tracking-wide inline-block"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
            <div className="text-xs text-slate-400 mt-1">الرقم الموحد لخدمات التنظيف بالرياض (24 ساعة)</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              id="cta-call-direct"
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-1/2 py-3 px-5 rounded-xl bg-[#e2ad47] hover:bg-[#d69e35] text-[#08101e] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي مباشر</span>
            </a>

            <a
              id="cta-wa-direct"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن باقات التنظيف وحجز موعد.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>محادثة واتساب فورية</span>
            </a>
          </div>
        </section>

        {/* ===================== FAQ SECTION ===================== */}
        <section id="faqs" className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">الأسئلة الشائعة</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              إجابات واضحة عن كافة التساؤلات المتعلقة بالأسعار، آلية العمل، والضمان
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#1b2f52] bg-[#0b172c] overflow-hidden"
                >
                  <button
                    id={`faq-trigger-${index}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full py-4 px-5 text-right flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-white hover:text-[#e2ad47] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#e2ad47]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#152541] font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== SIMPLE FOOTER ===================== */}
        <footer className="mt-16 pt-8 border-t border-[#172743] text-center text-xs text-slate-400 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors">
              دليل الخدمات
            </Link>
            <span>•</span>
            <Link href="/areas" className="hover:text-white transition-colors">
              أحياء الرياض
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              اتصل بنا
            </Link>
          </div>

          <p className="text-[11px] text-slate-500 pt-2">
            تم التصميم والتطوير بواسطة{' '}
            <a
              id="footer-nasharhub-link-lp"
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:underline font-medium"
            >
              NasharHub
            </a>
          </p>

          <p className="text-[11px] text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} {siteConfig.name} – شركة خدمات نظافة متخصصة بالرياض
          </p>
        </footer>
      </main>

      {/* ===================== FLOATING DESKTOP ACTIONS ===================== */}
      <div className="fixed left-6 bottom-8 hidden md:flex flex-col gap-2.5 z-50">
        <a
          id="side-action-whatsapp"
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود حجز خدمة تنظيف شقة 299 ريال.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="تواصل معنا عبر واتساب"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        <a
          id="side-action-call"
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 rounded-full bg-[#1b345e] hover:bg-[#23437a] text-[#e2ad47] flex items-center justify-center shadow-lg border border-[#2b4c84] transition-transform hover:scale-105"
          title="اتصال هاتفي مباشر"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* ===================== FLOATING MOBILE CONVERSION BAR ===================== */}
      <div
        id="landing-mobile-bar"
        className="fixed bottom-0 inset-x-0 bg-[#091325]/95 backdrop-blur-md border-t border-[#1b2f52] p-2.5 px-4 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex gap-2.5 z-50 md:hidden shadow-2xl"
      >
        <a
          id="mobile-action-whatsapp"
          href={getWhatsAppLink('تنظيف شقة', '299 ريال')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>واتساب (شقة 299 ر.س)</span>
        </a>

        <a
          id="mobile-action-call"
          href={`tel:${siteConfig.phone}`}
          className="flex-1 py-3 px-2 rounded-xl bg-[#1b3561] active:bg-[#132747] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-[#274a86] shadow"
        >
          <Phone className="w-4 h-4 text-[#e2ad47]" />
          <span>اتصال: {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
