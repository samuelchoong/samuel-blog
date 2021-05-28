const rss = require("./utils/rss-options")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Samuel Choong",
    description: "Documenting the evolution of web programming and the guy who chase after it",
    siteUrl: process.env.BASE_URL,
    body: {
      content: "Just some SEO content"
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M72MH2V",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: rss.options
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js"
              }
            }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Blog`,
        short_name: `Samuel Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.png",
        icons:[{
          src: "src/images/icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "main maskable icon"
        },{
          src: "src/images/maskable_icon_x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "suppress maskable issue"
        }]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
  ],
};
