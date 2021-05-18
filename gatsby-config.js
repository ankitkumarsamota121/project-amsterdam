const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Ankit Samota`,
    description: `Portfolio of Ankit Samota`,
    author: `@incognitus`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
