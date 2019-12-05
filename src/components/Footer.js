import React from 'react'
import pdf from "../images/activate-lightning-night.pdf"

const Footer = () => (
  <footer className="l-footer">
    <div className="footer-wrapper">
      <div className="footer-sponsor">
        <p className="footer-sponsor__caption">Sponsored by:</p>
        <a href="https://www.lsu.edu/business/sdeis/index.php" className="footer-sponsor__sponsor" target="_blank" rel="noreferrer nofollow">
          LSU E.J. Ourso College of Business<br />Stephenson Department of Entrepreneurship & Information Systems
        </a>
      </div>
      <div className="footer-copyright__link-wrapper">
        <a href={pdf} className="btn btn--secondary footer-copyright__link" target="_blank" rel="noreferrer nofollow">Be A Sponsor</a>
      </div>
    </div>
    <p className="footer-copyright">Brought to you by <a href="https://activateconf.com" className="footer-copyright__link" target="_blank" rel="nofollow noreferrer">Activate Conference</a></p>
  </footer>
)

export default Footer;