import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
        ],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'CCBot',
          'cohere-ai',
          'Google-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
