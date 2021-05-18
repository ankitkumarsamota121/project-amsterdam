const path = require('path');
module.exports = {
  siteMetadata: {
    title: `Gatsby + Typescript + Tailwind CSS + Styled-Components Starter`,
    description: `A bare-bones Typescript + Tailwind CSS + Styled-Components + starter to kickoff your project.`,
    author: `@reevmich`
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`
  ]
};
