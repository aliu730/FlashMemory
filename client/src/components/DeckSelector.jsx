import React from 'react';

const DeckSelector = (deck) => {
  return (
    <div>
      <select>
        {deck.deck.map((deckEl, id) => {
          return (
            <option value={deckEl.title} key={id}>
              { deckEl.title }
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DeckSelector;
