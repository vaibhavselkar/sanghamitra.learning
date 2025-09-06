const mongoose = require('mongoose');

// Basic Score Schema
const scoreSchema = new mongoose.Schema({
  topic: {
    type: String,
    default: 'quiz1'
  },
  score: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    default: 15
  },
  percentage: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  answers: {
    type: Object,
    default: {}
  }
});

// Basic User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  scores: [scoreSchema]
}, {
  timestamps: true
});

// Create and export the model
const Statistics_scores = mongoose.model('iitm_math_scores', userSchema);

module.exports = Statistics_scores;