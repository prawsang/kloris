import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"

const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        serum: file(relativePath: { eq: "images/1-rocks.jpg" }) {
          ...fullWidthImage
        }
        sunscreen: file(relativePath: { eq: "images/2-flowers-portrait.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data[name].childImageSharp.fluid}
        className={className}
        style={style}
      />
    )}
  />
)

const Products = () => (
  <section className="section container" style={{ maxWidth: 700 }}>
    <div className="content center">
      <h2>
        <FormattedMessage id="collection" />
      </h2>
    </div>
    <div className="row col-has-padding wide-padding">
      <div className="col col-6 center">
        <Image name="serum" className="product-image" />
        <div className="content" style={{ maxWidth: 300, margin: "auto" }}>
          <h4>
            <FormattedMessage id="bes" />
          </h4>
          <p>
            <FormattedMessage id="besShortDesc" />
          </p>
        </div>
      </div>
      <div className="col col-6 center">
        <Image name="sunscreen" className="product-image" />
        <div className="content" style={{ maxWidth: 300, margin: "auto" }}>
          <h4>
            <FormattedMessage id="ps" />
          </h4>
          <p>
            <FormattedMessage id="psShortDesc" />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Products
