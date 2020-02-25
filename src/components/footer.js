import React from "react"

export default () => (
    <footer style={{ padding: `10px`, backgroundColor: `#f1f1f1`, fontFamily: `Roboto`, fontSize: `12px` }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://theremotecreative.com" target="_blank" rel="noopener noreferrer" style={{ color: `#111` }}>The Remote Creative</a>
        {` `}
        with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer" style={{ color: `#111` }}>Gatsby</a>
        {` `}
        and
        {` `}
        <a href="https://www.wordpress.org" target="_blank" rel="noopener noreferrer" style={{ color: `#111` }}>WordPress</a>
    </footer>
)