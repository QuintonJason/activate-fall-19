import React from 'react'

const Details = () => (
  <section className="details">
    <div className="details-wrapper">
      <div>
        <h2 className="details__headline">One night. <br />Ten Talks.</h2>
        <time className="details__time" datetime="2020-01-14T18:30:00">January 14 @ 6:30-8:30 PM</time>
        <span className="details__location">Location TBD</span>
      </div>
      <div className="details__info">
        <p className="details__description">Lightning Night is a new event for the tech community, to help connect local professionals who want to learn, ask questions, network, or even collaborate. In a series of compact 10-minute talks, you will learn how local leaders are using new technologies, preparing for the future of tech, and getting ahead with their projects. Join us now to reserve your spot!</p>
        <a href="#0" className="btn details__button">RSVP</a>
      </div>
    </div>
  </section>
)

export default Details;