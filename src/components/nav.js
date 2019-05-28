import React from "react"

import { FormattedMessage } from "react-intl"
import { injectIntl, intlShape } from "react-intl"

const Nav = ({ className, intl }) => {
  const textStyle = {
    fontSize: intl.locale === "th" ? "0.85em" : "0.75em",
    letterSpacing: intl.locale === "th" ? "0.5pt" : "1pt",
  }
  return (
    <nav className={className}>
      <ul className="menu">
        <li className="menu-item" style={textStyle}>
          <FormattedMessage id="home" />
        </li>
        <li className="menu-item" style={textStyle}>
          <FormattedMessage id="fromNatureToSkin" />
        </li>
        <li className="menu-item" style={textStyle}>
          <FormattedMessage id="intenseHealing" />
        </li>
        <li className="menu-item" style={textStyle}>
          <FormattedMessage id="support" />
        </li>
        <li className="menu-item" style={textStyle}>
          <FormattedMessage id="contactUs" />
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Nav)
