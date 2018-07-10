import React from 'react';

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
        <div onClick={previousCard} className="leftCard">
          Previous
        </div>
        <div onClick={changeFace} className="cardFront-d">
          <p id="cardFrontContent">
            {deckOnDisplay.deckItem[currIndex][face]}
          </p>
        </div>
        <div onClick={nextCard} className="rightCard">
          Next
        </div>
      </div>
    );
  }
};

export default DeckDisplay;
