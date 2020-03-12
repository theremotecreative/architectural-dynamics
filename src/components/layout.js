import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
import MainMenu from "../components/MainMenu"
import PageTitle from "../components/PageTitle"
import PageExcerpt from "../components/PageExcerpt"
import Header from "./header"
import styled from 'styled-components'
import "./layout.css"

const Layout = ({ pageTitle, pageExcerpt, className, children }) => {
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
        <PageTransition>
          <PageInfo>
            <PageTitle pageTitle={pageTitle}></PageTitle>
            <hr/>
            <PageExcerpt pageExcerpt={pageExcerpt}></PageExcerpt>
          </PageInfo>
        </PageTransition>
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
  background-color: #fff;
  border: 10px solid #fff;
  z-index: 100;
  @media(max-width:800px) {
    display: block;
    position: relative;
    height: auto;
    width: 100%;
    z-index: 0;
    background-color: #f9f9f9;
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
  @media(max-width:800px) {
    display: none;
  }
`

const PageInfo = styled.div`
  height: calc(100vh - 350px);
  width: 300px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 20px;
  border-bottom: 10px solid rgb(255, 255, 255);
  h1 {
    font-family: Montserrat, Open Sans;
    font-size: 28px;
    text-transform: uppercase;
    color: rgb(21, 21, 29);
  }
  p {
    font-family: Roboto Condensed, Arial;
    font-size: 16px;
  }
  @media(max-width:800px) {
    height: auto;
    width: 100%;
    background-color: transparent;
    margin-bottom: 0;
    border-bottom: 0;
  }
  h1 {
    max-width: 400px;
    margin: 0 auto 20px;
  }
  hr {
    max-width: 80px;
    margin: 20px auto;
  }
  p {
    max-width: 400px;
    margin: 0 auto;
  }
`

export default Layout
