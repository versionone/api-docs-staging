import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Groups from './../components/Groups'
import Toc from './../components/Toc'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
    }
  }

  resize = resizeState => {
    this.setState({
      isOpen: resizeState.isOpen,
    })
  }

  render() {
    const data = this.props.data
    const conentClass = this.state.isOpen ? 'main open' : 'main'
    return (
      <Layout>
        <div className="layout-container">
          <span className="nav">
            <Toc isOpen={this.state.isOpen} resize={this.resize} />
          </span>
          <main className={conentClass}>
            <Groups data={data} />
          </main>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fileAbsolutePath
          html
        }
      }
    }
  }
`

export default IndexPage
