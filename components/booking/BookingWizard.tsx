'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { areasData } from '@/lib/areasData';
import { siteConfig } from '@/lib/siteConfig';
import { ShieldCheck, MessageSquare, Send, Check } from 'lucide-react';

export function BookingWizard() {
  const searchParams = useSearchParams();
  const initialServiceSlug = searchParams.get('service') || servicesData[0].slug;
  const initialAreaSlug = searchParams.get('area') || '';

  const [selectedService, setSelectedService] = useState(initialServiceSlug);
  const [selectedArea, setSelectedArea] = useState(initialAreaSlug);
  const [neighborhood, setNeighborhood] = useState('');
  const [propertySize, setPropertySize] = useState('medium');
  const [selectedDate, setSelectedDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const currentService = servicesData.find((s) => s.slug === selectedService) || servicesData[0];
  const currentArea = areasData.find((a) => a.slug === selectedArea);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone || !customerName) return;

    const ref = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `مرحباً صفوة الرياض، أود تأكيد حجز خدمة نظافة:
• الخدمة: ${currentService.title}
• المنطقة: ${currentArea ? currentArea.name : 'الرياض'} - ${neighborhood || 'حسب الموقع'}
• الحجم التقديري: ${propertySize === 'small' ? 'صغير' : propertySize === 'medium' ? 'متوسط' : 'كبير / فيلا'}
• التاريخ المفضل: ${selectedDate || 'أقرب موعد متاح'}
• الفترة: ${timeSlot === 'morning' ? 'صباحية (8 ص - 12 م)' : timeSlot === 'afternoon' ? 'ظهرية (1 م - 5 م)' : 'مسائية (6 م - 10 م)'}
• الاسم: ${customerName}
• الجوال: ${customerPhone}
• ملاحظات: ${notes || 'لا يوجد'}`;
    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-white">طلب خدمة</span>
        </div>

        <div className="inline-flex items-center px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
          <span>حجز سريع ومباشر في أقل من دقيقة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          طلب خدمة نظافة بالرياض
        </h1>
        <p className="text-base text-gray-300 font-light leading-relaxed">
          اختر تفاصيل الخدمة والوقت الأنسب لك، وسيصلك تأكيد فوري من فريق خدمة العملاء.
        </p>
      </div>

      {submitted ? (
        /* Success Screen */
        <div className="max-w-2xl mx-auto liquid-glass-card rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <Check className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            تم استلام طلبك بنجاح!
          </h2>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 space-y-1">
            <span className="text-xs text-gray-400">رقم المرجع للطلب:</span>
            <p className="text-xl font-mono font-bold text-white tracking-widest">{bookingRef}</p>
          </div>

          <p className="text-sm text-gray-300 font-light leading-relaxed">
            شكراً لاختيارك {siteConfig.name}. تم تسجيل طلبك لخدمة <span className="text-white font-medium">{currentService.title}</span>. سيتواصل معك مشرف الخدمة هاتفياً خلال دقائق لتأكيد الموعد وموقع الوصول.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="booking-success-whatsapp-btn"
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-medium text-sm transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>متابعة الطلب عبر واتساب فوراً</span>
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm text-gray-300 hover:text-white border border-white/15 liquid-glass"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      ) : (
        /* Form Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left/Main Form Fields */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-8">
            {/* Step 1: Select Service */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-base font-semibold text-white block" id="service-group-label">
                1. اختر نوع الخدمة المطلوبة *
              </span>
              <div role="radiogroup" aria-labelledby="service-group-label" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesData.map((srv) => (
                  <button
                    type="button"
                    key={srv.id}
                    role="radio"
                    aria-checked={selectedService === srv.slug}
                    onClick={() => setSelectedService(srv.slug)}
                    className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      selectedService === srv.slug
                        ? 'border-white bg-white/20 text-white font-medium shadow-md'
                        : 'border-white/10 bg-white/[0.03] text-gray-200 hover:border-white/30'
                    }`}
                  >
                    <span className="text-sm font-semibold">{srv.title}</span>
                    <span className="text-[11px] text-gray-300 mt-1">{srv.pricingStarting}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Location and Neighborhood */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-base font-semibold text-white block">
                2. موقع العقار في الرياض *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="select-area" className="text-xs text-gray-300 block mb-1.5">نطاق المنطقة</label>
                  <select
                    id="select-area"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="" className="bg-black text-white">اختر المنطقة (شمال، شرق، غرب...)</option>
                    {areasData.map((area) => (
                      <option key={area.id} value={area.slug} className="bg-black text-white">
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="input-neighborhood" className="text-xs text-gray-300 block mb-1.5">اسم الحي أو المخطط</label>
                  <input
                    id="input-neighborhood"
                    type="text"
                    placeholder="مثال: حي الملقا، النرجس، الروضة..."
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Property Size */}
              <div className="pt-2">
                <span className="text-xs text-gray-300 block mb-2" id="property-size-label">حجم المساحة / العقار</span>
                <div role="radiogroup" aria-labelledby="property-size-label" className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'small', label: 'شقة صغيرة / غرفة / مجلس' },
                    { id: 'medium', label: 'شقة متوسطة / دور سكني' },
                    { id: 'large', label: 'فيلا كاملة / قصر / مبنى' },
                  ].map((size) => (
                    <button
                      type="button"
                      key={size.id}
                      role="radio"
                      aria-checked={propertySize === size.id}
                      onClick={() => setPropertySize(size.id)}
                      className={`p-3 rounded-xl border text-center text-xs transition-all ${
                        propertySize === size.id
                          ? 'border-white bg-white/20 text-white font-medium shadow-md'
                          : 'border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Date & Preferred Time */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-base font-semibold text-white block">
                3. الموعد المفضل *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-date" className="text-xs text-gray-300 block mb-1.5">التاريخ المطلوب</label>
                  <input
                    id="input-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <span className="text-xs text-gray-300 block mb-1.5" id="timeslot-group-label">الفترة الزمنية</span>
                  <div role="radiogroup" aria-labelledby="timeslot-group-label" className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'morning', label: 'صباحاً (8 - 12)' },
                      { id: 'afternoon', label: 'ظهراً (1 - 5)' },
                      { id: 'evening', label: 'مساءً (6 - 10)' },
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        role="radio"
                        aria-checked={timeSlot === slot.id}
                        onClick={() => setTimeSlot(slot.id)}
                        className={`p-2.5 rounded-xl border text-center text-[11px] transition-all ${
                          timeSlot === slot.id
                            ? 'border-white bg-white/20 text-white font-medium shadow-md'
                            : 'border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/30'
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-base font-semibold text-white block">
                4. بيانات التواصل *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-name" className="text-xs text-gray-300 block mb-1.5">الاسم الكريم *</label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="اسمك الكامل"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="input-phone" className="text-xs text-gray-300 block mb-1.5">رقم الجوال السعودي *</label>
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="05XXXXXXXX"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors text-right"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-notes" className="text-xs text-gray-300 block mb-1.5">ملاحظات أو تفاصيل إضافية</label>
                <textarea
                  id="input-notes"
                  rows={3}
                  placeholder="أي تعليمات خاصة بالدخول، وجود حيوانات أليفة، بقع مستعصية، تفضيل تعطير معين..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="submit-booking-form-btn"
                type="submit"
                className="flex-1 bg-white text-black py-4 rounded-xl font-semibold text-base hover:bg-gray-100 active:scale-98 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>تأكيد إرسال طلب الحجز</span>
              </button>

              <a
                id="direct-whatsapp-booking-btn"
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 liquid-glass border border-white/20 text-white py-4 rounded-xl font-medium text-base hover:bg-white/10 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>الحجز المباشر عبر واتساب</span>
              </a>
            </div>
          </form>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="liquid-glass-card rounded-2xl p-7 sticky top-28 space-y-6">
              <h3 className="text-lg font-semibold text-white pb-3 border-b border-white/10">
                ملخص الطلب المبدئي
              </h3>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">الخدمة:</span>
                  <span className="font-medium text-white text-left">{currentService.title}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">نطاق التغطية:</span>
                  <span className="font-medium text-white">{currentArea ? currentArea.name : 'مدينة الرياض'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">الحجم:</span>
                  <span className="font-medium text-white">
                    {propertySize === 'small' ? 'صغير' : propertySize === 'medium' ? 'متوسط' : 'كبير / فيلا'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">المدة التقديرية:</span>
                  <span className="font-medium text-white">{currentService.estimatedDuration}</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-gray-400">السعر المبدئي:</span>
                  <span className="text-base font-bold text-white">{currentService.pricingStarting}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ضمان صفوة الرياض المعتمد</span>
                </div>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  الدفع بعد إتمام الخدمة وفحص الجودة مع المشرف الميداني. لا رسوم خفية.
                </p>
              </div>

              <div className="pt-2 text-center text-xs text-gray-400 space-y-1">
                <p>للاستفسارات العاجلة:</p>
                <a href={`tel:${siteConfig.phone}`} className="text-white font-medium hover:underline block" dir="ltr">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
