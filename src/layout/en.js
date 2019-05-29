import React from "react"
import Layout from "./index"
import { addLocaleData } from "react-intl"

import en from "react-intl/locale-data/en"
import "intl/locale-data/jsonp/en"

addLocaleData(en)

const EnLayout = props => (
  <Layout {...props} i18nMessages={props.i18nMessages} />
)

export default EnLayout
