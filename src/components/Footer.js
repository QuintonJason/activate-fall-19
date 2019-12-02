import React from 'react'

const Footer = () => (
  <footer className="l-footer">
    <div className="footer-wrapper">
      <div className="footer-sponsor">
        <p className="footer-sponsor__caption">Sponsored by:</p>
        <a href="#0" className="footer-sponsor__sponsor">
          LSU E.J. Ourso College of Business<br />Stephenson Department of Entrepreneurship & Information Systems
        </a>
      </div>
      <div className="footer-copyright__link-wrapper">
        <a className="btn btn--secondary footer-copyright__link">Be A Sponsor</a>
      </div>
    </div>
    <p className="footer-copyright">Brought to you by <a href="#0" className="footer-copyright__link">Activate Conference</a></p>
  </footer>
)

export default Footer;