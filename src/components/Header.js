import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/Logo'

const Header = ({ siteTitle }) => (
  <header className="l-header">
    <Link
      to="/"
      className="header__brand-link"
    >
      <Logo className="header__logo" />
    </Link>
    <h1 className="t-hidden">{siteTitle}</h1>
    <nav id="main-nav" className="header-nav">
      <Link to="#section-1" className="header__link">
        Section 1
      </Link>
      <Link to="#section-2" className="header__link">
        Section 2
      </Link>
      <Link to="#section-3" className="header__link">
        Section 3
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
