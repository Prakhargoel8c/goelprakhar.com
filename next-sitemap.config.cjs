/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://prakhargoel.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
