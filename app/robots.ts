import { MetadataRoute } from 'next'
export const dynamic = 'force-static'
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://augustopolonio.vercel.app'
  
  return {
    rules: {
    userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add paths you want to block from crawlers
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
