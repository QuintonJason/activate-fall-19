import React from 'react'

import speakers from "../../data/speakers.json"
import SpeakerCard from "./SpeakerCard"

const Cards = props => {
  const speakerCards = speakers.map(item => <SpeakerCard key={item.id} {...item} />);

  return (
    <div className="cards-wrapper">
      <h2 className="t-section-header cards__headline">Lineup</h2>
      <div className="cards">
        <span className="card__temp-headline">Coming Soon</span>
        {speakerCards}
      </div>
    </div>
  )
};

export default Cards;