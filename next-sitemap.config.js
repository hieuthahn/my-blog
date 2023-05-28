/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://hieuthahn.bio',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/sitemap-hieuthahn.xml'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/post/[slug]', '/tag/[tag]']
            }
        ],
        additionalSitemaps: ['https://hieuthahn.bio/sitemap-hieuthahn.xml']
    }
};
