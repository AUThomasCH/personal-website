module.exports = {
  siteMetadata: {
    siteUrl: "https://www.thomas-glauser.ch",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.thomas-glauser.ch",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: "/static/",
          },
        ],
      },
    },
  ],
};
