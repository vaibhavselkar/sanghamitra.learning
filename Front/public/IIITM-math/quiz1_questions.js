const questions = [
    {
        question_number: 1,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of f(x) = √(x + 4)/(x² - 9)",
        options: [
            "A) [-4, -3) ∪ (-3, 3) ∪ (3, ∞)",
            "B) (-4, -3) ∪ (-3, 3) ∪ (3, ∞)",
            "C) [-4, ∞) \\ {-3, 3}",
            "D) (-4, ∞) \\ {-3, 3}"
        ],
        correct_answer: "A) [-4, -3) ∪ (-3, 3) ∪ (3, ∞)",
        explanation: "Need x + 4 ≥ 0 and x² - 9 ≠ 0. So x ≥ -4 and x ≠ ±3."
    },
    {
        question_number: 2,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of g(x) = (x² - 16)/(|x| - 4)",
        options: [
            "A) ℝ \\ {-4, 4}",
            "B) (-∞, -4) ∪ (-4, 4) ∪ (4, ∞)",
            "C) (-∞, -4) ∪ (4, ∞)",
            "D) ℝ \\ {4}"
        ],
        correct_answer: "B) (-∞, -4) ∪ (-4, 4) ∪ (4, ∞)",
        explanation: "Need |x| - 4 ≠ 0, so x ≠ ±4."
    },
    {
        question_number: 3,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of f(x) = (x² + 4)/(x² + 1)",
        options: [
            "A) [1, 4]",
            "B) [1, 4)",
            "C) (1, 4]",
            "D) [4/5, 4]"
        ],
        correct_answer: "A) [1, 4]",
        explanation: "f(x) = 1 + 3/(x² + 1). Minimum when x² is large: 1, maximum when x = 0: 4."
    },
    {
        question_number: 4,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of g(x) = √(x² + 2x + 5)",
        options: [
            "A) [0, ∞)",
            "B) [2, ∞)",
            "C) [√5, ∞)",
            "D) [4, ∞)"
        ],
        correct_answer: "B) [2, ∞)",
        explanation: "Complete square: x² + 2x + 5 = (x+1)² + 4 ≥ 4, so √(x² + 2x + 5) ≥ 2."
    },
    {
        question_number: 5,
        points: 1,
        type: "numeric",
        question_text: "Find distance between points (-2, 7) and (4, -3). Round to 2 decimal places.",
        correct_answer: 11.66,
        explanation: "d = √((4-(-2))² + (-3-7)²) = √(36 + 100) = √136 ≈ 11.66"
    },
    {
        question_number: 6,
        points: 1,
        type: "numeric",
        question_text: "If points (2, 5), (5, y), and (8, 11) are collinear, find y.",
        correct_answer: 8,
        explanation: "Slopes equal: (y-5)/(5-2) = (11-5)/(8-2), so (y-5)/3 = 6/6 = 1, thus y = 8"
    },
    {
        question_number: 7,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line parallel to 2x + 3y = 6 through (4, -1)",
        options: [
            "A) 2x + 3y - 5 = 0",
            "B) 2x + 3y + 5 = 0",
            "C) 3x - 2y - 14 = 0",
            "D) 2x - 3y - 11 = 0"
        ],
        correct_answer: "A) 2x + 3y - 5 = 0",
        explanation: "Parallel line: 2x + 3y + c = 0. Through (4, -1): 8 - 3 + c = 0, so c = -5."
    },
    {
        question_number: 8,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line perpendicular to 3x - 2y = 7 with x-intercept 4",
        options: [
            "A) 2x + 3y - 8 = 0",
            "B) 2x + 3y + 8 = 0",
            "C) 3x + 2y - 12 = 0",
            "D) 2x - 3y - 8 = 0"
        ],
        correct_answer: "A) 2x + 3y - 8 = 0",
        explanation: "Original slope = 3/2, perpendicular slope = -2/3. Through (4, 0): y = -2/3(x-4), so 2x + 3y - 8 = 0."
    },
    {
        question_number: 9,
        points: 1,
        type: "numeric",
        question_text: "Angle between lines y = x + 2 and y = √3x - 1. Round to nearest degree.",
        correct_answer: 15,
        explanation: "m₁ = 1, m₂ = √3. tanθ = |(1-√3)/(1+1·√3)| = |(1-√3)/(1+√3)| ≈ 0.2679, θ ≈ 15°"
    },
    {
        question_number: 10,
        points: 1,
        type: "multiple_choice",
        question_text: "Point on graph of every linear function f(x) = a(x - 1) + 4 regardless of parameter a",
        options: [
            "A) (1, 4)",
            "B) (-1, 4)",
            "C) (0, 4)",
            "D) (1, 0)"
        ],
        correct_answer: "A) (1, 4)",
        explanation: "When x = 1: f(1) = a(1-1) + 4 = 4 for any a. So (1, 4) is always on the graph."
    },
    {
        question_number: 11,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = √(9 - x²)/(x - 2)",
        options: [
            "A) [-3, 3] \\ {2}",
            "B) (-3, 3) \\ {2}",
            "C) [-3, 2) ∪ (2, 3]",
            "D) (-3, 2) ∪ (2, 3)"
        ],
        correct_answer: "C) [-3, 2) ∪ (2, 3]",
        explanation: "Need 9 - x² ≥ 0 and x - 2 ≠ 0. So -3 ≤ x ≤ 3 and x ≠ 2."
    },
    {
        question_number: 12,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = log₂(x² - 3x + 2)",
        options: [
            "A) (-∞, 1) ∪ (2, ∞)",
            "B) (1, 2)",
            "C) (-∞, 1] ∪ [2, ∞)",
            "D) ℝ \\ {1, 2}"
        ],
        correct_answer: "A) (-∞, 1) ∪ (2, ∞)",
        explanation: "Need x² - 3x + 2 > 0. Factor: (x-1)(x-2) > 0, so x < 1 or x > 2."
    },
    {
        question_number: 13,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = |x - 3| + 2",
        options: [
            "A) [2, ∞)",
            "B) [3, ∞)",
            "C) (-∞, ∞)",
            "D) [0, ∞)"
        ],
        correct_answer: "A) [2, ∞)",
        explanation: "|x-3| ≥ 0, so |x-3| + 2 ≥ 2. Minimum value is 2 when x = 3."
    },
    {
        question_number: 14,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = 1/(x² + 2x + 3)",
        options: [
            "A) (0, 1/2]",
            "B) [0, 1/2]",
            "C) (0, ∞)",
            "D) [1/3, ∞)"
        ],
        correct_answer: "A) (0, 1/2]",
        explanation: "Denominator: x² + 2x + 3 = (x+1)² + 2 ≥ 2. So fraction ≤ 1/2 and > 0."
    },
    {
        question_number: 15,
        points: 1,
        type: "numeric",
        question_text: "Distance between (0, 0) and line 3x + 4y - 10 = 0.",
        correct_answer: 2,
        explanation: "Distance = |3(0) + 4(0) - 10|/√(3² + 4²) = 10/5 = 2"
    },
    {
        question_number: 16,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = √(x + 5) + √(3 - x)",
        options: [
            "A) [-5, 3]",
            "B) (-5, 3)",
            "C) [-5, ∞)",
            "D) (-∞, 3]"
        ],
        correct_answer: "A) [-5, 3]",
        explanation: "Need x + 5 ≥ 0 and 3 - x ≥ 0. So -5 ≤ x ≤ 3."
    },
    {
        question_number: 17,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = 1/√(x² - x - 6)",
        options: [
            "A) (-∞, -2) ∪ (3, ∞)",
            "B) [-2, 3]",
            "C) (-2, 3)",
            "D) (-∞, -2] ∪ [3, ∞)"
        ],
        correct_answer: "A) (-∞, -2) ∪ (3, ∞)",
        explanation: "Need x² - x - 6 > 0. Factor: (x-3)(x+2) > 0, so x < -2 or x > 3."
    },
    {
        question_number: 18,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = 2 + 3sin(x)",
        options: [
            "A) [-1, 5]",
            "B) [2, 5]",
            "C) [-1, 3]",
            "D) [-3, 3]"
        ],
        correct_answer: "A) [-1, 5]",
        explanation: "sin(x) ∈ [-1, 1], so 3sin(x) ∈ [-3, 3], thus 2 + 3sin(x) ∈ [-1, 5]."
    },
    {
        question_number: 19,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = e^(x-2) + 1",
        options: [
            "A) (1, ∞)",
            "B) [1, ∞)",
            "C) (0, ∞)",
            "D) ℝ"
        ],
        correct_answer: "A) (1, ∞)",
        explanation: "e^(x-2) > 0 for all x, so e^(x-2) + 1 > 1."
    },
    {
        question_number: 20,
        points: 1,
        type: "numeric",
        question_text: "Find k if distance between (k, 3) and (5, 7) is 5.",
        correct_answer: 2,
        explanation: "√((k-5)² + (3-7)²) = 5 ⇒ (k-5)² + 16 = 25 ⇒ (k-5)² = 9 ⇒ k-5 = ±3, so k = 2 or 8"
    },
    {
        question_number: 21,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = √(4 - |x|)",
        options: [
            "A) [-4, 4]",
            "B) (-4, 4)",
            "C) [0, 4]",
            "D) [-2, 2]"
        ],
        correct_answer: "A) [-4, 4]",
        explanation: "Need 4 - |x| ≥ 0, so |x| ≤ 4, thus -4 ≤ x ≤ 4."
    },
    {
        question_number: 22,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = ln(|x| - 2)",
        options: [
            "A) (-∞, -2) ∪ (2, ∞)",
            "B) (-2, 2)",
            "C) [-2, 2]",
            "D) ℝ \\ {-2, 2}"
        ],
        correct_answer: "A) (-∞, -2) ∪ (2, ∞)",
        explanation: "Need |x| - 2 > 0, so |x| > 2, thus x < -2 or x > 2."
    },
    {
        question_number: 23,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = x² - 4x + 7",
        options: [
            "A) [3, ∞)",
            "B) [7, ∞)",
            "C) (-∞, 3]",
            "D) (-∞, 7]"
        ],
        correct_answer: "A) [3, ∞)",
        explanation: "Complete square: (x-2)² + 3 ≥ 3. Minimum value is 3 when x = 2."
    },
    {
        question_number: 24,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = 2 - √(x + 1)",
        options: [
            "A) (-∞, 2]",
            "B) [2, ∞)",
            "C) (-∞, 1]",
            "D) [1, ∞)"
        ],
        correct_answer: "A) (-∞, 2]",
        explanation: "√(x+1) ≥ 0, so -√(x+1) ≤ 0, thus 2 - √(x+1) ≤ 2. Maximum is 2 when x = -1."
    },
    {
        question_number: 25,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = √(2x - 6) + √(8 - x)",
        options: [
            "A) [3, 8]",
            "B) (3, 8)",
            "C) [6, 8]",
            "D) [3, 6]"
        ],
        correct_answer: "A) [3, 8]",
        explanation: "Need 2x - 6 ≥ 0 and 8 - x ≥ 0. So x ≥ 3 and x ≤ 8."
    },
    {
        question_number: 26,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = 1/√(4 - x²)",
        options: [
            "A) (-2, 2)",
            "B) [-2, 2]",
            "C) (-∞, -2) ∪ (2, ∞)",
            "D) ℝ \\ {-2, 2}"
        ],
        correct_answer: "A) (-2, 2)",
        explanation: "Need 4 - x² > 0, so x² < 4, thus -2 < x < 2."
    },
    {
        question_number: 27,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = x² + 2x + 5",
        options: [
            "A) [4, ∞)",
            "B) [5, ∞)",
            "C) [6, ∞)",
            "D) (-∞, ∞)"
        ],
        correct_answer: "A) [4, ∞)",
        explanation: "Complete square: (x+1)² + 4 ≥ 4. Minimum value is 4 when x = -1."
    },
    {
        question_number: 28,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = |x + 2| - |x - 3|",
        options: [
            "A) [-5, 5]",
            "B) [-3, 3]",
            "C) [-2, 2]",
            "D) [-1, 1]"
        ],
        correct_answer: "A) [-5, 5]",
        explanation: "This is a piecewise linear function. Minimum -5 when x ≤ -2, maximum 5 when x ≥ 3."
    },
    {
        question_number: 29,
        points: 1,
        type: "numeric",
        question_text: "Find x if distance between (x, 1) and (3, 4) is 3√2.",
        correct_answer: 0,
        explanation: "√((x-3)² + (1-4)²) = 3√2 ⇒ (x-3)² + 9 = 18 ⇒ (x-3)² = 9 ⇒ x-3 = ±3, so x = 0 or 6"
    },
    {
        question_number: 30,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = 2^x + 2^(-x)",
        options: [
            "A) [2, ∞)",
            "B) (0, ∞)",
            "C) [1, ∞)",
            "D) ℝ"
        ],
        correct_answer: "A) [2, ∞)",
        explanation: "By AM ≥ GM, (2^x + 2^(-x))/2 ≥ √(2^x·2^(-x)) = 1, so 2^x + 2^(-x) ≥ 2."
    }
];
