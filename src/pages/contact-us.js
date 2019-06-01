import React from "react"

import Layout from "../layout/en"
import Contact from "../components/contact"
import SEO from "../components/seo"

import contact from "../data/messages/contact/en"
import general from "../data/messages/en"

const ContactPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...contact }}>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Contact />
  </Layout>
)

export default ContactPage
