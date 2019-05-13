import React from "react"
import Hero from "./hero"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        remedy: file(relativePath: { eq: "images/natural-remedy.jpg" }) {
          ...fullWidthImage
        }
        healing: file(relativePath: { eq: "images/healing.png" }) {
          ...fullWidthImage
        }
        serum: file(relativePath: { eq: "images/1-rocks.jpg" }) {
          ...fullWidthImage
        }
        sunscreen: file(relativePath: { eq: "images/2-flowers-portrait.jpg" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <Img
        fluid={data[name].childImageSharp.fluid}
        className={className}
        style={style}
      />
    )}
  />
)

const HomePage = () => (
  <main>
    <section className="container wide section">
      <Hero />
    </section>
    <section className="section container small">
      <div className="row col-has-padding wide-padding is-ai-center">
        <div className="col col-4">
          <Image name="remedy" />
        </div>
        <div className="col col-8 content">
          <h2>From Nature to Skin</h2>
          <p>
            Formulated with extracts from 7 different species of plants, Miracle
            Radiance targets to rejuvenate your long-lost youthful, glowing skin
            without upsetting your complexion.
          </p>
        </div>
      </div>
    </section>
    <section className="section container dark small has-padding">
      <div className="row col-has-padding wide-padding is-ai-center">
        <div className="col col-4">
          <Image name="healing" />
        </div>
        <div className="col col-8 content">
          <h2>Intense Healing</h2>
          <p>
            Not only does Miracle Radiance heals the outer layers of your skin,
            but also repairs the deeper layers and protects your skin from
            sunlight and pollution, effectively and efficiently.
          </p>
        </div>
      </div>
    </section>
  </main>
)

export default HomePage
