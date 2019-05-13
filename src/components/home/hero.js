import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "images/hero-banner.png" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <BackgroundImage
        fluid={data.header.childImageSharp.fluid}
        className="hero-wrapper"
      >
        <div className="hero-content">
          <div className="content">
            <h2>Let the Nature Unleash Your Beauty</h2>
            <p className="larger">
              Defend. Repair. Hydrate. Stay gorgeous and enhance your skin care
              routine with our <b>Miracle Radiance Brightening Set.</b>
            </p>
          </div>
        </div>
      </BackgroundImage>
    )}
  />
)

export default Hero
