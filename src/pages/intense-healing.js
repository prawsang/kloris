import React from "react"

import Layout from "../layout/en"
import IntenseHealing from "../components/intenseHealing"
import SEO from "../components/seo"

import home from "../data/messages/home/en"
import intenseHealing from "../data/messages/intenseHealing/en"
import general from "../data/messages/en"

const IntenseHealingPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...home, ...general, ...intenseHealing }}
  >
    <SEO
      title="From Nature to Skin"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <IntenseHealing />
  </Layout>
)

export default IntenseHealingPage
