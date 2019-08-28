import React from "react"
import { FormattedMessage } from "react-intl"
import addFriend from "../../assets/web/add-friend.png"

const Contact = () => (
  <div>
    <a href="https://line.me/R/ti/p/%40jpr0723u" style={{ marginRight: 10 }}>
      <img src={addFriend} style={{ height: 41, width: "auto" }} alt="" />
    </a>
  </div>
)

export default Contact
