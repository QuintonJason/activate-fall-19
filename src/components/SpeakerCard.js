import React from "react";

const SpeakerCard = props => {
  const {id, speakerName, talkTitle} = props;

  return (
    <div className="card" data-id="{props.id}">
      <div className="card__temp-overlay"></div>
      <h3 className="card__title">{props.speakerName}</h3>
      <p className="card__speaker">{props.talkTitle}</p>
    </div>
  )
}

export default SpeakerCard;