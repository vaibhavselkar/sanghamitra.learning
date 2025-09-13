const mongoose = require('mongoose');

// Individual Question Result Schema
const questionResultSchema = new mongoose.Schema({
  questionNumber: { type: Number, required: true },
  questionText: { type: String, required: true },
  userAnswer: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  timeTaken: { type: Number, default: 0 } // in seconds
});

// Topic Score Schema
const topicScoreSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  percentage: { type: Number, required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  attemptNumber: { type: Number, default: 1 },
  timestamp: { type: Date, default: Date.now },
  questionResults: [questionResultSchema] // Store per-question answers
});

// Main User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  quizScores: [topicScoreSchema]
}, { timestamps: true });

// Export using the same model name
module.exports = mongoose.model('iitm_math_scores', userSchema);;


