import React from "react"
import { FormattedMessage } from "react-intl"

import Shipping from "./shipping"
import Payment from "./payment"
import Orders from "./orders"
import Button from "../button"

class Support extends React.Component {
  render() {
    return (
      <section className="section container small content">
        <h2 className="center" style={{ marginBottom: "1em" }}>
          <FormattedMessage id="support" />
        </h2>
        <Shipping />
        <Payment />
        <Orders />
        <div className="section center">
          <h4>
            <FormattedMessage id="contactCtaHeader" />
          </h4>
          <p>
            <FormattedMessage id="contactCtaDesc" />
          </p>
          <Button link="/contact-us" id="contactUs" />
        </div>
      </section>
    )
  }
}

export default Support
