import React from "react"

import { FormattedMessage } from "react-intl"
import { injectIntl, intlShape } from "react-intl"

import { Link } from "gatsby"

const NavLink = ({ link, id, intl }) => {
  const formatLink = link => {
    const prefix = intl.locale === "th" ? "/th" : ""
    return prefix + link
  }

  const textStyle = {
    fontSize: intl.locale === "th" ? "0.85em" : "0.75em",
    letterSpacing: intl.locale === "th" ? "0.5pt" : "1pt",
  }
  return (
    <Link to={formatLink(link)}>
      <li className="menu-item" style={textStyle}>
        <FormattedMessage id={id} />
      </li>
    </Link>
  )
}

const Nav = ({ className, intl }) => {
  return (
    <nav className={className}>
      <ul className="menu">
        <NavLink link="/" id="home" intl={intl} />
        <NavLink
          link="/from-nature-to-skin"
          id="fromNatureToSkin"
          intl={intl}
        />
        <NavLink link="/intense-healing" id="intenseHealing" intl={intl} />
        <NavLink link="/support" id="support" intl={intl} />
        <NavLink link="/contact-us" id="contactUs" intl={intl} />
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Nav)
