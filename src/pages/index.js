import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-section" id="section-1">
      <a href="#0" className="btn">RSVP</a>
      <p className="panton-regular"> Panton W01 Regular </p>
      <p className="panton-bold"> Panton W01 Bold </p>
      <p className="canoodle"> Canoodle W05 Regular </p>
    </div>
    <div className="landing-section" id="section-2">
      Section 2
    </div>
    <div className="landing-section" id="section-3">
      Section 3
    </div>
    <Contact />
  </Layout>
)

export default IndexPage
