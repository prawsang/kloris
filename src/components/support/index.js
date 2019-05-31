import React from "react"
import { FormattedMessage } from "react-intl"

import Shipping from "./shipping"
import Payment from "./payment"
import Orders from "./orders"

class Support extends React.Component {
  state = {
    showContact: true,
  }
  render() {
    return (
      <section className="section container small content">
        <h2 className="center" style={{ marginBottom: "1em" }}>
          <FormattedMessage id="support" />
        </h2>
        <Shipping />
        <Payment />
        <Orders />
      </section>
    )
  }
}

export default Support
