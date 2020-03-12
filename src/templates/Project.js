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
    pageExcerpt={data.wordpressWpProject.acf.project_information}
  >
    <SEO title={data.wordpressWpProject.title} description={data.wordpressWpProject.excerpt} />
    <WideTemplate>
      <ProjectMain>
        <ProjectImage>
          <Img sizes={data.wordpressWpProject.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpProject.title} style={{ maxHeight: '100%', height: '100%' }} />
        </ProjectImage>
        <ProjectCopy>
          <ProjectH3>Description</ProjectH3>
          <div style={{marginLeft: '10px'}} dangerouslySetInnerHTML={{ __html: data.wordpressWpProject.content }} />
        </ProjectCopy>
      </ProjectMain>
      <ProjectH3>Gallery</ProjectH3>
      <LightBox images={data.wordpressWpProject.acf.project_gallery} />
    </WideTemplate>
  </Layout>
)

const ProjectMain = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media(max-width:1200px) {
    flex-wrap: wrap;
  }
`

const ProjectImage = styled.div`
  width: 55%;
  @media(max-width:1200px) {
    width: 100%;
  }
`
const ProjectCopy = styled.div`
  width: 45%;
  padding-left: 10px;
  p {
    font-family: Roboto, Arial;
    font-size: 16px;
  }
  @media(max-width:1200px) {
    width: 100%;
    padding-left: 0;
    padding-top: 10px;
  }
`

const ProjectH3 = styled.h3` 
  font-family: Montserrat, Open Sans;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgb(21,21,29);
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #f1f1f1;
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
        project_information
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