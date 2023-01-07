const FlashCard = require("../models/Flashcard");

module.exports = {
  getFlashCards: async (req, res) => {
    try {
      const allCards = await FlashCard.find({ userId: req.user.id });
      res.render("flashCard.ejs", {
        items: allCards,
        user: req.user,
        deck: req.deck,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createFlashCard: async (req, res) => {
    try {
      await FlashCard.create({
        frontCard: req.body.frontCard,
        backCard: req.body.backCard,
        reviewed: 0,
        deckId: req.body.id,
        userId: req.user.id,
      });
      console.log("a new flashCard has been added!");
      res.redirect("/flashCard");
    } catch (err) {
      console.log(err);
    }
  },
  deleteFlashCard: async (req, res) => {
    console.log(req.body.flashCardIdFromJS);
    try {
      await FlashCard.findOneAndDelete({ _id: req.body.flashCardIdFromJS });
      console.log("Deleted FlashCard", req.body);
      res.json("Deleted the Flashcard");
    } catch (err) {
      console.log(err);
    }
  },
  markReviewed: async (req, res) => {
    try {
      await FlashCard.findOneAndUpdate(
        { _id: req.body.flashCardIdFromJSFile },
        { reviewed: +1 }
      );
      console.log("Updated to be reviewed");
      res.json("FlashCard reviewed once");
    } catch (err) {
      console.log(err);
    }
  },
};
