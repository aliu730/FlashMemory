import Login from './login.jsx';
import DeckSelector from './DeckSelector.jsx';
import DeckMaker from './DeckMaker.jsx';
import DeckDisplay from './DeckDisplay.jsx';

const axios = require('axios');
const React = require('react');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loginDisplay: true,
      fakeDeckList: [{ title: 'math', deckItem: [{ front: '2 % 4 = ?', back: '0' }, { front: 'Is Math.random() random?', back: 'Nope' }] }, { title: 'science', deckItem: [{ front: 'What is the opposite of the earth?', back: 'The Moon' }, { front: 'What are diamonds made of?', back: 'Carbon' }] }],
      newDeckTime: false,
      deckDisplaySwitch: true,
      currIndex: 0,
      face: 'front',
      deckOnDisplay: {
        title: 'Math',
        deckItem: [{ front: '2 % 4 = ?', back: '0' }, { front: 'Is Math.random() random?', back: 'Nope' }],
      },
    };
    this.loginClick = this.loginClick.bind(this);
    this.newDeckClick = this.newDeckClick.bind(this);
    this.addDeck = this.addDeck.bind(this);
    this.deckSelect = this.deckSelect.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.changeFace = this.changeFace.bind(this);
    this.loginChange = this.loginChange.bind(this);
  }

  // componentDidMount() {
  //   const { user } = this.state;
  //   axios({
  //     method: 'GET',
  //     url: `/grabData/${user}`,
  //   }).then((response) => {
  //     const { fakeDeckList } = this.state;
  //     const newList = fakeDeckList;
  //     const { data } = response;
  //     for (let i = 0; i < data.length; i += 1) {
  //       newList.push(data[i].decks[0]);
  //     }
  //     this.setState({
  //       fakeDeckList: newList,
  //     });
  //   }).catch((err) => {
  //     throw (err);
  //   });
  // }

  changeFace() {
    const { face } = this.state;
    if (face === 'front') {
      this.setState({
        face: 'back',
      });
    } else {
      this.setState({
        face: 'front',
      });
    }
  }

  deckSelect(event) {
    const { fakeDeckList } = this.state;
    const currDeckTitle = event.target.value;
    for (let i = 0; i < fakeDeckList.length; i += 1) {
      if (currDeckTitle === fakeDeckList[i].title) {
        this.setState({
          face: 'front',
          currIndex: 0,
          deckOnDisplay: fakeDeckList[i],
        });
      }
    }
  }

  nextCard() {
    const { currIndex, deckOnDisplay } = this.state;
    const next = currIndex + 1;
    if (currIndex === deckOnDisplay.deckItem.length - 1) {
      this.setState({
        face: 'front',
        currIndex: 0,
      });
    } else {
      this.setState({
        face: 'front',
        currIndex: next,
      });
    }
  }

  previousCard() {
    const { currIndex, deckOnDisplay } = this.state;
    const previous = currIndex - 1;
    if (currIndex === 0) {
      this.setState({
        currIndex: deckOnDisplay.deckItem.length - 1,
      });
    } else {
      this.setState({
        face: 'front',
        currIndex: previous,
      });
    }
  }

  addDeck(deck) {
    const { fakeDeckList, user } = this.state;
    fakeDeckList.push(deck);
    axios.post('/postData', {
      user: user,
      deck: deck,
    })
    .then((response) => {
      console.log("STORED");
    })
    .catch((err) => {
      console.log("APP.jsx ERR", err);
    })
  }

  loginChange(event) {
    this.setState({
      user: event.target.value,
    });
  }

  loginClick() {
    // login should be correct check TODO.
    // this.setState({
    //   loginDisplay: false,
    // });
    const { user } = this.state;
    axios({
      method: 'GET',
      url: `/grabData/${user}`,
    }).then((response) => {
      const { fakeDeckList } = this.state;
      const newList = fakeDeckList;
      const { data } = response;
      for (let i = 0; i < data.length; i += 1) {
        newList.push(data[i].decks[0]);
      }
      this.setState({
        fakeDeckList: newList,
        loginDisplay: false,
      });
    }).catch((err) => {
      throw (err);
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
    const {
      loginDisplay,
      face,
      fakeDeckList,
      newDeckTime,
      deckDisplaySwitch,
      deckOnDisplay,
      currIndex,
    } = this.state;
    if (loginDisplay) {
      return (
        <div>
          <Login show={loginDisplay} login={this.loginChange} />
          <div className="container-log">
            <button id="buttonLog" onClick={this.loginClick} type="button">
              Login
            </button>
          </div>
          <div className="container-descript">
            <div className="col1">
              <img className="imgTree" src="nopaper.png" ></img>
            </div>
            <div className="col2">
              <img className="imgFlashcards" src="flashcards.png" ></img>
            </div>
            <div className="col3">
              <img className="learn" src="learn.png"></img>
            </div>
          </div>
          <div className="container-setup">
            <div className="register">
              Simply register a account to get started
            </div>
            <div className="makeDeck">
              Make a deck to review
            </div>
            <div className="shareDeck">
              Share with friends
            </div>
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
        <DeckDisplay changeFace={this.changeFace} face={face} nextCard={this.nextCard} previousCard={this.previousCard} currIndex={currIndex} deckOnDisplay={deckOnDisplay} deckDisplaySwitch={deckDisplaySwitch} />
      </div>
    );
  }
}

module.exports = App;
