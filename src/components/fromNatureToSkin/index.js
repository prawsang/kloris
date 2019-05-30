import React from "react"
import { FormattedMessage } from "react-intl"
import Products from "../products"
import Serum from "./bes"
import Sunscreen from "./ps"
import Kakadu from "./kakadu"

const FromNatureToSkin = () => (
  <React.Fragment>
    <section className="section center content container narrow">
      <h2>
        <FormattedMessage id="fromNatureToSkin" />
      </h2>
      <p>
        <FormattedMessage id="fromNatureToSkinDesc" />
      </p>
    </section>
    <Serum />
    <Sunscreen />
    <Kakadu />
    <Products />
  </React.Fragment>
)

export default FromNatureToSkin
