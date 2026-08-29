import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { siteConfig } from '@/lib/siteConfig';
import { BookOpen, Sparkles, ShieldCheck, MapPin, Layers } from 'lucide-react';
import BlogSearchFilter from '@/components/blog/BlogSearchFilter';

export const metadata: Metadata = {
  title: `الموسوعة الشاملة ودليل النظافة بالرياض | مدونة ${siteConfig.name}`,
  description: 'الموسوعة الأكبر لنصائح وأدلة خدمات تنظيف المنازل، الفلل، القصور، جلي الرخام، تنظيف المكيفات، والخزانات في كافة أحياء العاصمة الرياض.',
  keywords: [
    'شركة تنظيف بالرياض',
    'تنظيف منازل بالرياض',
    'تنظيف فلل شمال الرياض',
    'جلي رخام بالرياض',
    'غسيل كنب بالبخار بالرياض',
    'تنظيف مكيفات بالرياض',
    'تنظيف بعد التشطيب بالرياض',
    'تنظيف خزانات بالرياض',
    'اسعار شركات التنظيف بالرياض'
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: `الموسوعة الشاملة ودليل النظافة بالرياض | ${siteConfig.name}`,
    description: 'أدلة مفصلة وشروحات علمية لطرق تنظيف الفلل، جلي الرخام، تنظيف المفروشات والخزانات بالرياض.',
    url: `${siteConfig.url}/blog`,
    images: [{ url: `${siteConfig.url}/logo.svg` }],
  },
};

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `موسوعة ومدونة ${siteConfig.name}`,
    description: 'أدلة ومقالات تخصصية في تنظيف وصيانة الفلل والمباني في الرياض.',
    url: `${siteConfig.url}/blog`,
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: '2026-08-20T08:00:00+03:00',
      url: `${siteConfig.url}/blog/${post.slug}`,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-12 pb-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-light">
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-white">الموسوعة ودليل المقالات</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 text-xs font-light text-gray-300 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>موسوعة صفوة الرياض لعلوم ونظافة المكان</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-white mb-6">
            دليلك الموسوعي الشامل لنظافة وعناية العقارات
            <br />
            <span className="font-semibold text-white">في كافة أحياء ومناخ العاصمة الرياض.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-3xl">
            مقالات هندسية وفنية متخصصة تغطي حلول العواصف الرملية، بروتوكولات جلي الرخام الإيطالي، تجهيز الفلل بعد التشطيب، غسيل المفروشات بالبخار الجاف، وصيانة مجاري التكييف والخزانات وفق أعلى المعايير القياسية السعودية.
          </p>

          {/* Quick Pillar Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 text-xs font-light">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>أدلة موثقة علمياً</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>تغطية 40+ حياً بالرياض</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>معايير الأمان والسلامة</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>فهارس وروابط داخلية</span>
            </div>
          </div>
        </div>

        {/* Interactive Search & Filter Posts Component */}
        <BlogSearchFilter posts={blogPosts} />
      </div>
    </div>
  );
}
