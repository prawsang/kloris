import React from "react"
import { FormattedMessage } from "react-intl"

import addFriend from "../../assets/web/add-friend.png"
import Map from "./map"

const Contact = () => (
  <section className="section content container">
    <h2>
      <FormattedMessage id="contactUs" />
    </h2>
    <div className="row col-has-padding wide-padding">
      <div className="col col-6">
        <p>
          <b>
            <FormattedMessage id="phone" />:
          </b>{" "}
          +662-526-5480, +6694-994-8652
        </p>
        <div className="row wrapped" style={{ marginBottom: "1.5em" }}>
          <div className="col" style={{ paddingRight: 20, paddingBottom: 20 }}>
            <p style={{ marginBottom: "0.5em" }}>
              <b>
                <FormattedMessage id="lineId" />:
              </b>{" "}
              @kloris
            </p>
            <a href="https://line.me/R/ti/p/%40jpr0723u">
              <img
                src={addFriend}
                alt=""
                style={{ height: 41, width: "auto" }}
              />
            </a>
          </div>
          <div className="col">
            <p style={{ marginBottom: "0.5em" }}>
              <b>
                <FormattedMessage id="email" />:
              </b>{" "}
              <FormattedMessage id="supportEmail" />
            </p>
            <a href="mailto:support@kloriscosmetics.com">
              <button>
                <FormattedMessage id="emailUs" />
              </button>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: "1.5em" }}>
          <p style={{ maxWidth: 250 }}>
            <b>
              <FormattedMessage id="address" />
            </b>
            <br />
            <FormattedMessage id="addressContent" />
          </p>
          <a
            href="https://goo.gl/maps/ZRKKZeReixAEtaTA8"
            className="is-hidden-sm"
            style={{ marginTop: "1em" }}
          >
            <button>
              <FormattedMessage id="openMap" />
            </button>
          </a>
        </div>
        <p>
          <b>
            <FormattedMessage id="officeHours" />:{" "}
          </b>
          <FormattedMessage id="officeHoursContent" />
        </p>
      </div>
      <div className="col col-6">
        <Map />
      </div>
    </div>
  </section>
)

export default Contact
