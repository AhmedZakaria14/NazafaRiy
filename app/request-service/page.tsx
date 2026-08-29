import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { BookingWizard } from '@/components/booking/BookingWizard';

export const metadata: Metadata = {
  title: `طلب وحجز خدمة نظافة بالرياض | حجز فوري ومعاينة مجانية | ${siteConfig.name}`,
  description: 'احجز الآن خدمة تنظيف الفلل، جلي الرخام، غسيل الكنب والمجالس، وتنظيف المكيفات في كافة أحياء الرياض. حجز فوري وضمان فندقي 100%.',
  keywords: [
    'حجز شركة تنظيف بالرياض',
    'طلب خدمة تنظيف فلل بالرياض',
    'حجز موعد غسيل كنب بالرياض',
    'اسعار تنظيف المنازل بالرياض',
    'حجز جلي رخام فوري بالرياض'
  ],
  alternates: {
    canonical: `${siteConfig.url}/request-service`,
  },
  openGraph: {
    title: `طلب وحجز خدمة نظافة بالرياض | ${siteConfig.name}`,
    description: 'احجز موعدك لتنظيف منزلك أو فيلتك في الرياض في أقل من دقيقة مع ضمان الجودة الفندقية.',
    url: `${siteConfig.url}/request-service`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function RequestServicePage() {
  const bookingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `طلب خدمة نظافة بالرياض - ${siteConfig.name}`,
    description: 'نموذج حجز وجدولة خدمات النظافة الفاخرة والمعاينة المجانية في الرياض.',
    url: `${siteConfig.url}/request-service`,
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${siteConfig.url}/request-service`,
      result: {
        '@type': 'Reservation',
        name: 'حجز خدمة نظافة',
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-gray-400 font-light">جاري تجهيز نموذج الحجز...</div>}>
        <BookingWizard />
      </Suspense>
    </div>
  );
}
