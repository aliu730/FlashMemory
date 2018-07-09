import React from 'react';

class DeckMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: '',
      cardFrontFilled: 'Card Front',
      cardBack: '',
      cardBackFilled: 'Card Back',
      typing: false,
      title: '',
      deck: [],
    };
    this.nextClick = this.nextClick.bind(this);
    this.doneClick = this.doneClick.bind(this);
    this.typeEnter = this.typeEnter.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }

  typeEnter() {
    const { typing } = this.state;
    const { cardFront } = this.state;
    const { cardBack } = this.state;
    if (typing) {
      this.setState({
        typing: false,
        cardFrontFilled: cardFront,
        cardBackFilled: cardBack,
      });
    } else {
      this.setState({
        typing: true,
      });
    }
  }

  cardFrontText(event) {
    this.setState({
      cardFront: event.target.value
    });
  }

  cardBackText(event) {
    this.setState({
      cardBack: event.target.value
    });
  }

  titleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  nextClick() {
    const { cardFrontFilled } = this.state;
    const { cardBackFilled } = this.state;
    const { deck } = this.state;
    const updatedDeck = deck;
    const cardSet = {
      front: cardFrontFilled,
      back: cardBackFilled,
    };
    if (cardSet.front !== 'Card Front' && cardSet.back !== 'Card Back') {
      updatedDeck.push(cardSet);
      this.setState({
        deck: updatedDeck,
        cardFront: '',
        cardFrontFilled: 'Card Front',
        cardBack: '',
        cardBackFilled: 'Card Back',
      });
    } else {
      alert('Fill out the cards first!');
    }
  }

  doneClick() {
    const { showDeck } = this.props;
    showDeck();
  }

  render() {
    const { typing } = this.state;
    const { cardFrontFilled } = this.state;
    const { cardBackFilled } = this.state;
    if (!typing) {
      return (
        <div>
          <input onChange={this.titleChange} id="deckTitle" type="text" placeholder="New Deck Title" value={this.state.title}/>
          <div onClick={this.typeEnter} id="cardFront">
            <p id="cardFrontContent">
              {cardFrontFilled}
            </p>
          </div>
          <div onClick={this.typeEnter} id="cardBack">
            <p id="cardBackContent">
              {cardBackFilled}
            </p>
          </div>
          <button onClick={this.nextClick} id="nextButt" type="button">Next Card</button>
          <button onClick={this.doneClick} id="doneButt" type="button">Done</button>
        </div>
      );
    }
    return (
      <div>
        <div onClick={this.typeEnter} id="modalBlack">
        </div>
        <textarea id="cardFill" rows="10" cols="50" onChange={this.cardFrontText.bind(this)} value={this.state.cardFront} />
        <textarea id="cardFill" rows="10" cols="50" onChange={this.cardBackText.bind(this)} value={this.state.cardBack} />
      </div>
    );
  }
}

export default DeckMaker;
