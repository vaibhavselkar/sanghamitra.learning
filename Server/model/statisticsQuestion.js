const mongoose = require('mongoose');

const statisticsQuestionSchema = new mongoose.Schema({
  question_number: {
    type: Number,
    required: true
  },
  question_text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['multiple_choice', 'multiple_select', 'numeric', 'text_input', 'numeric_input']
  },
  options: [String], // For multiple choice questions
  correct_answer: {
    type: mongoose.Schema.Types.Mixed, // Can be string, number, or array
    required: true
  },
  alternative_answers: [mongoose.Schema.Types.Mixed], // Alternative correct answers
  explanation: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard']
  },
  points: {
    type: Number,
    default: 1
  },
  topic: {
    type: String,
    required: true
  },
  format_hint: String, // Optional formatting hint for students
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Update the updated_at field before saving
statisticsQuestionSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Create and export the model with the specific collection name
const Statistics_questions = mongoose.model('Statistics_questions', statisticsQuestionSchema, 'iitm_stats_questions');


module.exports = Statistics_questions;
