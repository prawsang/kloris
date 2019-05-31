import React from "react"
import { FormattedMessage } from "react-intl"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Question from "./question"

const Image = ({ className, style, name }) => (
  <StaticQuery
    query={graphql`
      query {
        bangkok: file(relativePath: { eq: "web/bank/bangkok.png" }) {
          ...fixed100
        }
        kasikorn: file(relativePath: { eq: "web/bank/kasikorn.png" }) {
          ...fixed100
        }
        krungsri: file(relativePath: { eq: "web/bank/krungsri.png" }) {
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

const Bank = ({ name }) => {
  const accountNumber = () => {
    switch (name) {
      case "bangkok":
        return "2080240803"
      case "kasikorn":
        return "0072397363"
      case "krungsri":
        return "5281276740"
      default:
        return ""
    }
  }

  return (
    <div className="col col-4" style={{ marginBottom: 10 }}>
      <div className="image">
        <Image name={name} />
      </div>
      <p style={{ marginBottom: "1em" }}>
        <FormattedMessage id="bankName" />
        <br />
        <b>
          <FormattedMessage id={name + "Bank"} />
        </b>
      </p>
      <p style={{ marginBottom: "1em" }}>
        <FormattedMessage id="accountName" />
        <br />
        <b>
          <FormattedMessage id={name === "kasikorn" ? "name2" : "name"} />
        </b>
      </p>
      <p style={{ marginBottom: "1em" }}>
        <FormattedMessage id="accountNumber" />
        <br />
        <b>
          <b>{accountNumber(name)}</b>
        </b>
      </p>
    </div>
  )
}

const Payment = () => (
  <div className="section">
    <h4 style={{ marginBottom: "1em" }}>
      <FormattedMessage id="payment" />
    </h4>
    <Question question="payment1" answer="payment1a">
      <h5>
        <FormattedMessage id="bankInformation" />
      </h5>
      <div className="row col-has-padding">
        <Bank name="bangkok" />
        <Bank name="kasikorn" />
        <Bank name="krungsri" />
      </div>
    </Question>
  </div>
)

export default Payment
