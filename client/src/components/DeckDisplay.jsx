import React from 'react';
import axios from 'axios';

const DeckDisplay = (props) => {
  const { deckDisplaySwitch, changeFace, face } = props;
  const {
    deckOnDisplay,
    currIndex,
    nextCard,
    previousCard,
  } = props;
  if (deckDisplaySwitch) {
    return (
      <div className="container-2">
        <i onClick={previousCard} class="fas fa-arrow-circle-left fa-7x leftCard"></i>
        <div onClick={changeFace} className="cardFront-d">
          <p id="cardFrontContent">
            {deckOnDisplay.deckItem[currIndex][face]}
          </p>
        </div>
        <i onClick={nextCard} class="fas fa-arrow-circle-right fa-7x rightCard"></i>
      </div>
    );
  }
};

export default DeckDisplay;
