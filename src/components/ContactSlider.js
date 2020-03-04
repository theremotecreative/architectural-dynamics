import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import "./slider.css"

const ContactSlider = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSlide(filter: {categories: {elemMatch: {wordpress_id: {eq: 4}}}}) {
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
    `)
    return(
        <HeroSlider>
            {data.allWordpressWpHomeSlide.edges.map(post => (
                <HomeHeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
            ))} 
        </HeroSlider>
    )
}

const HeroSlider = styled.div`
  height: 100%;
  width:100%;
  position: relative;
`

const HomeHeroImg = styled(Img)`
  height: 100vh;
  width: 100%;
  position: absolute !important;
  top: -50px;
  left: 0;
  opacity: 0;
  &:nth-child(1) {
    animation: slide-one 26s ease-out infinite;
  }
  &:nth-child(2) {
    animation: slide-two 26s ease-out infinite;
  }
  &:nth-child(3) {
    animation: slide-three 26s ease-out infinite;
  }
`

export default ContactSlider