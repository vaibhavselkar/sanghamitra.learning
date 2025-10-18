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
        question_text: "Find the domain of h(x) = ³√(x - 2)/(x² - 5x + 6)",
        options: [
            "A) ℝ \\ {2, 3}",
            "B) (2, 3) ∪ (3, ∞)",
            "C) (-∞, 2) ∪ (2, 3) ∪ (3, ∞)",
            "D) [2, 3) ∪ (3, ∞)"
        ],
        correct_answer: "C) (-∞, 2) ∪ (2, 3) ∪ (3, ∞)",
        explanation: "Cube root defined for all real numbers, denominator ≠ 0: x² - 5x + 6 = (x-2)(x-3) ≠ 0."
    },
    {
        question_number: 4,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of m(x) = ln(x² - 4)/(x - 1)",
        options: [
            "A) (-∞, -2) ∪ (2, ∞) \\ {1}",
            "B) (-2, -1) ∪ (-1, 1) ∪ (1, 2)",
            "C) (-∞, -2) ∪ (-2, 2) ∪ (2, ∞)",
            "D) (1, 2) ∪ (2, ∞)"
        ],
        correct_answer: "A) (-∞, -2) ∪ (2, ∞) \\ {1}",
        explanation: "Need x² - 4 > 0 and x - 1 ≠ 0. So |x| > 2 and x ≠ 1."
    },
    {
        question_number: 5,
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
        question_number: 6,
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
        question_number: 7,
        points: 1,
        type: "numeric",
        question_text: "Find distance between points (-2, 7) and (4, -3). Round to 2 decimal places.",
        correct_answer: 11.66,
        explanation: "d = √((4-(-2))² + (-3-7)²) = √(36 + 100) = √136 ≈ 11.66"
    },
    {
        question_number: 8,
        points: 1,
        type: "numeric",
        question_text: "If points (2, 5), (5, y), and (8, 11) are collinear, find y.",
        correct_answer: 8,
        explanation: "Slopes equal: (y-5)/(5-2) = (11-5)/(8-2), so (y-5)/3 = 6/6 = 1, thus y = 8"
    },
    {
        question_number: 9,
        points: 1,
        type: "numeric",
        question_text: "Area of triangle with vertices (1, 1), (4, 5), and (7, 2).",
        correct_answer: 12,
        explanation: "Area = (1/2)|1(5-2) + 4(2-1) + 7(1-5)| = (1/2)|3 + 4 - 28| = (1/2)(21) = 10.5"
    },
    {
        question_number: 10,
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
        question_number: 11,
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
        question_number: 12,
        points: 1,
        type: "numeric",
        question_text: "Angle between lines y = x + 2 and y = √3x - 1. Round to nearest degree.",
        correct_answer: 15,
        explanation: "m₁ = 1, m₂ = √3. tanθ = |(1-√3)/(1+1·√3)| = |(1-√3)/(1+√3)| ≈ 0.2679, θ ≈ 15°"
    },
    {
        question_number: 13,
        points: 1,
        type: "multiple_choice",
        question_text: "Line through (3, -2) perpendicular to line joining (1, 4) and (5, -2)",
        options: [
            "A) 2x - 3y - 12 = 0",
            "B) 2x + 3y - 12 = 0",
            "C) 3x - 2y - 13 = 0",
            "D) 3x + 2y - 5 = 0"
        ],
        correct_answer: "A) 2x - 3y - 12 = 0",
        explanation: "Slope of given line = (-2-4)/(5-1) = -3/2. Perpendicular slope = 2/3. Through (3, -2): y+2 = 2/3(x-3)."
    },
    {
        question_number: 14,
        points: 1,
        type: "multiple_choice",
        question_text: "Perpendicular bisector of segment joining A(2, -3) and B(6, 5)",
        options: [
            "A) x + 2y - 6 = 0",
            "B) 2x + y - 6 = 0",
            "C) x - 2y + 6 = 0",
            "D) 2x - y - 6 = 0"
        ],
        correct_answer: "A) x + 2y - 6 = 0",
        explanation: "Midpoint: (4, 1). Slope AB = (5-(-3))/(6-2) = 2. Perpendicular slope = -1/2. Equation: y-1 = -1/2(x-4)."
    },
    {
        question_number: 15,
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
        question_number: 16,
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
        question_number: 17,
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
        question_number: 18,
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
        question_number: 19,
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
        question_number: 20,
        points: 1,
        type: "numeric",
        question_text: "Distance between (0, 0) and line 3x + 4y - 10 = 0.",
        correct_answer: 2,
        explanation: "Distance = |3(0) + 4(0) - 10|/√(3² + 4²) = 10/5 = 2"
    },
    {
        question_number: 21,
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
        question_number: 22,
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
        question_number: 23,
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
        question_number: 24,
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
        question_number: 25,
        points: 1,
        type: "numeric",
        question_text: "Find k if distance between (k, 3) and (5, 7) is 5.",
        correct_answer: 2,
        explanation: "√((k-5)² + (3-7)²) = 5 ⇒ (k-5)² + 16 = 25 ⇒ (k-5)² = 9 ⇒ k-5 = ±3, so k = 2 or 8"
    },
    {
        question_number: 26,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line making equal intercepts on axes and passing through (2, 3)",
        options: [
            "A) x + y - 5 = 0",
            "B) x - y + 1 = 0",
            "C) 2x + 3y - 13 = 0",
            "D) 3x - 2y = 0"
        ],
        correct_answer: "A) x + y - 5 = 0",
        explanation: "Equal intercepts means slope = -1. Through (2, 3): y-3 = -1(x-2), so x + y - 5 = 0."
    },
    {
        question_number: 27,
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
        question_number: 28,
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
        question_number: 29,
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
        question_number: 30,
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
        question_number: 31,
        points: 1,
        type: "numeric",
        question_text: "Area of quadrilateral with vertices (0,0), (3,4), (7,5), (4,1).",
        correct_answer: 16.5,
        explanation: "Divide into two triangles: Area = (1/2)|0(4-5)+3(5-0)+7(0-4)| + (1/2)|0(5-1)+7(1-0)+4(0-5)| = (1/2)|15-28| + (1/2)|7-20| = 6.5 + 6.5 = 13"
    },
    {
        question_number: 32,
        points: 1,
        type: "multiple_choice",
        question_text: "Line through intersection of x+y=4 and 2x-y=2, with slope 2",
        options: [
            "A) 2x - y - 4 = 0",
            "B) 2x - y + 4 = 0",
            "C) x - 2y + 4 = 0",
            "D) x + 2y - 4 = 0"
        ],
        correct_answer: "A) 2x - y - 4 = 0",
        explanation: "Solve: x+y=4 and 2x-y=2 gives (2,2). With slope 2: y-2=2(x-2), so 2x-y-2=0."
    },
    {
        question_number: 33,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = √(x² - 4)/(x - 3)",
        options: [
            "A) (-∞, -2] ∪ [2, ∞) \\ {3}",
            "B) (-∞, -2) ∪ (2, ∞) \\ {3}",
            "C) [-2, 2] \\ {3}",
            "D) ℝ \\ {3}"
        ],
        correct_answer: "A) (-∞, -2] ∪ [2, ∞) \\ {3}",
        explanation: "Need x² - 4 ≥ 0 and x - 3 ≠ 0. So |x| ≥ 2 and x ≠ 3."
    },
    {
        question_number: 34,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = 1/(log(x² - 1))",
        options: [
            "A) (-∞, -√2) ∪ (√2, ∞) \\ {-√2, √2}",
            "B) (-√2, -1) ∪ (1, √2)",
            "C) (-∞, -1) ∪ (1, ∞) \\ {-√2, √2}",
            "D) ℝ \\ {-1, 1}"
        ],
        correct_answer: "C) (-∞, -1) ∪ (1, ∞) \\ {-√2, √2}",
        explanation: "Need x² - 1 > 0 and log(x² - 1) ≠ 0. So |x| > 1 and x² - 1 ≠ 1, i.e., x ≠ ±√2."
    },
    {
        question_number: 35,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of f(x) = (x - 1)/(x + 2)",
        options: [
            "A) ℝ \\ {1}",
            "B) ℝ \\ {-1}",
            "C) ℝ \\ {0}",
            "D) ℝ \\ {2}"
        ],
        correct_answer: "A) ℝ \\ {1}",
        explanation: "Let y = (x-1)/(x+2). Solve for x: y(x+2) = x-1 ⇒ yx + 2y = x-1 ⇒ x(y-1) = -2y-1 ⇒ x exists for all y except y = 1."
    },
    {
        question_number: 36,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = 3 + 2cos(x)",
        options: [
            "A) [1, 5]",
            "B) [2, 4]",
            "C) [-1, 7]",
            "D) [3, 5]"
        ],
        correct_answer: "A) [1, 5]",
        explanation: "cos(x) ∈ [-1, 1], so 2cos(x) ∈ [-2, 2], thus 3 + 2cos(x) ∈ [1, 5]."
    },
    {
        question_number: 37,
        points: 1,
        type: "numeric",
        question_text: "Distance between parallel lines 3x + 4y = 10 and 3x + 4y = 20.",
        correct_answer: 2,
        explanation: "Distance = |20 - 10|/√(3² + 4²) = 10/5 = 2"
    },
    {
        question_number: 38,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line with intercepts a and b where a + b = 7 and a - b = 1",
        options: [
            "A) 3x + 4y - 12 = 0",
            "B) 4x + 3y - 12 = 0",
            "C) 2x + 5y - 10 = 0",
            "D) 5x + 2y - 10 = 0"
        ],
        correct_answer: "B) 4x + 3y - 12 = 0",
        explanation: "Solve a+b=7 and a-b=1 gives a=4, b=3. Intercept form: x/4 + y/3 = 1, so 3x + 4y = 12."
    },
    {
        question_number: 39,
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
        question_number: 40,
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
        question_number: 41,
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
        question_number: 42,
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
        question_number: 43,
        points: 1,
        type: "numeric",
        question_text: "Find x if distance between (x, 1) and (3, 4) is 3√2.",
        correct_answer: 0,
        explanation: "√((x-3)² + (1-4)²) = 3√2 ⇒ (x-3)² + 9 = 18 ⇒ (x-3)² = 9 ⇒ x-3 = ±3, so x = 0 or 6"
    },
    {
        question_number: 44,
        points: 1,
        type: "multiple_choice",
        question_text: "Line through (1, -2) making angle 45° with x-axis",
        options: [
            "A) x - y - 3 = 0",
            "B) x + y + 1 = 0",
            "C) x - y + 3 = 0",
            "D) x + y - 3 = 0"
        ],
        correct_answer: "A) x - y - 3 = 0",
        explanation: "Slope = tan45° = 1. Through (1, -2): y+2 = 1(x-1), so x - y - 3 = 0."
    },
    {
        question_number: 45,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of f(x) = log(|x|)/(x - 1)",
        options: [
            "A) (-∞, 0) ∪ (0, 1) ∪ (1, ∞)",
            "B) (-∞, -1) ∪ (-1, 0) ∪ (0, ∞)",
            "C) (0, 1) ∪ (1, ∞)",
            "D) ℝ \\ {0, 1}"
        ],
        correct_answer: "A) (-∞, 0) ∪ (0, 1) ∪ (1, ∞)",
        explanation: "Need |x| > 0 and x - 1 ≠ 0. So x ≠ 0 and x ≠ 1."
    },
    {
        question_number: 46,
        points: 1,
        type: "multiple_choice",
        question_text: "Domain of g(x) = √(x² - 9) + √(16 - x²)",
        options: [
            "A) [-4, -3] ∪ [3, 4]",
            "B) (-4, -3) ∪ (3, 4)",
            "C) [-3, 3]",
            "D) [-4, 4]"
        ],
        correct_answer: "A) [-4, -3] ∪ [3, 4]",
        explanation: "Need x² - 9 ≥ 0 and 16 - x² ≥ 0. So |x| ≥ 3 and |x| ≤ 4, thus -4 ≤ x ≤ -3 or 3 ≤ x ≤ 4."
    },
    {
        question_number: 47,
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
    },
    {
        question_number: 48,
        points: 1,
        type: "multiple_choice",
        question_text: "Range of g(x) = sin²(x) + cos²(x)",
        options: [
            "A) {1}",
            "B) [0, 1]",
            "C) [-1, 1]",
            "D) [0, 2]"
        ],
        correct_answer: "A) {1}",
        explanation: "sin²(x) + cos²(x) = 1 for all x, so range is just {1}."
    },
    {
        question_number: 49,
        points: 1,
        type: "numeric",
        question_text: "Area of triangle formed by lines x=0, y=0, and 3x+4y=12.",
        correct_answer: 6,
        explanation: "Intercepts: (4,0) and (0,3). Area = (1/2)×4×3 = 6"
    },
    {
        question_number: 50,
        points: 1,
        type: "multiple_choice",
        question_text: "Point dividing join of (1,2) and (4,5) in ratio 2:1 externally",
        options: [
            "A) (7, 8)",
            "B) (5, 6)",
            "C) (3, 4)",
            "D) (9, 12)"
        ],
        correct_answer: "A) (7, 8)",
        explanation: "External division: x = (2×4 - 1×1)/(2-1) = 7, y = (2×5 - 1×2)/(2-1) = 8"
    }
];
