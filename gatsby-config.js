/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Bebas Neue, Bungee Shade, Squada One`,
            file: `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bungee+Shade&family=Squada+One&display=swap`,
          },
        ],
      },
    },
  ],
}
