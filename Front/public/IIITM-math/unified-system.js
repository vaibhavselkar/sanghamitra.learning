// unified-system.js
// Brings Domain and Range functionality to ALL quizzes
// Just include this ONE file in all quizzes

(function() {
    'use strict';
    
    console.log('🚀 Unified Quiz System Loading...');
    
    // ============================================
    // 1. ANSWER FORMATTING ENGINE (From Domain and Range)
    // ============================================
    
    const answerFormatter = {
        formatForDisplay: function(text) {
            if (!text) return '';
            
            let formatted = String(text)
                .replace(/\s+/g, ' ')
                .trim();
            
            // Fractions
            if (!formatted.includes('\\frac')) {
                formatted = formatted.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');
                formatted = formatted.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                formatted = formatted.replace(/\(([^)]+)\)\s*\/\s*([^\s)]+)/g, '\\frac{$1}{$2}');
                formatted = formatted.replace(/([^\s)]+)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
            }
            
            // Infinity
            formatted = formatted.replace(/inf(inity)?/gi, '∞');
            formatted = formatted.replace(/-∞/g, '-∞');
            
            // Square roots
            formatted = formatted.replace(/sqrt\(([^)]+)\)/g, '√$1');
            
            // Exponents
            formatted = formatted.replace(/(\w+)\^(\d+)/g, '$1^{$2}');
            
            // Convert != to ≠
            formatted = formatted.replace(/!=/g, '≠');
            
            // Convert <= and >=
            formatted = formatted.replace(/<=/g, '≤').replace(/>=/g, '≥');
            
            return formatted;
        },
        
        formatForMathJax: function(text) {
            if (!text) return '';
            
            let latex = String(text)
                .replace(/\s+/g, ' ')
                .trim();
            
            // Infinity
            latex = latex.replace(/inf(inity)?/gi, '\\infty');
            latex = latex.replace(/-\\infty/g, '-\\infty');
            
            // Square roots
            latex = latex.replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');
            
            // Fractions
            if (!latex.includes('\\frac')) {
                latex = latex.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');
                latex = latex.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
                latex = latex.replace(/\(([^)]+)\)\s*\/\s*([^\s)]+)/g, '\\frac{$1}{$2}');
                latex = latex.replace(/([^\s)]+)\s*\/\s*\(([^)]+)\)/g, '\\frac{$1}{$2}');
            }
            
            // Exponents
            latex = latex.replace(/(\w+)\^(\d+)/g, '{$1}^{$2}');
            
            // Inequalities
            latex = latex.replace(/!=/g, '\\neq');
            latex = latex.replace(/<=/g, '\\le').replace(/>=/g, '\\ge');
            
            // Sets
            if (!latex.includes('\\sqrt{') && !latex.includes('\\frac{') && !latex.includes('\\{') && !latex.includes('\\}')) {
                latex = latex.replace(/{/g, '\\{').replace(/}/g, '\\}');
            }
            latex = latex.replace(/\|/g, '\\mid');
            
            // Greek letters
            latex = latex.replace(/pi/gi, '\\pi');
            latex = latex.replace(/theta/gi, '\\theta');
            
            return `\\(${latex}\\)`;
        },
        
        storeAnswerExactly: function(text) {
            if (!text) return '';
            
            let formatted = String(text).trim();
            
            // Convert sqrt() to √ for storage
            formatted = formatted.replace(/sqrt\(([^)]+)\)/g, '√$1');
            
            // Convert inf to ∞ for storage
            formatted = formatted.replace(/\binf\b/gi, '∞');
            formatted = formatted.replace(/-∞/g, '-∞');
            
            return formatted;
        }
    };
    
    // ============================================
    // 2. AUTO-PATCH ALL ANSWER INPUTS
    // ============================================
    
    function patchAnswerInputs() {
        console.log('🔧 Patching answer inputs...');
        
        // Find all answer input fields
        const answerInputs = document.querySelectorAll('input.numeric-input, input[type="text"], textarea');
        
        answerInputs.forEach(input => {
            // Skip if already patched
            if (input.dataset.unifiedPatched === 'true') return;
            
            // Get question index from input ID or parent
            let questionIndex = 0;
            if (input.id && input.id.includes('answerInput-')) {
                questionIndex = input.id.replace('answerInput-', '');
            }
            
            // Add answer preview HTML if not present
            addAnswerPreview(questionIndex, input);
            
            // Patch input events
            patchInputEvents(input, questionIndex);
            
            // Mark as patched
            input.dataset.unifiedPatched = 'true';
        });
        
        console.log(`✅ Patched ${answerInputs.length} answer inputs`);
    }
    
    function addAnswerPreview(questionIndex, input) {
        const previewId = `unified-preview-${questionIndex}`;
        
        // Check if preview already exists
        if (document.getElementById(previewId)) return;
        
        // Create preview HTML
        const previewHTML = `
            <div class="answer-preview unified-preview" id="${previewId}">
                <h4>Answer Preview</h4>
                <div class="answer-preview-content">
                    <div class="preview-row">
                        <span class="preview-label">Formatted view:</span>
                        <div class="preview-value math" id="unified-preview-value-${questionIndex}"></div>
                    </div>
                </div>
                <div class="preview-hint" id="unified-preview-hint-${questionIndex}"></div>
            </div>
        `;
        
        // Insert after input
        input.insertAdjacentHTML('afterend', previewHTML);
    }
    
    function patchInputEvents(input, questionIndex) {
        // Remove any existing listeners to avoid duplicates
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        // Add unified event listeners
        newInput.addEventListener('input', function(e) {
            handleAnswerInput(questionIndex, e.target.value);
        });
        
        newInput.addEventListener('change', function(e) {
            handleAnswerInput(questionIndex, e.target.value);
        });
        
        // Show/hide preview on focus/blur
        newInput.addEventListener('focus', function() {
            const preview = document.getElementById(`unified-preview-${questionIndex}`);
            if (preview) {
                preview.classList.add('visible');
            }
        });
        
        newInput.addEventListener('blur', function() {
            setTimeout(() => {
                const preview = document.getElementById(`unified-preview-${questionIndex}`);
                const activeElement = document.activeElement;
                if (preview && !preview.contains(activeElement)) {
                    preview.classList.remove('visible');
                }
            }, 100);
        });
    }
    
    function handleAnswerInput(questionIndex, value) {
        const trimmedValue = value.trim();
        
        // Store answer (global userAnswers)
        if (trimmedValue) {
            window.userAnswers = window.userAnswers || {};
            window.userAnswers[questionIndex] = answerFormatter.storeAnswerExactly(trimmedValue);
        } else {
            delete window.userAnswers[questionIndex];
        }
        
        // Update preview
        updateAnswerPreview(questionIndex, trimmedValue);
        
        // Update answer status if function exists
        if (typeof window.updateAnswerStatus === 'function') {
            window.updateAnswerStatus();
        }
    }
    
    function updateAnswerPreview(questionIndex, answer) {
        const preview = document.getElementById(`unified-preview-${questionIndex}`);
        if (!preview) return;
        
        if (!answer) {
            preview.classList.remove('visible');
            return;
        }
        
        // Update formatted view
        const formattedEl = document.getElementById(`unified-preview-value-${questionIndex}`);
        if (formattedEl) {
            formattedEl.innerHTML = answerFormatter.formatForMathJax(answer);
        }
        
        // Update hint
        const hintEl = document.getElementById(`unified-preview-hint-${questionIndex}`);
        if (hintEl) {
            let hint = '';
            
            if (answer.includes('inf')) {
                hint = '"inf" is displayed as ∞';
            } else if (answer.includes('sqrt')) {
                hint = '"sqrt(x)" is displayed as √x';
            } else if (answer.match(/\d+\/\d+/)) {
                hint = 'Fractions are displayed properly';
            }
            
            hintEl.textContent = hint;
        }
        
        // Render MathJax
        if (window.MathJax && formattedEl) {
            MathJax.typesetPromise([formattedEl]).catch(err => {
                console.log('MathJax preview error:', err);
            });
        }
        
        preview.classList.add('visible');
    }
    
    // ============================================
    // 3. MATH GUIDE SYSTEM
    // ============================================
    
    function initializeMathGuide() {
        console.log('📘 Initializing Math Guide...');
        
        // Inject CSS if not already present
        injectGuideStyles();
        
        // Add guide button
        addGuideButton();
        
        // Add guide modal
        addGuideModal();
    }
    
    function injectGuideStyles() {
        if (document.getElementById('unified-system-styles')) return;
        
        const styles = `
        /* Unified System Styles */
        .unified-guide-btn {
            position: fixed !important;
            top: 20px !important;
            right: 100px !important;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
            border: none !important;
            width: 50px !important;
            height: 50px !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            z-index: 9999 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
            transition: all 0.3s ease !important;
        }
        
        .unified-guide-btn:hover {
            transform: scale(1.1) !important;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
        }
        
        .unified-guide-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 10000;
            display: none;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .unified-guide-modal {
            width: 500px;
            max-width: 95vw;
            max-height: 85vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.4);
            position: relative;
            overflow-y: auto;
        }
        
        .unified-guide-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .unified-guide-content {
            padding-right: 10px;
        }
        
        .unified-guide-content ul {
            padding-left: 20px;
            margin-bottom: 20px;
        }
        
        .unified-guide-content li {
            margin-bottom: 10px;
            line-height: 1.4;
        }
        
        .unified-guide-content code {
            background: rgba(255,255,255,0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
        
        /* Answer Preview Styles */
        .answer-preview.unified-preview {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
            display: none;
        }
        
        .answer-preview.unified-preview.visible {
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
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        `;
        
        const styleSheet = document.createElement("style");
        styleSheet.id = 'unified-system-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    function addGuideButton() {
        if (document.getElementById('unified-guide-btn')) return;
        
        const guideBtn = document.createElement('button');
        guideBtn.id = 'unified-guide-btn';
        guideBtn.className = 'unified-guide-btn';
        guideBtn.innerHTML = '📘';
        guideBtn.title = 'Math Formatting Guide';
        guideBtn.onclick = showGuide;
        
        document.body.appendChild(guideBtn);
    }
    
    function addGuideModal() {
        if (document.getElementById('unified-guide-overlay')) return;
        
        const guideHTML = `
            <div id="unified-guide-overlay" class="unified-guide-overlay">
                <div class="unified-guide-modal">
                    <button class="unified-guide-close" onclick="hideGuide()">×</button>
                    <h3><span>ℹ️</span> Math Answer Formatting Guide</h3>
                    <div class="unified-guide-content">
                        <p><strong>How to format your answers (Works for ALL quizzes):</strong></p>
                        
                        <ul>
                            <li><strong>Infinity:</strong> Type <code>inf</code> for ∞ or <code>-inf</code> for -∞</li>
                            <li><strong>Square roots:</strong> Type <code>sqrt(2)</code> for √2</li>
                            <li><strong>Fractions:</strong> Type <code>1/2</code> for ½</li>
                            <li><strong>Exponents:</strong> Type <code>x^2</code> for x²</li>
                            <li><strong>Inequalities:</strong> Type <code>!=</code> for ≠, <code><=</code> for ≤</li>
                            <li><strong>Intervals:</strong> Type <code>(-inf, 3]</code> for (-∞, 3]</li>
                            <li><strong>Sets:</strong> Type <code>{x | x > 0}</code> for {x | x > 0}</li>
                            <li><strong>Equations:</strong> Type <code>x = -1/2, sqrt(2)</code> for multiple answers</li>
                        </ul>
                        
                        <p><strong>Quick Examples:</strong></p>
                        <ul>
                            <li>Type: <code>sqrt(2)/2</code> → Shows: \\(\\frac{\\sqrt{2}}{2}\\)</li>
                            <li>Type: <code>(-inf, 3] ∪ [5, inf)</code> → Shows: \\((-\\infty, 3] \\cup [5, \\infty)\\)</li>
                            <li>Type: <code>{x | x != 0}</code> → Shows: \\(\\{x \\mid x \\neq 0\\}\\)</li>
                            <li>Type: <code>x = -1/2, 2/3</code> → Shows: \\(x = -\\frac{1}{2}, \\frac{2}{3}\\)</li>
                        </ul>
                        
                        <p><strong>Important:</strong></p>
                        <ul>
                            <li>Case-insensitive (sqrt, SQRT, Sqrt all work)</li>
                            <li>Spaces are automatically removed</li>
                            <li>Multiple answers: separate with commas</li>
                            <li>Always check the preview below input box</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', guideHTML);
    }
    
    function showGuide() {
        const overlay = document.getElementById('unified-guide-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Render MathJax in guide
            if (window.MathJax) {
                setTimeout(() => {
                    const modal = document.querySelector('.unified-guide-modal');
                    if (modal) {
                        MathJax.typesetPromise([modal]).catch(err => {
                            console.log('MathJax guide error:', err);
                        });
                    }
                }, 100);
            }
        }
    }
    
    function hideGuide() {
        const overlay = document.getElementById('unified-guide-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Make functions globally accessible
    window.showGuide = showGuide;
    window.hideGuide = hideGuide;
    
    // ============================================
    // 4. RESTORE SAVED ANSWERS
    // ============================================
    
    function restoreSavedAnswers() {
        if (!window.userAnswers) return;
        
        console.log('🔍 Restoring saved answers...');
        
        Object.keys(window.userAnswers).forEach(questionIndex => {
            const answer = window.userAnswers[questionIndex];
            if (answer) {
                const input = document.getElementById(`answerInput-${questionIndex}`);
                if (input) {
                    input.value = answer;
                    updateAnswerPreview(questionIndex, answer);
                }
            }
        });
    }
    
    // ============================================
    // 5. INITIALIZATION
    // ============================================
    
    function initializeUnifiedSystem() {
        console.log('🚀 Initializing Unified Quiz System...');
        
        // Initialize Math Guide
        initializeMathGuide();
        
        // Patch answer inputs
        patchAnswerInputs();
        
        // Restore saved answers
        setTimeout(restoreSavedAnswers, 300);
        
        // Set up periodic checking for new inputs
        setInterval(patchAnswerInputs, 1000);
        
        console.log('✅ Unified Quiz System Ready!');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeUnifiedSystem);
    } else {
        initializeUnifiedSystem();
    }
    
    // ============================================
    // 6. GLOBAL HELPER FUNCTIONS
    // ============================================
    
    // Make answerFormatter globally accessible
    window.unifiedAnswerFormatter = answerFormatter;
    
    // Helper function for quiz scripts to use
    window.unifiedHandleAnswer = function(questionIndex, value) {
        handleAnswerInput(questionIndex, value);
    };
    
    // Auto-patch common quiz functions
    if (window.handleNumericInputWithPreview) {
        const originalHandleNumericInput = window.handleNumericInputWithPreview;
        window.handleNumericInputWithPreview = function(questionIndex, value) {
            // Call original if it exists
            if (originalHandleNumericInput) {
                originalHandleNumericInput(questionIndex, value);
            }
            // Also use unified system
            handleAnswerInput(questionIndex, value);
        };
    }
    
    if (window.updateAnswerPreview) {
        const originalUpdateAnswerPreview = window.updateAnswerPreview;
        window.updateAnswerPreview = function(questionIndex, answer) {
            // Call original if it exists
            if (originalUpdateAnswerPreview) {
                originalUpdateAnswerPreview(questionIndex, answer);
            }
            // Also use unified system
            updateAnswerPreview(questionIndex, answer);
        };
    }
    
})();
