import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';
import { servicesData } from '@/lib/servicesData';
import { areasData } from '@/lib/areasData';
import { siteConfig } from '@/lib/siteConfig';
import { Clock, ArrowLeft, ArrowUpLeft, Sparkles, BookOpen, ShieldCheck, MapPin, Tag, Share2, MessageSquare, CheckCircle2, UserCheck } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'المقال غير متوفر',
    };
  }

  return {
    title: `${post.title} | دليل ${siteConfig.name}`,
    description: post.excerpt,
    keywords: [...post.tags, 'خدمات تنظيف بالرياض', 'شركة تنظيف بالرياض'],
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related Services
  const matchingServices = servicesData.filter((s) =>
    post.relatedServices.includes(s.slug) || post.relatedServices.includes(s.id)
  );

  // Related Areas
  const matchingAreas = areasData.filter((a) =>
    post.relatedAreas.includes(a.name) || post.relatedAreas.includes(a.slug)
  );

  // Other Articles
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Schema.org Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: '2026-08-20T08:00:00+03:00',
    dateModified: '2026-08-26T08:00:00+03:00',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-24">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-light flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            الموسوعة والمقالات
          </Link>
          <span>/</span>
          <span className="text-white line-clamp-1">{post.title}</span>
        </div>

        {/* Header Block */}
        <header className="space-y-6 mb-10 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-light text-white bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 font-light">{post.date}</span>
            <span className="text-xs text-gray-400 font-light flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
            <div className="mr-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300 font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>مُعتمد ومُراجع فنياً</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.25] text-white">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <UserCheck className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">{post.author.name}</div>
              <div className="text-xs text-gray-400 font-light">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[340px] sm:h-[460px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Interactive Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <TableOfContents items={post.tableOfContents} />
        )}

        {/* Main Article Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-gray-300 font-light text-base leading-relaxed border-b border-white/10 pb-16">
          <MarkdownRenderer content={post.content} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-10 not-prose border-t border-white/10">
            <span className="text-xs text-gray-400 font-light flex items-center gap-1 ml-2">
              <Tag className="w-3.5 h-3.5" />
              <span>الوسوم:</span>
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Internal Linking: Related Services */}
        {matchingServices.length > 0 && (
          <div className="my-12 liquid-glass-card rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl">
            <div className="flex items-center gap-2.5 mb-4 text-white">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-medium">الخدمات الاحترافية المرتبطة بهذا الدليل</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-light mb-6">
              إذا كنت تبحث عن تنفيذ احترافي وفق أعلى المعايير الهندسية والأجهزة الألمانية، يمكنك طلب الخدمات التالية مباشرة:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {matchingServices.map((srv) => (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] text-gray-400 block mb-1">{srv.category}</span>
                    <h4 className="text-sm font-medium text-white group-hover:text-gray-200 mb-2 leading-snug">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2 font-light">
                      {srv.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-white">
                    <span>{srv.pricingStarting}</span>
                    <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal Linking: Related Areas */}
        {matchingAreas.length > 0 && (
          <div className="my-10 liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-white">تغطية الأحياء المرتبطة</h4>
                <p className="text-xs text-gray-400 font-light">
                  خدمات سريعة لفرقنا الميدانية في: {matchingAreas.map((a) => a.name).join('، ')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {matchingAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-xs px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                >
                  دليل {area.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* High Conversion Booking CTA */}
        <div className="my-14 p-8 sm:p-10 rounded-3xl liquid-glass border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-right max-w-xl">
            <span className="text-xs text-emerald-400 font-light flex items-center justify-center md:justify-start gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>جاهزون لخدمتكم على مدار 24 ساعة</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug">
              هل تفضل ترك مهمة النظافة العميقة لخبراء صفوة الرياض؟
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              احجز الآن فريقاً فندقياً مجهزاً بأحدث المكائن الألمانية والمواد العضوية المصرحة من الغذاء والدواء مع ضمان إعادة التنظيف المجاني.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <Link
              id="blog-post-book-btn"
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-xl text-center"
            >
              <span>طلب الخدمة الفورية</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              id="blog-post-whatsapp-btn"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`مرحباً صفوة الرياض، قرأت مقال "${post.title}" وأود الاستفسار عن حجز موعد.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs text-gray-300 hover:text-white px-6 py-3 rounded-xl border border-white/15 liquid-glass transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>استفسار واتساب سريع</span>
            </a>
          </div>
        </div>

        {/* More Articles */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-light text-white">مقالات وأدلة أخرى قد تهمك</h3>
            <Link href="/blog" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
              <span>تصفح كل المقالات</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="liquid-glass-card rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 block mb-1">{other.category}</span>
                  <h4 className="text-sm font-medium text-white group-hover:text-gray-200 leading-snug mb-2">
                    {other.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>{other.readTime}</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
