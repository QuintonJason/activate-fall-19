import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/Logo'

const Header = ({ siteTitle }) => (
  <header className="l-header">
    <h2 className="header__subhead"><span>activate</span> presents</h2>
    <h1 className="header__display">Lightening Night</h1>
    <time className="header__time"><span className="header__time-bold">December</span> 10 @ 6:30 PM</time>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
