import React from "react"

import Layout from "../layout/en"
import Support from "../components/support"
import SEO from "../components/seo"

import support from "../data/messages/support/en"
import general from "../data/messages/en"

import keywords from "../data/keywords"

const SupportPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...support }}>
    <SEO
      title="Support"
      keywords={[
        ...keywords,
        `support`,
        `payment`,
        `bank`,
        `account`,
        `order`,
        `shipping`,
        `returns`,
        `service`,
      ]}
    />
    <Support />
  </Layout>
)

export default SupportPage
