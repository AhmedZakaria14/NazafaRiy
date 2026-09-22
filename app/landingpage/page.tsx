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
  Star,
  ChevronDown,
  ArrowLeft,
  MapPin,
  Check,
  BadgeCheck,
  Building2,
  Home,
  Clock,
  Sparkles,
  Zap,
} from 'lucide-react';

interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  unit?: string;
  featured?: boolean;
  badge?: string;
  badgeColor?: string;
  borderColor: string;
  accentBg: string;
  buttonText: string;
  summary: string;
  includes: string[];
  executionTime: string;
  team: string;
}

const mainPackages: ServicePackage[] = [
  {
    id: 'apartment',
    name: 'باقة تنظيف الشقق',
    subtitle: 'شاملة جميع الغرف، الصالة، المطبخ ودورات المياه',
    price: 299,
    featured: true,
    badge: 'الأكثر طلباً واختياراً',
    badgeColor: 'bg-amber-600 text-white',
    borderColor: 'border-amber-500 ring-2 ring-amber-400/20 shadow-amber-500/10',
    accentBg: 'bg-amber-50/70',
    buttonText: 'حجز باقة الشقة بـ 299 ر.س',
    summary: 'تنظيف وتطهير فندقي كامل لجميع غرف ومرافق الشقة بأحدث ماكينات البخار مع التلميع والتعطير.',
    executionTime: '2 - 3 ساعات عمل متواصلة',
    team: 'طاقم عمل مجهز بالكامل مع مشرف ميداني',
    includes: [
      'غسيل وتلميع أرضيات السيراميك والبورسلان',
      'إزالة دهون وزيوت المطبخ وتطهير الأسطح والخزائن',
      'غسيل وتعقيم شامل لدورات المياه والمغاسل',
      'مسح النوافذ الزجاجية ومجاري الألمنيوم والشبك',
      'تنظيف الأبواب ومفاتيح الإنارة والوزرات الجدارية',
      'تعطير وتطهير نهائي يدوم لأيام',
    ],
  },
  {
    id: 'floor',
    name: 'باقة تنظيف الأدوار',
    subtitle: 'للأدوار المستقلة والشقق الدوبلكس الواسعة',
    price: 350,
    featured: false,
    badge: 'عرض التوفير الخاص',
    badgeColor: 'bg-blue-600 text-white',
    borderColor: 'border-blue-400 shadow-blue-500/5',
    accentBg: 'bg-blue-50/60',
    buttonText: 'حجز باقة الدور بـ 350 ر.س',
    summary: 'عناية متكاملة بالمساحات الكبيرة والمجالس المفتوحة والممرات الواسعة والمطابخ الكبيرة.',
    executionTime: '3 - 4 ساعات عمل',
    team: 'طاقم عمل متخصص مع معدات كهربائية متطورة',
    includes: [
      'تنظيف عميق للمجالس وصالات الاستقبال والممرات',
      'غسيل وتطهير كافة دورات المياه والمغاسل الخارجية',
      'تنظيف المطبخ بالكامل وإزالة أصعب التراكمات',
      'مسح وتلميع النوافذ والواجهات الزجاجية الداخلية',
      'تنظيف وتعقيم البلكونات ومداخل الدور',
      'تعقيم بمواد ألمانية معتمدة وآمنة',
    ],
  },
  {
    id: 'villa',
    name: 'باقة تنظيف الفلل',
    subtitle: 'برنامج نظافة شامل للفيلا بالكامل داخلياً وخارجياً',
    price: 750,
    featured: false,
    badge: 'باقة الـ VIP المتكاملة',
    badgeColor: 'bg-slate-900 text-white',
    borderColor: 'border-slate-400 shadow-slate-500/10',
    accentBg: 'bg-slate-50/80',
    buttonText: 'حجز باقة الفيلا بـ 750 ر.س',
    summary: 'تغطية شاملة للفيلا: أدوار متعددة، مطابخ وحمامات، درج داخلي، الحوش الخارجي والمداخل.',
    executionTime: 'يوم عمل كامل / حسب المساحة',
    team: 'فريق عمل كامل متكامل بإشراف هندسي',
    includes: [
      'تنظيف شامل لجميع الأدوار والغرف والأجنحة',
      'غسيل وتطهير الحوش الخارجي والمداخل والأسطح',
      'جلي وتلميع الدرج الداخلي والدرابزين',
      'تنظيف النوافذ والواجهات الزجاجية بارتفاعاتها',
      'تنظيف مستودعات وغرف الخدمات والملاحق الخارجية',
      'تعقيم فندقي مع ضمان إعادة التنظيف مجاناً',
    ],
  },
];

