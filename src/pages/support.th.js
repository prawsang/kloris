import React from "react"

import Layout from "../layout/th"
import Support from "../components/support"
import SEO from "../components/seo"

import support from "../data/messages/support/th"
import general from "../data/messages/th"

import keywords from "../data/keywords.th"

const SupportPage = props => (
  <Layout location={props.location} i18nMessages={{ ...general, ...support }}>
    <SEO
      title="บริการช่วยเหลือ"
      keywords={[
        ...keywords,
        `ช่วยเหลือ`,
        `บริการ`,
        `ชำระเงิน`,
        `ธนาคาร`,
        `เลขบัญชี`,
        `สั่งซื้อ`,
        `ส่งของ`,
        `จัดส่ง`,
      ]}
    />
    <Support />
  </Layout>
)

export default SupportPage
