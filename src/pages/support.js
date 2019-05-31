import React from "react"

import Layout from "../layout/en"
import Support from "../components/support"
import SEO from "../components/seo"

import support from "../data/messages/support/en"
import general from "../data/messages/en"

const SupportPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...support }}>
    <SEO title="Support" keywords={[`gatsby`, `application`, `react`]} />
    <Support />
  </Layout>
)

export default SupportPage
