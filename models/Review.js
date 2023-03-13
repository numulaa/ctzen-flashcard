const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flashcard",
  },
  difficulty: {
    type: Number,
    required: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now,
  },
  nextReviewDate: {
    type: Date,
    default: Date.now,
  },
});
