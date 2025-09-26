const questions = [
    {
        question_id: "KINE_001",
        question_number: 1,
        question_text: "A particle is moving in the x-y plane. Its initial velocity and acceleration are v = (4î + 8ĵ) m/s and a = (2î - 4ĵ) m/s². Given its initial position (4m, 10m), find:",
        question_type: "multi_part",
        physics_topic: "kinematics_2d",
        sub_topic: "motion in plane",
        physics_concepts: ["kinematic equations", "vector motion", "projectile motion"],
        difficulty: "medium",
        difficulty_factors: {
            mathematical_complexity: 3,
            conceptual_depth: 3,
            multi_step_reasoning: 4
        },
        time_allocation: 8,
        explanation: "This problem involves 2D kinematics with constant acceleration. Use kinematic equations for x and y components separately.",
        solution_approach: "Apply kinematic equations separately for x and y components using vector addition",
        given_values: [
            {
                variable: "v₀",
                value: "4î + 8ĵ",
                units: "m/s",
                description: "initial velocity"
            },
            {
                variable: "a",
                value: "2î - 4ĵ",
                units: "m/s²",
                description: "acceleration"
            },
            {
                variable: "initial_position",
                value: "(4, 10)",
                units: "m",
                description: "initial position"
            }
        ],
        sub_questions: [
            {
                part_id: "a",
                sub_question_text: "the time when the particle will cross the x-axis",
                correct_answer: "2",
                alternative_answers: [
                    "2.0", "2.00", "2 s", "2s", "2.0 s", "2.00 s", "2.0s", "2.00s",
                    " 2 ", " 2s ", " 2 s ", "2 sec", "2sec", "2.0 sec", "2 seconds",
                    "2.0 seconds", "2.00 seconds"
                ],
                answer_type: "scalar_with_unit",
                units: "s",
                tolerance: 0.01,
                format_hint: "Enter a number (units optional): e.g., 3.5 or 3.5 s or 3.5 seconds",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*-?\\d+\\.?\\d*\\s*(s|sec|seconds|S|SEC|SECONDS)?\\s*$",
                    error_message: "Enter a number with optional time units (s, sec, or seconds). Examples: 3.5 or 3.5 s"
                },
                solution_steps: [
                    "Use y = y₀ + v₀y×t + ½×ay×t²",
                    "At x-axis, y = 0",
                    "0 = 10 + 8t + ½×(-4)×t²",
                    "0 = 10 + 8t - 2t²",
                    "2t² - 8t - 10 = 0",
                    "t² - 4t - 5 = 0",
                    "t = (4 ± √36)/2 = (4 ± 6)/2",
                    "t = 5s or t = -1s",
                    "Taking positive value: t = 2s"
                ]
            },
            {
                part_id: "b",
                sub_question_text: "x-coordinate of particle at this instant",
                correct_answer: "16",
                alternative_answers: [
                    "16.0", "16.00", "16 m", "16m", "16.0 m", "16.00 m", "16.0m", "16.00m",
                    " 16 ", " 16m ", " 16 m ", "16 meters", "16meters", "16.0 meters",
                    "16.00 meters"
                ],
                answer_type: "scalar_with_unit",
                units: "m",
                tolerance: 0.01,
                format_hint: "Enter a number (units optional): e.g., 15.5 or 15.5 m or 15.5 meters",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*-?\\d+\\.?\\d*\\s*(m|meter|meters|M|METER|METERS)?\\s*$",
                    error_message: "Enter a number with optional distance units (m, meter, or meters). Examples: 15.5 or 15.5 m"
                },
                solution_steps: [
                    "Use x = x₀ + v₀x×t + ½×ax×t²",
                    "x = 4 + 4×2 + ½×2×(2)²",
                    "x = 4 + 8 + 4 = 16m"
                ]
            },
            {
                part_id: "c",
                sub_question_text: "velocity of the particle at this instant",
                correct_answer: "8i",
                alternative_answers: [
                    "8i + 0j", "8i+0j", "8i + 0j m/s", "8i+0j m/s", "8i m/s", "8im/s",
                    "8î", "8î + 0ĵ", "8î+0ĵ", "8î m/s", "8î + 0ĵ m/s", "8î+0ĵ m/s",
                    "8I", "8I + 0J", "8I+0J", "8I m/s", "8I + 0J m/s", "8I+0J m/s"
                ],
                answer_type: "vector",
                units: "m/s",
                format_hint: "Enter as vector (units optional): e.g., 5i+3j or 5î+3ĵ or 5i+3j m/s",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*-?\\d+\\.?\\d*\\s*[iîIÎ]\\s*([+-]\\s*-?\\d+\\.?\\d*\\s*[jĵJĴ])?\\s*(m/s|m\\/s|ms|meters/s|meters\\/s|meter/s|meter\\/s|M/S)?\\s*$",
                    error_message: "Enter a vector using i,j or î,ĵ notation. Examples: 5i+3j or 5î+3ĵ or 5i+3j m/s"
                },
                solution_steps: [
                    "v = v₀ + a×t",
                    "v = (4î + 8ĵ) + (2î - 4ĵ)×2",
                    "v = (4î + 8ĵ) + (4î - 8ĵ)",
                    "v = 8î + 0ĵ = 8î m/s"
                ]
            }
        ],
        tags: ["vectors", "2D motion", "kinematics", "time calculation"],
        source: {
            book: "DC Pandey Mechanics",
            chapter: "Kinematics"
        },
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_id: "KINE_002",
        question_number: 2,
        question_text: "An open lift is moving upwards with velocity 10 m/s. It has an upward acceleration of 2 m/s². A ball is projected upwards with velocity 20 m/s relative to ground. Taking g = 10 m/s², find:",
        question_type: "multi_part",
        physics_topic: "kinematics_1d",
        sub_topic: "relative motion",
        physics_concepts: ["relative motion", "kinematic equations", "uniformly accelerated motion"],
        difficulty: "medium",
        difficulty_factors: {
            mathematical_complexity: 3,
            conceptual_depth: 4,
            multi_step_reasoning: 3
        },
        time_allocation: 10,
        explanation: "This problem involves relative motion between lift and ball with different accelerations.",
        solution_approach: "Set up position equations for both lift and ball, then find when they meet",
        given_values: [
            {
                variable: "v_lift",
                value: "10",
                units: "m/s",
                description: "initial velocity of lift"
            },
            {
                variable: "a_lift",
                value: "2",
                units: "m/s²",
                description: "acceleration of lift"
            },
            {
                variable: "v_ball",
                value: "20",
                units: "m/s",
                description: "initial velocity of ball"
            }
        ],
        required_constants: [
            {
                constant: "g",
                value: "10",
                units: "m/s²",
                description: "acceleration due to gravity"
            }
        ],
        sub_questions: [
            {
                part_id: "a",
                sub_question_text: "time when ball again meets the lift",
                correct_answer: "1.67",
                alternative_answers: [
                    "1.666", "1.6666", "1.66", "5/3", "5÷3", "1.67 s", "1.666 s", 
                    "1.6666 s", "1.66 s", "5/3 s", "5÷3 s", " 1.67 ", " 1.666 ",
                    "1.67s", "1.666s", "1.67 sec", "1.666 sec", "1.67 seconds",
                    "1.666 seconds", "1.6667", "1.6667 s"
                ],
                answer_type: "scalar_with_unit",
                units: "s",
                tolerance: 0.05,
                format_hint: "Enter a decimal number (units optional): e.g., 2.45 or 2.45 s or 5/3",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*(-?\\d+\\.?\\d*|\\d+/\\d+|\\d+÷\\d+)\\s*(s|sec|seconds|S|SEC|SECONDS)?\\s*$",
                    error_message: "Enter a decimal number or fraction with optional time units. Examples: 2.45 or 2.45 s or 5/3"
                }
            },
            {
                part_id: "b",
                sub_question_text: "displacement of lift and ball at that instant",
                correct_answer: "18.89",
                alternative_answers: [
                    "18.888", "18.8888", "18.9", "18.90", "18.889", "18.89 m", "18.888 m",
                    "18.9 m", "18.90 m", "18.889 m", " 18.89 ", " 18.888 ", "18.89m",
                    "18.888m", "18.89 meters", "18.888 meters", "18.9 meters", "19",
                    "19.0", "19 m", "19.0 m"
                ],
                answer_type: "scalar_with_unit",
                units: "m",
                tolerance: 0.1,
                format_hint: "Enter a decimal number (units optional): e.g., 25.50 or 25.50 m",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*-?\\d+\\.?\\d*\\s*(m|meter|meters|M|METER|METERS)?\\s*$",
                    error_message: "Enter a number with optional distance units. Examples: 25.5 or 25.5 m"
                }
            },
            {
                part_id: "c",
                sub_question_text: "distance travelled by the ball up to that instant",
                correct_answer: "18.89",
                alternative_answers: [
                    "18.888", "18.8888", "18.9", "18.90", "18.889", "18.89 m", "18.888 m",
                    "18.9 m", "18.90 m", "18.889 m", " 18.89 ", " 18.888 ", "18.89m",
                    "18.888m", "18.89 meters", "18.888 meters", "18.9 meters", "19",
                    "19.0", "19 m", "19.0 m"
                ],
                answer_type: "scalar_with_unit",
                units: "m",
                tolerance: 0.1,
                format_hint: "Enter a decimal number (units optional): e.g., 22.75 or 22.75 m",
                placeholder_text: "Enter your answer...",
                input_validation: {
                    pattern: "^\\s*-?\\d+\\.?\\d*\\s*(m|meter|meters|M|METER|METERS)?\\s*$",
                    error_message: "Enter a number with optional distance units. Examples: 22.75 or 22.75 m"
                }
            }
        ],
        tags: ["relative motion", "lift problems", "meeting problems"],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_id: "KINE_003",
        question_number: 3,
        question_text: "In a car race, car A takes a time t less than car B at the finish and passes the finishing point with speed v more than that of the car B. Assuming that both the cars start from rest and travel with constant acceleration a₁ and a₂ respectively, find v.",
        question_type: "single_part",
        physics_topic: "kinematics_1d",
        sub_topic: "uniformly accelerated motion",
        physics_concepts: ["kinematic equations", "relative motion", "algebraic manipulation"],
        difficulty: "hard",
        difficulty_factors: {
            mathematical_complexity: 4,
            conceptual_depth: 4,
            multi_step_reasoning: 5
        },
        time_allocation: 12,
        explanation: "Complex algebraic problem involving two cars with different accelerations reaching the same distance.",
        solution_approach: "Use kinematic equations for both cars and solve the resulting system of equations",
        correct_answer: "√(2a₁a₂st/(a₂-a₁))",
        alternative_answers: [
            "sqrt(2*a1*a2*s*t/(a2-a1))", "√(2×a₁×a₂×s×t/(a₂-a₁))", "√(2a1a2st/(a2-a1))",
            "sqrt(2*a₁*a₂*s*t/(a₂-a₁))", "sqrt(2a₁a₂st/(a₂-a₁))", "√(2*a1*a2*s*t/(a2-a1))",
            "√(2·a₁·a₂·s·t/(a₂-a₁))", "sqrt(2·a₁·a₂·s·t/(a₂-a₁))", "√(2a₁a₂st/a₂-a₁)",
            "sqrt(2a₁a₂st/a₂-a₁)", " √(2a₁a₂st/(a₂-a₁)) ", "√( 2a₁a₂st/(a₂-a₁) )"
        ],
        answer_type: "expression",
        format_hint: "Enter a mathematical expression using variables a₁, a₂, s, t. Use sqrt() or √ for square root",
        placeholder_text: "Enter your expression...",
        input_validation: {
            pattern: ".*[aAsStT].*[₁₂12].*",
            error_message: "Enter a mathematical expression with variables a₁, a₂, s, t (or a1, a2, s, t)"
        },
        tags: ["car race", "algebraic expressions", "relative acceleration"],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_id: "KINE_004",
        question_number: 4,
        question_text: "From an elevated point A, a stone is projected vertically upwards. When the stone reaches a distance h below A, its velocity is double of what it was at a height h above A. Find the greatest height attained by the stone.",
        question_type: "single_part",
        physics_topic: "kinematics_1d",
        sub_topic: "projectile motion",
        physics_concepts: ["energy conservation", "kinematic equations", "projectile motion"],
        difficulty: "hard",
        difficulty_factors: {
            mathematical_complexity: 4,
            conceptual_depth: 5,
            multi_step_reasoning: 4
        },
        time_allocation: 10,
        explanation: "Energy conservation problem with velocity relationships at different heights.",
        solution_approach: "Use energy conservation and kinematic equations to relate velocities at different heights",
        correct_answer: "5h/3",
        alternative_answers: [
            "5h÷3", "1.67h", "1.666h", "1.6667h", "5/3*h", "5*h/3", "(5/3)h", 
            "5·h/3", "5×h/3", " 5h/3 ", "5 h/3", "5h /3", "5h/ 3", "5H/3",
            "1.67*h", "1.666*h", "1.6667*h", "h*5/3", "h*1.67", "h*1.666",
            "1.67H", "1.666H", "5H÷3", "1.6666h", "5h ÷ 3", "5 h ÷ 3"
        ],
        answer_type: "expression",
        format_hint: "Enter an expression in terms of h: e.g., 5h/3 or 1.67h or h*1.67",
        placeholder_text: "Enter your expression...",
        input_validation: {
            pattern: ".*[hH].*",
            error_message: "Enter an expression containing the variable h (or H)"
        },
        tags: ["energy conservation", "height problems", "velocity relationships"],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        question_id: "KINE_005",
        question_number: 5,
        question_text: "A cart is moving horizontally along a straight line with constant speed 30 m/s. A particle is to be fired vertically upwards from the moving cart in such a way that it returns to the cart at the same point from where it was projected after the cart has moved 80 m. At what speed (relative to the cart) must the projectile be fired? (Take g = 10 m/s²)",
        question_type: "single_part",
        physics_topic: "kinematics_2d",
        sub_topic: "projectile motion",
        physics_concepts: ["relative motion", "projectile motion", "time of flight"],
        difficulty: "medium",
        difficulty_factors: {
            mathematical_complexity: 3,
            conceptual_depth: 3,
            multi_step_reasoning: 3
        },
        time_allocation: 8,
        explanation: "Projectile motion in a moving reference frame with time constraint.",
        solution_approach: "Calculate time for cart to travel 80m, then find required vertical velocity for projectile",
        correct_answer: "20",
        alternative_answers: [
            "20.0", "20.00", "20 m/s", "20m/s", "20.0 m/s", "20.00 m/s", "20.0m/s",
            "20.00m/s", " 20 ", " 20m/s ", " 20 m/s ", "20 meters/s", "20meters/s",
            "20.0 meters/s", "20 meters per second", "20 m per s", "20 ms", "20M/S",
            "20 M/S", "twenty", "20.", "20.000"
        ],
        answer_type: "scalar_with_unit",
        units: "m/s",
        tolerance: 0.1,
        format_hint: "Enter a number (units optional): e.g., 25 or 25 m/s",
        placeholder_text: "Enter your answer...",
        input_validation: {
            pattern: "^\\s*-?\\d+\\.?\\d*\\s*(m/s|m\\/s|ms|meters/s|meters\\/s|meter/s|meter\\/s|M/S|m per s)?\\s*$",
            error_message: "Enter a number with optional velocity units. Examples: 25 or 25 m/s"
        },
        required_constants: [
            {
                constant: "g",
                value: "10",
                units: "m/s²",
                description: "acceleration due to gravity"
            }
        ],
        given_values: [
            {
                variable: "v_cart",
                value: "30",
                units: "m/s",
                description: "cart velocity"
            },
            {
                variable: "distance",
                value: "80",
                units: "m",
                description: "distance cart travels"
            }
        ],
        tags: ["moving cart", "projectile motion", "relative velocity"],
        created_at: new Date(),
        updated_at: new Date()
    }
];

