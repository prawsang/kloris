import React from "react"
import Hero from "./hero"
import Products from "../products"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { FormattedMessage } from "react-intl"

const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        remedy: file(relativePath: { eq: "images/natural-remedy.jpg" }) {
          ...fixed250
        }
        healing: file(relativePath: { eq: "images/healing.png" }) {
          ...fixed250
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

const HomePage = () => (
  <main>
    <section className="container wide section">
      <Hero />
    </section>
    <section className="section container small">
      <div className="row col-has-padding wide-padding is-ai-center">
        <div className="col col-4 center">
          <Image name="remedy" />
        </div>
        <div className="col col-8 content">
          <h2>
            <FormattedMessage id="fromNatureToSkin" />
          </h2>
          <p>
            <FormattedMessage id="fromNatureToSkinDesc" />
          </p>
          <button>
            <FormattedMessage id="learnMore" />
          </button>
        </div>
      </div>
    </section>
    <section className="section container dark small has-padding full-width-xs">
      <div className="row col-has-padding wide-padding is-ai-center">
        <div className="col col-4 center">
          <Image name="healing" />
        </div>
        <div className="col col-8 content">
          <h2>
            <FormattedMessage id="intenseHealing" />
          </h2>
          <p>
            <FormattedMessage id="intenseHealingDesc" />
          </p>
          <button>
            <FormattedMessage id="learnMore" />
          </button>
        </div>
      </div>
    </section>
    <div style={{ paddingBottom: 20 }} />
    <Products />
  </main>
)

export default HomePage
