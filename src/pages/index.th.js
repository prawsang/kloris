import React from "react"

import Layout from "../layout/th"
import Home from "../components/home"
import SEO from "../components/seo"

import home from "../data/messages/home/th"
import general from "../data/messages/th"

import keywords from "../data/keywords.th"

const IndexPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...home, ...general }}
    hasHero={true}
  >
    <SEO title="หน้าหลัก" keywords={keywords} />
    <Home />
  </Layout>
)

export default IndexPage
