module.exports = {
  siteMetadata: {
    title: `Architectural Dynamics`,
    description: `James Vanderheyden | Portfolio`,
    author: `@theremotecreative`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `architectural-dynamics`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ad-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `roboto condensed`,
          `montserrat\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // Source Website from subdomain
        baseUrl: "architectural-dynamics.theremotecreative.com",
        protocol: "http",
        hostingWPCOM: false,
        // Using advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        // Replace source url with gatsby site url
        /*searchAndReplaceContentUrls: {
          sourceUrl: "http://architect-portfolio.theremotecreative.com",
          replacementUrl: "http://localhost:8000/",
        },*/
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/project", // <== Custom post slug
          "**/home_slide", // <== Custom post slug
          "**/testimonial", // <== Custom post slug
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        keepMediaSizes: false,
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
