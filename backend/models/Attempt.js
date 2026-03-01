const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  assignmentId: Number,
  query: String,
  isSuccessful: Boolean,
  resultPreview: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attempt", attemptSchema);