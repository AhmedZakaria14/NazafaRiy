'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafwaLogo } from '@/components/ui/SafwaLogo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track route to close mobile drawer when route changes
  const prevPathname = React.useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  const navLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'من نحن', href: '/about' },
    { label: 'مناطق الخدمة', href: '/areas' },
    { label: 'العروض', href: '/offers' },
    { label: 'المدونة', href: '/blog' },
  ];

  return (
    <>
      <header
        id="main-navbar-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 lg:px-16 ${
          isScrolled ? 'pt-3 pb-1' : 'pt-5 md:pt-6'
        }`}
      >
        <div
          id="navbar-container"
          className="liquid-glass rounded-xl px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between border border-white/15 max-w-7xl mx-auto shadow-2xl transition-all duration-300"
        >
          {/* Right Side: Logo */}
          <Link
            id="nav-logo-link"
            href="/"
            className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity group"
          >
            <SafwaLogo
              size={38}
              showText={true}
              textClassName="text-base md:text-lg font-semibold tracking-tight text-white leading-none"
              subtextClassName="text-[10px] text-gray-300 font-light tracking-wider leading-none mt-1"
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav id="nav-desktop-links" aria-label="التنقل الرئيسي" className="hidden lg:flex items-center gap-7 text-sm font-normal">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.href.replace('/', '') || 'home'}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 transition-all duration-200 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Left Side: Desktop CTA & WhatsApp + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Link - Desktop only */}
            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات النظافة في الرياض')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs text-gray-200 hover:text-white border border-white/10 hover:border-white/30 transition-all liquid-glass"
              aria-label="تواصل عبر واتساب"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>واتساب</span>
            </a>

            {/* Primary CTA */}
            <Link
              id="nav-cta-btn"
              href="/request-service"
              className="hidden sm:inline-flex items-center justify-center bg-white text-black px-5 md:px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 active:scale-95 transition-all shadow-md"
            >
              اطلب خدمة
            </Link>

            {/* Mobile Menu Button */}
            <button
              id="nav-mobile-toggle-btn"
              aria-controls="mobile-drawer-overlay"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Liquid Glass Full Screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-5 text-right mt-4">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-light">القائمة الرئيسية</span>
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-light block py-2 transition-colors ${
                        isActive ? 'text-white font-medium' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-white block py-1"
              >
                تواصل معنا
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <Link
                id="mobile-menu-cta-book"
                href="/request-service"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-white text-black py-3.5 rounded-xl font-medium text-base hover:bg-gray-100 active:scale-95 transition-all"
              >
                اطلب خدمة الآن
              </Link>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="mobile-menu-call"
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm border border-white/20 text-white liquid-glass"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر</span>
                </a>
                <a
                  id="mobile-menu-whatsapp"
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm border border-white/20 text-white liquid-glass"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
