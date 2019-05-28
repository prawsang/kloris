import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"

const Hero = props => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "images/hero-banner.png" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <div className="hero-wrapper">
        <Img
          fluid={data.header.childImageSharp.fluid}
          className="hero-wrapper-image"
        />
        <div className="hero-content">
          <div className="content">
            <button onClick={() => console.log(props)}>Click</button>
            <h2>
              <FormattedMessage id="heroHeader" />
            </h2>
            <p className="larger">
              <FormattedMessage id="heroText" />
            </p>
            {/* {lang === "th" ? (
              <p className="larger">
                <b>{words[lang].productName}</b> {words[lang].heroText}
              </p>
            ) : (
              <p className="larger">
                {words[lang].heroText} <b>{words[lang].productName}</b>
              </p>
            )} */}
          </div>
        </div>
      </div>
    )}
  />
)

export default Hero
