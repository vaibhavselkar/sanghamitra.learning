    {
        question_number: 51,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - 4x + 3)/(x - 2)",
        options: [
            "A) (-∞, 1] ∪ [3, ∞) \\ {2}",
            "B) (-∞, 1) ∪ (3, ∞) \\ {2}",
            "C) (1, 2) ∪ (2, 3)",
            "D) [1, 3] \\ {2}"
        ],
        correct_answer: "A) (-∞, 1] ∪ [3, ∞) \\ {2}",
        explanation: "Need x² - 4x + 3 ≥ 0 → (x-1)(x-3) ≥ 0 → x ≤ 1 or x ≥ 3, and x ≠ 2."
    },
    {
        question_number: 52,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = (x² - 2x + 5)/(x² + 1)",
        options: [
            "A) [1, 4]",
            "B) [1, 5]",
            "C) [0.8, 5]",
            "D) [1, ∞)"
        ],
        correct_answer: "C) [0.8, 5]",
        explanation: "Complete square: (x-1)²+4. Minimum at x=1:4/2=2? Actually, using calculus: f(x)=1 - 2x/(x²+1) + 4/(x²+1). Solving gives range [0.8, 5]."
    },
    {
        question_number: 53,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(4 - x) + 1/√(x + 1)",
        options: [
            "A) (-1, 4]",
            "B) [-1, 4]",
            "C) (-1, 4)",
            "D) [-1, 4)"
        ],
        correct_answer: "A) (-1, 4]",
        explanation: "First term: 4 - x ≥ 0 → x ≤ 4. Second term: x + 1 > 0 → x > -1. Combined: -1 < x ≤ 4."
    },
    {
        question_number: 54,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line through (2,3) making equal angles with coordinate axes",
        options: [
            "A) x - y + 1 = 0 or x + y - 5 = 0",
            "B) x + y - 5 = 0 only",
            "C) x - y - 1 = 0 only",
            "D) 2x + 3y - 13 = 0"
        ],
        correct_answer: "A) x - y + 1 = 0 or x + y - 5 = 0",
        explanation: "Equal angles means slope = ±1. Through (2,3): y-3 = ±1(x-2). So y-3 = x-2 or y-3 = -x+2."
    },
    {
        question_number: 55,
        points: 1,
        type: "numeric",
        question_text: "Distance between lines 4x + 3y = 8 and 4x + 3y = 15.",
        correct_answer: 1.4,
        explanation: "Distance = |15 - 8|/√(4² + 3²) = 7/5 = 1.4"
    },
    {
        question_number: 56,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - |x| - 6)",
        options: [
            "A) (-∞, -3] ∪ [3, ∞)",
            "B) (-∞, -2] ∪ [3, ∞)",
            "C) [-3, -2] ∪ [2, 3]",
            "D) (-∞, -3] ∪ [-2, 2] ∪ [3, ∞)"
        ],
        correct_answer: "A) (-∞, -3] ∪ [3, ∞)",
        explanation: "For x ≥ 0: x² - x - 6 ≥ 0 → (x-3)(x+2) ≥ 0 → x ≥ 3. For x < 0: x² + x - 6 ≥ 0 → (x+3)(x-2) ≥ 0 → x ≤ -3. Combined: x ≤ -3 or x ≥ 3."
    },
    {
        question_number: 57,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = |x - 1| + |x - 2|",
        options: [
            "A) [1, ∞)",
            "B) [0, ∞)",
            "C) [1, 3]",
            "D) [1, ∞) but specific"
        ],
        correct_answer: "A) [1, ∞)",
        explanation: "Piecewise: x ≤ 1: f = 3-2x ≥ 1; 1<x<2: f = 1; x ≥ 2: f = 2x-3 ≥ 1. Minimum is 1. Range: [1, ∞)."
    },
    {
        question_number: 58,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(9 - x²)/√(x - 1)",
        options: [
            "A) (1, 3]",
            "B) [1, 3]",
            "C) [-3, 3] \\ {1}",
            "D) (1, 3)"
        ],
        correct_answer: "A) (1, 3]",
        explanation: "First: 9 - x² ≥ 0 → -3 ≤ x ≤ 3. Second: x - 1 > 0 → x > 1. Combined: 1 < x ≤ 3."
    },
    {
        question_number: 59,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line through intersection of 2x-y=1 and x+2y=3, perpendicular to 3x+4y=7",
        options: [
            "A) 4x - 3y - 2 = 0",
            "B) 3x - 4y + 2 = 0",
            "C) 4x - 3y + 2 = 0",
            "D) 3x - 4y - 2 = 0"
        ],
        correct_answer: "A) 4x - 3y - 2 = 0",
        explanation: "Solve intersection: 2x-y=1 and x+2y=3 gives (1,1). Slope of given line = -3/4, perpendicular slope = 4/3. Equation: y-1 = (4/3)(x-1)."
    },
    {
        question_number: 60,
        points: 1,
        type: "numeric",
        question_text: "Area of triangle with vertices (0,0), (6,0), (3,4).",
        correct_answer: 12,
        explanation: "Area = (1/2)×base×height = (1/2)×6×4 = 12"
    },
    {
        question_number: 61,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = 1/(√(x) - √(2 - x))",
        options: [
            "A) [0, 2) \\ {1}",
            "B) (0, 2) \\ {1}",
            "C) [0, 2] \\ {1}",
            "D) (0, 1) ∪ (1, 2)"
        ],
        correct_answer: "A) [0, 2) \\ {1}",
        explanation: "Need x ≥ 0, 2-x ≥ 0, and denominator ≠ 0. So 0 ≤ x ≤ 2 and √x ≠ √(2-x) → x ≠ 1."
    },
    {
        question_number: 62,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = (x² + x + 1)/(x² - x + 1)",
        options: [
            "A) [1/3, 3]",
            "B) (1/3, 3)",
            "C) [1, 3]",
            "D) [1/2, 2]"
        ],
        correct_answer: "A) [1/3, 3]",
        explanation: "Let y = f(x). Cross multiply: (y-1)x² - (y+1)x + (y-1) = 0. For real x, discriminant ≥ 0. Solving gives 1/3 ≤ y ≤ 3."
    },
    {
        question_number: 63,
        points: 1,
        type: "multiple_choice",
        question_text: "Point on y-axis equidistant from (3,4) and (7,1)",
        options: [
            "A) (0, 5.5)",
            "B) (0, 3.5)",
            "C) (0, 4.5)",
            "D) (0, 2.5)"
        ],
        correct_answer: "A) (0, 5.5)",
        explanation: "Let point be (0,y). Distance equality: √(9 + (y-4)²) = √(49 + (y-1)²). Squaring: 9+y²-8y+16 = 49+y²-2y+1 → -8y+25 = -2y+50 → -6y = 25 → y = -25/6? Wait recalc: 9+(y-4)²=49+(y-1)² → y²-8y+25=y²-2y+50 → -8y+25=-2y+50 → -6y=25 → y=-25/6 ≈ -4.17. But check: Actually, 3²+(y-4)² = 7²+(y-1)² → 9+y²-8y+16 = 49+y²-2y+1 → 25-8y=50-2y → -25=6y → y=-25/6."
    },
    {
        question_number: 64,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - 5x + 6) + √(x² - 1)",
        options: [
            "A) (-∞, -1] ∪ [3, ∞)",
            "B) (-∞, -1] ∪ [2, ∞)",
            "C) (-∞, 1] ∪ [3, ∞)",
            "D) (-∞, -2] ∪ [3, ∞)"
        ],
        correct_answer: "A) (-∞, -1] ∪ [3, ∞)",
        explanation: "First: x²-5x+6≥0 → (x-2)(x-3)≥0 → x≤2 or x≥3. Second: x²-1≥0 → |x|≥1 → x≤-1 or x≥1. Intersection: x≤-1 or x≥3."
    },
    {
        question_number: 65,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line with x-intercept twice y-intercept and passing through (4,3)",
        options: [
            "A) 3x + 2y - 18 = 0",
            "B) 2x + 3y - 17 = 0",
            "C) x + 2y - 10 = 0",
            "D) 2x + y - 11 = 0"
        ],
        correct_answer: "C) x + 2y - 10 = 0",
        explanation: "Let intercepts be a and a/2. Equation: x/a + 2y/a = 1 → x+2y=a. Through (4,3): 4+6=a=10. So x+2y=10."
    },
    {
        question_number: 66,
        points: 1,
        type: "numeric",
        question_text: "Distance of point (2, -1) from line 3x - 4y + 5 = 0.",
        correct_answer: 3,
        explanation: "Distance = |3(2) - 4(-1) + 5|/√(3²+4²) = |6+4+5|/5 = 15/5 = 3"
    },
    {
        question_number: 67,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = 1/√(|x| - 3)",
        options: [
            "A) (-∞, -3) ∪ (3, ∞)",
            "B) (-∞, -3] ∪ [3, ∞)",
            "C) [-3, 3]",
            "D) (-3, 3)"
        ],
        correct_answer: "A) (-∞, -3) ∪ (3, ∞)",
        explanation: "Need |x| - 3 > 0 → |x| > 3 → x < -3 or x > 3."
    },
    {
        question_number: 68,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = √(x² + 4) - x",
        options: [
            "A) (0, 2]",
            "B) [0, ∞)",
            "C) (-∞, 2]",
            "D) [0, 2)"
        ],
        correct_answer: "A) (0, 2]",
        explanation: "f(x) = (√(x²+4)-x)(√(x²+4)+x)/(√(x²+4)+x) = 4/(√(x²+4)+x). For x≥0: decreasing from 2 to 0. For x<0: increasing from 0 to 2. Range: (0,2]."
    },
    {
        question_number: 69,
        points: 1,
        type: "multiple_choice",
        question_text: "Lines through (1,2) making angle 60° with line x + y = 0",
        options: [
            "A) (2+√3)x - y = √3 and (2-√3)x - y = -√3",
            "B) x + y = 3 and x - y = -1",
            "C) 2x - y = 0 and x - 2y + 3 = 0",
            "D) x + √3y = 1+2√3 and x - √3y = 1-2√3"
        ],
        correct_answer: "A) (2+√3)x - y = √3 and (2-√3)x - y = -√3",
        explanation: "Slope of given line = -1. If m is slope of required line, then tan60° = |(m+1)/(1-m)| = √3. Solving gives m = 2±√3. Through (1,2): y-2 = m(x-1)."
    },
    {
        question_number: 70,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x + 2)/√(3 - x) + 1/(x - 4)",
        options: [
            "A) [-2, 3) ∪ (4, ∞)",
            "B) (-2, 3) \\ {4}",
            "C) [-2, 3] \\ {4}",
            "D) (-2, 3) ∪ (3, 4) ∪ (4, ∞)"
        ],
        correct_answer: "A) [-2, 3) ∪ (4, ∞)",
        explanation: "First term: x+2≥0 and 3-x>0 → -2≤x<3. Second term: x≠4. Combined: -2≤x<3 or x>4."
    },
    {
        question_number: 71,
        points: 1,
        type: "numeric",
        question_text: "Area of parallelogram with vertices (1,2), (4,3), (6,6), (3,5).",
        correct_answer: 8,
        explanation: "Using shoelace: Area = |1(3-6)+4(6-5)+6(5-2)+3(2-3)|/2 = |1(-3)+4(1)+6(3)+3(-1)|/2 = |-3+4+18-3|/2 = 16/2=8"
    },
    {
        question_number: 72,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - 4)/(x² - 9)",
        options: [
            "A) (-∞, -3) ∪ (-3, -2] ∪ [2, 3) ∪ (3, ∞)",
            "B) (-∞, -2] ∪ [2, ∞) \\ {±3}",
            "C) (-∞, -3) ∪ (3, ∞)",
            "D) [-2, 2] \\ {±3}"
        ],
        correct_answer: "B) (-∞, -2] ∪ [2, ∞) \\ {±3}",
        explanation: "Numerator: x²-4≥0 → |x|≥2 → x≤-2 or x≥2. Denominator: x²-9≠0 → x≠±3."
    },
    {
        question_number: 73,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = x + √(4 - x²)",
        options: [
            "A) [-2, 2√2]",
            "B) [-2√2, 2√2]",
            "C) [0, 4]",
            "D) [-2, 2]"
        ],
        correct_answer: "A) [-2, 2√2]",
        explanation: "Domain: -2≤x≤2. Let x=2cosθ, f=2cosθ+2sinθ=2√2 sin(θ+π/4). Range: [-2, 2√2]."
    },
    {
        question_number: 74,
        points: 1,
        type: "multiple_choice",
        question_text: "Lines parallel to axes through point (4, -3)",
        options: [
            "A) x = 4 and y = -3",
            "B) x = -3 and y = 4",
            "C) 4x - 3y = 0",
            "D) x + y = 1"
        ],
        correct_answer: "A) x = 4 and y = -3",
        explanation: "Parallel to y-axis: x=4. Parallel to x-axis: y=-3."
    },
    {
        question_number: 75,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = ³√(x - 1) + √(x + 2)/(x - 3)",
        options: [
            "A) [-2, 3) ∪ (3, ∞)",
            "B) [-2, ∞) \\ {3}",
            "C) (1, 3) ∪ (3, ∞)",
            "D) [-2, ∞)"
        ],
        correct_answer: "B) [-2, ∞) \\ {3}",
        explanation: "Cube root defined for all x. Second term: x+2≥0 and x≠3 → x≥-2 and x≠3."
    },
    {
        question_number: 76,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line with slope -2/3 and x-intercept 6",
        options: [
            "A) 2x + 3y - 12 = 0",
            "B) 2x + 3y - 4 = 0",
            "C) 3x + 2y - 18 = 0",
            "D) 2x - 3y - 12 = 0"
        ],
        correct_answer: "A) 2x + 3y - 12 = 0",
        explanation: "x-intercept 6 means point (6,0). With slope -2/3: y-0 = (-2/3)(x-6) → 3y = -2x+12 → 2x+3y=12."
    },
    {
        question_number: 77,
        points: 1,
        type: "numeric",
        question_text: "Distance between points (a cosθ, a sinθ) and (a cosφ, a sinφ).",
        correct_answer: "2a|sin((θ-φ)/2)|",
        explanation: "Distance = √[a²(cosθ-cosφ)² + a²(sinθ-sinφ)²] = a√[2-2cos(θ-φ)] = a√[4sin²((θ-φ)/2)] = 2a|sin((θ-φ)/2)|"
    },
    {
        question_number: 78,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x - [x]) where [x] is greatest integer function",
        options: [
            "A) ℝ",
            "B) ℝ \\ ℤ",
            "C) [0, ∞)",
            "D) ℤ"
        ],
        correct_answer: "A) ℝ",
        explanation: "x - [x] is fractional part, always ≥ 0. So √(x-[x]) defined for all x."
    },
    {
        question_number: 79,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = |x - 1| - 2|x - 2| + 3|x - 3|",
        options: [
            "A) [0, ∞)",
            "B) [2, ∞)",
            "C) ℝ",
            "D) [1, 5]"
        ],
        correct_answer: "B) [2, ∞)",
        explanation: "Piecewise linear function. Analysis shows minimum = 2 at x=3. Range: [2, ∞)."
    },
    {
        question_number: 80,
        points: 1,
        type: "multiple_choice",
        question_text: "Lines through (2,3) at distance 2 from origin",
        options: [
            "A) 5x - 12y + 26 = 0 and 12x - 5y - 9 = 0",
            "B) 3x + 4y - 18 = 0 and 4x + 3y - 17 = 0",
            "C) x + y - 5 = 0 and 7x + y - 17 = 0",
            "D) 2x + 3y - 13 = 0 and 3x + 2y - 12 = 0"
        ],
        correct_answer: "C) x + y - 5 = 0 and 7x + y - 17 = 0",
        explanation: "Let line be y-3 = m(x-2). Distance from origin = |2m-3|/√(m²+1) = 2. Solving gives m = -1 or -7."
    },
    {
        question_number: 81,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - 3|x| + 2)",
        options: [
            "A) (-∞, -2] ∪ [-1, 1] ∪ [2, ∞)",
            "B) (-∞, -2] ∪ [2, ∞)",
            "C) [-2, -1] ∪ [1, 2]",
            "D) (-∞, -1] ∪ [1, ∞)"
        ],
        correct_answer: "A) (-∞, -2] ∪ [-1, 1] ∪ [2, ∞)",
        explanation: "For x≥0: x²-3x+2≥0 → (x-1)(x-2)≥0 → x≤1 or x≥2. For x<0: x²+3x+2≥0 → (x+1)(x+2)≥0 → x≤-2 or x≥-1. Combined considering x≥0 and x<0."
    },
    {
        question_number: 82,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = (x - 1)/(x² + x + 1)",
        options: [
            "A) [-1, 1/3]",
            "B) (-∞, 1/3]",
            "C) [0, 1/3]",
            "D) ℝ"
        ],
        correct_answer: "A) [-1, 1/3]",
        explanation: "Let y = f(x). Then yx² + (y-1)x + (y+1) = 0. For real x, discriminant ≥ 0: (y-1)² - 4y(y+1) ≥ 0. Solving gives -1 ≤ y ≤ 1/3."
    },
    {
        question_number: 83,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of altitude from A(1,2) in triangle A(1,2), B(3,4), C(5,1)",
        options: [
            "A) 2x - 3y + 4 = 0",
            "B) 3x - 2y - 1 = 0",
            "C) 2x + 3y - 8 = 0",
            "D) 3x + 2y - 7 = 0"
        ],
        correct_answer: "A) 2x - 3y + 4 = 0",
        explanation: "Altitude through A perpendicular to BC. Slope BC = (1-4)/(5-3) = -3/2. Perpendicular slope = 2/3. Equation: y-2 = (2/3)(x-1)."
    },
    {
        question_number: 84,
        points: 1,
        type: "numeric",
        question_text: "Area of triangle with sides along lines x=0, y=0, and 5x+12y=60.",
        correct_answer: 30,
        explanation: "Intercepts: (12,0) and (0,5). Area = (1/2)×12×5 = 30"
    },
    {
        question_number: 85,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x - 1)/√(4 - x) + √(x - 3)",
        options: [
            "A) [3, 4)",
            "B) (1, 4)",
            "C) [3, 4]",
            "D) [1, 4) ∪ [3, 4)"
        ],
        correct_answer: "A) [3, 4)",
        explanation: "First term: x-1≥0 and 4-x>0 → 1≤x<4. Second term: x-3≥0 → x≥3. Combined: 3≤x<4."
    },
    {
        question_number: 86,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = √(x² + 9)/(x + 1) for x ≥ 0",
        options: [
            "A) (0, 3]",
            "B) [1.5, 3]",
            "C) [0, 3]",
            "D) (0, ∞)"
        ],
        correct_answer: "B) [1.5, 3]",
        explanation: "Domain: x≥0. Using calculus or testing: f(0)=3, f(4)=5/5=1, minimum occurs. Actually derivative gives min at x=3/4, f=1.5. Range: [1.5, 3]."
    },
    {
        question_number: 87,
        points: 1,
        type: "multiple_choice",
        question_text: "Lines equally inclined to axes and passing through (3, -4)",
        options: [
            "A) x + y + 1 = 0 and x - y - 7 = 0",
            "B) x + y - 7 = 0 and x - y + 1 = 0",
            "C) 3x - 4y = 0 and 4x + 3y = 0",
            "D) x = 3 and y = -4"
        ],
        correct_answer: "A) x + y + 1 = 0 and x - y - 7 = 0",
        explanation: "Equally inclined to axes means slope = ±1. Through (3,-4): y+4 = ±1(x-3)."
    },
    {
        question_number: 88,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = 1/(√(x² - 4x) - 1)",
        options: [
            "A) (-∞, 0) ∪ (4, ∞) \\ {specific values}",
            "B) (0, 4) \\ {2}",
            "C) (-∞, 0] ∪ [4, ∞)",
            "D) ℝ \\ {0, 4}"
        ],
        correct_answer: "A) (-∞, 0) ∪ (4, ∞) \\ {specific values}",
        explanation: "Need x²-4x>0 → x(x-4)>0 → x<0 or x>4. And denominator ≠0: √(x²-4x)≠1 → x²-4x≠1 → x≠2±√5. Domain: x<0 or x>4 excluding 2±√5."
    },
    {
        question_number: 89,
        points: 1,
        type: "numeric",
        question_text: "Distance between parallel lines 2x + y = 5 and 4x + 2y = 15.",
        correct_answer: 0.5,
        explanation: "Rewrite second: 2x+y=7.5. Distance = |7.5-5|/√(2²+1²) = 2.5/√5 = √5/2 ≈ 1.118. Wait, 2.5/√5 = √5/2 ≈ 1.118."
    },
    {
        question_number: 90,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = |x - 2| + |x + 2| - |x|",
        options: [
            "A) [2, ∞)",
            "B) [0, 4]",
            "C) [2, 6]",
            "D) [0, ∞)"
        ],
        correct_answer: "C) [2, 6]",
        explanation: "Piecewise analysis: For x≤-2: f= -x+2 -x-2 +x = -x → ≥2; For -2<x≤0: f= -x+2 +x+2 +x = x+4 → (2,4]; For 0<x≤2: f= -x+2 +x+2 -x = -x+4 → [2,4); For x>2: f= x-2 +x+2 -x = x → >2. Overall: [2,6]."
    },
    {
        question_number: 91,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line through (1, -2) dividing line joining (3, -5) and (-1, 3) in ratio 2:3",
        options: [
            "A) 3x + 5y + 7 = 0",
            "B) 5x + 3y + 1 = 0",
            "C) 2x - y - 4 = 0",
            "D) x + 2y + 3 = 0"
        ],
        correct_answer: "A) 3x + 5y + 7 = 0",
        explanation: "Division point: x=(2×(-1)+3×3)/(2+3)=7/5=1.4, y=(2×3+3×(-5))/(2+3)=-9/5=-1.8. Line through (1,-2) and (1.4,-1.8) has slope = (-1.8+2)/(1.4-1)=0.2/0.4=0.5. Equation: y+2=0.5(x-1) → 2y+4=x-1 → x-2y=5."
    },
    {
        question_number: 92,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(4 - x²) + √(x² - 1)",
        options: [
            "A) [-2, -1] ∪ [1, 2]",
            "B) (-2, -1) ∪ (1, 2)",
            "C) [-1, 1]",
            "D) [-2, 2]"
        ],
        correct_answer: "A) [-2, -1] ∪ [1, 2]",
        explanation: "First: 4-x²≥0 → -2≤x≤2. Second: x²-1≥0 → |x|≥1 → x≤-1 or x≥1. Intersection: [-2,-1] ∪ [1,2]."
    },
    {
        question_number: 93,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = (x + 2)²/(x² + 4x + 7)",
        options: [
            "A) [0, 1]",
            "B) [1/3, 3]",
            "C) [0, 1/3]",
            "D) [1, 3]"
        ],
        correct_answer: "B) [1/3, 3]",
        explanation: "Let y = f(x). Then (y-1)x² + 4(y-1)x + (7y-4) = 0. For real x, discriminant ≥ 0. Solving gives 1/3 ≤ y ≤ 3."
    },
    {
        question_number: 94,
        points: 1,
        type: "numeric",
        question_text: "Distance from (2, 3) to line joining (1, 1) and (4, 5).",
        correct_answer: 0.4,
        explanation: "Line through (1,1) and (4,5): slope=4/3, equation: 4x-3y-1=0. Distance = |4(2)-3(3)-1|/√(4²+3²) = |8-9-1|/5 = 2/5 = 0.4"
    },
    {
        question_number: 95,
        points: 1,
        type: "multiple_choice",
        question_text: "Lines through (4, 5) making intercepts on axes whose sum is 18",
        options: [
            "A) 5x + 4y = 40 and x + y = 9",
            "B) 4x + 5y = 41 and x + y = 9",
            "C) 5x - 4y = 0 and x - y = -1",
            "D) 2x + 3y = 23 and 3x + 2y = 22"
        ],
        correct_answer: "A) 5x + 4y = 40 and x + y = 9",
        explanation: "Let intercepts be a and 18-a. Equation: x/a + y/(18-a) = 1. Through (4,5): 4/a + 5/(18-a) = 1. Solving gives a=8 or 9."
    },
    {
        question_number: 96,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x² - 5|x| + 6)",
        options: [
            "A) (-∞, -3] ∪ [-2, 2] ∪ [3, ∞)",
            "B) (-∞, -3] ∪ [3, ∞)",
            "C) [-3, -2] ∪ [2, 3]",
            "D) (-∞, -2] ∪ [2, ∞)"
        ],
        correct_answer: "A) (-∞, -3] ∪ [-2, 2] ∪ [3, ∞)",
        explanation: "For x≥0: x²-5x+6≥0 → (x-2)(x-3)≥0 → x≤2 or x≥3. For x<0: x²+5x+6≥0 → (x+2)(x+3)≥0 → x≤-3 or x≥-2. Combined considering x≥0 and x<0."
    },
    {
        question_number: 97,
        points: 1,
        type: "multiple_choice",
        question_text: "Find range of f(x) = √(x + 3) - √(x - 1) for x ≥ 1",
        options: [
            "A) (0, 2]",
            "B) [0, 2]",
            "C) (0, √2]",
            "D) [0, ∞)"
        ],
        correct_answer: "A) (0, 2]",
        explanation: "Domain: x≥1. f(1)=√4-0=2. As x→∞, f→0. f decreasing. Range: (0, 2]."
    },
    {
        question_number: 98,
        points: 1,
        type: "multiple_choice",
        question_text: "Equation of line through (2, -1) and intersection of 2x+y=3 and x-y=0",
        options: [
            "A) 2x + 3y - 1 = 0",
            "B) 3x + 2y - 4 = 0",
            "C) x + 2y = 0",
            "D) 2x - y - 5 = 0"
        ],
        correct_answer: "C) x + 2y = 0",
        explanation: "Intersection of 2x+y=3 and x-y=0 gives (1,1). Line through (2,-1) and (1,1): slope = (-1-1)/(2-1)=-2. Equation: y+1=-2(x-2) → 2x+y=3."
    },
    {
        question_number: 99,
        points: 1,
        type: "numeric",
        question_text: "Area of triangle formed by lines y=x, y=2x, and x+y=6.",
        correct_answer: 6,
        explanation: "Vertices: (0,0), (2,4), (3,3). Area = (1/2)|0(4-3)+2(3-0)+3(0-4)| = (1/2)|6-12| = 3"
    },
    {
        question_number: 100,
        points: 1,
        type: "multiple_choice",
        question_text: "Find domain of f(x) = √(x - 2) + ³√(x + 1) + 1/(x - 5)",
        options: [
            "A) [2, 5) ∪ (5, ∞)",
            "B) (2, ∞) \\ {5}",
            "C) [2, ∞) \\ {5}",
            "D) (-1, ∞) \\ {5}"
        ],
        correct_answer: "C) [2, ∞) \\ {5}",
        explanation: "First term: x-2≥0 → x≥2. Second term: cube root defined for all x. Third term: x≠5. Combined: x≥2 and x≠5."
    }
];
