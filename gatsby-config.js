require('dotenv').config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `cowglow.github.io`,
    description: `Kick off your next, great Gatsby project with this Material UI starter. This barebones starter ships with the main Gatsby and Material UI configuration files you might need.`,
    author: `@cowglow`,
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
          query ($author: String = "", $userFirst: Int = 0, $searchFirst: Int = 0, $q: String = "") {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: CREATED_AT, direction: DESC}) {
              edges {
                node {
                  id
                  name
                  description
                  url
                  stargazers {
                    totalCount
                  }
                  readme: object(expression:"master:README.md"){
                    ... on Blob{
                      text
                    }
                  }
                }
              }
            }
          }
          search(query: $q, type: ISSUE, first: $searchFirst) {
            edges {
              node {
                ... on PullRequest {
                  title
                  merged
                  url
                  state
                  repository {
                    stargazers {
                      totalCount
                    }
                    repoUrl: url
                    name
                  }
                }
              }
            }
          }
        }`,
        variables: {
          userFirst: 100,
          author: 'cowglow',
        },
      },
    },
    `gatsby-plugin-react-helmet`,
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
        background_color: `#424242`,
        theme_color: `#7d7d7d`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
