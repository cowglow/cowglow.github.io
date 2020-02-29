import React from 'react'
import Layout from '../layout/layout'
import { useGitHubData } from '../../hooks/use-git-hub-data'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'

const GitHubRepos = () => {
  const { repos } = useGitHubData()
  return (
    <Layout>
      <h1>GitHub repos</h1>
      <List>
        {repos.map(repo => (
          <ListItem button>
            <ListItem component="a" href={repo.url} target="_new">
              <ListItemText primary={repo.name} />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export default GitHubRepos
