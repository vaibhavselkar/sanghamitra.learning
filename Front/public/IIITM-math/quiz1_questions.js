const questions = [
    {
        question_number: 1,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of f(x) = √(5 - x) / (x³ - 9x)",
        options: [
            "A) (-∞, -3) ∪ (-3, 0) ∪ (0, 3) ∪ (3, 5]", 
            "B) (-∞, 5] \\ {-3, 0, 3}",
            "C) (-∞, -3) ∪ (-3, 0) ∪ (0, 3) ∪ (3, 5)",
            "D) (-∞, 5)"
        ],
        correct_answer: "B) (-∞, 5] \\ {-3, 0, 3}",
        explanation: "Need 5 - x ≥ 0 and x³ - 9x ≠ 0. So x ≤ 5 and x ≠ 0, ±3."
    },
    {
        question_number: 2,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of g(x) = (|x - 2| - 3) / (x² - 6x + 8)",
        options: [
            "A) (-∞, -1] ∪ [5, ∞) \\ {2, 4}",
            "B) (-∞, 2) ∪ (2, 4) ∪ (4, ∞)",
            "C) ℝ \\ {2, 4}",
            "D) (-∞, ∞)"
        ],
        correct_answer: "C) ℝ \\ {2, 4}",
        explanation: "Only need x² - 6x + 8 = (x-2)(x-4) ≠ 0, so x ≠ 2, 4."
    },
    {
        question_number: 3,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of h(x) = 1 / ⁴√((x+1)/(x-4))",
        options: [
            "A) (-1, 4) ∪ (4, ∞)",
            "B) [-1, 4) ∪ (4, ∞)",
            "C) (-∞, -1] ∪ (4, ∞)",
            "D) (-1, 4)"
        ],
        correct_answer: "A) (-1, 4) ∪ (4, ∞)",
        explanation: "Need (x+1)/(x-4) > 0 (positive for 4th root in denominator). This gives x ∈ (-1, 4) ∪ (4, ∞)."
    },
    {
        question_number: 4,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of m(x) = 1 / (log₂(x² - 1) - log₂(x+1))",
        options: [
            "A) (1, ∞)",
            "B) (-∞, -1) ∪ (1, ∞)",
            "C) (-∞, -1) ∪ (1, 2) ∪ (2, ∞)",
            "D) (1, 2) ∪ (2, ∞)"
        ],
        correct_answer: "D) (1, 2) ∪ (2, ∞)",
        explanation: "Need x²-1 > 0 and x+1 > 0 and log₂(x-1) ≠ 0. This gives x > 1 and x ≠ 2."
    },
    {
        question_number: 5,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of f(x) = x / (x² + 1)",
        options: [
            "A) [-1/2, 1/2]",
            "B) (-1/2, 1/2)",
            "C) (-∞, ∞)",
            "D) [0, ∞)"
        ],
        correct_answer: "A) [-1/2, 1/2]",
        explanation: "Taking derivative: f'(x) = (1-x²)/(x²+1)². Critical points at x = ±1 give max/min values ±1/2."
    },
    {
        question_number: 6,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of g(x) = √(x² - 4x + 7)",
        options: [
            "A) [√3, ∞)",
            "B) [3, ∞)",
            "C) [0, ∞)",
            "D) [1, ∞)"
        ],
        correct_answer: "A) [√3, ∞)",
        explanation: "Complete the square: x² - 4x + 7 = (x-2)² + 3 ≥ 3. So √(x² - 4x + 7) ≥ √3."
    },
    {
        question_number: 7,
        points: 1,
        type: "numeric",
        question_text: "Find the distance between points (3, -2) and (-1, 5). Round to 2 decimal places.",
        correct_answer: 8.06,
        explanation: "d = √((3-(-1))² + (-2-5)²) = √(16 + 49) = √65 ≈ 8.06"
    },
    {
        question_number: 8,
        points: 1,
        type: "numeric",
        question_text: "If points (1, 2), (4, y), and (6, 3) are collinear, find y.",
        correct_answer: 2.6,
        explanation: "For collinear points, slopes must be equal: (y-2)/(4-1) = (3-2)/(6-1), so (y-2)/3 = 1/5, giving y = 2.6"
    },
    {
        question_number: 9,
        points: 1,
        type: "numeric",
        question_text: "Find the area of triangle with vertices (0, 0), (3, 4), and (5, 2).",
        correct_answer: 7,
        explanation: "Using formula: Area = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = (1/2)|0(4-2) + 3(2-0) + 5(0-4)| = (1/2)|6-20| = 7"
    },
    {
        question_number: 10,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of line parallel to 3x - 4y + 7 = 0 passing through (1, -2)",
        options: [
            "A) 3x - 4y - 11 = 0",
            "B) 3x - 4y + 5 = 0",
            "C) 4x + 3y + 2 = 0",
            "D) 3x - 4y - 5 = 0"
        ],
        correct_answer: "A) 3x - 4y - 11 = 0",
        explanation: "Parallel line has same slope. Using point-slope form with (1, -2): 3(x-1) - 4(y+2) = 0, which gives 3x - 4y - 11 = 0."
    },
    {
        question_number: 11,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of line perpendicular to 2x + 5y = 8 with y-intercept 4",
        options: [
            "A) 5x - 2y + 8 = 0",
            "B) 5x - 2y - 8 = 0",
            "C) 2x + 5y - 4 = 0",
            "D) 5x + 2y - 8 = 0"
        ],
        correct_answer: "A) 5x - 2y + 8 = 0",
        explanation: "Original slope is -2/5, so perpendicular slope is 5/2. With y-intercept 4: y = (5/2)x + 4, which gives 5x - 2y + 8 = 0."
    },
    {
        question_number: 12,
        points: 1,
        type: "numeric",
        question_text: "Find the angle (in degrees) between lines y = 2x + 1 and y = -3x + 4. Round to nearest degree.",
        correct_answer: 71,
        explanation: "Using formula tan θ = |(m₁ - m₂)/(1 + m₁m₂)| = |(2-(-3))/(1+2(-3))| = |5/(-5)| = 1. So θ = arctan(3) ≈ 71.57° ≈ 71°"
    },
    {
        question_number: 13,
        points: 1,
        type: "multiple_choice",
        question_text: "A line passes through (1, 2) and is perpendicular to line joining (3, -1) and (5, 7). Find its equation.",
        options: [
            "A) x + 4y - 9 = 0",
            "B) 4x + y - 6 = 0",
            "C) x - 4y + 7 = 0",
            "D) 4x - y - 2 = 0"
        ],
        correct_answer: "A) x + 4y - 9 = 0",
        explanation: "Slope of line joining (3,-1) and (5,7) is (7-(-1))/(5-3) = 4. Perpendicular slope is -1/4. Using point (1,2): y-2 = -1/4(x-1), which gives x + 4y - 9 = 0."
    },
    {
        question_number: 14,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of perpendicular bisector of line segment joining A(-3, 4) and B(5, -2)",
        options: [
            "A) 4x - 3y + 3 = 0",
            "B) 4x - 3y - 3 = 0",
            "C) 3x + 4y - 3 = 0",
            "D) 4x + 3y - 3 = 0"
        ],
        correct_answer: "B) 4x - 3y - 3 = 0",
        explanation: "Midpoint: (1, 1). Slope of AB is (-2-4)/(5-(-3)) = -3/4. Perpendicular slope is 4/3. Equation: y-1 = 4/3(x-1), which gives 4x - 3y - 1 = 0."
    },
    {
        question_number: 15,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the point (h, k) on the graph of every linear function f(x) = a(x + 2) + 3 regardless of parameter a",
        options: [
            "A) (-2, 3)",
            "B) (2, -3)",
            "C) (0, 3)",
            "D) (-2, 0)"
        ],
        correct_answer: "A) (-2, 3)",
        explanation: "When x = -2: f(-2) = a(-2 + 2) + 3 = a(0) + 3 = 3 for any value of a. So point (-2, 3) is always on the graph."
    }
];


