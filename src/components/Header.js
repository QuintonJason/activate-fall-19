import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="l-header landing-section">
    <h2 className="header__subhead"><span className="header__subhead--bold">activate</span> presents</h2>
    <h1 className="header__display">Lightening Night</h1>
    <time className="header__time"><span className="header__time-bold">December 10</span> @ 6:30 PM</time>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
