module.exports = {
  siteMetadata: {
    title: "Samuel Blog",
    body: {
      content: "Just some SEO content"
    }
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
