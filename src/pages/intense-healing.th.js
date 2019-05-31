import React from "react"

import Layout from "../layout/en"
import IntenseHealing from "../components/intenseHealing"
import SEO from "../components/seo"

import intenseHealing from "../data/messages/intenseHealing/th"
import general from "../data/messages/th"

const IntenseHealingPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...general, ...intenseHealing }}
  >
    <SEO
      title="ฟื้นบำรุงผิวอย่างตรงจุด"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <IntenseHealing />
  </Layout>
)

export default IntenseHealingPage
