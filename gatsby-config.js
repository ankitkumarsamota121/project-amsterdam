const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Personal Website',
    description:
      'Ankit Samota is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://asamota.com', // No trailing slash allowed!
    keywords: [
      'web developer portfolio',
      'best developer portfolio',
      'ankit samota',
      'samota',
      'ankit',
      'nit rourkela',
      'student developer portfolio',
      'personal website',
      'developer portfolio',
    ],
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@AnkitSamota3',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/skills/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ankit Samota`,
        short_name: `Ankit`,
        start_url: `/`,
        background_color: `#6A4FFE`,
        theme_color: `#EFEDFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
