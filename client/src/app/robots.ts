import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'false';

  return {
    rules: [
      {
        userAgent: '*',
        allow: allowIndexing ? '/' : undefined,
        disallow: allowIndexing ? ['/api/'] : '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
