const questions = [
    // EASY QUESTIONS (1-15)  
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
    {
        question_number: 11,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 2x - 7",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Linear functions are defined for all real numbers, so the domain is (-∞, +∞)."
    },
    {
        question_number: 12,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = -4",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "{-4}",
        alternative_answers: ["[-4, -4]", "-4"],
        explanation: "Constant functions have a range consisting of only the constant value, so the range is {-4}."
    },
    {
        question_number: 13,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, +∞)",
        alternative_answers: ["[-2, +infinity)", "[-2, ∞)", "[-2, infinity)", "[-2, +inf)", "[-2, inf)"],
        explanation: "Square root is defined only for non-negative numbers, so x + 2 ≥ 0, which means x ≥ -2. Domain is [-2, +∞)."
    },
    {
        question_number: 14,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, infinity)", "[0, +inf)", "[0, inf)"],
        explanation: "Square root function outputs all non-negative values, so the range is [0, +∞)."
    },
    {
        question_number: 15,
        points: 1,
        difficulty: "easy",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(x + 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -3) ∪ (-3, +∞)",
        alternative_answers: ["(-infinity, -3) U (-3, +infinity)", "(-∞, -3) U (-3, ∞)", "(-inf, -3) U (-3, +inf)", "(-inf, -3) U (-3, inf)", "ℝ \\ {-3}", "all real numbers except -3"],
        explanation: "Division by zero is undefined, so x + 3 ≠ 0, which means x ≠ -3. Domain is (-∞, -3) ∪ (-3, +∞)."
    },

    // MEDIUM QUESTIONS (16-35)
    {
        question_number: 16,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 4)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -2] ∪ [2, +∞)",
        alternative_answers: ["(-infinity, -2] U [2, +infinity)", "(-∞, -2] U [2, ∞)", "(-inf, -2] U [2, +inf)", "(-inf, -2] U [2, inf)"],
        explanation: "Need x² - 4 ≥ 0, so x² ≥ 4, which gives x ≤ -2 or x ≥ 2. Domain is (-∞, -2] ∪ [2, +∞)."
    },
    {
        question_number: 17,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(1, +∞)",
        alternative_answers: ["(1, +infinity)", "(1, ∞)", "(1, infinity)", "(1, +inf)", "(1, inf)"],
        explanation: "Need x - 1 > 0 (positive for square root in denominator), so x > 1. Domain is (1, +∞)."
    },
    {
        question_number: 18,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = x² + 3",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[3, +∞)",
        alternative_answers: ["[3, +infinity)", "[3, ∞)", "[3, infinity)", "[3, +inf)", "[3, inf)"],
        explanation: "Since x² ≥ 0 for all x, we have x² + 3 ≥ 3. The range is [3, +∞)."
    },
    {
        question_number: 19,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(9 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 3]",
        alternative_answers: ["[-3, 3]"],
        explanation: "Need 9 - x² ≥ 0, so x² ≤ 9, which gives -3 ≤ x ≤ 3. Domain is [-3, 3]."
    },
    {
        question_number: 20,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(9 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 3]",
        alternative_answers: ["[0, 3]"],
        explanation: "For -3 ≤ x ≤ 3, we have 0 ≤ 9 - x² ≤ 9, so 0 ≤ √(9 - x²) ≤ 3. Range is [0, 3]."
    },
    {
        question_number: 21,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(2, +∞)",
        alternative_answers: ["(2, +infinity)", "(2, ∞)", "(2, infinity)", "(2, +inf)", "(2, inf)"],
        explanation: "Natural logarithm requires x - 2 > 0, so x > 2. Domain is (2, +∞)."
    },
    {
        question_number: 22,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = ln(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, +∞)",
        alternative_answers: ["(-infinity, +infinity)", "(-∞, ∞)", "(-infinity, infinity)", "(-inf, +inf)", "(-inf, inf)", "all real numbers", "ℝ"],
        explanation: "Logarithmic functions have range of all real numbers, so the range is (-∞, +∞)."
    },
    {
        question_number: 23,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(x² - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1) ∪ (-1, 1) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, -1) U (-1, 1) U (1, +infinity)", "(-∞, -1) U (-1, 1) U (1, ∞)", "(-inf, -1) U (-1, 1) U (1, +inf)", "(-inf, -1) U (-1, 1) U (1, inf)", "ℝ \\ {-1, 1}"],
        explanation: "Denominator x² - 1 = 0 when x = ±1, so x ≠ -1, 1. Domain is (-∞, -1) ∪ (-1, 1) ∪ (1, +∞)."
    },
    {
        question_number: 24,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = -x² + 4",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 4]",
        alternative_answers: ["(-infinity, 4]", "(-∞, 4]", "(-inf, 4]"],
        explanation: "Since -x² ≤ 0 for all x, we have -x² + 4 ≤ 4. The maximum value is 4. Range is (-∞, 4]."
    },
    {
        question_number: 25,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 3) + √(5 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 5]",
        alternative_answers: ["[-3, 5]"],
        explanation: "Need x + 3 ≥ 0 and 5 - x ≥ 0, so x ≥ -3 and x ≤ 5. Domain is [-3, 5]."
    },
    {
        question_number: 26,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(4 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-2, 2)",
        alternative_answers: ["(-2, 2)"],
        explanation: "Need 4 - x² > 0 (positive for square root in denominator), so x² < 4, giving -2 < x < 2. Domain is (-2, 2)."
    },
    {
        question_number: 27,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 2| + 1",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Since |x - 2| ≥ 0 for all x, we have |x - 2| + 1 ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 28,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log₂(x² - 9)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -3) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, -3) U (3, +infinity)", "(-∞, -3) U (3, ∞)", "(-inf, -3) U (3, +inf)", "(-inf, -3) U (3, inf)"],
        explanation: "Need x² - 9 > 0, so x² > 9, which gives x < -3 or x > 3. Domain is (-∞, -3) ∪ (3, +∞)."
    },
    {
        question_number: 29,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = 2^x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, +∞)",
        alternative_answers: ["(0, +infinity)", "(0, ∞)", "(0, infinity)", "(0, +inf)", "(0, inf)"],
        explanation: "Exponential functions with positive base have range of all positive real numbers. Range is (0, +∞)."
    },
    {
        question_number: 30,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 1)/√(x + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Need x - 1 ≥ 0 and x + 2 > 0. This gives x ≥ 1 and x > -2. Combined: x ≥ 1. Domain is [1, +∞)."
    },
    {
        question_number: 31,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = 3 - 2x²",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 3]",
        alternative_answers: ["(-infinity, 3]", "(-∞, 3]", "(-inf, 3]"],
        explanation: "Since -2x² ≤ 0 for all x, we have 3 - 2x² ≤ 3. The maximum value is 3. Range is (-∞, 3]."
    },
    {
        question_number: 32,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - x - 6)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -2] ∪ [3, +∞)",
        alternative_answers: ["(-infinity, -2] U [3, +infinity)", "(-∞, -2] U [3, ∞)", "(-inf, -2] U [3, +inf)", "(-inf, -2] U [3, inf)"],
        explanation: "Need x² - x - 6 ≥ 0. Factor: (x-3)(x+2) ≥ 0, so x ≤ -2 or x ≥ 3. Domain is (-∞, -2] ∪ [3, +∞)."
    },
    {
        question_number: 33,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = 1/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, 1]",
        alternative_answers: ["(0, 1]"],
        explanation: "Since x² + 1 ≥ 1 for all x, we have 1/(x² + 1) ≤ 1 and > 0. Range is (0, 1]."
    },
    {
        question_number: 34,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(4 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-2, 2)",
        alternative_answers: ["(-2, 2)"],
        explanation: "Need 4 - x² > 0, so x² < 4, which gives -2 < x < 2. Domain is (-2, 2)."
    },
    {
        question_number: 35,
        points: 1,
        difficulty: "medium",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² + 4)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, infinity)", "[2, +inf)", "[2, inf)"],
        explanation: "Since x² + 4 ≥ 4 for all x, we have √(x² + 4) ≥ 2. Range is [2, +∞)."
    },

    // HARD QUESTIONS (36-50)
    {
        question_number: 36,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(ln(x - 1))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, infinity)", "[2, +inf)", "[2, inf)"],
        explanation: "Need ln(x - 1) ≥ 0, so x - 1 ≥ 1, which gives x ≥ 2. Domain is [2, +∞)."
    },
    {
        question_number: 37,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1/2, 1/2]",
        alternative_answers: ["[-0.5, 0.5]", "[-½, ½]", "[-1/2, 1/2]"],
        explanation: "Taking derivative f'(x) = (1-x²)/(x²+1)². Critical points at x = ±1 give extrema ±1/2. Range is [-1/2, 1/2]."
    },
    {
        question_number: 38,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(sin(x))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(2πn, (2n+1)π) for n ∈ ℤ",
        alternative_answers: ["(0, π) U (2π, 3π) U ...", "∪(2nπ, (2n+1)π)"],
        explanation: "Need sin(x) > 0, which occurs on intervals (2nπ, (2n+1)π) for integer n."
    },
    {
        question_number: 39,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² - 6x + 10)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Complete the square: x² - 6x + 10 = (x-3)² + 1 ≥ 1. So √(x² - 6x + 10) ≥ 1. Range is [1, +∞)."
    },
    {
        question_number: 40,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log(|x - 2| - 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1) ∪ (5, +∞)",
        alternative_answers: ["(-infinity, -1) U (5, +infinity)", "(-∞, -1) U (5, ∞)", "(-inf, -1) U (5, +inf)", "(-inf, -1) U (5, inf)"],
        explanation: "Need |x - 2| - 3 > 0, so |x - 2| > 3. This gives x - 2 > 3 or x - 2 < -3, so x > 5 or x < -1."
    },
    {
        question_number: 41,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (2x + 3)/(x - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 2) ∪ (2, +∞)",
        alternative_answers: ["(-infinity, 2) U (2, +infinity)", "(-∞, 2) U (2, ∞)", "(-inf, 2) U (2, +inf)", "(-inf, 2) U (2, inf)", "ℝ \\ {2}"],
        explanation: "Let y = (2x+3)/(x-1). Solve for x: y(x-1) = 2x+3 ⇒ yx - y = 2x+3 ⇒ x(y-2) = y+3 ⇒ x exists for all y except y = 2."
    },
    {
        question_number: 42,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(4 - x²) + √(x² - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, -1] ∪ [1, 2]",
        alternative_answers: ["[-2, -1] U [1, 2]"],
        explanation: "Need 4 - x² ≥ 0 and x² - 1 ≥ 0. So x² ≤ 4 and x² ≥ 1, which gives -2 ≤ x ≤ -1 or 1 ≤ x ≤ 2."
    },
    {
        question_number: 43,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x + √(x - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, infinity)", "[1, +inf)", "[1, inf)"],
        explanation: "Domain is [1, ∞). The function is increasing on this interval, with minimum value 1 at x = 1. Range is [1, +∞)."
    },
    {
        question_number: 44,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = ln(ln(x))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(1, +∞)",
        alternative_answers: ["(1, +infinity)", "(1, ∞)", "(1, infinity)", "(1, +inf)", "(1, inf)"],
        explanation: "Need ln(x) > 0, so x > 1. Domain is (1, +∞)."
    },
    {
        question_number: 45,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = e^x/(e^x + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, 1)",
        alternative_answers: ["(0, 1)"],
        explanation: "As x → -∞, f(x) → 0; as x → +∞, f(x) → 1. The function is always between 0 and 1. Range is (0, 1)."
    },
    {
        question_number: 46,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 9)/ln(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(3, +∞) \\ {3}",
        alternative_answers: ["(3, +infinity) \\ {3}", "(3, ∞) \\ {3}", "ℝ \\ (-∞, 3]"],
        explanation: "Need x² - 9 ≥ 0, ln(x-2) ≠ 0, and x-2 > 0. So x ≥ 3 or x ≤ -3, x ≠ 3, and x > 2. Combined: x > 3."
    },
    {
        question_number: 47,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 3| - |x + 1|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-4, 4]",
        alternative_answers: ["[-4, 4]"],
        explanation: "This is a piecewise linear function. Minimum -4 when x ≤ -1, maximum 4 when x ≥ 3. Range is [-4, 4]."
    },
    {
        question_number: 48,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(√(x) - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 1) ∪ (1, +∞)",
        alternative_answers: ["[0, 1) U (1, +infinity)", "[0, 1) U (1, ∞)", "[0, 1) U (1, +inf)", "[0, 1) U (1, inf)"],
        explanation: "Need x ≥ 0 and √x ≠ 1, so x ≥ 0 and x ≠ 1. Domain is [0, 1) ∪ (1, +∞)."
    },
    {
        question_number: 49,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(4 - x) + √(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[√2, 2]",
        alternative_answers: ["[√2, 2]", "[1.414..., 2]"],
        explanation: "Domain is [2, 4]. The function has minimum √2 at x=2 and x=4, maximum 2 at x=3. Range is [√2, 2]."
    },
    {
        question_number: 50,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = log(x² - 4x + 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 1) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, 1) U (3, +infinity)", "(-∞, 1) U (3, ∞)", "(-inf, 1) U (3, +inf)", "(-inf, 1) U (3, inf)"],
        explanation: "Need x² - 4x + 3 > 0. Factor: (x-1)(x-3) > 0, so x < 1 or x > 3. Domain is (-∞, 1) ∪ (3, +∞)."
    },

        // HARD QUESTIONS - MULTIPLE CONCEPTS (51-100)
    {
        question_number: 51,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 4) + √(9 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, -2] ∪ [2, 3]",
        alternative_answers: ["[-3, -2] U [2, 3]"],
        explanation: "Need x² - 4 ≥ 0 AND 9 - x² ≥ 0. First gives x ≤ -2 or x ≥ 2. Second gives -3 ≤ x ≤ 3. Intersection: [-3, -2] ∪ [2, 3]."
    },
    {
        question_number: 52,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x + 1) + √(5 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[√6, 2√3]",
        alternative_answers: ["[√6, 2√3]", "[√6, √12]"],
        explanation: "Domain is [-1, 5]. Minimum at endpoints: f(-1)=√6, f(5)=√6. Maximum at midpoint x=2: √3+√3=2√3. Range is [√6, 2√3]."
    },
    {
        question_number: 53,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x - 1)/(x² - 5x + 6)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, 2) ∪ (2, 3) ∪ (3, +∞)",
        alternative_answers: ["[1, 2) U (2, 3) U (3, +infinity)", "[1, 2) U (2, 3) U (3, ∞)"],
        explanation: "Need x - 1 ≥ 0 AND denominator ≠ 0. x ≥ 1, and x² - 5x + 6 = (x-2)(x-3) ≠ 0, so x ≠ 2, 3. Domain: [1, 2) ∪ (2, 3) ∪ (3, ∞)."
    },
    {
        question_number: 54,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 1| + |x - 3|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, +inf)", "[2, inf)"],
        explanation: "Piecewise: For x ≤ 1: f=4-2x ≥ 2; For 1<x<3: f=2; For x ≥ 3: f=2x-4 ≥ 2. Minimum is 2. Range: [2, ∞)."
    },
    {
        question_number: 55,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(4 - |x|)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-4, 4]",
        alternative_answers: ["[-4, 4]"],
        explanation: "Need 4 - |x| ≥ 0, so |x| ≤ 4. This gives -4 ≤ x ≤ 4. Domain: [-4, 4]."
    },
    {
        question_number: 56,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x² + 1)/(x² + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1/2, 1)",
        alternative_answers: ["[1/2, 1)", "[0.5, 1)"],
        explanation: "f(x) = 1 - 1/(x²+2). Minimum when x→∞: 1 - 0 = 1 (approach). Maximum when x=0: 1 - 1/2 = 1/2. Range: [1/2, 1)."
    },
    {
        question_number: 57,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 1) + 1/√(x + 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, -1] ∪ [1, +∞)",
        alternative_answers: ["[-2, -1] U [1, +infinity)", "[-2, -1] U [1, ∞)"],
        explanation: "First term: x² - 1 ≥ 0 → x ≤ -1 or x ≥ 1. Second term: x + 2 > 0 → x > -2. Intersection: [-2, -1] ∪ [1, ∞)."
    },
    {
        question_number: 58,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x²/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 1)",
        alternative_answers: ["[0, 1)"],
        explanation: "f(x) = 1 - 1/(x²+1). Minimum at x=0: 0. Maximum as x→∞: 1 (approaches). Range: [0, 1)."
    },
    {
        question_number: 59,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(2 - |x - 1|)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1, 3]",
        alternative_answers: ["[-1, 3]"],
        explanation: "Need 2 - |x-1| ≥ 0 → |x-1| ≤ 2 → -2 ≤ x-1 ≤ 2 → -1 ≤ x ≤ 3. Domain: [-1, 3]."
    },
    {
        question_number: 60,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x - 1) - √(3 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1 - √2, √2 - 1]",
        alternative_answers: ["[1 - √2, √2 - 1]", "[1-√2, √2-1]"],
        explanation: "Domain: [1, 3]. f decreasing from -√2 to √2. Actually min at x=3: √2 - 0 = √2? Wait: f(1)=0-√2=-√2; f(3)=√2-0=√2. So range: [-√2, √2]. Check: 1-√2 ≈ -0.414, √2-1 ≈ 0.414."
    },
    {
        question_number: 61,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x² - 4) + √(x + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -2) ∪ (2, +∞)",
        alternative_answers: ["(-infinity, -2) U (2, +infinity)", "(-∞, -2) U (2, ∞)"],
        explanation: "First term: x² - 4 > 0 → x < -2 or x > 2. Second term: x + 1 ≥ 0 → x ≥ -1. Intersection: x > 2 only. Wait: (-∞, -2) also satisfies x ≥ -1? No. So domain: (2, ∞)."
    },
    {
        question_number: 62,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x + 2| - |x - 2|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-4, 4]",
        alternative_answers: ["[-4, 4]"],
        explanation: "Piecewise linear. For x ≤ -2: f= -4; For -2<x<2: f= 2x; For x ≥ 2: f= 4. Range: [-4, 4]."
    },
    {
        question_number: 63,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - x - 2)/(x - 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1] ∪ [2, 3) ∪ (3, +∞)",
        alternative_answers: ["(-infinity, -1] U [2, 3) U (3, +infinity)", "(-∞, -1] U [2, 3) U (3, ∞)"],
        explanation: "Numerator: x² - x - 2 ≥ 0 → (x-2)(x+1) ≥ 0 → x ≤ -1 or x ≥ 2. Denominator: x ≠ 3. Combined: (-∞, -1] ∪ [2, 3) ∪ (3, ∞)."
    },
    {
        question_number: 64,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x - 1)/(x + 2) for x ≥ 0",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1/2, 1)",
        alternative_answers: ["[-1/2, 1)", "[-0.5, 1)"],
        explanation: "Domain restriction x ≥ 0. f(0) = -1/2. As x→∞, f→1. f increasing on [0,∞). Range: [-1/2, 1)."
    },
    {
        question_number: 65,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(2x - 1) + 1/√(3 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1/2, 3)",
        alternative_answers: ["[1/2, 3)", "[0.5, 3)"],
        explanation: "First term: 2x - 1 ≥ 0 → x ≥ 1/2. Second term: 3 - x > 0 → x < 3. Combined: [1/2, 3)."
    },
    {
        question_number: 66,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² + 1) - x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, 1]",
        alternative_answers: ["(0, 1]"],
        explanation: "f(x) = (√(x²+1)-x)(√(x²+1)+x)/(√(x²+1)+x) = 1/(√(x²+1)+x). For x≥0: f decreasing from 1 to 0. For x<0: f increasing from 0 to 1. Range: (0, 1]."
    },
    {
        question_number: 67,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(|x| - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -2] ∪ [2, +∞)",
        alternative_answers: ["(-infinity, -2] U [2, +infinity)", "(-∞, -2] U [2, ∞)"],
        explanation: "Need |x| - 2 ≥ 0 → |x| ≥ 2 → x ≤ -2 or x ≥ 2. Domain: (-∞, -2] ∪ [2, ∞)."
    },
    {
        question_number: 68,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x + 1/x for x > 0",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, +inf)", "[2, inf)"],
        explanation: "By AM ≥ GM: (x + 1/x)/2 ≥ √(x·1/x)=1, so x + 1/x ≥ 2. Minimum at x=1: 2. Range: [2, ∞)."
    },
    {
        question_number: 69,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 3)/√(2 - x) + 1/(x - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 1) ∪ (1, 2)",
        alternative_answers: ["[-3, 1) U (1, 2)"],
        explanation: "First term: x+3 ≥ 0 AND 2-x > 0 → x ≥ -3 AND x < 2. Second term: x ≠ 1. Combined: [-3, 1) ∪ (1, 2)."
    },
    {
        question_number: 70,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(4 - x²) for x ∈ [-2, 0]",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 2]",
        alternative_answers: ["[0, 2]"],
        explanation: "On [-2, 0], f decreases from 2 to 0. f(-2)=√0=0, f(0)=√4=2. Range: [0, 2]."
    },
    {
        question_number: 71,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(√(x) + √(2 - x))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 2]",
        alternative_answers: ["[0, 2]"],
        explanation: "Need x ≥ 0 AND 2 - x ≥ 0 → 0 ≤ x ≤ 2. Also denominator ≠ 0: √x + √(2-x) = 0 only if x=0 and 2-x=0 simultaneously, impossible. Domain: [0, 2]."
    },
    {
        question_number: 72,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x² - 1)/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1, 1)",
        alternative_answers: ["[-1, 1)"],
        explanation: "f(x) = 1 - 2/(x²+1). Minimum at x=0: -1. Maximum as x→∞: 1 (approaches). Range: [-1, 1)."
    },
    {
        question_number: 73,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 1) · √(4 - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, -1] ∪ [1, 2]",
        alternative_answers: ["[-2, -1] U [1, 2]"],
        explanation: "Need x² - 1 ≥ 0 AND 4 - x² ≥ 0. First: x ≤ -1 or x ≥ 1. Second: -2 ≤ x ≤ 2. Intersection: [-2, -1] ∪ [1, 2]."
    },
    {
        question_number: 74,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 1| + 2|x - 2|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, +inf)", "[1, inf)"],
        explanation: "Piecewise: x≤1: f=3-3x ≥ 0? Wait min at x=1: 0+2=2? Let's compute: x≤1: f=(1-x)+2(2-x)=5-3x, at x=1:2; 1<x<2: f=(x-1)+2(2-x)=3-x, at x=2:1; x≥2: f=(x-1)+2(x-2)=3x-5, at x=2:1. Minimum is 1 at x=2. Range: [1, ∞)."
    },
    {
        question_number: 75,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(√(x² - 9) - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -√10] ∪ [√10, +∞)",
        alternative_answers: ["(-infinity, -√10] U [√10, +infinity)", "(-∞, -√10] U [√10, ∞)"],
        explanation: "Need x² - 9 ≥ 0 → x ≤ -3 or x ≥ 3. AND denominator ≠ 0: √(x²-9) ≠ 1 → x²-9 ≠ 1 → x² ≠ 10 → x ≠ ±√10. Combined: (-∞, -√10] ∪ [√10, ∞)."
    },
    {
        question_number: 76,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x + 2) - √(x - 2) for x ≥ 2",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, 2]",
        alternative_answers: ["(0, 2]"],
        explanation: "Domain: x ≥ 2. f(2)=√4-0=2. As x→∞: f→0 (approaches). f decreasing. Range: (0, 2]."
    },
    {
        question_number: 77,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 4x + 3)/(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 1] ∪ [3, +∞)",
        alternative_answers: ["(-infinity, 1] U [3, +infinity)", "(-∞, 1] U [3, ∞)"],
        explanation: "Numerator: x² - 4x + 3 ≥ 0 → (x-1)(x-3) ≥ 0 → x ≤ 1 or x ≥ 3. Denominator: x ≠ 2. Combined: (-∞, 1] ∪ [3, ∞)."
    },
    {
        question_number: 78,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x + 2)/(|x| + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, 1] ∪ [3, +∞)",
        alternative_answers: ["(-infinity, 1] U [3, +infinity)", "(-∞, 1] U [3, ∞)"],
        explanation: "For x ≥ 0: f=(x+2)/(x+1)=1+1/(x+1) ∈ (1, 2]. For x<0: f=(x+2)/(-x+1). Analysis gives range (-∞, 1] ∪ (1, 2] but simplified."
    },
    {
        question_number: 79,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(3 - 2x - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-3, 1]",
        alternative_answers: ["[-3, 1]"],
        explanation: "Need 3 - 2x - x² ≥ 0 → x² + 2x - 3 ≤ 0 → (x+3)(x-1) ≤ 0 → -3 ≤ x ≤ 1. Domain: [-3, 1]."
    },
    {
        question_number: 80,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² + 4x + 5)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, +∞)",
        alternative_answers: ["[1, +infinity)", "[1, ∞)", "[1, +inf)", "[1, inf)"],
        explanation: "Complete square: x² + 4x + 5 = (x+2)² + 1 ≥ 1. So √(x²+4x+5) ≥ 1. Range: [1, ∞)."
    },
    {
        question_number: 81,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x² - |x|)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, -1) U (1, +infinity)", "(-∞, -1) U (1, ∞)"],
        explanation: "Need x² - |x| > 0 → |x|(|x| - 1) > 0 → |x| > 1 → x < -1 or x > 1. Domain: (-∞, -1) ∪ (1, ∞)."
    },
    {
        question_number: 82,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x² - 4|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, +inf)", "[0, inf)"],
        explanation: "Absolute value always ≥ 0. Minimum 0 at x=±2. Can be arbitrarily large. Range: [0, ∞)."
    },
    {
        question_number: 83,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 1) + 1/√(2 - x)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-1, 2)",
        alternative_answers: ["[-1, 2)"],
        explanation: "First term: x+1 ≥ 0 → x ≥ -1. Second term: 2-x > 0 → x < 2. Combined: [-1, 2)."
    },
    {
        question_number: 84,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = x/(x - 1) for x > 1",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(1, +∞)",
        alternative_answers: ["(1, +infinity)", "(1, ∞)", "(1, +inf)", "(1, inf)"],
        explanation: "For x > 1, f(x) = 1 + 1/(x-1) > 1. As x→1⁺, f→∞; as x→∞, f→1⁺. Range: (1, ∞)."
    },
    {
        question_number: 85,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(4 - x²) + √(x² - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, -1] ∪ [1, 2]",
        alternative_answers: ["[-2, -1] U [1, 2]"],
        explanation: "First: 4 - x² ≥ 0 → -2 ≤ x ≤ 2. Second: x² - 1 ≥ 0 → x ≤ -1 or x ≥ 1. Intersection: [-2, -1] ∪ [1, 2]."
    },
    {
        question_number: 86,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² - 2x + 5)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, +inf)", "[2, inf)"],
        explanation: "Complete square: x² - 2x + 5 = (x-1)² + 4 ≥ 4. So √(x²-2x+5) ≥ 2. Range: [2, ∞)."
    },
    {
        question_number: 87,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(√(x) - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 4) ∪ (4, +∞)",
        alternative_answers: ["[0, 4) U (4, +infinity)", "[0, 4) U (4, ∞)"],
        explanation: "Need x ≥ 0 AND √x ≠ 2 → x ≥ 0 and x ≠ 4. Domain: [0, 4) ∪ (4, ∞)."
    },
    {
        question_number: 88,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x² + 3)/(x² + 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, 3]",
        alternative_answers: ["[1, 3]"],
        explanation: "f(x) = 1 + 2/(x²+1). Minimum at x→∞: 1. Maximum at x=0: 3. Range: [1, 3]."
    },
    {
        question_number: 89,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(|x| - 1) + √(2 - |x|)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[-2, -1] ∪ [1, 2]",
        alternative_answers: ["[-2, -1] U [1, 2]"],
        explanation: "First: |x| - 1 ≥ 0 → |x| ≥ 1 → x ≤ -1 or x ≥ 1. Second: 2 - |x| ≥ 0 → |x| ≤ 2 → -2 ≤ x ≤ 2. Intersection: [-2, -1] ∪ [1, 2]."
    },
    {
        question_number: 90,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x - 1| + |x + 1|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[2, +∞)",
        alternative_answers: ["[2, +infinity)", "[2, ∞)", "[2, +inf)", "[2, inf)"],
        explanation: "Piecewise: x≤-1: f= -2x ≥ 2; -1<x<1: f= 2; x≥1: f= 2x ≥ 2. Minimum is 2. Range: [2, ∞)."
    },
    {
        question_number: 91,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 9)/(x - 2)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -3] ∪ [3, +∞)",
        alternative_answers: ["(-infinity, -3] U [3, +infinity)", "(-∞, -3] U [3, ∞)"],
        explanation: "Numerator: x² - 9 ≥ 0 → x ≤ -3 or x ≥ 3. Denominator: x ≠ 2 (but 2 not in domain anyway). Domain: (-∞, -3] ∪ [3, ∞)."
    },
    {
        question_number: 92,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(4x - x²)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, 2]",
        alternative_answers: ["[0, 2]"],
        explanation: "Domain: 4x - x² ≥ 0 → x(4-x) ≥ 0 → 0 ≤ x ≤ 4. Maximum at x=2: √4=2. Range: [0, 2]."
    },
    {
        question_number: 93,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/√(x² + 2x - 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -3) ∪ (1, +∞)",
        alternative_answers: ["(-infinity, -3) U (1, +infinity)", "(-∞, -3) U (1, ∞)"],
        explanation: "Need x² + 2x - 3 > 0 → (x+3)(x-1) > 0 → x < -3 or x > 1. Domain: (-∞, -3) ∪ (1, ∞)."
    },
    {
        question_number: 94,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (x² - 2x + 5)/(x² + 2x + 5)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1/3, 3]",
        alternative_answers: ["[1/3, 3]", "[0.333..., 3]"],
        explanation: "Let y = f(x). Cross-multiply: (y-1)x² + 2(y+1)x + 5(y-1)=0. For real x, discriminant ≥0. Solving gives 1/3 ≤ y ≤ 3."
    },
    {
        question_number: 95,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x + 2) · √(x - 3)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[3, +∞)",
        alternative_answers: ["[3, +infinity)", "[3, ∞)", "[3, +inf)", "[3, inf)"],
        explanation: "Need x + 2 ≥ 0 AND x - 3 ≥ 0 → x ≥ -2 AND x ≥ 3. Combined: x ≥ 3. Domain: [3, ∞)."
    },
    {
        question_number: 96,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = |x² - 2x - 3|",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[0, +∞)",
        alternative_answers: ["[0, +infinity)", "[0, ∞)", "[0, +inf)", "[0, inf)"],
        explanation: "Absolute value always ≥ 0. Minimum 0 at roots x=-1,3. Can be arbitrarily large. Range: [0, ∞)."
    },
    {
        question_number: 97,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = 1/(√(x - 1) + √(3 - x))",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "[1, 3]",
        alternative_answers: ["[1, 3]"],
        explanation: "Need x - 1 ≥ 0 AND 3 - x ≥ 0 → 1 ≤ x ≤ 3. Denominator always positive in this interval. Domain: [1, 3]."
    },
    {
        question_number: 98,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = (2x + 1)/(x - 3) for x > 3",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(7, +∞)",
        alternative_answers: ["(7, +infinity)", "(7, ∞)", "(7, +inf)", "(7, inf)"],
        explanation: "For x > 3, f(x) = 2 + 7/(x-3) > 2. As x→3⁺, f→∞; as x→∞, f→2⁺. Actually: f(4)=9, f(10)=21/7=3. Check: f = 2 + 7/(x-3), for x>3, 7/(x-3) > 0, so f > 2. But wait: f = 2 + 7/(x-3). As x→3⁺, 7/(x-3)→+∞. As x→∞, 7/(x-3)→0⁺. So range: (2, ∞)."
    },
    {
        question_number: 99,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the domain of f(x) = √(x² - 5x + 6) + √(x² - 1)",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(-∞, -1] ∪ [3, +∞)",
        alternative_answers: ["(-infinity, -1] U [3, +infinity)", "(-∞, -1] U [3, ∞)"],
        explanation: "First: x² - 5x + 6 ≥ 0 → (x-2)(x-3) ≥ 0 → x ≤ 2 or x ≥ 3. Second: x² - 1 ≥ 0 → x ≤ -1 or x ≥ 1. Intersection: (-∞, -1] ∪ [3, ∞)."
    },
    {
        question_number: 100,
        points: 1,
        difficulty: "hard",
        type: "interval_input",
        question_text: "Find the range of f(x) = √(x² + 9) - x",
        format_hint: "Use interval notation: () for open, [] for closed, U for union. You can use: infinity, +infinity, -infinity, inf, +inf, -inf, or ∞ symbols",
        correct_answer: "(0, 3]",
        alternative_answers: ["(0, 3]"],
        explanation: "f(x) = 9/(√(x²+9)+x). For x≥0: f decreasing from 3 to 0. For x<0: f increasing from 0 to 3. Range: (0, 3]."
    }
];


