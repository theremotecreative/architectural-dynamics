import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const MainLogo = () => (
        <h1 className="mainLogo">
            <MainLogoLink 
            to="/"
            >
                <NeedLogo>[Need Logo Here]</NeedLogo>
            </MainLogoLink>
        </h1>
  )

const MainLogoLink = styled(Link)`
  color: #000;
  text-decoration: none;
  @media(max-width:800px) {
    color: #fff;
  }
`

const NeedLogo = styled.p`
  font-size: 2.25rem;
  padding: 0;
  margin: 0;
  color: inherit;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
`

  export default MainLogo