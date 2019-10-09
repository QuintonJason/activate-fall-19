import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing-section" id="section-1">
      Section 1
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
