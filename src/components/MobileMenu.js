import React from "react"
import MenuLink from "./MenuLink"

export default () => (
  <ul className="mobileMenu">
    <MenuLink
      key="home"
      to="/"
    >
      Home
    </MenuLink>
    <MenuLink
      key="portfolio"
      to="/portfolio/"
    >
      Portfolio
    </MenuLink>
    <MenuLink
      key="about"
      to="/about/"
    >
      About
    </MenuLink>
    <MenuLink
      key="testimonials"
      to="/#/"
    >
      Testimonials
    </MenuLink>
    <MenuLink
      key="contact"
      to="/contact/"
    >
      Contact
    </MenuLink>
  </ul>
)