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
    <HomeHeroSection>
      <HeroOne>
        {data.allWordpressWpHomeSlide.edges.map(post => (
          <HomeHeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
        ))}
      </HeroOne>
      <HeroTwo></HeroTwo>
      <HeroThree></HeroThree>
      <HeroFour></HeroFour>
    </HomeHeroSection>
    </PageTransition>
  </Layout>
)

const HomeHeroSection = styled.div`
  height: calc( 100vh - 156px);
  width: calc( 100vw - 370px );
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const HomeHeroImg = styled(Img)`
  display: none;
  height: 60vh;
  width: 100%;
  &:first-child {
    display: block;
  }
`

const HeroOne = styled.div`
  width: 70%;
  height: 70%;
  border: 5px solid #fff;
  border-left: none;
  background-color: #aaa;
  z-index: 10;
  position: relative;
  overflow: hidden;
`

const HeroTwo = styled.div`
  width: 30%;
  height: 70%;
  border: 5px solid #fff;
  background-color: #bbb;
  z-index: 10;
`

const HeroThree = styled.div`
  width: 70%;
  height: 30%;
  border: 5px solid #fff;
  border-left: none;
  border-bottom: none;
  background-color: #ccc;
  z-index: 10;
`

const HeroFour = styled.div`
  width: 30%;
  height: 30%;
  border: 5px solid #fff;
  border-bottom: none;
  background-color: #ddd;
  z-index: 10;
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