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
                <TextLocation>
                  {post.node.acf.project_location}
                </TextLocation>
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
  object-fit: cover;
  object-position: center;
  height: 350px;
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
  text-align: center;
  margin-bottom: 5px;
`

const TextLocation = styled.p`
  color: #fff;
  text-align: center;
  font-family: montserrat;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 0px;
`

const MasonryItem = styled.div`
  position: relative;
  width: calc(33.3% - .54375rem);
  height: 350px;
  background-color: #000;
  display: inline-block;
  padding: 0px;
  margin-bottom: 1.0875rem;
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
  @media (max-width:1300px) {
    width: calc(50% - .54375rem);
  }
  @media (max-width:800px) {
    width: 100%;
    margin-bottom: 1.0875rem;
    ${TextPanel} {
      max-height: 100px;
      max-width: 240px;
      bottom: 1.0875rem;
      top: auto;
      left: 1.0875rem;
      background-color: rgba(0,0,0,.8);
    }
    ${TextCell} {
      opacity: 1;
      transform: scale(1);
    }
    &:hover {
      ${MasonryItemImg} {
        opacity: 1;
      }
    }
  }
  @media (max-width:400px) {
    ${TextPanel} {
      left: -1.0875rem;
      background-color: #111;
    }
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
          acf {
            project_location
          }
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 800) {
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