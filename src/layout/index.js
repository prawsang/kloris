/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { getCurrentLangKey } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"

import Nav from "../components/nav"
import LanguageSelect from "../components/lang"
import Footer from "../components/footer"

import "../style/index.scss"
import logo from "../assets/web/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Layout extends React.Component {
  state = {
    showMenu: false,
  }
  render() {
    const { children, location, i18nMessages } = this.props
    const { showMenu } = this.state
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                languages {
                  defaultLangKey
                  langs
                }
              }
            }
          }
        `}
        render={data => {
          const url = location.pathname
          const { langs, defaultLangKey } = data.site.siteMetadata.languages
          const langKey = getCurrentLangKey(langs, defaultLangKey, url)
          const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/")

          return (
            <IntlProvider locale={langKey} messages={i18nMessages}>
              <React.Fragment>
                <div className="nav-head">
                  <div className="container">
                    <FontAwesomeIcon
                      icon={faBars}
                      className="hamburger"
                      onClick={() => this.setState({ showMenu: true })}
                    />
                    <LanguageSelect
                      currentLangKey={langKey}
                      defaultLangKey={defaultLangKey}
                      langs={langs}
                    />
                    <img className="logo" src={logo} alt="Kloris Logo" />
                  </div>
                </div>
                <div
                  className={`overlay ${showMenu ? "is-active" : ""}`}
                  onClick={() => this.setState({ showMenu: false })}
                />
                <Nav className={showMenu ? "is-active" : ""} home={homeLink} />
                {children}
                <Footer />
              </React.Fragment>
            </IntlProvider>
          )
        }}
      />
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
