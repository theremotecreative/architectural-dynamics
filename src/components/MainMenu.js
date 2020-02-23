import React from "react"
import MenuLink from "./MenuLink"

export default () => (
  <ul className="mainMenu">
    <MenuLink
      key="portfolio"
      to="/portfolio/"
    >
      Projects
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