import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import GitHubRepos from '../components/github-repos/github-repos'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Components</h1>
    <p>Welcome to the components page.</p>
    <GitHubRepos/>
  </Layout>
)

export default SecondPage
