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
`

const HomeHeroImg = styled(Img)`
  display: none;
  height: 60vh;
  width: 100%;
  &:first-child {
    display: block;
  }
`

export default HomeSliderThree