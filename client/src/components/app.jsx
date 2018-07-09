import Login from './login.jsx';
import DeckSelector from './DeckSelector.jsx';
import DeckMaker from './DeckMaker.jsx';
import DeckDisplay from './DeckDisplay.jsx';

const React = require('react');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginDisplay: true,
      fakeDeckList: [{ title: 'math', deckItem: [{ front: 'TEST FRONT MATH', back: 'TEST BACK MATH' }] }, { title: 'science', deckItem: [{ front: 'TEST FRONT SCI', back: 'TEST BACK SCI' }, { front: 'TEST FRONT SCI2', back: 'TEST BACK SCI2' }] }],
      newDeckTime: false,
      deckDisplaySwitch: true,
      currIndex: 0,
      deckOnDisplay: {
        title: 'Math',
        deckItem: [{ front: 'TEST FRONT', back: 'TEST BACK' }],
      },
    };
    this.loginClick = this.loginClick.bind(this);
    this.newDeckClick = this.newDeckClick.bind(this);
    this.addDeck = this.addDeck.bind(this);
    this.deckSelect = this.deckSelect.bind(this);
  }

  deckSelect(event) {
    const { fakeDeckList } = this.state;
    const currDeckTitle = event.target.value;
    for (let i = 0; i < fakeDeckList.length; i += 1) {
      if (currDeckTitle === fakeDeckList[i].title) {
        this.setState({
          currIndex: 0,
          deckOnDisplay: fakeDeckList[i],
        });
      }
    }
  }

  addDeck(deck) {
    const { fakeDeckList } = this.state;
    fakeDeckList.push(deck);
  }

  loginClick() {
    // login should be correct check TODO.
    this.setState({
      loginDisplay: false,
    });
  }

  newDeckClick() {
    const { newDeckTime } = this.state;
    if (newDeckTime) {
      this.setState({
        newDeckTime: false,
      });
    } else {
      this.setState({
        newDeckTime: true,
      });
    }
  }

  render() {
    const { loginDisplay } = this.state;
    const { fakeDeckList } = this.state;
    const { newDeckTime } = this.state;
    const { deckDisplaySwitch } = this.state;
    const { deckOnDisplay } = this.state;
    if (loginDisplay) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-7" />
            <Login show={loginDisplay} login={this.loginClick} />
          </div>
        </div>
      );
    }
    if (newDeckTime) {
      return (
        <DeckMaker addDeck={this.addDeck} showDeck={this.newDeckClick} />
      );
    }
    return (
      <div className="container_2">
        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <div>
              Deck List
            </div>
            <DeckSelector deckSelect={this.deckSelect} deck={fakeDeckList} />
            <button onClick={this.newDeckClick} type="button" className="newDeckButt">
              New Deck
            </button>
          </div>
        </div>
        <DeckDisplay currIndex={this.state.currIndex} deckOnDisplay={deckOnDisplay} deckDisplaySwitch={deckDisplaySwitch} />
      </div>
    );
  }
}

module.exports = App;
