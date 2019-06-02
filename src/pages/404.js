import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = props => (
  <>
    <SEO title="404: Not found" />
    <section
      className="content is-flex is-ai-center is-jc-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="center">
        <h2>Not found</h2>
        <p>The page you are looking for cannot be found.</p>
        <Link to="/">
          <button className="button">Back to Homepage</button>
        </Link>
      </div>
    </section>
  </>
)

export default NotFoundPage
