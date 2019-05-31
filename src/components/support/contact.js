import React from "react"
import { FormattedMessage } from "react-intl"
import addFriend from "../../assets/web/add-friend.png"

const Contact = () => (
  <div className="is-flex">
    <a href="https://line.me/R/ti/p/%40jpr0723u" style={{ marginRight: 10 }}>
      <img src={addFriend} style={{ height: 41, width: "auto" }} alt="" />
    </a>
    <a href="mailto:orders@kloriscosmetics.com">
      <button>
        <FormattedMessage id="emailUs" />
      </button>
    </a>
  </div>
)

export default Contact
