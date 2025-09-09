const mongoose = require('mongoose');

// Individual Question Result Schema
const questionResultSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  userAnswer: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  },
  timeTaken: {
    type: Number, // in seconds
    default: 0
  }
});

// Updated Score Schema
const scoreSchema = new mongoose.Schema({
  topic: {
    type: String,
    default: 'domain_range_functions'
  },
  quizType: {
    type: String,
    enum: ['practice', 'timed', 'adaptive'],
    default: 'practice'
  },
  score: {
    type: Number,
    required: true
  },
  maxPossibleScore: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  correctAnswers: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  // Difficulty breakdown
  difficultyBreakdown: {
    easy: {
      attempted: { type: Number, default: 0 },
      correct: { type: Number, default: 0 },
      points: { type: Number, default: 0 }
    },
    medium: {
      attempted: { type: Number, default: 0 },
      correct: { type: Number, default: 0 },
      points: { type: Number, default: 0 }
    },
    hard: {
      attempted: { type: Number, default: 0 },
      correct: { type: Number, default: 0 },
      points: { type: Number, default: 0 }
    }
  },
  // Detailed question results
  questionResults: [questionResultSchema],
  // Quiz timing
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  totalTimeTaken: {
    type: Number, // in seconds
    required: true
  },
  // Additional metadata
  isCompleted: {
    type: Boolean,
    default: true
  },
  // For adaptive quizzing
  adaptiveData: {
    startingDifficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'easy'
    },
    finalDifficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard']
    },
    difficultyProgression: [{
      questionNumber: Number,
      difficulty: String,
      wasCorrect: Boolean
    }]
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for better query performance
scoreSchema.index({ timestamp: -1 });
scoreSchema.index({ topic: 1, percentage: -1 });
scoreSchema.index({ 'difficultyBreakdown.easy.correct': -1 });
scoreSchema.index({ 'difficultyBreakdown.medium.correct': -1 });
scoreSchema.index({ 'difficultyBreakdown.hard.correct': -1 });

// Basic User Schema (unchanged)
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

// Add user-level indexes
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'scores.timestamp': -1 });

// Create and export the model
const Statistics_scores = mongoose.model('iitm_math_scores', userSchema);

module.exports = Statistics_scores;
