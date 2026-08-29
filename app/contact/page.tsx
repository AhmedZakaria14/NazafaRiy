import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: `اتصل بنا | خدمة العملاء وحجز المعاينة الفورية | ${siteConfig.name}`,
  description: `تواصل مع شركة صفوة الرياض لخدمات النظافة الفاخرة. استشارات فورية ومعاينة مجانية لكافة أحياء الرياض على مدار 24 ساعة عبر الهاتف والواتساب.`,
  keywords: [
    'رقم شركة تنظيف بالرياض',
    'ارقام شركات تنظيف المنازل بالرياض',
    'واتساب صفوة الرياض',
    'حجز تنظيف فلل بالرياض',
    'استشارة تنظيف مجانية بالرياض'
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `تواصل مع صفوة الرياض | خدمة عملاء واستجابة فورية`,
    description: 'تواصل معنا الآن لطلب خدمات النظافة أو جدولة معاينة مجانية لفيلتك أو منزلك في الرياض.',
    url: `${siteConfig.url}/contact`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `تواصل مع ${siteConfig.name}`,
    description: 'قنوات التواصل المباشر وطلب المعاينة لخدمات النظافة بالرياض.',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-white">تواصل معنا</span>
          </div>

          <div className="inline-flex items-center px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <span>فريق خدمة العملاء بالرياض</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.18] text-white mb-6">
            نحن هنا للإجابة
            <br />
            <span className="font-semibold text-white">عن كافة استفساراتكم.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            فريق استشاري متخصص متاح للرد على اتصالاتكم ورسائلكم طوال أيام الأسبوع لترتيب الزيارات والمعاينات المجانية.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Info Columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass-card rounded-2xl p-7 space-y-6">
              <h2 className="text-xl font-semibold text-white">قنوات التواصل المباشر</h2>

              <div className="space-y-4 text-sm font-light">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">الاتصال المباشر</span>
                    <span className="text-white font-medium text-base" dir="ltr">
                      {siteConfig.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً صفوة الرياض، أود الاستفسار عن خدمات النظافة')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">محادثة فورية</span>
                    <span className="text-white font-medium text-base">
                      واتساب (استجابة فورية)
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">البريد الإلكتروني</span>
                    <span className="text-white font-medium text-sm">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Quick Guarantee */}
            <div className="p-6 rounded-2xl liquid-glass border border-white/15 text-xs text-gray-300 space-y-2">
              <span className="font-semibold text-white block text-sm">تغطية تشمل كافة أحياء الرياض</span>
              <p className="font-light leading-relaxed">
                أسطولنا متواجد في شمال، شرق، غرب، جنوب، ووسط الرياض للوصول السريع لطلبك في أي وقت.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
