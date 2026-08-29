import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpLeft } from 'lucide-react';
import { SafwaLogo } from '@/components/ui/SafwaLogo';
import { servicesData } from '@/lib/servicesData';
import { areasData } from '@/lib/areasData';

export function Footer() {
  return (
    <footer id="main-footer" className="bg-black text-white border-t border-white/10 pt-20 pb-28 sm:pb-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-light block mb-4">
              صفوة العناية بالمكان في الرياض
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] text-white">
              مكان أنظف وأكثر فخامة
              <br />
              <span className="text-gray-300 font-normal">يبدأ بخطوة واحدة.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
            <Link
              id="footer-cta-request"
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-base hover:bg-gray-100 active:scale-95 transition-all shadow-lg w-full sm:w-auto"
            >
              <span>اطلب خدمتك الآن</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
            <a
              id="footer-whatsapp-link"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-white/15 liquid-glass transition-colors w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استشارة فورية عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <SafwaLogo
                size={40}
                showText={true}
                textClassName="text-xl font-semibold tracking-tight text-white leading-tight"
                subtextClassName="text-xs text-gray-300 font-light tracking-wider leading-none mt-1"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-light">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-white tracking-wide">أبرز الخدمات</h3>
            <ul className="space-y-2 text-sm font-light">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-xs text-gray-300 hover:text-white underline pt-1 inline-block">
                  جميع الخدمات →
                </Link>
              </li>
            </ul>
          </div>

          {/* Riyadh Areas Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-white tracking-wide">تغطية أحياء الرياض</h3>
            <ul className="space-y-2 text-sm font-light">
              {areasData.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-xs text-gray-300 hover:text-white underline pt-1 inline-block">
                  خريطة التغطية الكاملة →
                </Link>
              </li>
            </ul>
          </div>

          {/* Fast Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-white tracking-wide">روابط سريعة</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-400 hover:text-white transition-colors">
                  الباقات والعروض
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  المدونة ودليل العناية
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة لشركة خدمات النظافة بالرياض.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>

        {/* NasharHub Attribution */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-normal text-gray-300 inline-flex items-center flex-wrap justify-center gap-1.5">
            <span>تم تصميم الموقع بواسطة</span>
            <a
              id="footer-nasharhub-link"
              href="https://nasharhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-gray-200 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              NasharHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
