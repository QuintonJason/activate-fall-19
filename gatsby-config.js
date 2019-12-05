module.exports = {
  siteMetadata: {
    title: `Lightning Night – One Night. Ten Talks. January 14 at 6:30 PM`,
    description: `In a series of compact 10-minute talks, you will learn how local leaders are using new technologies & preparing for the future of tech`,
    author: `@activ8conf`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-108426327-2",
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#031C2D`,
        theme_color: `#031C2D`,
        display: `minimal-ui`,
        icon: `src/images/activate-mark.gif`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
