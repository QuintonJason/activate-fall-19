import React from 'react'

import speakers from "../../data/speakers.json"
import SpeakerCard from "./SpeakerCard"

const Cards = props => {
    const speakerCards = speakers.map(item => <SpeakerCard key={item.id} {...item} />);

    return (
      <div className="cards-wrapper">
  	    <h2 className="t-section-header cards__headline">Lineup</h2>
        <div className="cards">{speakerCards}</div>
      </div>
    )

      {/*<div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div>
      <div className="card">
        <h3 className="card__title">Talk Topic Blah Blah</h3>
        <p className="card__speaker">Lynsey Gwin</p>
      </div> */}
};

export default Cards;