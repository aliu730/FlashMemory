import Login from './login.jsx';
import DeckSelector from './DeckSelector.jsx';
import DeckMaker from './DeckMaker.jsx';

const React = require('react');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginDisplay: true,
      fakeDeckList: ['Math', 'Science', 'English'],
      newDeckTime: false,
    };
    this.loginClick = this.loginClick.bind(this);
    this.newDeckClick = this.newDeckClick.bind(this);
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
        <DeckMaker showDeck={this.newDeckClick} />
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
            <DeckSelector deck={fakeDeckList} />
            <button onClick={this.newDeckClick} type="button" className="newDeckButt">
              New Deck
            </button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
