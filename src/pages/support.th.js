import React from "react"

import Layout from "../layout/th"
import Support from "../components/support"
import SEO from "../components/seo"

import support from "../data/messages/support/th"
import general from "../data/messages/th"

const SupportPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...support }}>
    <SEO
      title="บริการช่วยเหลือ"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Support />
  </Layout>
)

export default SupportPage
