/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
// import Footer from "./footer"
import "../style/index.scss"

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    {/* <Footer /> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
