import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
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

const Products = () => (
  <section className="section container small">
    <div className="row col-has-padding">
      <div className="col col-6 center">
        <Image name="serum" className="product-image" />
        <div className="content">
          <h4>Brightening Essence Serum</h4>
          <p>Ready to soothe, hydrate, so your skin can illuminate.</p>
        </div>
      </div>
      <div
        className="col col-6 center"
        style={{ paddingLeft: 60, paddingRight: 60 }}
      >
        <Image name="sunscreen" className="product-image" />
        <div className="content">
          <h4>Perfect Sunscreen SPF50/PA+++</h4>
          <p>Be carefree in the sunlight throughout the day.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Products
