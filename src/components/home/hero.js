import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const words = {
  en: {
    heroHeader: "Let the Nature Unleash Your Beauty",
    heroText:
      "Defend. Repair. Hydrate. Stay gorgeous and enhance your skin care routine with our",
    productName: "Miracle Radiance Brightening Set.",
  },
  th: {
    heroHeader: "ให้ธรรมชาติปลดล็อคความเปล่งประกายของผิวคุณ",
    heroText:
      "ผสานคุณค่าจากพืชธรรมชาติ พร้อมดูแลและปกป้องผิวอย่างครบขั้นตอนและมีประสิทธิภาพ เพื่อผิวที่ดูอ่อนเยาว์ เปล่งประกาย ดูมีออร่า",
    productName: "มิราเคิล เรเดียนส์",
  },
}

const Hero = ({ lang }) => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "images/hero-banner.png" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <div className="hero-wrapper">
        <Img
          fluid={data.header.childImageSharp.fluid}
          className="hero-wrapper-image"
        />
        <div className="hero-content">
          <div className="content">
            <h2>{words[lang].heroHeader}</h2>
            {lang === "th" ? (
              <p className="larger">
                <b>{words[lang].productName}</b> {words[lang].heroText}
              </p>
            ) : (
              <p className="larger">
                {words[lang].heroText} <b>{words[lang].productName}</b>
              </p>
            )}
          </div>
        </div>
      </div>
    )}
  />
)

export default Hero
