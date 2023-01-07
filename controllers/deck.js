const Deck = require("../models/Deck");

module.exports = {
  getFlashCardDecks: async (req, res) => {
    try {
      const allDecks = await Deck.find({ userId: req.user.id });
      res.send(allDecks);
    } catch (err) {
      console.log(err);
    }
  },
  createFlashCardDeck: async (req, res) => {
    try {
      await Deck.create({
        deckTitle: req.body.deckTitle,
        shortDesc: req.body.shortDesc,
        userId: req.user.id,
        createdBy: req.user.userName,
      });
      console.log("a new flashCard deck has been added!");
      res.redirect("/cardDeck");
    } catch (err) {
      console.log(err);
    }
  },
  deleteFlashCardDeck: async (req, res) => {
    console.log(req.body.deckIdFromJS);
    try {
      await Deck.findOneAndDelete({ _id: req.body.deckIdFromJS });
      console.log("Deleted FlashCard Deck", req.body);
      res.json("Deleted the Flashcard Deck");
    } catch (err) {
      console.log(err);
    }
  },
};
