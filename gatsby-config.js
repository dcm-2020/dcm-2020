module.exports = {
  siteMetadata: {
    title: 'Disease Computational Modeling',
    description: 'Disease Computational Modeling - IJCAI 2020 Workshop',
    keywords: 'Disease, Computational Modeling, IJCAI',
  },
  pathPrefix: `/pages`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: 'https://github.com/dcm-2020/dcm-2020.github.io',
          branch: 'src',
          subDirectory: '',
        },
      },
    },
  ],
};
