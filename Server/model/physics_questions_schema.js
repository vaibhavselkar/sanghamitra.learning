const mongoose = require('mongoose');

// ===========================================
// PHYSICS QUESTION SCHEMAS
// ===========================================

// Sub-question schema for multi-part physics problems
const physicsSubQuestionSchema = new mongoose.Schema({
  part_id: { 
    type: String, 
    required: true 
  }, // 'a', 'b', 'c', 'i', 'ii', etc.
  
  sub_question_text: { 
    type: String, 
    required: true 
  },
  
  correct_answer: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true 
  }, // Can be number, string, array, object
  
  alternative_answers: [mongoose.Schema.Types.Mixed], // Alternative correct forms
  
  answer_type: {
    type: String,
    enum: [
      'scalar_with_unit',    // 10 m/s
      'vector',              // 4î + 8ĵ m/s
      'coordinate',          // (4, 10)
      'pure_number',         // 2.5
      'expression',          // v²/2g
      'multiple_values'      // For problems requiring multiple answers
    ],
    required: true
  },
  
  units: { 
    type: String 
  }, // m/s, m/s², m, s, kg, N, etc.
  
  tolerance: { 
    type: Number, 
    default: 0.01 
  }, // For numerical answers (±1%)
  
  significant_figures: { 
    type: Number 
  }, // Expected significant figures
  
  // Input format guidance
  format_hint: {
    type: String,
    required: true
  }, // "Enter your answer as a number (e.g., 2.5)", "Enter as vector (e.g., 4î + 8ĵ)"
  
  placeholder_text: {
    type: String
  }, // Placeholder text for input field
  
  input_validation: {
    pattern: String, // Regex pattern for validation
    error_message: String // Error message for invalid format
  },
  
  hint: { 
    type: String 
  }, // Optional hint for this sub-part
  
  solution_steps: [String] // Step-by-step solution
});

// Main Physics Question Schema
const physicsQuestionSchema = new mongoose.Schema({
  question_id: {
    type: String,
    required: true,
    unique: true
  },
  
  question_number: {
    type: Number,
    required: true
  },
  
  question_text: {
    type: String,
    required: true
  },
  
  question_type: {
    type: String,
    required: true,
    enum: [
      'single_part',         // Simple one-answer question
      'multi_part',          // Questions with sub-parts (a, b, c)
      'multiple_choice',     // MCQ
      'assertion_reason',    // Assertion-Reason type
      'match_the_following', // Column matching
      'fill_in_blanks',     // Multiple blanks
      'diagram_based'        // Questions with diagrams
    ]
  },
  
  // For single-part questions
  correct_answer: {
    type: mongoose.Schema.Types.Mixed,
    required: function() { 
      return this.question_type === 'single_part' || this.question_type === 'multiple_choice'; 
    }
  },
  
  answer_type: {
    type: String,
    enum: [
      'scalar_with_unit', 'vector', 'coordinate', 'pure_number', 
      'expression', 'multiple_values', 'option_letter'
    ]
  },
  
  units: String,
  tolerance: { type: Number, default: 0.01 },
  
  // Input format guidance for single-part questions
  format_hint: {
    type: String
  },
  
  placeholder_text: {
    type: String
  },
  
  input_validation: {
    pattern: String,
    error_message: String
  },
  
  // For multiple choice questions
  options: [{
    option_id: String, // A, B, C, D
    option_text: String,
    is_correct: { type: Boolean, default: false }
  }],
  
  // For multi-part questions
  sub_questions: [physicsSubQuestionSchema],
  
  // Physics-specific information
  physics_topic: {
    type: String,
    required: true,
    enum: [
      'kinematics_1d', 'kinematics_2d', 'dynamics', 'circular_motion',
      'work_energy', 'momentum', 'gravitation', 'oscillations',
      'waves', 'thermodynamics', 'electrostatics', 'current_electricity',
      'magnetism', 'electromagnetic_induction', 'optics', 'modern_physics'
    ]
  },
  
  sub_topic: String, // More specific categorization
  
  physics_concepts: [String], // Key concepts tested
  
  given_values: [{
    variable: String,      // v₀, a, m, etc.
    value: String,         // "10", "4î + 8ĵ"
    units: String,         // m/s, kg
    description: String    // "initial velocity"
  }],
  
  required_constants: [{
    constant: String,      // g, c, h, k
    value: String,         // "10", "3×10⁸"
    units: String,         // m/s², m/s
    description: String    // "acceleration due to gravity"
  }],
  
  assumptions: [String], // Air resistance neglected, etc.
  
  explanation: {
    type: String,
    required: true
  },
  
  solution_approach: String, // Brief description of solution method
  
  common_mistakes: [String], // Common student errors
  
  related_questions: [String], // IDs of related questions
  
  source: {
    book: String,
    chapter: String,
    page: Number,
    author: String
  },
  
  tags: [String], // For searching and filtering
  
  created_at: {
    type: Date,
    default: Date.now
  },
  
  updated_at: {
    type: Date,
    default: Date.now
  },
  
  created_by: String,
  last_modified_by: String
}); // FIXED: Added missing closing parenthesis

// Middleware to update timestamps
physicsQuestionSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Export models
module.exports = {
  PhysicsQuestion: mongoose.model('physics_questions', physicsQuestionSchema)
};