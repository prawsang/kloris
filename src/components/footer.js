import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLine,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import { FormattedMessage } from "react-intl"
import { injectIntl, intlShape } from "react-intl"

const Footer = ({ intl }) => {
  const textStyle = {
    fontSize: intl.locale === "th" ? "0.85em" : "0.75em",
    fontWeight: intl.locale === "th" ? "400" : "500",
    letterSpacing: intl.locale === "th" ? "0.5pt" : "1pt",
  }
  return (
    <footer>
      <div className="container">
        <div className="row col-has-padding is-ai-stretch">
          <div
            className="contact col col-6 is-flex is-ai-stretch"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div className="is-flex is-ai-center">
              <p className="header" style={textStyle}>
                <FormattedMessage id="contact" />
              </p>
            </div>
            <p className="phone is-flex is-ai-center">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />{" "}
              +6694-994-8652
            </p>
            <a
              href="https://line.me/R/ti/p/%40jpr0723u"
              target="_blank"
              className="line"
            >
              <div className="is-flex is-ai-center is-jc-center">
                <span className="social-icon">
                  <FontAwesomeIcon icon={faLine} />
                </span>
                <span className="line-id">@kloris</span>
              </div>
            </a>
          </div>
          <div className="follow col col-6 is-flex is-jc-flex-end is-ai-center">
            <p className="header" style={textStyle}>
              <FormattedMessage id="follow" />
            </p>
            <a href="https://www.facebook.com/klorisofficial/" target="_blank">
              <span className="social-icon facebook">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </span>
            </a>
            <a href="https://www.instagram.com/klorisofficial/" target="_blank">
              <span className="social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Footer)
