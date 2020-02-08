import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const MenuLink = ({ to, key, children }) => (
  <li
    key={key}
    style={{ margin: `0 10px` }} 
    className="mainMenuItem"
  >
    <CustomLink 
      to={to}
      >
      {children}
    </CustomLink>
  </li>
)

const CustomLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-family: sans-serif;
  @media (max-width:800px) {
    color: #fff;
  }
`

export default MenuLink