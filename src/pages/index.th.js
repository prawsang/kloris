import React from "react"

import Layout from "../layout/th"
import Home from "../components/home"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
  </Layout>
)

export default IndexPage
