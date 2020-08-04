require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore Worldwide tours and find out what makes them unique. Take A Break From Your Routine and Explore the World",
    author: "@imran.ib",
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESSTOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
