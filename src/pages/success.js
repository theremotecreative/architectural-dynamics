import React from "react"
import Layout from "../components/layout.js"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"
import ContactSlider from "../components/ContactSlider"
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

export default () => (
    <Layout
    pageTitle="Contact Me"
    pageExcerpt='<p>I really want to hear from you! Please call, email, or complete this form and I will return your inquiry as soon as I can.</p>'
    >
    <SEO
      title="Contact"
      description="Contact Me to Learn More"
      keywords={[`Architecture`, `Contact`, `Map`]}
    />
    <WideTemplate>
      <ContactBox>
        <ContactLeft>
          <ContactImage>
            <ContactSlider></ContactSlider>
          </ContactImage>
        </ContactLeft>
        <ContactRight>
          <ContactInfo>
          <h2>Call or Email</h2>
            <ContactCard>
              <FaEnvelope />
              <h3>jmvanderheyden@yahoo.com</h3>
            </ContactCard>
            <ContactCard>
              <FaPhone />
              <h3>(708) 278-2891</h3>
            </ContactCard>
          </ContactInfo>
          <ContactForm>
            <h2>Send a message</h2>
              <p>Thank you for your submmission. I'll get in touch with you soon.</p>
          </ContactForm>
        </ContactRight>
      </ContactBox>
    </WideTemplate>
  </Layout>
)

const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  height: calc(100vh - 130px);
  @media(max-width:1200px) {
    height: auto;
  }
`

const ContactLeft = styled.div`
  width: 50%;
  @media(max-width:1200px) {
    width: 100%;
    height: 50vh;
    margin-bottom: 10px;
  }
`

const ContactRight = styled.div`
  width: 50%;
  h2 {
    font-family: Montserrat;
    font-size: 20px;
    text-transform: uppercase;
    background-color: #eee;
    padding: 10px 20px;
  }
  @media(max-width:1200px) {
    width: 100%;
  }
`

const ContactImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eee;
  position: relative;
  overflow: hidden;
`
const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 10px;
  @media(max-width:1200px) {
    margin-left: 0;
  }
`

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 20px;
  h3 {
    font-family: Montserrat;
    font-size: 14px;
    margin-bottom: 0;
  }
  svg {
    margin-right: 10px;
    position: relative;
  }
`

const ContactForm = styled.div`
  margin-left: 10px;
  p {
    font-family: Roboto;
    font-size: 20px;
  }
  @media(max-width:1200px) {
    margin-left: 0;
  }
`