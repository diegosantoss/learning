module.exports = {
  siteMetadata: {
    title: 'Diego Santos',
    author: '@diegosantoss',
    siteUrl: 'https://diegosantoss.github.io/'
  },
  plugins: [ 
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    }
  ],
};
