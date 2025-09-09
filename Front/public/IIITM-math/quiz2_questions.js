const questions = [
    // EASY QUESTIONS (1-15)
    {
        question_number: 1,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = x + 5",
        format_hint: "Format: (-∞, +∞) or (a, b) or [a, b]",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "all real numbers", "ℝ"],
        explanation: "Linear functions are defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 2,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = 3",
        format_hint: "Format: {a} or [a, a]",
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
        format_hint: "Format: [a, +∞) or (a, +∞)",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)"],
        explanation: "Square root is defined only for non-negative numbers, so x ≥ 0. Domain is [0, +∞)."
    },
    {
        question_number: 4,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = √x",
        format_hint: "Format: [a, +∞) or (a, +∞)",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)"],
        explanation: "Square root function outputs all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 5,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/x",
        format_hint: "Format: (-∞, a) ∪ (a, +∞)",
        correct_answer: "(-∞, 0) ∪ (0, +∞)",
        alternative_answers: ["(-infinity, 0) U (0, +infinity)", "(-∞, 0) U (0, ∞)", "ℝ \\ {0}", "all real numbers except 0"],
        explanation: "Division by zero is undefined, so x ≠ 0. Domain is (-∞, 0) ∪ (0, +∞)."
    },
    {
        question_number: 6,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = 1/x",
        format_hint: "Format: (-∞, a) ∪ (a, +∞)",
        correct_answer: "(-∞, 0) ∪ (0, +∞)",
        alternative_answers: ["(-infinity, 0) U (0, +infinity)", "(-∞, 0) U (0, ∞)", "ℝ \\ {0}", "all real numbers except 0"],
        explanation: "The reciprocal function never equals zero, so the range is (-∞, 0) ∪ (0, +∞)."
    },
    {
        question_number: 7,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = x²",
        format_hint: "Format: (-∞, +∞)",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "all real numbers", "ℝ"],
        explanation: "Quadratic functions are defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 8,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = x²",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)"],
        explanation: "Quadratic function x² gives all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 9,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = |x|",
        format_hint: "Format: (-∞, +∞)",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "all real numbers", "ℝ"],
        explanation: "Absolute value function is defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 10,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x|",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)"],
        explanation: "Absolute value function gives all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 11,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 3)",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[3, +∞)",
        alternative_answers: ["[3, +infinity)", "[3, ∞)", "[3, infinity)"],
        explanation: "For square root to be defined, x - 3 ≥ 0, so x ≥ 3. Domain is [3, +∞)."
    },
    {
        question_number: 12,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(x - 2)",
        format_hint: "Format: (-∞, a) ∪ (a, +∞)",
        correct_answer: "(-∞, 2) ∪ (2, +∞)",
        alternative_answers: ["(-infinity, 2) U (2, +infinity)", "(-∞, 2) U (2, ∞)", "ℝ \\ {2}"],
        explanation: "Denominator cannot be zero, so x - 2 ≠ 0, which means x ≠ 2. Domain is (-∞, 2) ∪ (2, +∞)."
    },
    {
        question_number: 13,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = x + 4",
        format_hint: "Format: (-∞, +∞)",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "all real numbers", "ℝ"],
        explanation: "Linear functions have range of all real numbers, so the range is (-∞, +∞)."
    },
    {
        question_number: 14,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(5 - x)",
        format_hint: "Format: (-∞, a]",
        correct_answer: "(-∞, 5]",
        alternative_answers: ["(-infinity, 5]", "(-∞, 5]", "(-infinity, 5]"],
        explanation: "For square root to be defined, 5 - x ≥ 0, so x ≤ 5. Domain is (-∞, 5]."
    },
    {
        question_number: 15,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = -x²",
        format_hint: "Format: (-∞, a]",
        correct_answer: "(-∞, 0]",
        alternative_answers: ["(-infinity, 0]", "(-∞, 0]"],
        explanation: "The function -x² gives all non-positive values, so the range is (-∞, 0]."
    },

    // MEDIUM QUESTIONS (16-30)
    {
        question_number: 16,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 4)",
        format_hint: "Format: (-∞, a] ∪ [b, +∞)",
        correct_answer: "(-∞, -2] ∪ [2, +∞)",
        alternative_answers: ["(-infinity, -2] U [2, +infinity)", "(-∞, -2] U [2, ∞)"],
        explanation: "Need x² - 4 ≥ 0, so x² ≥ 4, which gives x ≤ -2 or x ≥ 2. Domain is (-∞, -2] ∪ [2, +∞)."
    },
    {
        question_number: 17,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x - 1)",
        format_hint: "Format: (a, +∞)",
        correct_answer: "(1, +∞)",
        alternative_answers: ["(1, +infinity)", "(1, ∞)", "(1, infinity)"],
        explanation: "Need x - 1 > 0 (positive for square root in denominator), so x > 1. Domain is (1, +∞)."
    },
    {
        question_number: 18,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = x² + 3",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[3, +∞)",
        alternative_answers: ["[3, +infinity)", "[3, ∞)", "[3, infinity)"],
        explanation: "Since x² ≥ 0 for all x, we have x² + 3 ≥ 3. The range is [3, +∞)."
    },
    {
        question_number: 19,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(9 - x²)",
        format_hint: "Format: [a, b]",
        correct_answer: "[-3, 3]",
        alternative_answers: ["[-3, 3]"],
        explanation: "Need 9 - x² ≥ 0, so x² ≤ 9, which gives -3 ≤ x ≤ 3. Domain is [-3, 3]."
    },
    {
        question_number: 20,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(9 - x²)",
        format_hint: "Format: [a, b]",
        correct_answer: "[0, 3]",
        alternative_answers: ["[0, 3]"],
        explanation: "For -3 ≤ x ≤ 3, we have 0 ≤ 9 - x² ≤ 9, so 0 ≤ √(9 - x²) ≤ 3. Range is [0, 3]."
    },
    {
        question_number: 21,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(x - 2)",
        format_hint: "Format: (a, +∞)",
        correct_answer: "(2, +∞)",
        alternative_answers: ["(2, +infinity)", "(2, ∞)", "(2, infinity)"],
        explanation: "Natural logarithm requires x - 2 > 0, so x > 2. Domain is (2, +∞)."
    },
    {
        question_number: 22,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = ln(x - 2)",
        format_hint: "Format: (-∞, +∞)",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "all real numbers", "ℝ"],
        explanation: "Logarithmic functions have range of all real numbers, so the range is (-∞, +∞)."
    },
    {
        question_number: 23,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(x² - 1)",
        format_hint: "Format: (-∞, a) ∪ (a, b) ∪ (b, +∞)",
        correct_answer: "(-∞, -1) ∪ (-1, 1) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, -1) U (-1, 1) U (1, +infinity)", "(-∞, -1) U (-1, 1) U (1, ∞)", "ℝ \\ {-1, 1}"],
        explanation: "Denominator x² - 1 = 0 when x = ±1, so x ≠ -1, 1. Domain is (-∞, -1) ∪ (-1, 1) ∪ (1, +∞)."
    },
    {
        question_number: 24,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = -x² + 4",
        format_hint: "Format: (-∞, a]",
        correct_answer: "(-∞, 4]",
        alternative_answers: ["(-infinity, 4]", "(-∞, 4]"],
        explanation: "Since -x² ≤ 0 for all x, we have -x² + 4 ≤ 4. The maximum value is 4. Range is (-∞, 4]."
    },
    {
        question_number: 25,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 3) + √(5 - x)",
        format_hint: "Format: [a, b]",
        correct_answer: "[-3, 5]",
        alternative_answers: ["[-3, 5]"],
        explanation: "Need x + 3 ≥ 0 and 5 - x ≥ 0, so x ≥ -3 and x ≤ 5. Domain is [-3, 5]."
    },
    {
        question_number: 26,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(4 - x²)",
        format_hint: "Format: (a, b)",
        correct_answer: "(-2, 2)",
        alternative_answers: ["(-2, 2)"],
        explanation: "Need 4 - x² > 0 (positive for square root in denominator), so x² < 4, giving -2 < x < 2. Domain is (-2, 2)."
    },
    {
        question_number: 27,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 2| + 1",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)"],
        explanation: "Since |x - 2| ≥ 0 for all x, we have |x - 2| + 1 ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 28,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log₂(x² - 9)",
        format_hint: "Format: (-∞, a) ∪ (b, +∞)",
        correct_answer: "(-∞, -3) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, -3) U (3, +infinity)", "(-∞, -3) U (3, ∞)"],
        explanation: "Need x² - 9 > 0, so x² > 9, which gives x < -3 or x > 3. Domain is (-∞, -3) ∪ (3, +∞)."
    },
    {
        question_number: 29,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = 2^x",
        format_hint: "Format: (a, +∞)",
        correct_answer: "(0, +∞)",
        alternative_answers: ["(0, +infinity)", "(0, ∞)", "(0, infinity)"],
        explanation: "Exponential functions with positive base have range of all positive real numbers. Range is (0, +∞)."
    },
    {
        question_number: 30,
        points: 2,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 1) / √(x + 2)",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)"],
        explanation: "Need x - 1 ≥ 0 and x + 2 > 0. This gives x ≥ 1 and x > -2. Combined: x ≥ 1. Domain is [1, +∞)."
    },

    // HARD QUESTIONS (31-45)
    {
        question_number: 31,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(ln(x - 1))",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, infinity)"],
        explanation: "Need ln(x - 1) ≥ 0, so x - 1 ≥ 1, which gives x ≥ 2. Domain is [2, +∞)."
    },
    {
        question_number: 32,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x/(x² + 1)",
        format_hint: "Format: [a, b]",
        correct_answer: "[-1/2, 1/2]",
        alternative_answers: ["[-0.5, 0.5]", "[-1/2, 1/2]"],
        explanation: "Taking derivative f'(x) = (1-x²)/(x²+1)². Critical points at x = ±1 give extrema ±1/2. Range is [-1/2, 1/2]."
    },
    {
        question_number: 33,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(sin(x))",
        format_hint: "Format: ∪ intervals with kπ",
        correct_answer: "(0, π) ∪ (2π, 3π) ∪ (4π, 5π) ∪ ...",
        alternative_answers: ["(2nπ, (2n+1)π) for all integers n", "∪(2nπ, (2n+1)π)"],
        explanation: "Need sin(x) > 0, which occurs on intervals (2nπ, (2n+1)π) for integer n."
    },
    {
        question_number: 34,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² - 6x + 10)",
        format_hint: "Format: [a, +∞)",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)"],
        explanation: "Complete the square: x² - 6x + 10 = (x-3)² + 1 ≥ 1. So √(x² - 6x + 10) ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 35,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log(|x - 2| - 3)",
        format_hint: "Format: (-∞, a) ∪ (b, +∞)",
        correct_answer: "(-∞, -1) ∪ (5, +∞)",
        alternative_answers: ["(-infinity, -1) U (5, +infinity)", "(-∞, -1) U (5, ∞)"],
        explanation: "Need |x - 2| - 3 > 0, so |x - 2| > 3. This gives x - 2 > 3 or x - 2 < -3, so x > 5 or x < -1."
    },
    {
        question_number: 36,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = 2/(x² + x + 1)",
        format_hint: "Format: (a, b]",
        correct_answer: "(0, 8/3]",
        alternative_answers: ["(0, 8/3]", "(0, 2.67]"],
        explanation: "x² + x + 1 = (x + 1/2)² + 3/4 ≥ 3/4. So 2/(x² + x + 1) ≤ 2/(3/4) = 8/3. Range is (0, 8/3]."
    },
    {
        question_number: 37,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 1) + √(3 - x) + 1/√(x - 2)",
        format_hint: "Format: [a, b) ∪ (c, d]",
        correct_answer: "[1, 2) ∪ (2, 3]",
        alternative_answers: ["[1, 2) U (2, 3]"],
        explanation: "Need x ≥ 1, x ≤ 3, and x > 2. This gives [1, 3] \\ {2} = [1, 2) ∪ (2, 3]."
    },
    {
        question_number: 38,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x - 1)/(x + 1)",
        format_hint: "Format: (-∞, a) ∪ (a, +∞)",
        correct_answer: "(-∞, 1) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, 1) U (1, +infinity)", "(-∞, 1) U (1, ∞)", "ℝ \\ {1}"],
        explanation: "Let y = (x-1)/(x+1). Solving for x: x = (y+1)/(1-y). This is undefined when y = 1. Range is (-∞, 1) ∪ (1, +∞)."
    },
    {
        question_number: 39,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 2x - 8)",
        format_hint: "Format: (-∞, a] ∪ [b, +∞)",
        correct_answer: "(-∞, -2] ∪ [4, +∞)",
        alternative_answers: ["(-infinity, -2] U [4, +infinity)", "(-∞, -2] U [4, ∞)"],
        explanation: "Need x² - 2x - 8 ≥ 0. Factor: (x-4)(x+2) ≥ 0. This gives x ≤ -2 or x ≥ 4."
    },
    {
        question_number: 40,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = e^(-x²)",
        format_hint: "Format: (a, b]",
        correct_answer: "(0, 1]",
        alternative_answers: ["(0, 1]"],
        explanation: "Since -x² ≤ 0 for all x, we have e^(-x²) ≤ e^0 = 1. As x → ±∞, e^(-x²) → 0. Range is (0, 1]."
    },
    {
        question_number: 41,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = arcsin((x-1)/2)",
        format_hint: "Format: [a, b]",
        correct_answer: "[-1, 3]",
        alternative_answers: ["[-1, 3]"],
        explanation: "Need -1 ≤ (x-1)/2 ≤ 1, so -2 ≤ x-1 ≤ 2, which gives -1 ≤ x ≤ 3. Domain is [-1, 3]."
    },
    {
        question_number: 42,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = arcsin((x-1)/2)",
        format_hint: "Format: [a, b]",
        correct_answer: "[-π/2, π/2]",
        alternative_answers: ["[-pi/2, pi/2]", "[-1.57, 1.57]"],
        explanation: "The range of arcsin function is always [-π/2, π/2], regardless of the input transformation."
    },
    {
        question_number: 43,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(x² - 4x + 3)",
        format_hint: "Format: (-∞, a) ∪ (b, +∞)",
        correct_answer: "(-∞, 1) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, 1) U (3, +infinity)", "(-∞, 1) U (3, ∞)"],
        explanation: "Need x² - 4x + 3 > 0. Factor: (x-1)(x-3) > 0. This gives x < 1 or x > 3."
    },
    {
        question_number: 44,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = 1/(sin²(x) + 2)",
        format_hint: "Format: [a, b]",
        correct_answer: "[1/3, 1/2]",
        alternative_answers: ["[1/3, 1/2]", "[0.33, 0.5]"],
        explanation: "Since 0 ≤ sin²(x) ≤ 1, we have 2 ≤ sin²(x) + 2 ≤ 3. So 1/3 ≤ 1/(sin²(x) + 2) ≤ 1/2."
    },
    {
        question_number: 45,
        points: 3,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(log₂(x-1)) + 1/√(x-3)",
        format_hint: "Format: (a, b) ∪ (c, +∞)",
        correct_answer: "(2, 3) ∪ (3, +∞)",
        alternative_answers: ["(2, 3) U (3, +infinity)", "(2, 3) U (3, ∞)"],
        explanation: "Need x-1 > 0, log₂(x-1) ≥ 0, and x-3 > 0. So x > 1, x-1 ≥ 1 (x ≥ 2), and x > 3. Combined: x > 2 and x ≠ 3. Domain is (2, 3) ∪ (3, +∞)."
    }
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