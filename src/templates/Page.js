import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout
    pageTitle={data.wordpressPage.title}
    pageExcerpt={data.wordpressPage.page_info}
  >
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <WideTemplate>
    <Img sizes={data.wordpressPage.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPage.title} style={{ maxHeight: 450, marginBottom: '1.45rem' }} />
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </WideTemplate>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
      acf {
        page_info
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