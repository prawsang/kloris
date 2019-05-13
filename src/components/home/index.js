import React from "react"
import Hero from "./hero"

const HomePage = () => (
  <main>
    <section className="container wide section">
      <Hero />
    </section>
    <section className="section container dark small has-padding">
      <p>This is a paragraph</p>
    </section>
  </main>
)

export default HomePage
