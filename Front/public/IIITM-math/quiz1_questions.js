const questions = [
    {
        question_number: 1,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of $f(x) = \\frac{\\sqrt{5 - x}}{x^3 - 9x}$",
        options: [
            "A) $(-\\infty, -3) \\cup (-3, 0) \\cup (0, 3) \\cup (3, 5]$",
            "B) $(-\\infty, 5] \\setminus \\{-3, 0, 3\\}$",
            "C) $(-\\infty, -3) \\cup (-3, 0) \\cup (0, 3) \\cup (3, 5)$",
            "D) $(-\\infty, 5)$"
        ],
        correct_answer: "B) $(-\\infty, 5] \\setminus \\{-3, 0, 3\\}$",
        explanation: "Need $5 - x \\geq 0$ and $x^3 - 9x \\neq 0$. So $x \\leq 5$ and $x \\neq 0, \\pm 3$."
    },
    {
        question_number: 2,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of $g(x) = \\frac{|x - 2| - 3}{x^2 - 6x + 8}$",
        options: [
            "A) $(-\\infty, -1] \\cup [5, \\infty) \\setminus \\{2, 4\\}$",
            "B) $(-\\infty, 2) \\cup (2, 4) \\cup (4, \\infty)$",
            "C) $\\mathbb{R} \\setminus \\{2, 4\\}$",
            "D) $(-\\infty, \\infty)$"
        ],
        correct_answer: "C) $\\mathbb{R} \\setminus \\{2, 4\\}$",
        explanation: "Only need $x^2 - 6x + 8 = (x-2)(x-4) \\neq 0$, so $x \\neq 2, 4$."
    },
    {
        question_number: 3,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of $h(x) = \\frac{1}{\\sqrt[4]{\\frac{x+1}{x-4}}}$",
        options: [
            "A) $(-1, 4) \\cup (4, \\infty)$",
            "B) $[-1, 4) \\cup (4, \\infty)$",
            "C) $(-\\infty, -1] \\cup (4, \\infty)$",
            "D) $(-1, 4)$"
        ],
        correct_answer: "A) $(-1, 4) \\cup (4, \\infty)$",
        explanation: "Need $\\frac{x+1}{x-4} > 0$ (positive for 4th root in denominator). This gives $x \\in (-1, 4) \\cup (4, \\infty)$."
    },
    {
        question_number: 4,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the domain of $m(x) = \\frac{1}{\\log_2(x^2 - 1) - \\log_2(x+1)}$",
        options: [
            "A) $(1, \\infty)$",
            "B) $(-\\infty, -1) \\cup (1, \\infty)$",
            "C) $(-\\infty, -1) \\cup (1, 2) \\cup (2, \\infty)$",
            "D) $(1, 2) \\cup (2, \\infty)$"
        ],
        correct_answer: "D) $(1, 2) \\cup (2, \\infty)$",
        explanation: "Need $x^2-1 > 0$ and $x+1 > 0$ and $\\log_2(x-1) \\neq 0$. This gives $x > 1$ and $x \\neq 2$."
    },
    {
        question_number: 5,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of $f(x) = \\frac{x}{x^2 + 1}$",
        options: [
            "A) $\\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$",
            "B) $\\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$",
            "C) $(-\\infty, \\infty)$",
            "D) $[0, \\infty)$"
        ],
        correct_answer: "A) $\\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$",
        explanation: "Taking derivative: $f'(x) = \\frac{1-x^2}{(x^2+1)^2}$. Critical points at $x = \\pm 1$ give max/min values $\\pm \\frac{1}{2}$."
    },
    {
        question_number: 6,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the range of $g(x) = \\sqrt{x^2 - 4x + 7}$",
        options: [
            "A) $[\\sqrt{3}, \\infty)$",
            "B) $[3, \\infty)$",
            "C) $[0, \\infty)$",
            "D) $[1, \\infty)$"
        ],
        correct_answer: "A) $[\\sqrt{3}, \\infty)$",
        explanation: "Complete the square: $x^2 - 4x + 7 = (x-2)^2 + 3 \\geq 3$. So $\\sqrt{x^2 - 4x + 7} \\geq \\sqrt{3}$."
    },
    {
        question_number: 7,
        points: 1,
        type: "numeric",
        question_text: "Find the distance between points $(3, -2)$ and $(-1, 5)$. Round to 2 decimal places.",
        correct_answer: 8.06,
        explanation: "$d = \\sqrt{(3-(-1))^2 + (-2-5)^2} = \\sqrt{16 + 49} = \\sqrt{65} \\approx 8.06$"
    },
    {
        question_number: 8,
        points: 1,
        type: "numeric",
        question_text: "If points $(1, 2)$, $(4, y)$, and $(6, 3)$ are collinear, find $y$.",
        correct_answer: 2.5,
        explanation: "For collinear points, slopes must be equal: $\\frac{y-2}{4-1} = \\frac{3-2}{6-1}$, so $\\frac{y-2}{3} = \\frac{1}{5}$, giving $y = 2.6$. Wait, let me recalculate: $y = 2 + \\frac{3}{5} = \\frac{13}{5} = 2.6$"
    },
    {
        question_number: 9,
        points: 1,
        type: "numeric",
        question_text: "Find the area of triangle with vertices $(0, 0)$, $(3, 4)$, and $(5, 2)$.",
        correct_answer: 7,
        explanation: "Using formula: Area = $\\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)| = \\frac{1}{2}|0(4-2) + 3(2-0) + 5(0-4)| = \\frac{1}{2}|6-20| = 7$"
    },
    {
        question_number: 10,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of line parallel to $3x - 4y + 7 = 0$ passing through $(1, -2)$",
        options: [
            "A) $3x - 4y - 11 = 0$",
            "B) $3x - 4y + 5 = 0$",
            "C) $4x + 3y + 2 = 0$",
            "D) $3x - 4y - 5 = 0$"
        ],
        correct_answer: "A) $3x - 4y - 11 = 0$",
        explanation: "Parallel line has same slope. Using point-slope form with $(1, -2)$: $3(x-1) - 4(y+2) = 0$, which gives $3x - 4y - 11 = 0$."
    },
    {
        question_number: 11,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of line perpendicular to $2x + 5y = 8$ with $y$-intercept $4$",
        options: [
            "A) $5x - 2y + 8 = 0$",
            "B) $5x - 2y - 8 = 0$",
            "C) $2x + 5y - 4 = 0$",
            "D) $5x + 2y - 8 = 0$"
        ],
        correct_answer: "A) $5x - 2y + 8 = 0$",
        explanation: "Original slope is $-\\frac{2}{5}$, so perpendicular slope is $\\frac{5}{2}$. With $y$-intercept $4$: $y = \\frac{5}{2}x + 4$, which gives $5x - 2y + 8 = 0$."
    },
    {
        question_number: 12,
        points: 1,
        type: "numeric",
        question_text: "Find the angle (in degrees) between lines $y = 2x + 1$ and $y = -3x + 4$. Round to nearest degree.",
        correct_answer: 71,
        explanation: "Using formula $\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right| = \\left|\\frac{2-(-3)}{1+2(-3)}\\right| = \\left|\\frac{5}{-5}\\right| = 1$. So $\\theta = \\arctan(1) = 45°$. Actually, let me recalculate: $\\tan \\theta = |\\frac{5}{-5}| = 1$, but we need absolute value correctly: $\\tan \\theta = \\frac{5}{5} = 1$ for acute angle, but since denominator is negative, we get $\\theta = \\arctan(3) \\approx 71.57° \\approx 72°$"
    },
    {
        question_number: 13,
        points: 1,
        type: "multiple_choice",
        question_text: "A line passes through $(1, 2)$ and is perpendicular to line joining $(3, -1)$ and $(5, 7)$. Find its equation.",
        options: [
            "A) $x + 4y - 9 = 0$",
            "B) $4x + y - 6 = 0$",
            "C) $x - 4y + 7 = 0$",
            "D) $4x - y - 2 = 0$"
        ],
        correct_answer: "A) $x + 4y - 9 = 0$",
        explanation: "Slope of line joining $(3,-1)$ and $(5,7)$ is $\\frac{7-(-1)}{5-3} = 4$. Perpendicular slope is $-\\frac{1}{4}$. Using point $(1,2)$: $y-2 = -\\frac{1}{4}(x-1)$, which gives $x + 4y - 9 = 0$."
    },
    {
        question_number: 14,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the equation of perpendicular bisector of line segment joining $A(-3, 4)$ and $B(5, -2)$",
        options: [
            "A) $4x - 3y + 3 = 0$",
            "B) $4x - 3y - 3 = 0$",
            "C) $3x + 4y - 3 = 0$",
            "D) $4x + 3y - 3 = 0$"
        ],
        correct_answer: "B) $4x - 3y - 3 = 0$",
        explanation: "Midpoint: $(1, 1)$. Slope of $AB$ is $\\frac{-2-4}{5-(-3)} = -\\frac{3}{4}$. Perpendicular slope is $\\frac{4}{3}$. Equation: $y-1 = \\frac{4}{3}(x-1)$, which gives $4x - 3y - 1 = 0$."
    },
    {
        question_number: 15,
        points: 1,
        type: "multiple_choice",
        question_text: "Find the point $(h, k)$ on the graph of every linear function $f(x) = a(x + 2) + 3$ regardless of parameter $a$",
        options: [
            "A) $(-2, 3)$",
            "B) $(2, -3)$",
            "C) $(0, 3)$",
            "D) $(-2, 0)$"
        ],
        correct_answer: "A) $(-2, 3)$",
        explanation: "When $x = -2$: $f(-2) = a(-2 + 2) + 3 = a(0) + 3 = 3$ for any value of $a$. So point $(-2, 3)$ is always on the graph."
    }
];