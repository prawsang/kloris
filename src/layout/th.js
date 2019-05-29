import React from "react"
import Layout from "./index"
import { addLocaleData } from "react-intl"

import th from "react-intl/locale-data/th"
import "intl/locale-data/jsonp/th"

addLocaleData(th)

const ThLayout = props => (
  <Layout {...props} i18nMessages={props.i18nMessages} />
)

export default ThLayout
