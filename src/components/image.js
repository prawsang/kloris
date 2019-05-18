import { graphql } from "gatsby"

export const fullWidthImage = graphql`
  fragment fullWidthImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fixed250 = graphql`
  fragment fixed250 on File {
    childImageSharp {
      fixed(width: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
