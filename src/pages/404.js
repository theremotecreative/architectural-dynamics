import React from "react"

import Layout from "../components/layout"
import NarrowTemplate from "../components/NarrowTemplate"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NarrowTemplate>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NarrowTemplate>
  </Layout>
)

export default NotFoundPage
