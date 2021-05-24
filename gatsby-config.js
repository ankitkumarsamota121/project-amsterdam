module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Ankit Samota',
    description:
      'Ankit Samota is a student developer - currently studying at NIT Rourkela - who specializes in building (and occasionally designing) modern and performant web applications.',
    image: '/og.png',
    twitterUsername: '@AnkitSamota3',
    siteUrl: 'https://asamota.com',
    author: `@incognitus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/content/skills`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `space grotesk\:300,400,500,600,700`,
          `poppins\:300,400,500,600,700,800,900`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // Cache fonts forever
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=31536000',
            'Cache-Control: immutable',
          ],
          // Cache images for a week
          '/static/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=31536000',
            'Cache-Control: immutable',
          ],
        },
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
        name: 'Ankit Samota : Portfolio',
        short_name: 'Ankit Samota',
        start_url: `/`,
        background_color: '#EFEDFF',
        theme_color: '#6A4FFE',
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
