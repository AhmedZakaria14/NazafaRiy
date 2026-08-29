import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | خدمات نظافة فاخرة بالرياض`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    lang: 'ar',
    dir: 'rtl',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
