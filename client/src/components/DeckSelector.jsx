import React from 'react';

const DeckSelector = ({ deck, deckSelect }) => {
  return (
    <div>
      <select onChange={deckSelect}>
        {deck.map((deckEl, id) => {
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
