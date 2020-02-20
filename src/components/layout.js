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
  top: 146px;
  left: 0px;
  height: calc(100vh - 146px);
  width: 350px;
  background-color: #eee;
  border: 10px solid #fff;
  z-index: 100;
`

const MainContent = styled.div`
  padding-top: 146px;
  padding-left: 350px;
  width: 100%;
  margin: 0 auto;
`

const SidebarMenu = styled(MainMenu)`
  flex-direction: column;
`

const FixedMenu = styled.div`
  width: 330px;
  background-color:#ccc;
  border-bottom: 10px solid #fff;
  padding-top: 100px;
  padding-bottom: 100px;
`

export default Layout
