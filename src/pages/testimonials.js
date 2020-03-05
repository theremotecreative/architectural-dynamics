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
                        <TestAuthor dangerouslySetInnerHTML={{ __html: post.node.title }} />
                        <TestInfo>
                            {post.node.acf.testimonial_info}
                        </TestInfo>
                        <hr/>
                    </TestContent>
                ))} 
            </TestimonialSection>
        </WideTemplate>
    </PageTransition>
</Layout>
)



const TestimonialSection = styled.div`
    background-color: #f9f9f9;
    margin-bottom: 10px;
`

const TestContent = styled.div`
    padding: 50px;
    text-align: center;
    hr {
        max-width: 200px;
        margin: 20px auto;
        @media(max-width:500) {
            max-width: 80px;
        }
    }
    @media(max-width:500px) {
        padding: 50px 20px;
    }
`

const TestCopy = styled.div`
    p {
        font-family: Roboto;
        font-size: 16px;
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`

const TestAuthor = styled.h3`
    font-family: Montserrat;
    color: #15151d;
    margin: 5px 0;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 5px;
`

const TestInfo = styled.p`
    font-family: Montserrat;
    color: #59595c;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 5px;
`

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