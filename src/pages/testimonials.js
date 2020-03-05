import React from "react"
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import WideTemplate from "../components/WideTemplate"

const TestimonialPage = ({ data })=> (
<Layout 
pageTitle="Testimonials"
pageExcerpt='<p>The PROCESS of architectural design and planning is a journey. "Let me walk that path with you."<br/>- James M. Vanderheyden</p>'
>
<SEO title="Testimonials" />
    <PageTransition>
        <WideTemplate>
            <TestimonialSection>
                {data.allWordpressWpTestimonial.edges.map(post => (
                    <TestContent>
                        <TestCopy dangerouslySetInnerHTML={{ __html: post.node.content }} />
                        <TestAuthor>
                            {post.node.title}
                        </TestAuthor>
                        <TestInfo>
                            {post.node.acf.testimonial_info}
                        </TestInfo>
                    </TestContent>
                ))} 
            </TestimonialSection>
        </WideTemplate>
    </PageTransition>
</Layout>
)



const TestimonialSection = styled.div`
`

const TestContent = styled.div`
`

const TestCopy = styled.div``

const TestAuthor = styled.h3``

const TestInfo = styled.p``

export default TestimonialPage

export const query = graphql`
  query {
    allWordpressWpTestimonial {
      edges {
        node {
          title
          content
          acf {
            testimonial_info
          }
        }
      }
    }
  }
`