const secondaryServices = [
  {
    name: 'غسيل مجالس وكنب بالبخار الحار',
    price: '199 ر.س',
    priceNum: 199,
    tag: 'تجفيف سريع في 60 دقيقة',
    desc: 'إزالة أصعب بقع القهوة والدهون بالبخار مع سحب الأتربة العميقة والتعقيم ضد البكتيريا.',
  },
  {
    name: 'غسيل وتنظيف مكيفات سبليت',
    price: '79 ر.س',
    priceNum: 79,
    unit: 'للمكيف',
    tag: 'ضمان كفاءة التبريد',
    desc: 'غسيل داخلي وخارجي بمضخات المياه المخصصة مع عزل الجدران وفحص غاز الفريون.',
  },
  {
    name: 'جلي وتلميع الرخام الإيطالي بالماس',
    price: '15 ر.س',
    priceNum: 15,
    unit: 'للمتر المربع',
    tag: 'طبقة كريستال إسبانية',
    desc: 'معالجة فواصل الرخام وإزالة الخدوش وتلميع الكريستال بطبقة عزل فائقة اللمعان.',
  },
];

const bookingSteps = [
  {
    num: '1',
    title: 'اختر باقة الخدمة',
    desc: 'حدد الباقة المناسبة لمساحة منزلك (شقة 299 ر.س، دور 350 ر.س، أو فيلا 750 ر.س).',
  },
  {
    num: '2',
    title: 'تأكيد فوري عبر واتساب',
    desc: 'اضغط على زر الحجز لإرسال رسالة مباشرة لمنسق الحجوزات لتحديد اليوم والوقت المناسب لك.',
  },
  {
    num: '3',
    title: 'تنفيذ دقيق ومعاينة مع الضمان',
    desc: 'يصل الفريق في الموعد ومعه كافة المعدات، ولا تدفع إلا بعد إتمام العمل ورضاك التام 100%.',
  },
];

const customerReviews = [
  {
    name: 'أبو فهد التميمي',
    district: 'حي الملقا - شمال الرياض',
    service: 'تنظيف شقة 299 ريال',
    rating: 5,
    text: 'التزام دقيق بالوقت، الشقة استلمتها تلمع والمطبخ كأنه جديد بدون أي روائح مزعجة. السعر 299 ريال بالضبط مثل ما أعلنوا بدون ريال واحد زيادة.',
  },
  {
    name: 'سارة العتيبي',
    district: 'حي النرجس - الرياض',
    service: 'تنظيف دور وفيلا',
    rating: 5,
    text: 'ما شاء الله تبارك الله، شغل احترافي جداً والمشرف كان حريص على أدق التفاصيل من زوايا النوافذ للأبواب والأسقف. تستاهلون كل تقييم ممتاز.',
  },
  {
    name: 'م. راشد الدوسري',
    district: 'حي اليرموك - شرق الرياض',
    service: 'غسيل كنب ومجالس بالبخار',
    rating: 5,
    text: 'البخار الحار رجع المجلس جديد بعد ما كان فيه بقع أطفال صعبة، والتجفيف تم بنفس اليوم. خدمة عملاء راقية وتجاوب سريع جداً عبر الواتساب.',
  },
];