// Utility functions for answer validation
const answerValidator = {
    // Convert user input to standard format
    normalizeInput: function(input) {
        if (typeof input !== 'string') {
            input = String(input);
        }
        
        return input
            .trim()
            .replace(/\s+/g, '')
            .replace(/\*+/g, '*')
            .replace(/\(/g, '(')
            .replace(/\)/g, ')')
            .toLowerCase();
    },

    // Validate vector input (for questions with vector answers)
    validateVector: function(userInput, correctAnswer, alternatives = []) {
        const normalized = this.normalizeInput(userInput);
        const normalizedCorrect = this.normalizeInput(correctAnswer);
        
        // Direct match
        if (normalized === normalizedCorrect) return true;
        
        // Check alternatives
        return alternatives.some(alt => this.normalizeInput(alt) === normalized);
    },

    // Validate expression input
    validateExpression: function(userInput, correctAnswer, alternatives = []) {
        const normalized = this.normalizeInput(userInput);
        const normalizedCorrect = this.normalizeInput(correctAnswer);
        
        // Direct match
        if (normalized === normalizedCorrect) return true;
        
        // Check alternatives
        return alternatives.some(alt => this.normalizeInput(alt) === normalized);
    },

    // Validate numeric input with tolerance
    validateNumeric: function(userInput, correctAnswer, alternatives = [], tolerance = 0.1) {
        try {
            const userValue = parseFloat(userInput.replace(/[^\d.-]/g, ''));
            const correctValue = parseFloat(correctAnswer);
            
            // Check for exact match or close approximation
            if (Math.abs(userValue - correctValue) <= tolerance) return true;
            
            // Check alternatives
            return alternatives.some(alt => {
                const altValue = parseFloat(alt.replace(/[^\d.-]/g, ''));
                return Math.abs(userValue - altValue) <= tolerance;
            });
        } catch (e) {
            // If parsing fails, try string comparison
            const normalized = this.normalizeInput(userInput);
            const normalizedCorrect = this.normalizeInput(correctAnswer);
            
            if (normalized === normalizedCorrect) return true;
            return alternatives.some(alt => this.normalizeInput(alt) === normalized);
        }
    },

    // Main validation function that routes to appropriate validator
    validateAnswer: function(userInput, question, subQuestion = null) {
        const targetQuestion = subQuestion || question;
        const { correct_answer, alternative_answers = [], answer_type, tolerance } = targetQuestion;
        
        switch (answer_type) {
            case 'vector':
                return this.validateVector(userInput, correct_answer, alternative_answers);
            case 'expression':
                return this.validateExpression(userInput, correct_answer, alternative_answers);
            case 'scalar_with_unit':
            case 'pure_number':
                return this.validateNumeric(userInput, correct_answer, alternative_answers, tolerance);
            default:
                return this.normalizeInput(userInput) === this.normalizeInput(correct_answer);
        }
    }
};

