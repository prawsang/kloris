import React from "react"

import Layout from "../layout/en"
import FromNatureToSkin from "../components/fromNatureToSkin"
import SEO from "../components/seo"

import home from "../data/messages/home/th"
import fromNatureToSkin from "../data/messages/fromNatureToSkin/th"
import general from "../data/messages/th"

import keywords from "../data/keywords.th"

const FromNatureToSkinPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...home, ...general, ...fromNatureToSkin }}
  >
    <SEO title="จากธรรมชาติ สู่ผิวคุณ" keywords={keywords} />
    <FromNatureToSkin />
  </Layout>
)

export default FromNatureToSkinPage
