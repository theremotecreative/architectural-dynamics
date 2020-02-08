import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import Footer from "./footer"

const WideTemplate = ({ children }) => {
  return (
    <div className="wide-layout" style={{ 
      margin: '0px auto', 
      padding: `1.45rem 1.0875rem` 
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