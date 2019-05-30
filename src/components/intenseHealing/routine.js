import React from "react"
import { FormattedMessage } from "react-intl"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className, style, name}) => (
  <StaticQuery
    query={graphql`
      query {
        bes: file(relativePath: { eq: "images/1-water-3.png" }) {
          ...fixed250
        }
        ps: file(relativePath: { eq: "images/2-water-square.jpg" }) {
            ...fixed250
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

const Routine = () => (
    <section className="section container">
        <div className="row col-has-padding wide-padding is-ai-stretch">
            <div className="col col-4 content">
                <div className="sticky">
                    <h4><FormattedMessage id="routineHeader"/></h4>
                    <ol>
                        <li><FormattedMessage id="cleanser"/></li>
                        <li><FormattedMessage id="toner"/></li>
                        <li className="bold"><FormattedMessage id="serum"/></li>
                        <li><FormattedMessage id="lotion"/></li>
                        <li className="bold"><FormattedMessage id="sunscreen"/></li>
                    </ol>
                    <p>
                        <b><FormattedMessage id="makeup" /></b>
                    </p>
                </div>
            </div>
            <div className="col col-8">
                <div className="content">
                    <Image name="bes" className="image"/>
                    <h4><FormattedMessage id="bes" /></h4>
                    <p><FormattedMessage id="besRoutine" /></p>
                </div>
                <hr/>
                <div className="content">
                    <Image name="ps" className="image"/>
                    <h4><FormattedMessage id="ps" /></h4>
                    <p><FormattedMessage id="psRoutine" /></p>
                </div>
            </div>
        </div>
    </section>
)

export default Routine