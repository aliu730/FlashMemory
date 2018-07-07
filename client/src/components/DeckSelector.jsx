import React from 'react';

const DeckSelector = (deck) => {
  return (
    <div>
      <select>
        {deck.deck.map((deckEl, id) => {
          return (
            <option value={deckEl} key={id}>
              { deckEl }
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DeckSelector;
