import React from "react"

import Layout from "../layout/en"
import IntenseHealing from "../components/intenseHealing"
import SEO from "../components/seo"

import intenseHealing from "../data/messages/intenseHealing/en"
import general from "../data/messages/en"

import keywords from "../data/keywords"

const IntenseHealingPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...general, ...intenseHealing }}
  >
    <SEO title="Intense Healing" keywords={keywords} />
    <IntenseHealing />
  </Layout>
)

export default IntenseHealingPage
