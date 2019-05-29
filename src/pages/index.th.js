import React from "react"

import Layout from "../layout/th"
import Home from "../components/home"
import SEO from "../components/seo"

import home from "../data/messages/home/th"
import general from "../data/messages/th"

const IndexPage = props => (
  <Layout location={props.location} i18nMessages={{ ...home, ...general }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
  </Layout>
)

export default IndexPage
