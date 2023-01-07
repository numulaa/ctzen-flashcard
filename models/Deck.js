const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  deckTitle: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name
module.exports = mongoose.model("Deck", PostSchema);
