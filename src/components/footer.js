import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLine,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row col-has-padding is-ai-stretch">
        <div
          className="contact col col-6 is-flex is-ai-stretch"
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <div className="is-flex is-ai-center">
            <p className="header">Contact</p>
          </div>
          <p className="phone is-flex is-ai-center">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />{" "}
            +6694-994-8652
          </p>
          <div className="is-flex is-ai-center line">
            <span className="social-icon">
              <FontAwesomeIcon icon={faLine} />
            </span>
            <span className="line-id">@kloris</span>
          </div>
        </div>
        <div className="follow col col-6 is-flex is-jc-flex-end is-ai-center">
          <p className="header">Follow</p>
          <span className="social-icon facebook">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </span>
          <span className="social-icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
