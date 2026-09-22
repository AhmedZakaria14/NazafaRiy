import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `عروض وخدمات تنظيف المنازل والفلل بالرياض | تبدأ من 299 ريال | ${siteConfig.name}`,
  description: `احصل على أقوى عروض تنظيف الشقق والفلل بالرياض تبدأ من 299 ريال. خدمة احترافية بأحدث المعدات الألمانية وضمان فندقي 100%. احجز الآن عبر 0575386029.`,
  keywords: [
    'تنظيف شقق 299 ريال',
    'تنظيف فلل 750 ريال',
    'تنظيف دور 350 ريال',
    'عروض تنظيف منازل بالرياض',
    'اسعار شركات تنظيف بالرياض',
    'شركة تنظيف بالرياض',
    '0575386029',
  ],
  alternates: {
    canonical: `${siteConfig.url}/landingpage`,
  },
  openGraph: {
    title: `عروض تنظيف شقق وفلل بالرياض تبدأ من 299 ريال | ${siteConfig.name}`,
    description: `تنظيف شقق بـ 299 ر.س، دور بـ 350 ر.س، وفلل بـ 750 ر.س مع ضمان الجودة الفندقية. للحجز المباشر: 0575386029`,
    url: `${siteConfig.url}/landingpage`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
