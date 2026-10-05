import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://rodriccrz.netlify.app';

const routes = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: '/projects', priority: '0.9', changefreq: 'weekly' },
	{ path: '/projects/cityofhithair', priority: '0.8', changefreq: 'monthly' },
	{ path: '/projects/anylthin', priority: '0.8', changefreq: 'monthly' },
	{ path: '/projects/arcfiction', priority: '0.8', changefreq: 'monthly' },
	{ path: '/projects/googleclone', priority: '0.8', changefreq: 'monthly' },
	{ path: '/experience', priority: '0.85', changefreq: 'monthly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/resume', priority: '0.7', changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
