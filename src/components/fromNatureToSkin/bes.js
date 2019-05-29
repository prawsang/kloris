import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"

const Image = ({ name, className, style, fluid }) => (
  <StaticQuery
    query={graphql`
      query {
        bes: file(relativePath: { eq: "images/1-flowers-square.jpg" }) {
          ...fullWidthImage
        }
        lemon: file(relativePath: { eq: "images/lemon.png" }) {
          ...fixed100
        }
        bearberries: file(relativePath: { eq: "images/bearberries.png" }) {
          ...fixed100
        }
        daffodil: file(relativePath: { eq: "images/daffodil.png" }) {
          ...fixed100
        }
        cress: file(relativePath: { eq: "images/cress.png" }) {
          ...fixed100
        }
      }
    `}
    render={data => (
      <Img
        fluid={fluid ? data[name].childImageSharp.fluid : null}
        fixed={fluid ? null : data[name].childImageSharp.fixed}
        className={className}
        style={style}
      />
    )}
  />
)

const Serum = () => (
  <section className="section container">
    <div className="row col-has-padding is-ai-stretch">
      <div className="col col-4 center">
        <div className="sticky content">
          <div className="rounded image">
            <Image name="bes" fluid={true} />
          </div>
          <h3>
            <FormattedMessage id="bes" />
          </h3>
          <p>
            <FormattedMessage id="besLongDesc" />
          </p>
        </div>
      </div>
      <div className="row col col-8 wrapped is-flex">
        <div className="col col-6 content">
          <Image name="lemon" className="image" />
          <h5>
            <FormattedMessage id="lemon" />
          </h5>
          <p>
            <FormattedMessage id="lemonDesc" />
          </p>
        </div>
        <div className="col col-6 content">
          <Image name="bearberries" className="image" />
          <h5>
            <FormattedMessage id="bearberries" />
          </h5>
          <p>
            <FormattedMessage id="bearberriesDesc" />
          </p>
        </div>
        <div className="col col-6 content">
          <Image name="daffodil" className="image" />
          <h5>
            <FormattedMessage id="daffodil" />
          </h5>
          <p>
            <FormattedMessage id="daffodilDesc" />
          </p>
        </div>
        <div className="col col-6 content">
          <Image name="cress" className="image" />
          <h5>
            <FormattedMessage id="cress" />
          </h5>
          <p>
            <FormattedMessage id="cressDesc" />
          </p>
        </div>
        <div className="col col-6 content">
          <h5>
            <FormattedMessage id="wheat" />
          </h5>
          <p>
            <FormattedMessage id="wheatDesc" />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Serum
