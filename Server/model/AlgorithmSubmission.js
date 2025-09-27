const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
    passed: Boolean,
    output: mongoose.Schema.Types.Mixed,
    error: String
});

const questionSchema = new mongoose.Schema({
    questionId: Number,
    title: String,
    code: String,        // ✅ User's actual code stored here
    score: Number,
    maxScore: Number,
    testResults: [testResultSchema],
    hasExplanations: Boolean
});

const algorithmSubmissionSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String, required: true },
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    percentage: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    questions: [questionSchema]
});



module.exports = mongoose.model('AlgorithmSubmission', algorithmSubmissionSchema);