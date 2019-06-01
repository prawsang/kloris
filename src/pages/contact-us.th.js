import React from "react"

import Layout from "../layout/th"
import Contact from "../components/contact"
import SEO from "../components/seo"

import contact from "../data/messages/contact/th"
import general from "../data/messages/th"

import keywords from "../data/keywords.th"

const ContactPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...contact }}>
    <SEO
      title="Contact"
      keywords={[
        ...keywords,
        `ติดต่อ`,
        `ช่วยเหลือ`,
        `โทรศัพท์`,
        `อีเมล`,
        `ที่อยู่`,
        `เวลาทำการ`,
        `LINE`,
      ]}
    />
    <Contact />
  </Layout>
)

export default ContactPage
