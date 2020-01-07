import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import Cards from "../components/Cards"
import Details from "../components/Details"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Lightning Night – One Night. Ten Talks. January 14 at 6:30 PM" />

    <div className="landing-section landing-section--details" id="section-1">
      <Details />
    </div>

    <div className="landing-section landing-section--cards" id="section-2">
      <Cards />
    </div>
  </Layout>
)

export default IndexPage
