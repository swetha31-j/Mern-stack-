const mongoose = require("mongoose");

const examPreparationTopicSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  topics: {
    type: [String],   // Array of strings
    required: true
  },
  difficultyLevel: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],  // Only these values allowed
    required: true
  },
  recommendedStudyHours: {
    type: Number,
    required: true,
    min: 1
  },
  important: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ExamPreparationTopic = mongoose.model(
  "ExamPreparationTopic",
  examPreparationTopicSchema
);

module.exports = ExamPreparationTopic;