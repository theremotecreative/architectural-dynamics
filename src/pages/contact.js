import React from "react"
import Layout from "../components/layout.js"
import WideTemplate from "../components/WideTemplate"
import GoogleMap from "../components/GoogleMap"
import SEO from "../components/seo"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import './contact.css'

export default () => (
    <Layout
    pageTitle="Contact"
    pageExcerpt='<p>The PROCESS of architectural design and planning is a journey. "Let me walk that path with you."<br/>- James M. Vanderheyden</p>'
    >
    <SEO
      title="Contact"
      description="Contact Us to Learn More"
      keywords={[`Architecture`, `Contact`, `Map`]}
    />
    <WideTemplate>
      <div className="contact-box">
        <div className="contact-left">
          <div className="contact-map">
            <GoogleMap />
          </div>
        </div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <div className="contact-card">
              <FaMapMarkerAlt />
              <h3>123 Address St.<br/>City, St 12345</h3>
            </div>
            <div className="contact-card">
              <FaEnvelope />
              <h3>demo@email.com</h3>
            </div>
            <div className="contact-card">
              <FaPhone />
              <h3>(123) 456-7890</h3>
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
