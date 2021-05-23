module.exports = {
  siteMetadata: {
    title: "Samuel Choong",
    description: "Documenting the evolution of web programming and the guy who chase after it",
    body: {
      content: "Just some SEO content"
    }
  },
  plugins: [
    "gatsby-plugin-sass",
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
