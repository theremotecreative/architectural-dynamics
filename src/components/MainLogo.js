import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const MainLogo = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-white-60px.png" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
 
 return (
  <MainLogoLink 
      to="/"
      >
        <LogoImg fluid={data.placeholderImage.childImageSharp.fluid} />
  </MainLogoLink>
  )

}

const MainLogoLink = styled(Link)`
  color: #000;
  background-color: #15151d;
  text-decoration: none;
  width: 32%;
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  @media(max-width:800px) {
    color: #fff;
  }
`

const LogoImg = styled(Img)`
  height: 60px;
  width: 245px;
`

  export default MainLogo