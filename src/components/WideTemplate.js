import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import Footer from "./footer"

const WideTemplate = ({ children }) => {
  return (
    <div className="wide-layout" style={{ 
      margin: '0px auto', 
      padding: `0`,
      border: '10px solid #fff',
      borderLeft: 'none'
    }}>
      <main>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default WideTemplate