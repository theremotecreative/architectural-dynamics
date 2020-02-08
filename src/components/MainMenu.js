import React from "react"
import MenuLink from "./MenuLink"

export default () => (
  <ul className="mainMenu">
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
      key="blog"
      to="/blog/"
    >
      Blog
    </MenuLink>
    <MenuLink
      key="contact"
      to="/contact/"
    >
      Contact
    </MenuLink>
  </ul>
)