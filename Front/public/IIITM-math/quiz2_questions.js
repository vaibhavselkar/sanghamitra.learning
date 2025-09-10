const questions = [
    // EASY QUESTIONS (1-10) 
    { 
        question_number: 1,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = x + 5",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Linear functions are defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 2,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = 3",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "{3}",
        alternative_answers: ["[3, 3]", "3"],
        explanation: "Constant functions have a range consisting of only the constant value, so the range is {3}."
    },
    {
        question_number: 3,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)", "[0, +inf)", "[0, inf)"],
        explanation: "Square root is defined only for non-negative numbers, so x ≥ 0. Domain is [0, +∞)."
    },
    {
        question_number: 4,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = √x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)", "[0, +inf)", "[0, inf)"],
        explanation: "Square root function outputs all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 5,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 0) ∪ (0, +∞)",
        alternative_answers: ["(-infinity, 0) U (0, +infinity)", "(-∞, 0) U (0, ∞)", "(-inf, 0) U (0, +inf)", "(-inf, 0) U (0, inf)", "ℝ \\ {0}", "all real numbers except 0"],
        explanation: "Division by zero is undefined, so x ≠ 0. Domain is (-∞, 0) ∪ (0, +∞)."
    },
    {
        question_number: 6,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = 1/x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 0) ∪ (0, +∞)",
        alternative_answers: ["(-infinity, 0) U (0, +infinity)", "(-∞, 0) U (0, ∞)", "(-inf, 0) U (0, +inf)", "(-inf, 0) U (0, inf)", "ℝ \\ {0}", "all real numbers except 0"],
        explanation: "The reciprocal function never equals zero, so the range is (-∞, 0) ∪ (0, +∞)."
    },
    {
        question_number: 7,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = x²",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Quadratic functions are defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 8,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = x²",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)", "[0, +inf)", "[0, inf)"],
        explanation: "Quadratic function x² gives all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 9,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = |x|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Absolute value function is defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 10,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)", "[0, +inf)", "[0, inf)"],
        explanation: "Absolute value function gives all non-negative values, so the range is [0, +∞)."
    },
   
    // MEDIUM QUESTIONS (11-25)
    {
        question_number: 11,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 4)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -2] ∪ [2, +∞)",
        alternative_answers: ["(-infinity, -2] U [2, +infinity)", "(-∞, -2] U [2, ∞)", "(-inf, -2] U [2, +inf)", "(-inf, -2] U [2, inf)"],
        explanation: "Need x² - 4 ≥ 0, so x² ≥ 4, which gives x ≤ -2 or x ≥ 2. Domain is (-∞, -2] ∪ [2, +∞)."
    },
    {
        question_number: 12,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(1, +∞)",
        alternative_answers: ["(1, +infinity)", "(1, ∞)", "(1, infinity)", "(1, +inf)", "(1, inf)"],
        explanation: "Need x - 1 > 0 (positive for square root in denominator), so x > 1. Domain is (1, +∞)."
    },
    {
        question_number: 13,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = x² + 3",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[3, +∞)",
        alternative_answers: ["[3, +infinity)", "[3, ∞)", "[3, infinity)", "[3, +inf)", "[3, inf)"],
        explanation: "Since x² ≥ 0 for all x, we have x² + 3 ≥ 3. The range is [3, +∞)."
    },
    {
        question_number: 14,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(9 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 3]",
        alternative_answers: ["[-3, 3]"],
        explanation: "Need 9 - x² ≥ 0, so x² ≤ 9, which gives -3 ≤ x ≤ 3. Domain is [-3, 3]."
    },
    {
        question_number: 15,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(9 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 3]",
        alternative_answers: ["[0, 3]"],
        explanation: "For -3 ≤ x ≤ 3, we have 0 ≤ 9 - x² ≤ 9, so 0 ≤ √(9 - x²) ≤ 3. Range is [0, 3]."
    },
    {
        question_number: 16,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(2, +∞)",
        alternative_answers: ["(2, +infinity)", "(2, ∞)", "(2, infinity)", "(2, +inf)", "(2, inf)"],
        explanation: "Natural logarithm requires x - 2 > 0, so x > 2. Domain is (2, +∞)."
    },
    {
        question_number: 17,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = ln(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Logarithmic functions have range of all real numbers, so the range is (-∞, +∞)."
    },
    {
        question_number: 18,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(x² - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1) ∪ (-1, 1) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, -1) U (-1, 1) U (1, +infinity)", "(-∞, -1) U (-1, 1) U (1, ∞)", "(-inf, -1) U (-1, 1) U (1, +inf)", "(-inf, -1) U (-1, 1) U (1, inf)", "ℝ \\ {-1, 1}"],
        explanation: "Denominator x² - 1 = 0 when x = ±1, so x ≠ -1, 1. Domain is (-∞, -1) ∪ (-1, 1) ∪ (1, +∞)."
    },
    {
        question_number: 19,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = -x² + 4",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 4]",
        alternative_answers: ["(-infinity, 4]", "(-∞, 4]", "(-inf, 4]"],
        explanation: "Since -x² ≤ 0 for all x, we have -x² + 4 ≤ 4. The maximum value is 4. Range is (-∞, 4]."
    },
    {
        question_number: 20,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 3) + √(5 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 5]",
        alternative_answers: ["[-3, 5]"],
        explanation: "Need x + 3 ≥ 0 and 5 - x ≥ 0, so x ≥ -3 and x ≤ 5. Domain is [-3, 5]."
    },
    {
        question_number: 21,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(4 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-2, 2)",
        alternative_answers: ["(-2, 2)"],
        explanation: "Need 4 - x² > 0 (positive for square root in denominator), so x² < 4, giving -2 < x < 2. Domain is (-2, 2)."
    },
    {
        question_number: 22,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 2| + 1",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Since |x - 2| ≥ 0 for all x, we have |x - 2| + 1 ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 23,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log₂(x² - 9)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -3) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, -3) U (3, +infinity)", "(-∞, -3) U (3, ∞)", "(-inf, -3) U (3, +inf)", "(-inf, -3) U (3, inf)"],
        explanation: "Need x² - 9 > 0, so x² > 9, which gives x < -3 or x > 3. Domain is (-∞, -3) ∪ (3, +∞)."
    },
    {
        question_number: 24,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = 2^x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, +∞)",
        alternative_answers: ["(0, +infinity)", "(0, ∞)", "(0, infinity)", "(0, +inf)", "(0, inf)"],
        explanation: "Exponential functions with positive base have range of all positive real numbers. Range is (0, +∞)."
    },
    {
        question_number: 25,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 1)/√(x + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Need x - 1 ≥ 0 and x + 2 > 0. This gives x ≥ 1 and x > -2. Combined: x ≥ 1. Domain is [1, +∞)."
    },

    // HARD QUESTIONS (26-30)
    {
        question_number: 26,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(ln(x - 1))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, infinity)", "[2, +inf)", "[2, inf)"],
        explanation: "Need ln(x - 1) ≥ 0, so x - 1 ≥ 1, which gives x ≥ 2. Domain is [2, +∞)."
    },
    {
        question_number: 27,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1/2, 1/2]",
        alternative_answers: ["[-0.5, 0.5]", "[-1/2, 1/2]"],
        explanation: "Taking derivative f'(x) = (1-x²)/(x²+1)². Critical points at x = ±1 give extrema ±1/2. Range is [-1/2, 1/2]."
    },
    {
        question_number: 28,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(sin(x))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, π) ∪ (2π, 3π) ∪ (4π, 5π) ∪ ...",
        alternative_answers: ["(2nπ, (2n+1)π) for all integers n", "∪(2nπ, (2n+1)π)"],
        explanation: "Need sin(x) > 0, which occurs on intervals (2nπ, (2n+1)π) for integer n."
    },
    {
        question_number: 29,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² - 6x + 10)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Complete the square: x² - 6x + 10 = (x-3)² + 1 ≥ 1. So √(x² - 6x + 10) ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 30,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log(|x - 2| - 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1) ∪ (5, +∞)",
        alternative_answers: ["(-infinity, -1) U (5, +infinity)", "(-∞, -1) U (5, ∞)", "(-inf, -1) U (5, +inf)", "(-inf, -1) U (5, inf)"],
        explanation: "Need |x - 2| - 3 > 0, so |x - 2| > 3. This gives x - 2 > 3 or x - 2 < -3, so x > 5 or x < -1."
    },
    
];

