'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blogData';
import { Clock, ArrowUpLeft, Search, Tag, Sparkles, Filter, BookOpen } from 'lucide-react';

interface Props {
  posts: BlogPost[];
}

export default function BlogSearchFilter({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category));
    return ['all', ...Array.from(cats)];
  }, [posts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).slice(0, 10);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        searchTerm.trim() === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === 'all' || post.category === selectedCategory;

      const matchTag = !selectedTag || post.tags.includes(selectedTag);

      return matchSearch && matchCategory && matchTag;
    });
  }, [posts, searchTerm, selectedCategory, selectedTag]);

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="liquid-glass-card rounded-2xl p-6 border border-white/15 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
            <input
              id="blog-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث في المقالات (مثال: جلي الرخام، تنظيف غبار، مكيفات، فلل شمال الرياض...)"
              className="w-full bg-white/5 border border-white/10 rounded-xl pr-11 pl-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all font-light"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          <span className="text-xs text-gray-400 font-light flex items-center gap-1 ml-2">
            <Filter className="w-3.5 h-3.5" />
            <span>التصنيف:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag(null);
              }}
              className={`text-xs px-3.5 py-1.5 rounded-xl transition-all ${
                selectedCategory === cat && !selectedTag
                  ? 'bg-white text-black font-medium shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'all' ? 'جميع المقالات' : cat}
            </button>
          ))}
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-gray-400 font-light flex items-center gap-1 ml-2">
            <Tag className="w-3.5 h-3.5" />
            <span>وسوم شائعة:</span>
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                selectedTag === tag
                  ? 'bg-white text-black font-medium border-white'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/25 hover:text-gray-200'
              }`}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="text-[11px] text-red-400 hover:underline mr-2"
            >
              إلغاء تصفية الوسم
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-gray-400 font-light">
        <span>عرض {filteredPosts.length} مقال ودليل متخصص</span>
        {(searchTerm || selectedCategory !== 'all' || selectedTag) && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedTag(null);
            }}
            className="text-white hover:underline text-xs"
          >
            إعادة تعيين الفلاتر
          </button>
        )}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 liquid-glass-card rounded-2xl border border-white/10 p-8 space-y-4">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto" />
          <h3 className="text-lg font-light text-white">لا توجد مقالات مطابقة للبحث</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            جرب البحث بكلمات أخرى مثل &quot;رخام&quot;، &quot;غبار&quot;، &quot;تشطيب&quot;، أو &quot;شمال الرياض&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="liquid-glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 text-xs font-light text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-light">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  id={`blog-read-link-${post.slug}`}
                  href={`/blog/${post.slug}`}
                  className="text-xs font-medium text-white hover:text-gray-300 underline underline-offset-4 flex items-center gap-1 transition-colors"
                >
                  <span>قراءة المقال وفهرس المحتوى</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
