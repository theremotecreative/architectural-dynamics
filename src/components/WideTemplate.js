import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import styled from 'styled-components'
import Footer from "./footer"

const WideTemplate = ({ children }) => {
  return (
    <WideLayout>
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer></Footer>
    </WideLayout>
  )
}

const WideLayout = styled.div`
  margin: 0px auto; 
  padding: 0;
  border: 10px solid #fff;
  border-left: none;
  @media(max-width: 800px) {
    border-top: none;
    border-right: none;
  }
`

export default WideTemplate