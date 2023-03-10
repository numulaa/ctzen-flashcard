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
router.get("/flashCardItems", flashCardController.getFlashCards);

module.exports = router;
