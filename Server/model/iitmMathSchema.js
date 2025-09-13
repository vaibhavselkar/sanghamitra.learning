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

// Topic-specific Score Schema
const topicScoreSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
    // Removed enum constraint - frontend handles topic validation
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
  // Attempt tracking for retakes
  attemptNumber: {
    type: Number,
    default: 1
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Performance Summary Schema for quick overview
const performanceSummarySchema = new mongoose.Schema({
  totalQuizzesCompleted: {
    type: Number,
    default: 0
  },
  averageScore: {
    type: Number,
    default: 0
  },
  topicProgress: {
    type: Map,
    of: {
      completed: { type: Boolean, default: false },
      bestScore: { type: Number, default: 0 },
      attempts: { type: Number, default: 0 },
      lastAttempted: { type: Date }
    },
    default: new Map()
  },
  overallDifficultyStats: {
    easy: {
      totalAttempted: { type: Number, default: 0 },
      totalCorrect: { type: Number, default: 0 },
      accuracy: { type: Number, default: 0 }
    },
    medium: {
      totalAttempted: { type: Number, default: 0 },
      totalCorrect: { type: Number, default: 0 },
      accuracy: { type: Number, default: 0 }
    },
    hard: {
      totalAttempted: { type: Number, default: 0 },
      totalCorrect: { type: Number, default: 0 },
      accuracy: { type: Number, default: 0 }
    }
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Main User Schema with Topic-based Structure
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
  // Array of all quiz attempts, organized by topic
  quizScores: [topicScoreSchema],
  
  // Performance summary for quick analytics
  performanceSummary: performanceSummarySchema,
  
  // Course progression tracking
  courseProgress: {
    currentTopic: {
      type: String,
      // Removed enum constraint - frontend handles topic validation
      default: 'Quiz1_Functions_basics'
    },
    completedTopics: [{
      type: String
      // Removed enum constraint - frontend handles topic validation
    }],
    overallProgressPercentage: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Add indexes for better query performance
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ 'quizScores.topic': 1 });
userSchema.index({ 'quizScores.timestamp': -1 });
userSchema.index({ 'quizScores.percentage': -1 });
userSchema.index({ 'performanceSummary.lastUpdated': -1 });

// Add compound indexes for complex queries
userSchema.index({ username: 1, 'quizScores.topic': 1, 'quizScores.timestamp': -1 });

// Instance method to add a new quiz score
userSchema.methods.addQuizScore = function(quizData) {
  // Add the new quiz score
  this.quizScores.push(quizData);
  
  // Update performance summary
  this.updatePerformanceSummary(quizData);
  
  // Update course progress
  this.updateCourseProgress(quizData.topic, quizData.percentage);
  
  return this.save();
};

// Instance method to update performance summary
userSchema.methods.updatePerformanceSummary = function(quizData) {
  const summary = this.performanceSummary;
  
  // Update total quizzes completed
  summary.totalQuizzesCompleted += 1;
  
  // Update topic progress
  const topicKey = quizData.topic;
  const currentTopicData = summary.topicProgress.get(topicKey) || {
    completed: false,
    bestScore: 0,
    attempts: 0,
    lastAttempted: new Date()
  };
  
  currentTopicData.attempts += 1;
  currentTopicData.lastAttempted = new Date();
  if (quizData.percentage > currentTopicData.bestScore) {
    currentTopicData.bestScore = quizData.percentage;
  }
  if (quizData.percentage >= 70) { // Consider 70% as completed
    currentTopicData.completed = true;
  }
  
  summary.topicProgress.set(topicKey, currentTopicData);
  
  // Update overall difficulty stats
  ['easy', 'medium', 'hard'].forEach(difficulty => {
    const breakdown = quizData.difficultyBreakdown[difficulty];
    summary.overallDifficultyStats[difficulty].totalAttempted += breakdown.attempted;
    summary.overallDifficultyStats[difficulty].totalCorrect += breakdown.correct;
    
    // Recalculate accuracy
    const total = summary.overallDifficultyStats[difficulty].totalAttempted;
    const correct = summary.overallDifficultyStats[difficulty].totalCorrect;
    summary.overallDifficultyStats[difficulty].accuracy = total > 0 ? (correct / total) * 100 : 0;
  });
  
  // Recalculate average score
  const allScores = this.quizScores.map(quiz => quiz.percentage);
  summary.averageScore = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
  
  summary.lastUpdated = new Date();
};

// Instance method to update course progress - now flexible for any topics
userSchema.methods.updateCourseProgress = function(topic, percentage) {
  // If quiz passed (70%+), add to completed topics if not already there
  if (percentage >= 70 && !this.courseProgress.completedTopics.includes(topic)) {
    this.courseProgress.completedTopics.push(topic);
  }
  
  // Get total topics dynamically from the topicProgress map
  const totalTopics = this.performanceSummary.topicProgress.size || 1;
  this.courseProgress.overallProgressPercentage = 
    (this.courseProgress.completedTopics.length / totalTopics) * 100;
  
  // Note: currentTopic progression logic can now be handled by frontend
  // since it knows the topic order and structure
};

// Static method to get user's best score for a topic
userSchema.statics.getBestScoreForTopic = function(username, topic) {
  return this.findOne({ username })
    .then(user => {
      if (!user) return null;
      
      const topicScores = user.quizScores.filter(score => score.topic === topic);
      if (topicScores.length === 0) return null;
      
      return topicScores.reduce((best, current) => 
        current.percentage > best.percentage ? current : best
      );
    });
};

// Static method to get user's complete progress
userSchema.statics.getUserProgress = function(username) {
  return this.findOne({ username })
    .select('performanceSummary courseProgress quizScores')
    .then(user => {
      if (!user) return null;
      
      return {
        summary: user.performanceSummary,
        courseProgress: user.courseProgress,
        recentQuizzes: user.quizScores
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 5) // Last 5 quizzes
      };
    });
};

// Static method to get all unique topics (useful for frontend)
userSchema.statics.getAllTopics = function() {
  return this.distinct('quizScores.topic');
};

// Create and export the model
const Statistics_scores = mongoose.model('iitm_math_scores', userSchema);
module.exports = Statistics_scores;

