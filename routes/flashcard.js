const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const flashCardController = require("../controllers/flashcard");

router.get("/", ensureAuth, flashCardController.getFlashCards);
router.post("/createFlashCard", flashCardController.createFlashCard);
router.delete("/deleteFlashCard", flashCardController.deleteFlashCard);
router.put("/markReviewed", flashCardController.markReviewed);

module.exports = router;
