import React from 'react';

class DeckMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: "",
      cardBack: "",
      typing: false,
      title: "",
    };
    this.doneClick = this.doneClick.bind(this);
    this.typeEnter = this.typeEnter.bind(this);
  }

  typeEnter() {
    const { typing } = this.state;
    if (typing) {
      this.setState({
        typing: false,
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

  doneClick() {
    const { showDeck } = this.props;
    showDeck();
  }

  render() {
    const { typing } = this.state;
    if (!typing) {
      return (
        <div>
          <input id="deckTitle" type="text" placeholder="New Deck Title" value={this.state.title}/>
          <div onClick={this.typeEnter} id="cardFront">
            <p id="cardFrontContent">
              Card Front
            </p>
          </div>
          <div id="cardBack">
            <p id="cardBackContent">
              Card Back
            </p>
          </div>
          <button id="nextButt" type="button">Next Card</button>
          <button onClick={this.doneClick} id="doneButt" type="button">Done</button>
        </div>
      );
    }
    return (
      <div onClick={this.typeEnter} id="modalBlack">
        <input id="cardFill" type="text" onChange={this.cardFrontText.bind(this)} value={this.state.cardFront} />
      </div>
    );
  }
}

export default DeckMaker;
