import React from "react"

export default () => (
    <footer style={{ padding: `1.45rem 0` }}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://theremotecreative.com" target="_blank" rel="noopener noreferrer">The Remote Creative</a>
        {` `}
        with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        {` `}
        and
        {` `}
        <a href="https://www.wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a>
    </footer>
)