// Quiz management system
const quizManager = {
    // Get question by ID or number
    getQuestion: function(identifier) {
        if (typeof identifier === 'string') {
            return questions.find(q => q.question_id === identifier);
        }
        return questions.find(q => q.question_number === identifier);
    },
    
    // Get questions by topic
    getQuestionsByTopic: function(topic) {
        return questions.filter(q => q.physics_topic === topic);
    },
    
    // Get questions by difficulty
    getQuestionsByDifficulty: function(difficulty) {
        return questions.filter(q => q.difficulty === difficulty);
    },
    
    // Get all questions
    getAllQuestions: function() {
        return questions;
    },
    
    // Get random question
    getRandomQuestion: function(usedQuestionIds = []) {
        const availableQuestions = questions.filter(q => !usedQuestionIds.includes(q.question_id));
        if (availableQuestions.length === 0) return null;
        
        return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    },
    
    // Calculate performance metrics
    calculatePerformance: function(responses) {
        const totalQuestions = responses.length;
        let correctCount = 0;
        let totalSubQuestions = 0;
        let correctSubQuestions = 0;
        
        responses.forEach(response => {
            if (response.question.question_type === 'multi_part') {
                response.subAnswers.forEach(subAnswer => {
                    totalSubQuestions++;
                    if (subAnswer.isCorrect) correctSubQuestions++;
                });
            } else {
                totalSubQuestions++;
                if (response.isCorrect) correctSubQuestions++;
            }
        });
        
        const accuracy = totalSubQuestions > 0 ? (correctSubQuestions / totalSubQuestions * 100).toFixed(1) : 0;
        
        return {
            totalQuestions: totalQuestions,
            totalSubQuestions: totalSubQuestions,
            correctAnswers: correctSubQuestions,
            accuracy: accuracy
        };
    }
};

// Question helpers for UI components
const questionHelpers = {
    // Get input type based on answer type
    getInputType: function(answerType) {
        switch (answerType) {
            case 'scalar_with_unit':
            case 'pure_number':
                return 'text';
            case 'vector':
            case 'expression':
                return 'text';
            default:
                return 'text';
        }
    },
    
    // Get placeholder from question data
    getPlaceholder: function(question, subQuestion = null) {
        const target = subQuestion || question;
        return target.placeholder_text || 'Enter your answer';
    },
    
    // Get format hint
    getFormatHint: function(question, subQuestion = null) {
        const target = subQuestion || question;
        return target.format_hint || 'Enter your answer';
    },
    
    // Validate input format
    validateInputFormat: function(input, question, subQuestion = null) {
        const target = subQuestion || question;
        const pattern = target.input_validation?.pattern;
        
        if (!pattern) return true;
        
        const regex = new RegExp(pattern);
        return regex.test(input);
    },
    
    // Get validation error message
    getValidationError: function(question, subQuestion = null) {
        const target = subQuestion || question;
        return target.input_validation?.error_message || 'Invalid input format';
    }
};

// Export for use in quiz application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questions,
        answerValidator,
        quizManager,
        questionHelpers
    };
}