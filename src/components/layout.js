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

const Layout = ({ children }) => (
  <>
    <div className="nav-head">
      <div className="container">
        <img className="lang" src={lang} />
        <img className="logo" src={logo} />
      </div>
    </div>
    <Nav />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
