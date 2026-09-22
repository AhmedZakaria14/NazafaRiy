'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import {
  Phone,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Star,
  ChevronDown,
  ArrowLeft,
  MapPin,
  Award,
  Zap,
} from 'lucide-react';

interface ServiceOffer {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  unit?: string;
  icon: string;
  desc: string;
  badge?: string;
  features: string[];
}

const servicesList: ServiceOffer[] = [
  {
    id: 'apartment',
    name: 'تنظيف شقة',
    price: '299 ر.س',
    priceNum: 299,
    icon: '🛏️',
    badge: 'الأكثر طلباً',
    desc: 'تنظيف شامل لجميع غرف الشقة، المطابخ، الحمامات، والأرضيات بعناية فائقة',
    features: ['غسيل وتلميع الأرضيات', 'تعقيم الحمامات والمطبخ', 'تنظيف النوافذ والأبواب', 'تعطير مجاني'],
  },
  {
    id: 'floor',
    name: 'تنظيف دور',
    price: '350 ر.س',
    priceNum: 350,
    icon: '🏢',
    badge: 'عرض خاص',
    desc: 'تنظيف متكامل للدور بالكامل مع غسيل الممرات والمجالس والصالات بأحدث الأجهزة',
    features: ['تنظيف المجالس والصالات', 'غسيل وتطهير الممرات', 'تنظيف المطابخ بالبخار', 'إزالة البقع الصعبة'],
  },
  {
    id: 'villa',
    name: 'تنظيف فيلا',
    price: '750 ر.س',
    priceNum: 750,
    icon: '🏰',
    badge: 'باقة VIP',
    desc: 'تنظيف متكامل للفيلا بالكامل من الداخل والخارج مع الحوش والمداخل والواجهات',
    features: ['غسيل الحوش والمداخل', 'تنظيف الدرج والدرابزين', 'تنظيف الواجهات والزجاج', 'طاقم عمل كامل متخصص'],
  },
  {
    id: 'sofa',
    name: 'غسيل كنب ومجالس بالبخار',
    price: '199 ر.س',
    priceNum: 199,
    icon: '🛋️',
    badge: 'تجفيف فوري',
    desc: 'إزالة أصعب البقع والدهون والروائح بتقنية البخار الحار والتعقيم الفندقي',
    features: ['إزالة البقع المستعصية', 'تعقيم بالبخار الحار 140°', 'شفط الأتربة العميقة', 'تجفيف سريع في 60 دقيقة'],
  },
  {
    id: 'ac',
    name: 'غسيل وتنظيف مكيفات',
    price: '79 ر.س',
    priceNum: 79,
    unit: 'للمكيف',
    icon: '❄️',
    badge: 'ضمان التبريد',
    desc: 'تنظيف عميق للوحدات الداخلية والخارجية بأحدث مضخات المياه مع جراب الحماية',
    features: ['غسيل الفلاتر والكويل', 'تنظيف حوض الصرف', 'فحص غاز الفريون', 'زيادة كفاءة التبريد'],
  },
  {
    id: 'marble',
    name: 'جلي وتلميع رخام بالماس',
    price: '15 ر.س',
    priceNum: 15,
    unit: 'للمتر',
    icon: '💎',
    badge: 'كريستال إيطالي',
    desc: 'تسوية الفواصل وجلي بالماس الإيطالي مع طبقة عزل وحماية كريستالية فائقة اللمعان',
    features: ['إزالة الخدوش والبهتان', 'معالجة فواصل التمدد', 'تلميع بالكريستال الإسباني', 'ضمان لمعان يدوم طويلاً'],
  },
];

const whyUsItems = [
  {
    icon: '✅',
    title: 'فريق عمل مدرب ومحترف',
    desc: 'عمالة نظامية ماهرة تحت إشراف هندسي وفندقي مباشر لضمان أعلى دقة في التنفيذ.',
  },
  {
    icon: '🧴',
    title: 'مواد تنظيف وتعقيم آمنة',
    desc: 'مستحضرات ألمانية معتمدة صديقة للبيئة وآمنة 100% على الأطفال والمفروشات.',
  },
  {
    icon: '⏰',
    title: 'التزام تام بالمواعيد المحددة',
    desc: 'وصول دقيق في الموعد المتفق عليه مع سرعة استجابة في كافة أحياء الرياض.',
  },
  {
    icon: '🔒',
    title: 'أمانة تامة وضمان على العمل',
    desc: 'ضمان ذهبي فندقي على كل خدمة نقدمها، وإعادة التنظيف مجاناً في حال وجود أي ملاحظة.',
  },
  {
    icon: '💰',
    title: 'أسعار ثابتة بدون أي مفاجآت',
    desc: 'أسعار شفافة ومحددة مسبقاً، بدون رسوم خفية أو تكاليف إضافية للنقل والمعدات.',
  },
  {
    icon: '📞',
    title: 'خدمة عملاء ومتابعة 24 ساعة',
    desc: 'جاهزون دائماً للرد على استفساراتكم وحجز مواعيدكم في أي وقت عبر الهاتف والواتساب.',
  },
];

