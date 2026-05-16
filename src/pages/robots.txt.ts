import type { APIRoute } from 'astro';

// Helper function that generates the content for the robots.txt file
// This specifies that all web crawlers (User-agent: *) have access to the entire site (Allow: /)
const getRobotsTxt = (siteUrl: string) => `
User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml
`;

// API route for serving the robots.txt file
// When a GET request is made to this route, it returns the generated robots.txt content
export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.href ?? 'https://bill.vercel.app/';
  return new Response(getRobotsTxt(siteUrl));
};
