export const siteMetadata = {
  title: "Gatsby Starter - Strata by HTML5 UP",
  author: "Hunter Chang",
  description: "A Gatsby.js Starter based on Strata by HTML5 UP"
};
export const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#000',
      theme_color: '#777',
      display: 'minimal-ui',
      icon: 'src/assets/images/website-icon.png',
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-offline'
];
