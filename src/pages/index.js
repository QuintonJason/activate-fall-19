import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import Cards from "../components/Cards"
import Details from "../components/Details"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="landing-section landing-section--details" id="section-1">
      <Details />
    </div>

    <div className="landing-section landing-section--cards" id="section-2">
      <Cards />
    </div>

    <div className="landing-section" id="section-3">
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
