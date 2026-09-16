import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { siteConfig } from '@/lib/siteConfig';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | شركة تنظيف بالرياض وخدمات نظافة فاخرة`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: 'Home Services',
  classification: 'خدمات النظافة والصيانة المنزلية بالرياض',
  keywords: [
    'شركة تنظيف بالرياض',
    'شركة تنظيف منازل بالرياض',
    'تنظيف فلل بالرياض',
    'تنظيف قصور بالرياض',
    'تنظيف شقق بالرياض',
    'تنظيف مجالس بالرياض',
    'غسيل كنب بالبخار بالرياض',
    'جلي وتلميع رخام بالرياض',
    'تنظيف مكيفات سبليت بالرياض',
    'تنظيف خزانات مياه بالرياض',
    'تنظيف بعد التشطيب بالرياض',
    'شركة نظافة في شمال الرياض',
    'شركة نظافة في شرق الرياض',
    'شركة نظافة في غرب الرياض',
    'شركة نظافة في جنوب الرياض',
    'تنظيف واجهات زجاجية بالرياض',
    'اسعار شركات تنظيف المنازل بالرياض',
    'افضل شركة تنظيف بالرياض مجربة ومضمونة',
    'خدمات تعقيم وتطهير بالرياض',
    'صفوة الرياض لخدمات النظافة',
    'رقم شركة تنظيف بالرياض 0575386029',
    'اتصال 0575386029',
    '0575386029'
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: `${siteConfig.name} | شركة تنظيف بالرياض وخدمات نظافة فاخرة`,
    description: siteConfig.description,
    type: 'website',
    locale: 'ar_SA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/logo.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - خدمات تنظيف فاخرة بالرياض`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | شركة تنظيف بالرياض`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/logo.svg`],
    creator: '@safwat_riyadh',
    site: '@safwat_riyadh',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}/logo.svg`,
          caption: siteConfig.name,
        },
        image: `${siteConfig.url}/logo.svg`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address,
          addressLocality: 'الرياض',
          addressRegion: 'منطقة الرياض',
          postalCode: '13321',
          addressCountry: 'SA',
        },
        sameAs: [
          'https://twitter.com/safwat_riyadh',
          'https://instagram.com/safwat_riyadh',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteConfig.phone,
            contactType: 'customer service',
            areaServed: 'SA',
            availableLanguage: ['Arabic', 'English'],
          },
        ],
      },
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.svg`,
        image: `${siteConfig.url}/logo.svg`,
        telephone: siteConfig.phone,
        priceRange: '$$',
        currenciesAccepted: 'SAR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, Mada, Apple Pay',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address,
          addressLocality: 'الرياض',
          addressRegion: 'منطقة الرياض',
          addressCountry: 'SA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 24.7136,
          longitude: 46.6753,
        },
        areaServed: [
          { '@type': 'City', name: 'الرياض' },
          { '@type': 'AdministrativeArea', name: 'شمال الرياض' },
          { '@type': 'AdministrativeArea', name: 'شرق الرياض' },
          { '@type': 'AdministrativeArea', name: 'غرب الرياض' },
          { '@type': 'AdministrativeArea', name: 'جنوب الرياض' },
          { '@type': 'AdministrativeArea', name: 'وسط الرياض' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1480',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        inLanguage: 'ar-SA',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteConfig.url}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${ibmPlexSansArabic.className} bg-black text-white selection:bg-white selection:text-black`}>
      <head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="author" type="text/plain" href="/llms.txt" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body className={`${ibmPlexSansArabic.className} min-h-screen bg-black text-white antialiased flex flex-col overflow-x-hidden`} suppressHydrationWarning>
        {/* Skip to Main Content for Accessible Keyboard Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-white focus:text-black focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full focus:outline-none">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}