const faqs = [
  {
    q: 'ماذا تشمل باقة تنظيف الشقة بسعر 299 ريال؟',
    a: 'تشمل الباقة غسيل وتلميع كافة الأرضيات، تنظيف وتعقيم المطبخ بالكامل وإزالة بقع الزيوت، تطهير جميع دورات المياه والمغاسل، مسح النوافذ ومجاري الألمنيوم، تنظيف الأبواب ومفاتيح الكهرباء، والتعطير النهائي للشقة.',
  },
  {
    q: 'هل هناك أي تكاليف إضافية لنقل العمالة والمعدات داخل الرياض؟',
    a: 'لا توجد أي رسوم إضافية على الإطلاق. السعر المعلن نهائي وشامل أجور العمالة، مواد التنظيف، الأجهزة الكهربائية، ورسوم الانتقال لجميع أحياء ومناطق الرياض.',
  },
  {
    q: 'كيف يمكنني تأكيد الموعد؟ وهل يلزم دفع عربون مسبق؟',
    a: 'لا نطلب أي دفع مسبق! يمكنك الحجز فوراً عبر الضغط على زر الواتساب أو الاتصال على 0575386029، وتأكيد الموعد المناسب لك، والدفع يكون بعد إتمام العمل ومعاينتك الميدانية.',
  },
  {
    q: 'ما هو الضمان الذهبي الذي تقدمونه؟',
    a: 'نلتزم بسياسة الرضا التام 100%: تتم مراجعة كامل تفاصيل العمل برفقتك قبل مغادرة الفريق، وفي حال وجود أي ملاحظة تتم معالجتها فوراً أو إعادة تنظيف المكان مجاناً.',
  },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const getWhatsAppLink = (serviceName: string, price: string) => {
    const message = `السلام عليكم، أود حجز ${serviceName} بسعر ${price} المعلن.`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-amber-200 selection:text-slate-900 pb-36 sm:pb-28 antialiased">
      {/* ===================== TOP TRUST BAR ===================== */}
      <div className="bg-slate-900 text-white py-2 px-4 text-xs border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-medium text-slate-200">
              خدمات التنظيف الفندقية متوفرة اليوم في كافة أحياء الرياض
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>عمالة نظامية • ضمان 100%</span>
            <span className="text-slate-500">•</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-amber-400 font-bold hover:text-white font-mono"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* ===================== MAIN CONTAINER ===================== */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* ===================== HEADER SECTION ===================== */}
        <header
          id="hero-header"
          className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden"
        >
          {/* Subtle architectural background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Top Brand Bar */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <SafwaLogo size={46} />
              <div className="text-right">
                <div className="text-lg font-bold text-slate-900 tracking-tight">{siteConfig.name}</div>
                <div className="text-xs text-slate-500">المؤسسة المتخصصة في خدمات النظافة الفندقية بالرياض</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>تغطية فورية لجميع أحياء الرياض</span>
            </div>
          </div>

          {/* Main Title & Lead */}
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-4">
              <BadgeCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>عروض وأسعار ثابتة ومضمونة 100% بدون أي رسوم خفية</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.25] tracking-tight mb-4">
              نظافة فندقية متكاملة <br className="hidden sm:inline" />
              <span className="text-amber-600 underline decoration-amber-300 decoration-4 underline-offset-8">
                للشقق، الأدوار والفلل
              </span>{' '}
              بالرياض
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              نقدم لك أعلى معايير النظافة والتعقيم الفندقي بأيدي عمالة نظامية مدربة ومعدات ألمانية متطورة، مع التزام تام بالأسعار المحددة ومعاينة مجانية قبل الدفع.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto pt-3 border-t border-slate-100 text-center">
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">+1,850</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">عميل راضٍ بالرياض</div>
              </div>
              <div className="p-2 border-x border-slate-200">
                <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">ضمان جودة ذهبي</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">4.9 / 5</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">تقييم العملاء</div>
              </div>
            </div>
          </div>
        </header>

        {/* ===================== PACKAGES SECTION ===================== */}
        <section id="packages-section" className="mt-10 sm:mt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              باقات التنظيف الأساسية
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              اختر باقتك بسعر ثابت ومحدد
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              الأسعار شاملة طاقم العمل، المعدات الألمانية ومواد التعقيم، دون أي مصاريف إضافية
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {mainPackages.map((pkg) => {
              const waUrl = getWhatsAppLink(pkg.name, `${pkg.price} ريال`);
              return (
                <div
                  key={pkg.id}
                  id={`package-card-${pkg.id}`}
                  className={`rounded-3xl bg-white border-2 flex flex-col justify-between transition-all duration-200 relative overflow-hidden ${
                    pkg.borderColor
                  } ${pkg.featured ? 'shadow-xl lg:-translate-y-2' : 'shadow-sm hover:shadow-md'}`}
                >
                  {/* Top Badge for Featured Package */}
                  {pkg.badge && (
                    <div
                      className={`text-center py-1.5 px-4 text-xs font-bold tracking-wide uppercase ${pkg.badgeColor}`}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1">
                    {/* Header */}
                    <div className="text-center pb-5 border-b border-slate-100">
                      <h3 className="text-xl font-black text-slate-900">{pkg.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.subtitle}</p>

                      {/* Price Tag */}
                      <div className="mt-4 flex items-baseline justify-center gap-1.5">
                        <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">
                          {pkg.price}
                        </span>
                        <div className="text-right">
                          <span className="text-xs font-bold text-amber-600 block">ريال سعودي</span>
                          <span className="text-[10px] text-slate-400">سعر نهائي شامل</span>
                        </div>
                      </div>
                    </div>

                    {/* Operational Details Box */}
                    <div className={`mt-5 p-3 rounded-2xl ${pkg.accentBg} text-xs space-y-1.5 text-slate-700`}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span><strong>مدة العمل:</strong> {pkg.executionTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span><strong>العمالة:</strong> {pkg.team}</span>
                      </div>
                    </div>

                    {/* What is Included Checklist */}
                    <div className="mt-5">
                      <div className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>المحتويات المشمولة في الباقة:</span>
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="p-6 pt-0">
                    <a
                      id={`btn-book-${pkg.id}`}
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer ${
                        pkg.featured
                          ? 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20'
                          : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{pkg.buttonText}</span>
                    </a>
                    <span className="text-[11px] text-center text-slate-400 block mt-2">
                      تأكيد فوري عبر واتساب • الدفع بعد المعاينة
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== DETAILED CHECKLIST TABLE ===================== */}
        <section id="detailed-checklist" className="mt-14">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="max-w-2xl mx-auto text-center mb-6">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                دليل الجودة الفندقية
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                ما الذي نقوم به بالتفصيل في كل غرفة؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                نتبع قائمة فحص محددة يراجعها المشرف الميداني قبل تسليم المكان لك
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 mb-2 pb-2 border-b border-slate-200">
                  🍳 المطبخ والأسطح
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li>• إزالة الزيوت والدهون المتراكمة</li>
                  <li>• تنظيف خزائن المطبخ من الداخل والخارج</li>
                  <li>• تطهير حوض الغسيل والمصارف</li>
                  <li>• مسح وتلميع السيراميك الجداري</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 mb-2 pb-2 border-b border-slate-200">
                  🚿 دورات المياه
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li>• غسيل عميق للأرضيات والجدران بالبخار</li>
                  <li>• إزالة ترسبات الأملاح والتكلسات</li>
                  <li>• تعقيم المراحيض والمغاسل بنسبة 100%</li>
                  <li>• تلميع الخلاطات والمرايا الزجاجية</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 mb-2 pb-2 border-b border-slate-200">
                  🛋️ الغرف والصالات
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li>• كنس ومسح وتلميع الأرضيات</li>
                  <li>• إزالة الغبار من الوزرات والأفياش</li>
                  <li>• مسح الأبواب ومقابض الألمنيوم</li>
                  <li>• تنظيف حواف الجبس والإنارة السقفية</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900 mb-2 pb-2 border-b border-slate-200">
                  🪟 النوافذ والشبابيك
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li>• غسيل وتلميع الزجاج الداخلي والخارجي</li>
                  <li>• شفط الأتربة من مجاري الألمنيوم</li>
                  <li>• غسيل شبك النوافذ من الغبار</li>
                  <li>• مسح إطارات الشبابيك بالكامل</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ADD-ON SPECIALIZED SERVICES ===================== */}
        <section id="additional-services" className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              خدمات متخصصة إضافية
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              عناية إضافية بالمفروشات والمكيفات والرخام
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              يمكنك طلبها بشكل مستقل أو إضافتها إلى باقة النظافة بأسعار مخفضة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryServices.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <span className="text-base font-black text-amber-700 font-mono whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <div className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded mb-2">
                    {item.tag}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <a
                  href={getWhatsAppLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>طلب الخدمة عبر واتساب</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== 3 SIMPLE STEPS ===================== */}
        <section id="how-it-works" className="mt-14">
          <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                آلية الحجز الميسرة
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                3 خطوات بسيطة لمنزل نظيف ومعقم
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {bookingSteps.map((step, i) => (
                <div key={i} className="text-center sm:text-right p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black text-base flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== GOLDEN GUARANTEE ===================== */}
        <div className="mt-10 rounded-2xl bg-amber-50/80 border-2 border-amber-300/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-black text-amber-950 mb-1">
              الضمان الذهبي لرضا العملاء بنسبة 100%
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
              ثقتك هي أولويتنا؛ لن يتم استلام أي مبالغ مالية إلا بعد معاينتك الكاملة لكافة مرافق المنزل، وفي حال وجود أي ملاحظة تتم معالجتها فوراً أو إعادة تنظيف المكان مجاناً.
            </p>
          </div>
        </div>

        {/* ===================== CUSTOMER REVIEWS ===================== */}
        <section id="reviews" className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              تقييمات موثقة
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              ماذا يقول عملاؤنا في أحياء الرياض؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2.5">
                    {[...Array(rev.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">{rev.name}</div>
                    <div className="text-[11px] text-slate-500">{rev.district}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== DIRECT CONTACT CTA ===================== */}
        <section
          id="direct-contact"
          className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-10 text-center shadow-lg"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
            <PhoneCall className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            هل ترغب في حجز موعد محدد أو استشارة سريعة؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            منسقو الخدمة متاحون على مدار الساعة للرد على استفساراتكم وتأكيد الموعد المناسب لمنزلك.
          </p>

          <div className="mb-6">
            <a
              id="cta-large-phone-number"
              href={`tel:${siteConfig.phone}`}
              className="text-3xl sm:text-4xl font-black text-amber-400 hover:text-white font-mono transition-colors tracking-wide inline-block"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
            <div className="text-xs text-slate-400 mt-1">الرقم الموحد لخدمات التنظيف بالرياض (24 ساعة)</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              id="cta-call-btn"
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي مباشر</span>
            </a>

            <a
              id="cta-wa-btn"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن باقات التنظيف وحجز موعد.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>محادثة واتساب فورية</span>
            </a>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section id="faqs" className="mt-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
              الأسئلة المتكررة
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              كل ما تحتاج لمعرفته حول الخدمة
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full py-4 px-5 text-right flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== CLEAN FOOTER ===================== */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              الصفحة الرئيسية للموقع
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-slate-900 transition-colors">
              دليل الخدمات
            </Link>
            <span>•</span>
            <Link href="/areas" className="hover:text-slate-900 transition-colors">
              أحياء الرياض
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              اتصل بنا
            </Link>
          </div>

          <p className="text-[11px] text-slate-400 pt-2">
            تصميم وتطوير بواسطة{' '}
            <a
              id="footer-nasharhub-link-lp"
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:underline font-semibold"
            >
              NasharHub
            </a>
          </p>

          <p className="text-[11px] text-slate-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} {siteConfig.name} – خدمات النظافة المتخصصة بالرياض
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
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
          title="تواصل معنا عبر واتساب"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        <a
          id="side-action-call"
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="اتصال هاتفي مباشر"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* ===================== FLOATING MOBILE CONVERSION BAR (LIGHT THEME) ===================== */}
      <div
        id="landing-mobile-bar"
        className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex gap-2.5 z-50 md:hidden shadow-2xl"
      >
        <a
          id="mobile-action-whatsapp"
          href={getWhatsAppLink('تنظيف شقة كاملة', '299 ريال')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-2xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>واتساب (شقة 299 ر.س)</span>
        </a>

        <a
          id="mobile-action-call"
          href={`tel:${siteConfig.phone}`}
          className="flex-1 py-3 px-2 rounded-2xl bg-slate-900 active:bg-slate-950 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>اتصال: {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
