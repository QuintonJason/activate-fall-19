import React from 'react'

const Details = () => (
  <section className="details">
    <div className="details-wrapper">
      <h2 className="details__headline">One night. <br />Ten Talks.</h2>
      <div className="details__info">
        <p className="details__description">Gather with different to learn about the latest trends in technology. More blah blah.</p>
        <time className="details__time">December 10 @ 6:30-8:30 PM</time>
        <span className="details__location">Location TBD</span>
        <a href="#0" className="btn details__button">RSVP</a>
      </div>
    </div>
  </section>
)

export default Details;