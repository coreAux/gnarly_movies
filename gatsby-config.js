require("dotenv").config({
  path: ".env"
})

module.exports = {
  siteMetadata: {
    title: "Gnarly Movies",
    siteUrl: "https://www.gnarlymovies.co"
  },
  plugins:[
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: "gatsby-plugin-image"
    },
    {
      resolve: "gatsby-plugin-react-helmet"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-sharp"
    },
    {
      resolve: "gatsby-transformer-sharp"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
}
