import React from "react"
import { FormattedMessage } from "react-intl"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Routine from "./routine"
import How from "./how"
import Products from "../products"

const Image = ({ className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        lady: file(relativePath: { eq: "images/lady-1.jpg" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.lady.childImageSharp.fixed}
        className={className}
        style={style}
      />
    )}
  />
)

const IntenseHealing = () => (
  <React.Fragment>
    <section className="section center content container narrow">
      <h2>
        <FormattedMessage id="intenseHealing" />
      </h2>
      <p>
        <FormattedMessage id="intenseHealingDesc2" />
      </p>
    </section>
    <section className="section content container small">
      <div className="row col-has-padding is-ai-center">
        <div className="col col-6 center">
          <Image />
        </div>
        <div className="col col-6">
          <h3>
            <FormattedMessage id="neglect" />
          </h3>
          <p>
            <FormattedMessage id="neglectDesc" />
          </p>
        </div>
      </div>
    </section>
    <How />
    <Routine />
    <Products />
  </React.Fragment>
)

export default IntenseHealing
