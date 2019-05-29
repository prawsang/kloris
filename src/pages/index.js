import React from "react"

import Layout from "../layout/en"
import Home from "../components/home"
import SEO from "../components/seo"

import home from "../data/messages/home/en"
import general from "../data/messages/en"

const IndexPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...home, ...general }}
    hasHero={true}
  >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
  </Layout>
)

export default IndexPage
