import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeSliderThree = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSlide(filter: {categories: {elemMatch: {wordpress_id: {eq: 6}}}}) {
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
  height: 60vh;
  width: 100%;
  position: absolute !important;
  top: -50px;
  left: 0;
  opacity: 0;
  &:nth-child(1) {
    animation-name: slide-one;
    animation-duration: 28s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
  &:nth-child(2) {
    animation-name: slide-two;
    animation-duration: 28s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-name: slide-three;
    animation-duration: 28s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
  }
`

export default HomeSliderThree