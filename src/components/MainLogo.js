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
            ...GatsbyImageSharpFluid_noBase64
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
  padding-right: 20px;
  transition-duration: .3s;
  @media(max-width:1000px) {
    width: 40%
  }
  @media(max-width:800px) {
    width: 100%;
    max-width: 380px;
    border-right: 10px solid #fff;
  }
  @media(max-width:420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const LogoImg = styled(Img)`
  height: auto;
  max-width: 245px;
  width: 100%;
`

  export default MainLogo