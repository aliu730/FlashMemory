const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flashDb');

const { connection } = mongoose;
connection.on('open', () => {
  console.log('Connected to mongo');
});
const Schema = mongoose.Schema;

const flashSchema = new Schema({
  user: String,
  decks: [{ title: String, deckItem: Array }],
});

const FlashData = mongoose.model('flashData', flashSchema);

const saveData = (user, decks) => {
  const flashDeck = new FlashData({ user, decks });
  flashDeck.save((err) => {
    if (err) throw err;
  });
};

const grabData = (user, cb) => {
  FlashData.find( user, (err, data) => {
    if (err) throw err;
    cb(data);
  });
};

module.exports = {
  saveData,
  grabData,
};
