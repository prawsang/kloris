import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"

const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        photoprotection: file(
          relativePath: { eq: "images/photoprotection.png" }
        ) {
          ...fixed100
        }
        photodamage: file(relativePath: { eq: "images/photodamage.png" }) {
          ...fixed100
        }
        tightening: file(relativePath: { eq: "images/tightening.png" }) {
          ...fixed100
        }
        hydrating: file(relativePath: { eq: "images/hydrating.png" }) {
          ...fixed100
        }
      }
    `}
    render={data => (
      <Img
        fixed={data[name].childImageSharp.fixed}
        className={className}
        style={style}
      />
    )}
  />
)

const How = () => (
  <section className="section container small">
    <div className="content">
      <h2
        className="center"
        style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
      >
        <FormattedMessage id="how" />
      </h2>
      <div className="row col-has-padding wide-padding wrapped">
        <div className="col col-6">
          <div className="center-xs">
            <Image name="photoprotection" className="image" />
            <h5>
              <FormattedMessage id="uv" />
            </h5>
          </div>
          <p>
            <FormattedMessage id="uvDesc" />
          </p>
        </div>
        <div className="col col-6">
          <div className="center-xs">
            <Image name="photodamage" className="image" />
            <h5>
              <FormattedMessage id="sunSpots" />
            </h5>
          </div>
          <p>
            <FormattedMessage id="sunSpotsDesc" />
          </p>
        </div>
        <div className="col col-6">
          <div className="center-xs">
            <Image name="tightening" className="image" />
            <h5>
              <FormattedMessage id="wrinkles" />
            </h5>
          </div>
          <p>
            <FormattedMessage id="wrinklesDesc" />
          </p>
        </div>
        <div className="col col-6">
          <div className="center-xs">
            <Image name="hydrating" className="image" />
            <h5>
              <FormattedMessage id="hydration" />
            </h5>
          </div>
          <p>
            <FormattedMessage id="hydrationDesc" />
          </p>
        </div>
      </div>
      <small className="gray">
        *<FormattedMessage id="onlyPs" />
        <br />
        **
        <FormattedMessage id="onlyBes" />
      </small>
    </div>
  </section>
)

export default How
