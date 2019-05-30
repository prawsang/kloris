import React from "react"

import { FormattedMessage } from "react-intl"
import { injectIntl, intlShape } from "react-intl"

import { Link } from "gatsby"

const Button = ({ link, id, intl, className, style }) => {
  const formatLink = link => {
    const prefix = intl.locale === "th" ? "/th" : ""
    return prefix + link
  }
  return (
    <Link to={formatLink(link)}>
      <button className={className} style={style}>
        <FormattedMessage id={id} />
      </button>
    </Link>
  )
}

Button.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Button)
