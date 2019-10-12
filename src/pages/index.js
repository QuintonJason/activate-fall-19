import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="landing-section landing-section--details" id="section-1">
      <a href="#0" className="btn">RSVP</a>
      <p className="panton-regular"> Panton W01 Regular </p>
      <p className="panton-bold"> Panton W01 Bold </p>
      <p className="canoodle"> Canoodle W05 Regular </p>
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
