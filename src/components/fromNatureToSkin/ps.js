import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FormattedMessage } from "react-intl"

const Image = ({ name, className, style, fluid }) => (
  <StaticQuery
    query={graphql`
      query {
        ps: file(relativePath: { eq: "images/2-flowers-square.jpg" }) {
          ...fixed250
        }
        kakadu: file(relativePath: { eq: "images/kakadu.png" }) {
          ...fixed100
        }
        vanilla: file(relativePath: { eq: "images/vanilla.png" }) {
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

const Sunscreen = () => (
  <section className="section container">
    <div className="row col-has-padding is-ai-stretch">
      <div className="col col-4 center">
        <div className="content">
          <div className="rounded center">
            <Image
              name="ps"
              fluid={true}
              style={{ maxWidth: 200, maxHeight: 200 }}
              className="image"
            />
          </div>
          <h3>
            <FormattedMessage id="ps" />
          </h3>
          <p>
            <FormattedMessage id="psLongDesc" />
          </p>
        </div>
      </div>
      <div className="row col col-8 wrapped is-flex">
        <div className="col col-6 content">
          <Image name="kakadu" className="image" />
          <h5>
            <FormattedMessage id="kakadu" />
          </h5>
          <p>
            <FormattedMessage id="kakaduDesc" />
          </p>
        </div>
        <div className="col col-6 content">
          <Image name="vanilla" className="image" />
          <h5>
            <FormattedMessage id="vanilla" />
          </h5>
          <p>
            <FormattedMessage id="vanillaDesc" />
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Sunscreen
