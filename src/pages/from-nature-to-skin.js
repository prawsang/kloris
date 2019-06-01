import React from "react"

import Layout from "../layout/en"
import FromNatureToSkin from "../components/fromNatureToSkin"
import SEO from "../components/seo"

import home from "../data/messages/home/en"
import fromNatureToSkin from "../data/messages/fromNatureToSkin/en"
import general from "../data/messages/en"

import keywords from "../data/keywords"

const FromNatureToSkinPage = props => (
  <Layout
    location={props.location}
    i18nMessages={{ ...home, ...general, ...fromNatureToSkin }}
  >
    <SEO title="From Nature to Skin" keywords={keywords} />
    <FromNatureToSkin />
  </Layout>
)

export default FromNatureToSkinPage
