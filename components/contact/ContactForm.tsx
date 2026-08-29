'use client';

import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <div className="liquid-glass-card rounded-2xl p-7 sm:p-10">
      {sent ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <Check className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-semibold text-white">تم استلام رسالتك بنجاح!</h3>
          <p className="text-sm text-gray-300 font-light max-w-md mx-auto">
            شكراً لتواصلك مع {siteConfig.name}. سيتواصل معك أحد مستشارينا خلال أقل من 15 دقيقة.
          </p>
          <button
            onClick={() => setSent(false)}
            className="text-xs text-white underline pt-4 inline-block"
          >
            إرسال رسالة أخرى
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-2">أرسل لنا استفسارك</h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light mb-6">
            املأ النموذج التالي وسيقوم فريقنا بالرد عليك فوراً.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="text-xs text-gray-300 block mb-1.5">الاسم الكريم *</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="اسمك الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="text-xs text-gray-300 block mb-1.5">رقم الجوال *</label>
              <input
                id="contact-phone"
                type="tel"
                required
                dir="ltr"
                placeholder="05XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors text-right"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="text-xs text-gray-300 block mb-1.5">موضوع الاستفسار</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="مثال: طلب معاينة لفيلا في حي الملقا، استفسار عن جلي الرخام..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="text-xs text-gray-300 block mb-1.5">نص الرسالة أو الاستفسار *</label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="اكتب تفاصيل استفسارك أو مساحة عقارك..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <button
            id="submit-contact-btn"
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold text-sm hover:bg-gray-100 active:scale-98 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>إرسال الرسالة الآن</span>
          </button>
        </form>
      )}
    </div>
  );
}
