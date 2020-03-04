import React from "react"
import Layout from "../components/layout.js"
import WideTemplate from "../components/WideTemplate"
import SEO from "../components/seo"
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import './contact.css'

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
      <div className="contact-box">
        <div className="contact-left">
          <ContactImage></ContactImage>
        </div>
        <div className="contact-right">
          <h1>Contact Me</h1>
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope />
              <h3>jmvanderheyden@yahoo.com</h3>
            </div>
            <div className="contact-card">
              <FaPhone />
              <h3>(708) 278-2891</h3>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </WideTemplate>
  </Layout>
)

const ContactImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eee;
`
