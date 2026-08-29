'use client';

import React, { useState, useEffect } from 'react';
import { ListCollapse, ChevronDown, CheckCircle, Bookmark } from 'lucide-react';
import { TableOfContentItem } from '@/lib/blogData';

interface Props {
  items: TableOfContentItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="فهرس المقال"
      className="liquid-glass-card rounded-2xl p-5 border border-white/15 my-8 shadow-xl"
    >
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white">
            <ListCollapse className="w-4 h-4" />
          </div>
          <h2 className="text-sm font-semibold text-white tracking-wide">
            فهرس المحتويات والمحاور
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="تبديل عرض فهرس المحتويات"
          className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded bg-white/5"
        >
          <span>{isOpen ? 'إخفاء' : 'إظهار'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-2 text-xs font-light">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id || idx}
                style={{ paddingRight: item.level === 3 ? '1.25rem' : '0rem' }}
              >
                <button
                  type="button"
                  onClick={() => scrollToHeading(item.id)}
                  className={`text-right w-full py-1.5 px-3 rounded-lg flex items-center justify-between gap-2 transition-all group ${
                    isActive
                      ? 'bg-white text-black font-medium shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="line-clamp-1">{item.title}</span>
                  {isActive && <CheckCircle className="w-3.5 h-3.5 shrink-0 text-black" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
