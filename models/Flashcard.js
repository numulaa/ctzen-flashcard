const mongoose = require("mongoose");
const FlashCardSchema = new mongoose.Schema({
  frontCard: {
    type: String,
    required: true,
  },
  backCard: {
    type: String,
    required: true,
  },
  times_reviewed: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  deckId: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model("FlashCard", FlashCardSchema);
