import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MainMenu from "../components/MainMenu"
import Header from "./header"
import styled from 'styled-components'
import "./layout.css"

const Layout = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className={className}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainSidebar>
        <FixedMenu>
          <SidebarMenu></SidebarMenu>
        </FixedMenu>
        <PageInfo>
          <h1>Home</h1>
          <hr/>
          <p>The PROCESS of architectural design and planning is a journey. "Let me walk that path with you."<br/>- James M. Vanderheyden</p>
        </PageInfo>
      </MainSidebar>
      <MainContent>
        {children}
      </MainContent>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const MainSidebar = styled.div`
  position: fixed;
  top: 100px;
  left: 0px;
  height: calc(100vh - 110px);
  width: 320px;
  background-color: #eee;
  border: 10px solid #fff;
  z-index: 100;
  @media(max-width:800px) {
    display: none;
  }
`

const MainContent = styled.div`
  padding-top: 100px;
  padding-left: 320px;
  width: 100%;
  margin: 0 auto;
  @media(max-width:800px) {
    padding-left:10px;
    padding-right: 10px;
  }
`

const SidebarMenu = styled(MainMenu)`
  flex-direction: column;
`

const FixedMenu = styled.div`
  width: 300px;
  background-color: #fff;
  border-bottom: 10px solid #fff;
  height: 230px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const PageInfo = styled.div`
  height: calc(100vh - 350px);
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-bottom: 10px solid #fff;
  text-align: center;
  h1 {
    font-family: Montserrat;
    font-size: 28px;
    text-transform: uppercase;
    color: #15151d;
  }
  p {
    font-family: Roboto;
    font-size: 16px;
  }
`

export default Layout
