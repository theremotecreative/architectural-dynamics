import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const MainLogo = () => (
    <StaticQuery
      query={graphql`
        query {
          wordpressSiteMetadata {
            name
          }
        }
      `}
  
      render={data => (
        <h1 className="mainLogo">
            <MainLogoLink 
            to="/"
            >
                {data.wordpressSiteMetadata.name}
            </MainLogoLink>
        </h1>
      )}
    />
  )

const MainLogoLink = styled(Link)`
  color: #000;
  text-decoration: none;
  @media(max-width:800px) {
    color: #fff;
  }
`

  export default MainLogo