const faqs = [
  {
    q: 'هل يشمل عرض تنظيف الشقة 299 ريال كافة الغرف والمحتويات؟',
    a: 'نعم، يشمل العرض تنظيف وتطهير شامل لجميع الغرف، المطابخ، الحمامات، الأرضيات، النوافذ والأبواب بعناية فائقة وبأحدث أجهزة التنظيف.',
  },
  {
    q: 'كيف يمكنني حجز الخدمة وتأكيد الموعد؟',
    a: 'يمكنك الحجز فوراً بمجرد الضغط على زر الخدمة المطلوبة ليتم تحويلك مباشرة للواتساب على الرقم الموحد 0575386029 مع رسالة الحجز والسعر، أو بالاتصال المباشر.',
  },
  {
    q: 'هل توجد أي رسوم إضافية لنقل العمالة أو المعدات داخل الرياض؟',
    a: 'لا توجد أي رسوم خفية نهائياً. السعر المعلن شامل للعمالة، المعدات الألمانية، ومواد التنظيف لكافة أحياء مدينة الرياض.',
  },
  {
    q: 'ما هي مدة وصول فريق العمل بعد تأكيد الحجز؟',
    a: 'لدينا فرق ميدانية متمركزة في شمال، شرق، غرب، وجنوب الرياض، ويمكن لفريق العمل الوصول إليكم خلال 45 إلى 90 دقيقة من تأكيد الحجز أو حسب الموعد الذي يناسبكم.',
  },
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Helper to build direct WhatsApp link with prefilled service and price text
  const getWhatsAppLink = (serviceName: string, price: string) => {
    const message = `مرحباً صفوة الرياض، أود حجز خدمة ${serviceName} بسعر ${price}`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-white selection:bg-[#e6a800] selection:text-[#070d18] pb-28 md:pb-20 font-sans">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#b8760a] via-[#e6a800] to-[#b8760a] text-[#070d18] py-2 px-4 text-center text-xs sm:text-sm font-bold shadow-md">
        ⚡ عرض خاص لفترة محدودة | خصم يصل إلى 40% على جميع خدمات النظافة بالرياض | للحجز: {siteConfig.phoneDisplay}
      </div>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* ===================== HEADER ===================== */}
        <header
          id="landing-header"
          className="relative mt-4 rounded-3xl p-6 sm:p-10 text-center border-2 border-[#e6a800]/50 overflow-hidden shadow-[0_10px_35px_rgba(230,168,0,0.18)]"
          style={{
            background: 'linear-gradient(135deg, #0d2456 0%, #081124 100%)',
          }}
        >
          {/* Subtle radial glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(230,168,0,0.22),_transparent_70%)] pointer-events-none" />

          {/* Logo Circle with Golden Halo */}
          <div className="relative mx-auto w-24 h-24 rounded-full border-4 border-[#e6a800] bg-gradient-to-br from-[#12398a] to-[#07132e] flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(230,168,0,0.45)] mb-4 animate-pulse">
            <span>🧹</span>
          </div>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#e6a800] text-[#070d18] text-xs font-black px-4 py-1.5 rounded-full mb-3 shadow-md tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>خدمات تنظيف احترافية وضمان 100%</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3">
            <span className="text-[#e6a800]">تنظيف</span> شقق، أدوار وفلل
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto font-normal leading-relaxed mb-4">
            خدمات نظافة متخصصة بأحدث الأجهزة والتقنيات مع التعقيم الشامل وضمان فندقي معتمد
          </p>

          {/* Location & Trust Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-200">
            <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-[#e6a800]" />
              الرياض فقط (كافة الأحياء)
            </span>
            <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <Star className="w-3.5 h-3.5 text-[#e6a800] fill-[#e6a800]" />
              4.9 تقييم العملاء (1,480+ تقييم)
            </span>
          </div>
        </header>

        {/* ===================== OFFER BANNER ===================== */}
        <section
          id="landing-offer-banner"
          className="mt-6 rounded-2xl p-5 sm:p-6 shadow-xl border border-[#e6a800]/40 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e6a800 0%, #b8760a 100%)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#070d18]">
            <div className="text-center sm:text-right">
              <div className="inline-flex items-center gap-1.5 bg-[#070d18]/15 px-2.5 py-0.5 rounded-md text-[11px] font-bold mb-1">
                <Zap className="w-3 h-3 text-[#070d18]" />
                أسعارنا الثابتة والمخفضة
              </div>
              <h2 className="text-lg sm:text-xl font-black">بدون رسوم خفية – الجودة مضمونة!</h2>
              <p className="text-xs sm:text-sm font-medium text-[#070d18]/90">
                اضغط على أي خدمة للحجز الفوري عبر واتساب بالسعر المحدد
              </p>
            </div>

            {/* Quick Price Pills - CLICKABLE straight to WhatsApp */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <a
                id="quick-pill-apartment"
                href={getWhatsAppLink('تنظيف شقة', '299 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial text-center bg-[#070d18] text-white hover:bg-black px-4 py-2.5 rounded-xl border border-white/20 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="حجز تنظيف شقة 299 ريال"
              >
                <div className="text-[11px] text-gray-300 font-medium">شقة</div>
                <div className="text-lg font-black text-[#e6a800] leading-tight">299 ر.س</div>
              </a>

              <a
                id="quick-pill-floor"
                href={getWhatsAppLink('تنظيف دور', '350 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial text-center bg-[#070d18] text-white hover:bg-black px-4 py-2.5 rounded-xl border border-white/20 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="حجز تنظيف دور 350 ريال"
              >
                <div className="text-[11px] text-gray-300 font-medium">دور</div>
                <div className="text-lg font-black text-[#e6a800] leading-tight">350 ر.س</div>
              </a>

              <a
                id="quick-pill-villa"
                href={getWhatsAppLink('تنظيف فيلا', '750 ريال')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial text-center bg-[#070d18] text-white hover:bg-black px-4 py-2.5 rounded-xl border border-white/20 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                title="حجز تنظيف فيلا 750 ريال"
              >
                <div className="text-[11px] text-gray-300 font-medium">فيلا</div>
                <div className="text-lg font-black text-[#e6a800] leading-tight">750 ر.س</div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES GRID ===================== */}
        <section id="landing-services-section" className="mt-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-[#e6a800]/50" />
            <h2 className="text-xl sm:text-2xl font-black text-[#e6a800] tracking-wide px-2 flex items-center gap-2">
              <span>✦</span>
              <span>خدماتنا وعروضنا الحصرية</span>
              <span>✦</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-[#e6a800]/50" />
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-300 mb-6 max-w-lg mx-auto">
            اضغط على أي خدمة للحجز المباشر عبر الواتساب فوراً بنفس السعر المحدد والمضمون
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((service) => {
              const waUrl = getWhatsAppLink(service.name, `${service.priceNum} ريال`);
              return (
                <a
                  key={service.id}
                  id={`service-card-${service.id}`}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#0d1c38]/80 hover:bg-[#11254a] border-2 border-white/10 hover:border-[#e6a800] rounded-2xl p-5 text-right transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(230,168,0,0.22)] transform hover:-translate-y-1 flex flex-col justify-between block cursor-pointer"
                  title={`احجز الآن: ${service.name} بـ ${service.price}`}
                >
                  {/* Top Badge */}
                  {service.badge && (
                    <div className="absolute top-3 left-3 bg-[#e6a800] text-[#070d18] text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                      {service.badge}
                    </div>
                  )}

                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="text-3xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#e6a800] transition-colors">
                          {service.name}
                        </h3>
                        <div className="inline-block bg-gradient-to-r from-[#e6a800] to-[#c8920a] text-[#070d18] font-black text-sm px-2.5 py-0.5 rounded-lg mt-0.5">
                          {service.price} {service.unit && <span className="text-[11px] font-bold">({service.unit})</span>}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {service.desc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="text-[11px] text-gray-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#e6a800] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Action Button inside the card */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                    <span className="inline-flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      احجز بالواتساب بـ {service.priceNum} ريال
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#070d18] transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ===================== WHY US SECTION ===================== */}
        <section id="landing-why-us" className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-[#e6a800]/50" />
            <h2 className="text-xl sm:text-2xl font-black text-[#e6a800] tracking-wide px-2 flex items-center gap-2">
              <span>✦</span>
              <span>لماذا نحن خيارك الأول بالرياض؟</span>
              <span>✦</span>
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-[#e6a800]/50" />
          </div>

          <div className="space-y-2.5">
            {whyUsItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#0d1c38]/60 border border-white/10 border-r-4 border-r-[#e6a800] rounded-xl p-3.5 sm:p-4 flex items-start gap-3 shadow-sm hover:bg-[#0d1c38] transition-colors"
              >
                <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== CONTACT BOX ===================== */}
        <section
          id="landing-contact-section"
          className="mt-12 rounded-3xl p-6 sm:p-10 text-center border-2 border-[#1242a8] bg-gradient-to-b from-[#0e214d] to-[#071126] shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6a800]/20 border-2 border-[#e6a800] text-3xl mb-3 text-[#e6a800]">
            📞
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
            جاهزون لخدمتك في الحال
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-4 font-normal">
            اتصل بنا هاتفياً أو تواصل فوراً عبر الواتساب لتأكيد موعدك خلال دقائق
          </p>

          {/* Large Phone Display */}
          <div className="mb-6">
            <a
              id="landing-phone-big-link"
              href={`tel:${siteConfig.phone}`}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#e6a800] hover:text-[#ffbe1a] tracking-wider block font-mono transition-colors"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-xs text-gray-400 mt-1 inline-block">متاح على مدار 24 ساعة لجميع أحياء الرياض</span>
          </div>

          {/* Call & WhatsApp Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              id="landing-call-btn-main"
              href={`tel:${siteConfig.phone}`}
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#e6a800] to-[#c8920a] hover:from-[#ffbe1a] hover:to-[#e6a800] text-[#070d18] font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>اتصل بنا الآن</span>
            </a>

            <a
              id="landing-whatsapp-btn-main"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً صفوة الرياض، أود الاستفسار وحجز خدمة نظافة')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3.5 px-5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>واتساب فوري</span>
            </a>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section id="landing-faqs" className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-[#e6a800]/50" />
            <h2 className="text-lg sm:text-xl font-bold text-white px-2">
              الأسئلة الأكثر شيوعاً
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-[#e6a800]/50" />
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-[#0d1c38]/40 overflow-hidden"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full py-3.5 px-4 text-right flex items-center justify-between gap-3 text-sm font-semibold text-white hover:text-[#e6a800] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#e6a800] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== GUARANTEE BADGE ===================== */}
        <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-300 text-center">
          <ShieldCheck className="w-6 h-6 text-[#e6a800] shrink-0" />
          <span>
            <strong>ضمان الجودة الذهبي:</strong> نلتزم بأعلى معايير النظافة والتعقيم، وفريقنا لا يغادر حتى تكون راضياً بنسبة 100%.
          </span>
        </div>

        {/* ===================== FOOTER ===================== */}
        <footer className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400 space-y-2">
          <p>
            تم تصميم الموقع بواسطة{' '}
            <a
              id="landing-nasharhub-link"
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6a800] hover:underline font-bold"
            >
              NasharHub
            </a>
          </p>
          <p className="text-gray-500 text-[11px]">
            © {new Date().getFullYear()} {siteConfig.name} – كافة الحقوق محفوظة لخدمات النظافة بالرياض
          </p>
        </footer>
      </div>

      {/* ===================== SIDE FLOATING BUTTONS (DESKTOP & TABLET) ===================== */}
      <div className="fixed left-4 bottom-24 hidden md:flex flex-col gap-3 z-50">
        {/* WhatsApp Button with pulse */}
        <a
          id="side-float-whatsapp"
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً صفوة الرياض، أود الاستفسار عن حجز خدمة نظافة')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-200 transform hover:scale-110 relative"
          title="تواصل واتساب"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#070d18] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#070d18]" />
        </a>

        {/* Call Button Gold */}
        <a
          id="side-float-call-gold"
          href={`tel:${siteConfig.phone}`}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e6a800] to-[#b8760a] hover:from-[#ffbe1a] hover:to-[#e6a800] text-[#070d18] flex items-center justify-center shadow-[0_4px_20px_rgba(230,168,0,0.4)] transition-all duration-200 transform hover:scale-110"
          title="اتصال مباشر"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
      </div>

      {/* ===================== FLOATING BOTTOM BAR (MOBILE FIXED) ===================== */}
      <div
        id="landing-mobile-bar"
        className="fixed bottom-0 inset-x-0 bg-[#070f20]/95 backdrop-blur-md border-t-2 border-[#e6a800]/40 p-2.5 px-3 flex gap-2.5 z-50 md:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.6)]"
      >
        <a
          id="mobile-landing-wa-btn"
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً صفوة الرياض، أود حجز خدمة نظافة شقة 299 ريال')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-2 rounded-xl bg-[#25d366] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>واتساب فوري</span>
        </a>

        <a
          id="mobile-landing-call-btn"
          href={`tel:${siteConfig.phone}`}
          className="flex-1 py-3 px-2 rounded-xl bg-gradient-to-r from-[#e6a800] to-[#c8920a] text-[#070d18] font-bold text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>اتصال: {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
