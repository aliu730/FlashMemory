import React from 'react';

const DeckDisplay = (props) => {
  const { deckDisplaySwitch } = props;
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
        <div className="cardFront-d">
          <p id="cardFrontContent">
            {deckOnDisplay.deckItem[currIndex].front}
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
