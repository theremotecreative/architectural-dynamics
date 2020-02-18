import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from "../components/layout"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"

const PortfolioPage = ({ data }) => (
  <Layout className="portfolio-page">
    <SEO title="Portfolio" keywords={[`Architecture`, `Grid`, `Portfolio`]} />
    <WideTemplate>
    <Masonry>
    {data.allWordpressWpProject.edges.map(post => (
        <MasonryItem>
          <Link to={`/project/${post.node.slug}`} className="masonry-item-link" >
            <MasonryItemImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
            <TextPanel>
              <TextCell>
                <TextTitle>
                  {post.node.title}
                </TextTitle>
              </TextCell>
            </TextPanel>
          </Link>
        </MasonryItem>
      ))}
    </Masonry>
    </WideTemplate>
  </Layout>
)

const Masonry = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  transition-duration: .3s;
`

const MasonryItemImg = styled(Img)`
  transition-duration: .3s;
`

const TextPanel = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  align-items: center;
  margin: 0 auto;
`

const TextCell = styled.div`
  width: 100%;
  transition: all .3s;
  opacity: 0;
  transform: scale(.7)
`

const TextTitle = styled.h3`
  color: #fff;
  text-align:center;
`

const MasonryItem = styled.div`
  position: relative;
  width: 33%;
  max-height: 400px;
  height: 100%;
  background-color: #000;
  display: inline-block;
  padding: 20px;
  width: 100%;
  transition-duration:.3s;
  &:hover {
    ${MasonryItemImg} {
      opacity: .2;
    }
    ${TextCell} {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media (max-width:1000px) {
    column-count: 2;
  }
  @media (max-width:500px) {
    column-count: 1;
  }
`

export default PortfolioPage

export const query = graphql`
  query {
    allWordpressWpProject {
      edges {
        node {
          title
          slug
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                    ...GatsbyImageSharpSizes
                    src
                  }
              }
            }
          }
        }
      }
    }
  }
`