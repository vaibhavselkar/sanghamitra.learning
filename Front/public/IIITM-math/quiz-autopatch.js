// quiz-autopatch.js
// Automatically makes all quizzes work like domain-and-range
// Just include this ONE file in all quizzes

(function() {
    console.log('Quiz Auto-Patch System Initializing...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAutoPatch);
    } else {
        initializeAutoPatch();
    }
    
    function initializeAutoPatch() {
        console.log('Auto-patching quiz functionality...');
        
        // ============================================
        // 1. INJECT STYLES FOR ANSWER PREVIEW
        // ============================================
        const styles = `
        /* Auto-injected Answer Preview Styles */
        .answer-preview {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
            display: none;
        }
        
        .answer-preview.visible {
            display: block;
            animation: fadeIn 0.3s ease;
        }
        
        .answer-preview h4 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #333;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .answer-preview-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .preview-row {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .preview-label {
            font-weight: 600;
            color: #666;
            min-width: 120px;
            font-size: 14px;
        }
        
        .preview-value {
            flex: 1;
            padding: 8px 12px;
            background: white;
            border-radius: 4px;
            border: 1px solid #dee2e6;
            font-family: 'Courier New', monospace;
            min-height: 40px;
            display: flex;
            align-items: center;
        }
        
        .preview-value.math {
            font-family: inherit;
            font-size: 16px;
            color: #2c3e50;
        }
        
        .preview-hint {
            font-size: 12px;
            color: #6c757d;
            font-style: italic;
            margin-top: 5px;
        }
        
        .input-warning {
            color: #dc3545;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }
        
        .input-warning.visible {
            display: block;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        `;
        
        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
        
        // ============================================
        // 2. PATCH EXISTING FUNCTIONS
        // ============================================
        
        // Store original functions
        const originalFunctions = {
            handleNumericInput: window.handleNumericInput,
            handleNumericInputWithPreview: window.handleNumericInputWithPreview,
            updateAnswerPreview: window.updateAnswerPreview,
            renderCurrentQuestion: window.renderCurrentQuestion,
            restoreAnswer: window.restoreAnswer
        };
        
        // ============================================
        // 3. ANSWER FORMATTING UTILITIES (From domain-and-range)
        // ============================================
        const answerFormatter = {
            formatForDisplay: (text) => {
                if (!text) return '';
                
                let formatted = text.toString()
                    .replace(/\s+/g, ' ')
                    .trim();
                
                // Handle fractions
                if (!formatted.includes('\\frac')) {
                    formatted = formatted.replace(/(\d+)\/(\d+)/g, function(match, num, den) {
                        return `\\frac{${num}}{${den}}`;
                    });
                    
                    formatted = formatted.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                    formatted = formatted.replace(/\(([^)]+)\)\s*\/\s*([^\s)]+)/g, '\\frac{$1}{$2}');
                    formatted = formatted.replace(/([^\s)]+)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                }
                
                // Convert inf to infinity
                formatted = formatted.replace(/inf(inity)?/gi, '∞');
                formatted = formatted.replace(/-∞/g, '-∞');
                
                // Convert sqrt() to √
                formatted = formatted.replace(/sqrt\(([^)]+)\)/g, '√$1');
                
                // Convert exponents
                formatted = formatted.replace(/(\w+)\^(\d+)/g, '$1^{$2}');
                
                // Convert != to ≠
                formatted = formatted.replace(/!=/g, '≠');
                
                // Convert <= and >=
                formatted = formatted.replace(/<=/g, '≤').replace(/>=/g, '≥');
                
                return formatted;
            },
            
            formatForMathJax: (text) => {
                if (!text) return '';
                
                let latex = text.toString()
                    .replace(/\s+/g, ' ')
                    .trim();
                
                latex = latex.replace(/inf(inity)?/gi, '\\infty');
                latex = latex.replace(/-\\infty/g, '-\\infty');
                latex = latex.replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');
                
                if (!latex.includes('\\frac')) {
                    latex = latex.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');
                    latex = latex.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                    latex = latex.replace(/\(([^)]+)\)\s*\/\s*([^\s)]+)/g, '\\frac{$1}{$2}');
                    latex = latex.replace(/([^\s)]+)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                }
                
                latex = latex.replace(/(\w+)\^(\d+)/g, '{$1}^{$2}');
                latex = latex.replace(/!=/g, '\\neq');
                latex = latex.replace(/<=/g, '\\le').replace(/>=/g, '\\ge');
                
                if (!latex.includes('\\sqrt{') && !latex.includes('\\frac{') && !latex.includes('\\{') && !latex.includes('\\}')) {
                    latex = latex.replace(/{/g, '\\{').replace(/}/g, '\\}');
                }
                latex = latex.replace(/\|/g, '\\mid');
                latex = latex.replace(/pi/gi, '\\pi');
                latex = latex.replace(/theta/gi, '\\theta');
                
                return `\\(${latex}\\)`;
            },
            
            storeAnswerExactly: (text) => {
                if (!text) return '';
                
                let formatted = text.toString().trim();
                
                formatted = formatted.replace(/sqrt\(([^)]+)\)/g, '√$1');
                formatted = formatted.replace(/\binf\b/gi, '∞');
                formatted = formatted.replace(/-∞/g, '-∞');
                
                return formatted;
            },
            
            formatForNormalization: (text) => {
                if (!text) return '';
                
                return text.toString()
                    .replace(/\s+/g, '')
                    .replace(/infinity|Infinity|INFINITY|∞/gi, 'inf')
                    .replace(/√(\d+)/g, 'sqrt($1)')
                    .replace(/√\(([^)]+)\)/g, 'sqrt($1)')
                    .replace(/≠/g, '!=')
                    .replace(/≤/g, '<=')
                    .replace(/≥/g, '>=')
                    .toLowerCase();
            },
            
            roundDecimals: (num, decimals = 3) => {
                if (typeof num === 'number') {
                    return parseFloat(num.toFixed(decimals));
                }
                
                const str = num.toString();
                const numbers = str.match(/-?\d+\.\d+/g);
                
                if (numbers) {
                    let result = str;
                    numbers.forEach(n => {
                        const rounded = parseFloat(n).toFixed(decimals);
                        result = result.replace(n, rounded);
                    });
                    return result;
                }
                
                return num;
            }
        };
        
        // ============================================
        // 4. OVERRIDE/INJECT FUNCTIONS
        // ============================================
        
        // Override handleNumericInputWithPreview if it exists
        window.handleNumericInputWithPreview = function(questionIndex, value) {
            console.log('Auto-patched handleNumericInputWithPreview called');
            
            // Call original if exists
            if (originalFunctions.handleNumericInputWithPreview) {
                originalFunctions.handleNumericInputWithPreview(questionIndex, value);
            }
            
            // Also patch the input behavior
            autoPatchInput(questionIndex, value);
        };
        
        // Override handleNumericInput if it exists
        window.handleNumericInput = function(questionIndex, value) {
            console.log('Auto-patched handleNumericInput called');
            
            const trimmedValue = value.trim();
            if (trimmedValue) {
                window.userAnswers = window.userAnswers || {};
                window.userAnswers[questionIndex] = answerFormatter.storeAnswerExactly(trimmedValue);
            } else {
                delete window.userAnswers[questionIndex];
            }
            
            // Call original if exists
            if (originalFunctions.handleNumericInput) {
                originalFunctions.handleNumericInput(questionIndex, value);
            }
        };
        
        // Override updateAnswerPreview if it exists
        window.updateAnswerPreview = function(questionIndex, answer) {
            console.log('Auto-patched updateAnswerPreview called');
            
            const preview = document.getElementById(`answerPreview-${questionIndex}`);
            const warning = document.getElementById(`inputWarning-${questionIndex}`);
            
            if (!preview || !answer.trim()) {
                if (preview) preview.classList.remove('visible');
                if (warning) {
                    warning.classList.remove('visible');
                    warning.textContent = '';
                }
                return;
            }
            
            // Update formatted view
            const formattedEl = document.getElementById(`previewFormatted-${questionIndex}`);
            if (formattedEl) {
                formattedEl.innerHTML = answerFormatter.formatForMathJax(answer);
            }
            
            // Update hint
            const hintEl = document.getElementById(`previewHint-${questionIndex}`);
            let hint = '';
            
            const rounded = answerFormatter.roundDecimals(answer);
            if (rounded && rounded !== answer) {
                hint = `Will be rounded to 3 decimal places: ${rounded}`;
            } else if (answer.includes('inf')) {
                hint = '"inf" is displayed as ∞';
            } else if (answer.includes('sqrt')) {
                hint = '"sqrt(x)" is displayed as √x';
            } else if (answer.match(/\d+\/\d+/)) {
                hint = 'Fractions are displayed properly';
            } else if (answer.includes('{') || answer.includes('}')) {
                hint = 'Curly braces are formatted for display';
            }
            
            if (hintEl) hintEl.textContent = hint;
            
            // Process MathJax
            if (window.MathJax && formattedEl) {
                MathJax.typesetPromise([formattedEl]).catch(err => console.log('MathJax error:', err));
            }
            
            // Show warning
            if (warning) {
                const invalidChars = answer.match(/[^0-9a-zA-Z\s.,+\-*/^(){}|≠≤≥=≠∞√πθ\-\/\\\[\]\$\{\}\|]/);
                if (invalidChars) {
                    warning.textContent = `Warning: Unusual character "${invalidChars[0]}" detected`;
                    warning.classList.add('visible');
                } else {
                    warning.classList.remove('visible');
                }
            }
            
            preview.classList.add('visible');
            
            // Call original if exists
            if (originalFunctions.updateAnswerPreview) {
                originalFunctions.updateAnswerPreview(questionIndex, answer);
            }
        };
        
        // Override renderCurrentQuestion to inject preview HTML
        if (window.renderCurrentQuestion) {
            const originalRenderCurrentQuestion = window.renderCurrentQuestion;
            window.renderCurrentQuestion = function() {
                // Call original
                originalRenderCurrentQuestion();
                
                // After rendering, check if we need to add preview
                setTimeout(() => {
                    addAnswerPreviewIfMissing();
                    patchExistingInputs();
                }, 100);
            };
        }
        
        // Override restoreAnswer to handle preview
        if (window.restoreAnswer) {
            const originalRestoreAnswer = window.restoreAnswer;
            window.restoreAnswer = function() {
                originalRestoreAnswer();
                
                // Also restore preview for saved answers
                setTimeout(() => {
                    restoreAnswerPreview();
                }, 150);
            };
        }
        
        // ============================================
        // 5. HELPER FUNCTIONS
        // ============================================
        
        function autoPatchInput(questionIndex, value) {
            const input = document.getElementById(`answerInput-${questionIndex}`);
            if (input) {
                // Store answer
                const trimmedValue = value.trim();
                if (trimmedValue) {
                    window.userAnswers = window.userAnswers || {};
                    window.userAnswers[questionIndex] = answerFormatter.storeAnswerExactly(trimmedValue);
                } else {
                    delete window.userAnswers[questionIndex];
                }
                
                // Update preview
                window.updateAnswerPreview(questionIndex, value);
            }
        }
        
        function addAnswerPreviewIfMissing() {
            // Find all answer inputs
            const answerInputs = document.querySelectorAll('input.numeric-input, input[type="text"][placeholder*="Enter"], input[placeholder*="e.g."]');
            
            answerInputs.forEach(input => {
                const id = input.id;
                if (!id) return;
                
                const questionIndex = id.replace('answerInput-', '');
                if (!questionIndex) return;
                
                // Check if preview already exists
                const existingPreview = document.getElementById(`answerPreview-${questionIndex}`);
                if (!existingPreview) {
                    // Create preview HTML
                    const previewHTML = `
                    <div class="answer-preview" id="answerPreview-${questionIndex}">
                        <h4>Answer Preview</h4>
                        <div class="answer-preview-content">
                            <div class="preview-row">
                                <span class="preview-label">Formatted view:</span>
                                <div class="preview-value math" id="previewFormatted-${questionIndex}"></div>
                            </div>
                        </div>
                        <div class="preview-hint" id="previewHint-${questionIndex}"></div>
                    </div>
                    `;
                    
                    // Insert after input
                    input.insertAdjacentHTML('afterend', previewHTML);
                    
                    // Also add warning div if missing
                    const existingWarning = document.getElementById(`inputWarning-${questionIndex}`);
                    if (!existingWarning) {
                        input.insertAdjacentHTML('afterend', '<div class="input-warning" id="inputWarning-' + questionIndex + '"></div>');
                    }
                }
            });
        }
        
        function patchExistingInputs() {
            // Add event listeners to all answer inputs
            const answerInputs = document.querySelectorAll('input.numeric-input, input[type="text"][placeholder*="Enter"], input[placeholder*="e.g."]');
            
            answerInputs.forEach(input => {
                const id = input.id;
                if (!id) return;
                
                const questionIndex = id.replace('answerInput-', '');
                if (!questionIndex) return;
                
                // Remove existing listeners to avoid duplicates
                const newInput = input.cloneNode(true);
                input.parentNode.replaceChild(newInput, input);
                
                // Add new listeners
                newInput.addEventListener('input', (e) => {
                    window.handleNumericInputWithPreview(questionIndex, e.target.value);
                });
                
                newInput.addEventListener('change', (e) => {
                    window.handleNumericInputWithPreview(questionIndex, e.target.value);
                });
                
                // Focus/blur for preview
                newInput.addEventListener('focus', () => {
                    const preview = document.getElementById(`answerPreview-${questionIndex}`);
                    if (preview) {
                        preview.classList.add('visible');
                    }
                });
                
                newInput.addEventListener('blur', () => {
                    setTimeout(() => {
                        const preview = document.getElementById(`answerPreview-${questionIndex}`);
                        const activeElement = document.activeElement;
                        if (preview && !preview.contains(activeElement)) {
                            preview.classList.remove('visible');
                        }
                    }, 100);
                });
            });
        }
        
        function restoreAnswerPreview() {
            if (!window.userAnswers) return;
            
            Object.keys(window.userAnswers).forEach(questionIndex => {
                const answer = window.userAnswers[questionIndex];
                if (answer && answer.trim()) {
                    const input = document.getElementById(`answerInput-${questionIndex}`);
                    if (input) {
                        input.value = answer;
                        
                        // Update preview
                        window.updateAnswerPreview(questionIndex, answer);
                        
                        const preview = document.getElementById(`answerPreview-${questionIndex}`);
                        if (preview) {
                            preview.classList.add('visible');
                        }
                    }
                }
            });
        }
        
        // ============================================
        // 6. INITIAL PATCHING
        // ============================================
        
        // Run initial patching after a short delay
        setTimeout(() => {
            addAnswerPreviewIfMissing();
            patchExistingInputs();
            restoreAnswerPreview();
            
            console.log('Quiz Auto-Patch System successfully applied!');
        }, 500);
    }
})();
