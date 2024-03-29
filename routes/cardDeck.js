const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const cardDeckController = require("../controllers/deck");
const flashCardController = require("../controllers/flashCard");

router.get("/", ensureAuth, cardDeckController.getFlashCardDecks);
router.post("/createFlashCardDeck", cardDeckController.createFlashCardDeck);
router.delete(
  "/deleteFlashCardDeck/:id",
  cardDeckController.deleteFlashCardDeck
);
router.put("/editFlashCardDeck/:id", cardDeckController.editFlashCardDeck);
//get and see all flashcards from a deck
router.get("/:id", flashCardController.getFlashCards);

module.exports = router;
