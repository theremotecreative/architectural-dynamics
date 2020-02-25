import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from "../components/layout"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"
import LightBox from '../components/LightBox'

const ProjectTemplate = ({ data }) => (
  <Layout
    pageTitle={data.wordpressWpProject.title}
    pageExcerpt={data.wordpressWpProject.excerpt}
  >
    <SEO title={data.wordpressWpProject.title} description={data.wordpressWpProject.excerpt} />
    <WideTemplate>
    <Title>{data.wordpressWpProject.title}</Title>
    <Img sizes={data.wordpressWpProject.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpProject.title} style={{ maxHeight: 450 }} />
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressWpProject.content }} />
    <LightBox images={data.wordpressWpProject.acf.project_gallery} />
    </WideTemplate>
  </Layout>
)

const Title = styled.h1`
  color: #000;
`

ProjectTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpProject(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      categories {
        name
        slug
      }
      acf {
        project_gallery {
          title
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                src
                ...GatsbyImageSharpSizes
              }
              fixed(width: 1000) {
                src
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
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
`