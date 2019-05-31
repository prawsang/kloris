import React from "react"
import { FormattedMessage } from "react-intl"
import Question from "./question"
import Contact from "./contact"

const Orders = () => (
  <div className="section">
    <h4 style={{ marginBottom: "1em" }}>
      <FormattedMessage id="orders" />
    </h4>
    <Question question="orders1">
      <p>
        <FormattedMessage id="orders1a" /> <FormattedMessage id="orderEmail" />
      </p>
      <Contact />
      <p style={{ marginBottom: "0.5em" }}>
        <br />
        <b>
          <FormattedMessage id="orderIncludeHeader" />
        </b>
      </p>
      <ol>
        <li>
          <FormattedMessage id="orderInclude1" />
        </li>
        <li>
          <FormattedMessage id="orderInclude2" />
        </li>
      </ol>
      <p>
        <FormattedMessage id="orderConfirm" />
        <br />
        <FormattedMessage id="shippingConfirm" />
      </p>
      <p>
        <FormattedMessage id="orderNotes" />
      </p>
    </Question>
  </div>
)

export default Orders
