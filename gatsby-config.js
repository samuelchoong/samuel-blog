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
  ],
};