// Utility functions for answer validation
const answerValidator = {
    // Convert user input to standard format
    normalizeInput: function(input) {
        return input
            .replace(/infinity/gi, '∞')
            .replace(/\+infinity/gi, '+∞')
            .replace(/-infinity/gi, '-∞')
            .replace(/\s+/g, '')
            .replace(/U/gi, '∪')
            .replace(/union/gi, '∪')
            .replace(/\\{/g, '\\{')
            .replace(/R/g, 'ℝ')
            .replace(/pi/gi, 'π');
    },

    // Check if answer matches any acceptable format
    validateAnswer: function(userInput, correctAnswer, alternatives = []) {
        const normalizedInput = this.normalizeInput(userInput);
        const normalizedCorrect = this.normalizeInput(correctAnswer);
        
        if (normalizedInput === normalizedCorrect) return true;
        
        return alternatives.some(alt => 
            this.normalizeInput(alt) === normalizedInput
        );
    },

    // Display formatted answer
    formatDisplay: function(input) {
        return this.normalizeInput(input);
    }
};

// Adaptive question selection
const adaptiveQuiz = {
    getNextQuestion: function(currentQuestionIndex, isCorrect, difficulty = 'easy') {
        const easyQuestions = questions.filter(q => q.difficulty === 'easy');
        const mediumQuestions = questions.filter(q => q.difficulty === 'medium');
        const hardQuestions = questions.filter(q => q.difficulty === 'hard');
        
        if (currentQuestionIndex === 0) {
            // Start with easy
            return easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
        }
        
        if (isCorrect) {
            // Move to harder difficulty
            if (difficulty === 'easy') {
                return mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
            } else if (difficulty === 'medium') {
                return hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
            } else {
                return hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
            }
        } else {
            // Stay at same or easier difficulty
            if (difficulty === 'hard') {
                return mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
            } else if (difficulty === 'medium') {
                const useEasy = Math.random() < 0.5;
                return useEasy ? 
                    easyQuestions[Math.floor(Math.random() * easyQuestions.length)] :
                    mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
            } else {
                return easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
            }
        }
    }
};

