const iitmCTScoreSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'iitm_ct_questions',
    required: true
  },
  
  week_number: {
    type: Number,
    required: true
  },
  
  assignment_type: {
    type: String,
    enum: ['practice', 'graded'],
    required: true
  },
  
  question_number: {
    type: Number,
    required: true
  },
  
  user_answer: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  
  is_correct: {
    type: Boolean,
    required: true
  },
  
  points_awarded: {
    type: Number,
    required: true
  },
  
  max_points: {
    type: Number,
    required: true
  },
  
  attempt_number: {
    type: Number,
    default: 1
  },
  
  time_taken: {
    type: Number, // in seconds
    default: 0
  },
  
  submitted_at: {
    type: Date,
    default: Date.now
  }
});

// Compound indexes
iitmCTScoreSchema.index({ user_id: 1, week_number: 1, assignment_type: 1 });
iitmCTScoreSchema.index({ user_id: 1, question_id: 1, attempt_number: 1 }, { unique: true });

module.exports = mongoose.model('iitm_ct_scores', iitmCTScoreSchema);