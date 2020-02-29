import { graphql, useStaticQuery } from 'gatsby'

export const useGitHubData = () => {
  const { githubData } = useStaticQuery(
    graphql`
      {
        githubData {
          data {
            user {
              repositories {
                edges {
                  node {
                    id
                    url
                    name
                    description
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return {
    repos: githubData.data.user['repositories'].edges.map(edge => edge.node),
    count: githubData.data.user['repositories'].edges.length,
  }
}
