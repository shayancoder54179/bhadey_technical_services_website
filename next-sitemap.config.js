/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.bhadeya.com",
  generateRobotsTxt: true,
  outDir: "./public",
  exclude: ["/gpr-scanning-dubai"],
};
