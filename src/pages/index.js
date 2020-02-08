import React from "react"
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout className="fixed-header">
    <SEO title="Home" />
    <PageTransition>
    <HomeHero>
    {data.allWordpressWpHomeSlide.edges.map(post => (
        <HomeHeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
      ))}
    </HomeHero>
    </PageTransition>
  </Layout>
)

const HomeHero = styled.div`
  height: 100vh;
`

const HomeHeroImg = styled(Img)`
  display: none;
  height:100vh;
  &:first-child {
    display: block;
  }
`

export default IndexPage

export const query = graphql`
  query {
    allWordpressWpHomeSlide {
      edges {
        node {
          content
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                    ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`