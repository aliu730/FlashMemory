import React from 'react';

class DeckDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCard: this.props.currIndex,
    };
    this.nextClick = this.nextClick.bind(this);
    this.previousClick = this.previousClick.bind(this);
  }

  nextClick() {
    const { currCard } = this.state;
    const next = currCard + 1;
    const { deckOnDisplay } = this.props;
    const deckLength = deckOnDisplay.deckItem.length - 1;
    if (currCard === deckLength) {
      this.setState({
        currCard: 0,
      });
    } else {
      this.setState({
        currCard: next,
      });
    }
  }

  previousClick() {
    const { currCard } = this.state;
    const previous = currCard - 1;
    const { deckOnDisplay } = this.props;
    const deckLength = deckOnDisplay.deckItem.length - 1;
    if (currCard === 0) {
      this.setState({
        currCard: deckLength,
      });
    } else {
      this.setState({
        currCard: previous,
      });
    }
  }

  render() {
    console.log(this.state.currCard);
    const { deckDisplaySwitch } = this.props;
    const { deckOnDisplay } = this.props;
    const { currCard } = this.state;
    if (deckDisplaySwitch) {
      return (
        <div className="container-2">
          <div onClick={this.previousClick} className="leftCard">
            Previous
          </div>
          <div className="cardFront-d">
            <p id="cardFrontContent">
              {deckOnDisplay.deckItem[currCard].front}
            </p>
          </div>
          <div onClick={this.nextClick} className="rightCard">
            Next
          </div>
        </div>
      );
    }
  }
}

export default DeckDisplay;
