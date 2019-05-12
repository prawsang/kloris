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

export const thumb260 = graphql`
  fragment thumb260 on File {
    childImageSharp {
      fluid(maxWidth: 260, maxHeight: 260) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
