import React from "react"
import { FormattedMessage } from "react-intl"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        kakadu: file(relativePath: { eq: "images/kakadu.png" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.kakadu.childImageSharp.fixed}
        className={className}
        style={style}
      />
    )}
  />
)

const orange = {
  color: "#F7971E",
}

const gradient = {
  background: "#f7b733",
  background: "-webkit-linear-gradient(to left, #f7b733, #fc4a1a)",
  background: "linear-gradient(to left, #f7b733, #fc4a1a)",
}
const bar = {
  height: 10,
  marginBottom: 10,
}

const Kakadu = () => (
  <section
    className="section container full-width light"
    style={{ paddingBottom: 40, paddingTop: 10 }}
  >
    <div className="container">
      <div className="section">
        <div className="row col-has-padding wide-padding content">
          <div className="col col-3 no-pb">
            <div className="image center-xs">
              <Image />
            </div>
          </div>
          <div className="col col-9">
            <div className="white rounded container full-width">
              <h3 style={orange}>
                <FormattedMessage id="kakaduHeader" />
              </h3>
              <p className="no-mb">
                <FormattedMessage id="kakaduLongDesc" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h5>
            <FormattedMessage id="upTo" />{" "}
            <span style={orange}>
              <FormattedMessage id="hundredTimes" />
            </span>{" "}
            <FormattedMessage id="moreVitC" />
          </h5>
          <div style={{ ...gradient, ...bar, width: "100%" }} />
          <div className="is-flex is-jc-space-between">
            <span>
              <FormattedMessage id="kakadu" />
            </span>
            <b>
              <FormattedMessage id="upTo" />{" "}
              <FormattedMessage id="hundredTimes" />
            </b>
          </div>
          <div style={{ paddingBottom: 20 }} />
          <div
            style={{
              ...bar,
              width: "1%",
              minWidth: 10,
              backgroundColor: "#fc4a1a",
            }}
          />
          <span>
            <FormattedMessage id="orange" />
          </span>
        </div>
      </div>
      <div className="gray rounded content container full-width">
        <div className="row col-has-padding">
          <div className="col col-3">
            <h3>
              <FormattedMessage id="vitCHeader" />
            </h3>
          </div>
          <div className="col col-3">
            <h5 style={orange}>
              <FormattedMessage id="sunDamage" />
            </h5>
            <p>
              <FormattedMessage id="sunDamageDesc" />
            </p>
          </div>
          <div className="col col-3">
            <h5 style={orange}>
              <FormattedMessage id="collagen" />
            </h5>
            <p>
              <FormattedMessage id="collagenDesc" />
            </p>
          </div>
          <div className="col col-3">
            <h5 style={orange}>
              <FormattedMessage id="wrinkling" />
            </h5>
            <p>
              <FormattedMessage id="wrinklingDesc" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Kakadu
