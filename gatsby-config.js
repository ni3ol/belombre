// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  title: 'My site',
  titleTemplate: '%s - My site',
  siteUrl: 'https://mysite.co.za',
  image: 'images/my-site.png',
  description: 'My shiny new Gatsby site',
  keywords: ['Gatsby', 'shiny', 'site'],
};

module.exports = {
  siteMetadata,
  plugins: [
    // SEO
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // Assets
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-less',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/`,
        },
      },
    },
    // Dev
    'gatsby-plugin-eslint',
  ],
};
