require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Guess the revenue`,
    description: `Can you guess the revenue of these popular side projects?`,
    author: `Vedant Lohbare`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `appYNCrsIJmhHiI3Q`,
            tableName: `Company`,
            mapping: {
              ComapnyLogo: `fileNode`,
            },
            tableLinks: [`CompanyRoles`],
          },
          {
            baseId: `appYNCrsIJmhHiI3Q`,
            tableName: `Roles`,
          },
          {
            baseId: `appYNCrsIJmhHiI3Q`,
            tableName: `Salary`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          // "G-P095Z2VX4C", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    //     {
    //       resolve: "gatsby-plugin-local-search",
    //       options: {
    //         // A unique name for the search index. This should be descriptive of
    //         // what the index contains. This is required.
    //         name: "brands",
    //
    //         // Set the search engine to create the index. This is required.
    //         // The following engines are supported: flexsearch, lunr
    //         engine: "flexsearch",
    //
    //         // Provide options to the engine. This is optional and only recommended
    //         // for advanced users.
    //         //
    //         // Note: Only the flexsearch engine supports options.
    //         engineOptions: "speed",
    //
    //         // GraphQL query used to fetch all data for the search index. This is
    //         // required.
    //         query: `
    //         {
    //           allAirtable(filter: {table: {eq: "Brands"}}) {
    //             nodes {
    //               id
    //               data {
    //                 CategorySearchName
    //                 Name
    //                 Description
    //                 slug
    //                 CategoryDisplayName
    //                 Image {
    //                   localFiles {
    //                     publicURL
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //         `,
    //         // Field used as the reference value for each document.
    //         // Default: 'id'.
    //         ref: "id",
    //
    //         // List of keys to index. The values of the keys are taken from the
    //         // normalizer function below.
    //         // Default: all fields
    //         index: ["Name", "CategoryID"],
    //
    //         // List of keys to store and make available in your UI. The values of
    //         // the keys are taken from the normalizer function below.
    //         // Default: all fields
    //         store: [
    //           "id",
    //           "Name",
    //           "CategoryID",
    //           "Category",
    //           "path",
    //           "Description",
    //           "Image",
    //         ],
    //
    //         // Function used to map the result from the GraphQL query. This should
    //         // return an array of items to index in the form of flat objects
    //         // containing properties to index. The objects must contain the
    //         // field above (default: 'id'). This is required.
    //         normalizer: ({ data }) =>
    //           data.allAirtable.nodes.map(node => ({
    //             id: node.id,
    //             path: node.data.slug,
    //             Name: node.data.Name,
    //             CategoryID: node.data.CategorySearchName,
    //             Description: node.data.Description,
    //             Category: node.data.CategoryDisplayName,
    //             Image: node.data.Image,
    //           })),
    //       },
    //     },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
