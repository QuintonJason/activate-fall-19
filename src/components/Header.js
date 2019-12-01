import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="l-header landing-section">
      <h2 className="header__subhead"><span className="header__subhead--bold">activate</span> presents</h2>
      <h1 className="header__display">Lightening Night</h1>
      <time className="header__time" datetime="2020-01-06T18:30:00"><span className="header__time-bold">January 6</span> @ 6:30 PM</time>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
