import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"
import { injectIntl, intlShape } from "react-intl"

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
            <h2>
              <FormattedMessage id="heroHeader" />
            </h2>
            {props.intl.locale === "th" ? (
              <p className="larger">
                <b>
                  <FormattedMessage id="setName" />
                </b>{" "}
                <FormattedMessage id="heroText" />
              </p>
            ) : (
              <p className="larger">
                <FormattedMessage id="heroText" />{" "}
                <b>
                  <FormattedMessage id="setName" />
                </b>
              </p>
            )}
          </div>
        </div>
      </div>
    )}
  />
)

Hero.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Hero)