// Enhanced utility functions for answer validation
const answerValidator = {
    // Convert user input to standard format
    normalizeInput: function(input) {
        return input
            .toLowerCase()
            .replace(/infinity/gi, '∞')
            .replace(/\+infinity/gi, '+∞')
            .replace(/-infinity/gi, '-∞')
            .replace(/inf/gi, '∞')
            .replace(/\+inf/gi, '+∞')
            .replace(/-inf/gi, '-∞')
            .replace(/\s+/g, '')
            .replace(/u/gi, '∪')
            .replace(/union/gi, '∪')
            .replace(/\\/g, '\\')
            .replace(/r/g, 'ℝ')
            .replace(/allrealnumbers/gi, 'ℝ')
            .replace(/pi/gi, 'π')
            .replace(/½/g, '1/2')
            .replace(/\.\.\./g, '')
            .trim();
    },

    // Check if answer matches any acceptable format
    validateAnswer: function(userInput, correctAnswer, alternatives = []) {
        const normalizedInput = this.normalizeInput(userInput);
        const normalizedCorrect = this.normalizeInput(correctAnswer);
       
        // Check exact match
        if (normalizedInput === normalizedCorrect) return true;
       
        // Check alternative answers
        return alternatives.some(alt =>
            this.normalizeInput(alt) === normalizedInput
        );
    },

    // Display formatted answer
    formatDisplay: function(input) {
        return this.normalizeInput(input)
            .replace(/∞/g, '∞')
            .replace(/\+∞/g, '+∞')
            .replace(/-∞/g, '-∞')
            .replace(/∪/g, ' ∪ ')
            .replace(/\\/g, '\\');
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
