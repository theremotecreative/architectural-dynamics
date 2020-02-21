import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSliderOne from "../components/HomeSliderOne"
import HomeSliderTwo from "../components/HomeSliderTwo"
import HomeSliderThree from "../components/HomeSliderThree"
import HomeSliderFour from "../components/HomeSliderFour"

const IndexPage = () => (
  <Layout className="fixed-header">
    <SEO title="Home" />
    <PageTransition>
    <HomeHeroSection>
      <HeroOne>
        <HomeSliderOne></HomeSliderOne>
      </HeroOne>
      <HeroTwo>
        <HomeSliderTwo></HomeSliderTwo>
      </HeroTwo>
      <HeroThree>
        <HomeSliderThree></HomeSliderThree>
      </HeroThree>
      <HeroFour>
        <HomeSliderFour></HomeSliderFour>
      </HeroFour>
    </HomeHeroSection>
    </PageTransition>
  </Layout>
)

const HomeHeroSection = styled.div`
  height: calc( 100vh - 156px);
  width: calc( 100vw - 370px );
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const HeroOne = styled.div`
  width: 70%;
  height: 70%;
  border: 5px solid #fff;
  border-left: none;
  background-color: #aaa;
  z-index: 10;
  position: relative;
  overflow: hidden;
`

const HeroTwo = styled.div`
  width: 30%;
  height: 70%;
  border: 5px solid #fff;
  background-color: #bbb;
  z-index: 10;
`

const HeroThree = styled.div`
  width: 70%;
  height: 30%;
  border: 5px solid #fff;
  border-left: none;
  border-bottom: none;
  background-color: #ccc;
  z-index: 10;
`

const HeroFour = styled.div`
  width: 30%;
  height: 30%;
  border: 5px solid #fff;
  border-bottom: none;
  background-color: #ddd;
  z-index: 10;
`

export default IndexPage