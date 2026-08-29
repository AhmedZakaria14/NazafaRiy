import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full liquid-glass-card rounded-3xl p-8 sm:p-12 text-center space-y-6 relative z-10">
        <span className="text-7xl font-light text-white/40 tracking-tighter block">404</span>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          الصفحة غير موجودة
        </h1>

        <p className="text-sm text-gray-300 font-light leading-relaxed">
          عذراً، الرابط الذي تحاول الوصول إليه غير متوفر أو ربما تم نقله. يمكنك العودة للصفحة الرئيسية واستكشاف خدماتنا في الرياض.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            id="not-found-home-btn"
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
          >
            <span>استعراض الخدمات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
