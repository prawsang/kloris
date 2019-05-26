/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"

import "../style/index.scss"
import logo from "../assets/web/logo.svg"
import lang from "../assets/web/th.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Layout extends React.Component {
  state = {
    showMenu: false,
  }
  render() {
    const { children } = this.props
    const { showMenu } = this.state
    return (
      <>
        <div className="nav-head">
          <div className="container">
            <FontAwesomeIcon
              icon={faBars}
              className="hamburger"
              onClick={() => this.setState({ showMenu: true })}
            />
            <img className="lang" src={lang} />
            <img className="logo" src={logo} />
          </div>
        </div>
        <div
          className={`overlay ${showMenu ? "is-active" : ""}`}
          onClick={() => this.setState({ showMenu: false })}
        />
        <Nav className={showMenu ? "is-active" : ""} />
        {children}
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
