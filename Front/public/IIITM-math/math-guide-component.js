// math-guide-component.js
// Enhanced with Domain and Range LaTeX formatting guide

class MathGuideComponent {
    constructor() {
        this.isInitialized = false;
        this.guideHTML = null;
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        // Inject CSS
        this.injectStyles();
        
        // Inject HTML
        this.injectHTML();
        
        // Make globally accessible
        window.MathGuide = {
            show: () => this.show(),
            hide: () => this.hide(),
            toggle: () => this.toggle()
        };
        
        this.isInitialized = true;
        console.log('Math Guide Component initialized');
        
        // Auto-show guide for first-time users
        this.autoShowGuide();
    }

    injectStyles() {
        const styles = `
        /* Math Guide Component Styles - Enhanced Bubble Design */
        .math-guide-overlay {
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
        
        .info-bubble {
            width: 550px;
            max-width: 95vw;
            max-height: 85vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            padding: 25px;
            z-index: 10001;
            box-shadow: 0 15px 50px rgba(0,0,0,0.4);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .info-bubble-close {
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
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
            z-index: 2;
        }
        
        .info-bubble-close:hover {
            background: rgba(255,255,255,0.3);
        }
        
        .info-bubble h3 {
            margin-top: 0;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.4rem;
            padding-right: 40px;
        }
        
        .info-bubble h3 .info-icon {
            font-size: 1.5em;
        }
        
        .info-content {
            flex: 1;
            overflow-y: auto;
            padding-right: 10px;
        }
        
        .info-content::-webkit-scrollbar {
            width: 6px;
        }
        
        .info-content::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
            border-radius: 3px;
        }
        
        .info-content::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
        }
        
        .info-content p {
            margin-bottom: 15px;
            line-height: 1.5;
        }
        
        .info-content ul {
            padding-left: 20px;
            margin-bottom: 20px;
        }
        
        .info-content li {
            margin-bottom: 12px;
            line-height: 1.4;
        }
        
        .info-content strong {
            color: #ffd700;
        }
        
        .info-content code {
            background: rgba(255,255,255,0.2);
            padding: 3px 8px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
            color: #ffd700;
        }
        
        .input-example {
            background: rgba(0,0,0,0.2);
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #ffd700;
        }
        
        .input-example .example-title {
            font-weight: bold;
            margin-bottom: 10px;
            color: #ffd700;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .input-example .example-input {
            font-family: 'Courier New', monospace;
            background: rgba(255,255,255,0.1);
            padding: 12px;
            border-radius: 6px;
            margin: 8px 0;
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            font-size: 1rem;
        }
        
        .input-example .example-output {
            font-size: 0.9rem;
            color: rgba(255,255,255,0.9);
            margin-top: 5px;
            padding-left: 10px;
            border-left: 2px solid rgba(255,215,0,0.5);
        }
        
        .math-tabs {
            display: flex;
            gap: 5px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        
        .math-tab {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.2s;
        }
        
        .math-tab:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .math-tab.active {
            background: #ffd700;
            color: #333;
            font-weight: bold;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .warning-note {
            background: rgba(255,193,7,0.2);
            border-left: 4px solid #ffc107;
            padding: 12px 15px;
            margin: 20px 0;
            border-radius: 0 6px 6px 0;
        }
        
        .warning-note strong {
            color: #ffc107;
        }
        
        .math-guide-btn {
            position: fixed;
            top: 20px;
            right: 100px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .math-guide-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        .math-guide-btn .guide-icon {
            font-size: 24px;
            font-weight: bold;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .math-guide-btn {
                right: 80px;
                width: 45px;
                height: 45px;
                top: 15px;
            }
            
            .info-bubble {
                width: 95vw;
                padding: 20px;
            }
            
            .info-bubble h3 {
                font-size: 1.2rem;
            }
            
            .math-tabs {
                overflow-x: auto;
                padding-bottom: 5px;
            }
        }
        
        @media (max-height: 600px) {
            .info-bubble {
                max-height: 90vh;
            }
        }
        
        /* Print styles */
        @media print {
            .math-guide-overlay,
            .math-guide-btn {
                display: none !important;
            }
        }
        
        /* Animation for bubble */
        @keyframes bubblePop {
            0% {
                transform: scale(0.8);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .info-bubble {
            animation: bubblePop 0.3s ease-out;
        }
        `;
        
        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    injectHTML() {
        this.guideHTML = `
        <div id="mathGuideOverlay" class="math-guide-overlay">
            <div class="info-bubble">
                <button class="info-bubble-close" onclick="MathGuide.hide()">×</button>
                <h3><span class="info-icon">ℹ️</span> Math Answer Formatting Guide</h3>
                <div class="info-content">
                    <p><strong>How to type your answers:</strong> Use these formats in ALL math quizzes</p>
                    
                    <div class="math-tabs">
                        <button class="math-tab active" onclick="switchMathTab('basic')">Basic Symbols</button>
                        <button class="math-tab" onclick="switchMathTab('intervals')">Intervals</button>
                        <button class="math-tab" onclick="switchMathTab('sets')">Sets</button>
                        <button class="math-tab" onclick="switchMathTab('equations')">Equations</button>
                        <button class="math-tab" onclick="switchMathTab('special')">Special</button>
                    </div>
                    
                    <!-- Basic Symbols Tab -->
                    <div id="tab-basic" class="tab-content active">
                        <div class="input-example">
                            <div class="example-title">Infinity</div>
                            <div class="example-input">Type: inf</div>
                            <div class="example-output">Will display as: ∞</div>
                            <div class="example-input">Type: -inf</div>
                            <div class="example-output">Will display as: -∞</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Square Roots</div>
                            <div class="example-input">Type: sqrt(2)</div>
                            <div class="example-output">Will display as: √2</div>
                            <div class="example-input">Type: sqrt(x+1)</div>
                            <div class="example-output">Will display as: √(x+1)</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Fractions</div>
                            <div class="example-input">Type: 1/2</div>
                            <div class="example-output">Will display as: ½</div>
                            <div class="example-input">Type: (x+1)/(x-1)</div>
                            <div class="example-output">Will display as: (x+1)/(x-1)</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Exponents</div>
                            <div class="example-input">Type: x^2</div>
                            <div class="example-output">Will display as: x²</div>
                            <div class="example-input">Type: 2^3</div>
                            <div class="example-output">Will display as: 2³</div>
                        </div>
                    </div>
                    
                    <!-- Intervals Tab -->
                    <div id="tab-intervals" class="tab-content">
                        <p>For <strong>Domain and Range</strong> questions:</p>
                        
                        <div class="input-example">
                            <div class="example-title">Basic Intervals</div>
                            <div class="example-input">Type: (-inf, 3]</div>
                            <div class="example-output">Will display as: (-∞, 3]</div>
                            <div class="example-input">Type: [1, 5)</div>
                            <div class="example-output">Will display as: [1, 5)</div>
                            <div class="example-input">Type: (0, inf)</div>
                            <div class="example-output">Will display as: (0, ∞)</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Union of Intervals</div>
                            <div class="example-input">Type: (-inf, 0] ∪ [1, inf)</div>
                            <div class="example-output">Will display as: (-∞, 0] ∪ [1, ∞)</div>
                            <div class="example-input">Type: (1,2) ∪ (2,3)</div>
                            <div class="example-output">Will display as: (1,2) ∪ (2,3)</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">All Real Numbers</div>
                            <div class="example-input">Type: (-inf, inf)</div>
                            <div class="example-output">Will display as: (-∞, ∞) - All real numbers</div>
                            <div class="example-input">Type: ℝ</div>
                            <div class="example-output">Will display as: ℝ - All real numbers</div>
                        </div>
                    </div>
                    
                    <!-- Sets Tab -->
                    <div id="tab-sets" class="tab-content">
                        <div class="input-example">
                            <div class="example-title">Set Notation</div>
                            <div class="example-input">Type: {1,2,3}</div>
                            <div class="example-output">Will display as: {1,2,3}</div>
                            <div class="example-input">Type: {x | x > 0}</div>
                            <div class="example-output">Will display as: {x | x > 0}</div>
                            <div class="example-input">Type: {x ∈ ℝ | x ≠ 0}</div>
                            <div class="example-output">Will display as: {x ∈ ℝ | x ≠ 0}</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Empty Set</div>
                            <div class="example-input">Type: {}</div>
                            <div class="example-output">Will display as: ∅</div>
                            <div class="example-input">Type: ∅</div>
                            <div class="example-output">Will display as: ∅</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Set Operations</div>
                            <div class="example-input">Type: A ∪ B</div>
                            <div class="example-output">Will display as: A ∪ B</div>
                            <div class="example-input">Type: A ∩ B</div>
                            <div class="example-output">Will display as: A ∩ B</div>
                            <div class="example-input">Type: x ∈ A</div>
                            <div class="example-output">Will display as: x ∈ A</div>
                        </div>
                    </div>
                    
                    <!-- Equations Tab -->
                    <div id="tab-equations" class="tab-content">
                        <div class="input-example">
                            <div class="example-title">Single Solution</div>
                            <div class="example-input">Type: x = 2</div>
                            <div class="example-output">Will display as: x = 2</div>
                            <div class="example-input">Type: y = sqrt(3)</div>
                            <div class="example-output">Will display as: y = √3</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Multiple Solutions</div>
                            <div class="example-input">Type: x = -1/2, sqrt(2)</div>
                            <div class="example-output">Will display as: x = -½, √2</div>
                            <div class="example-input">Type: x = 1, 2, 3</div>
                            <div class="example-output">Will display as: x = 1, 2, 3</div>
                            <div class="example-input">Type: x = 2, x = -3</div>
                            <div class="example-output">Will display as: x = 2, x = -3</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Inequalities</div>
                            <div class="example-input">Type: x > 0</div>
                            <div class="example-output">Will display as: x > 0</div>
                            <div class="example-input">Type: x <= 5</div>
                            <div class="example-output">Will display as: x ≤ 5</div>
                            <div class="example-input">Type: x != 0</div>
                            <div class="example-output">Will display as: x ≠ 0</div>
                        </div>
                    </div>
                    
                    <!-- Special Tab -->
                    <div id="tab-special" class="tab-content">
                        <div class="input-example">
                            <div class="example-title">Greek Letters</div>
                            <div class="example-input">Type: pi</div>
                            <div class="example-output">Will display as: π</div>
                            <div class="example-input">Type: theta</div>
                            <div class="example-output">Will display as: θ</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Coordinates/Points</div>
                            <div class="example-input">Type: (2, 3)</div>
                            <div class="example-output">Will display as: (2, 3)</div>
                            <div class="example-input">Type: (-1/2, sqrt(2))</div>
                            <div class="example-output">Will display as: (-½, √2)</div>
                        </div>
                        
                        <div class="input-example">
                            <div class="example-title">Relations</div>
                            <div class="example-input">Type: R = {(1,2), (2,3)}</div>
                            <div class="example-output">Will display as: R = {(1,2), (2,3)}</div>
                            <div class="example-input">Type: A ⊆ B</div>
                            <div class="example-output">Will display as: A ⊆ B</div>
                        </div>
                    </div>
                    
                    <div class="warning-note">
                        <strong>IMPORTANT RULES FOR ALL QUIZZES:</strong>
                        <ul style="margin-top: 10px; padding-left: 20px;">
                            <li>Use <code>inf</code> for infinity (not ∞ in input)</li>
                            <li>Use <code>sqrt( )</code> for square roots</li>
                            <li>Fractions: <code>a/b</code> or <code>(a)/(b)</code></li>
                            <li>Multiple answers: Separate with commas</li>
                            <li>Spaces are auto-removed: <code>( - inf , 3 ]</code> = <code>(-inf,3]</code></li>
                            <li>Case-insensitive: <code>SQRT</code>, <code>Sqrt</code>, <code>sqrt</code> all work</li>
                            <li>Always check preview below input box!</li>
                        </ul>
                    </div>
                    
                    <p style="margin-top: 20px;"><strong>Works for:</strong> Domain & Range, Linear Functions, Quadratic Functions, Polynomials, Sets & Relations, and ALL other math quizzes</p>
                </div>
            </div>
        </div>
        
        <button id="mathGuideBtn" class="math-guide-btn" onclick="MathGuide.show()">
            <span class="guide-icon">📘</span>
        </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', this.guideHTML);
        
        // Add tab switching function to global scope
        window.switchMathTab = (tabName) => {
            // Remove active class from all tabs
            document.querySelectorAll('.math-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to selected tab and content
            document.querySelector(`.math-tab[onclick="switchMathTab('${tabName}')"]`).classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        };
        
        // Initialize MathJax rendering
        this.initializeMathJax();
    }

    initializeMathJax() {
        if (window.MathJax) {
            // Wait for DOM to be ready
            setTimeout(() => {
                const bubble = document.querySelector('.info-bubble');
                if (bubble) {
                    MathJax.typesetPromise([bubble]).catch(err => 
                        console.log('MathJax typeset error:', err)
                    );
                }
            }, 500);
        }
    }

    show() {
        const overlay = document.getElementById('mathGuideOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Re-render MathJax when shown
            if (window.MathJax) {
                setTimeout(() => {
                    MathJax.typesetPromise().catch(err => 
                        console.log('MathJax re-typeset error:', err)
                    );
                }, 100);
            }
            
            // Auto-hide after 30 seconds if user doesn't interact
            this.setAutoHideTimer();
        }
    }

    hide() {
        const overlay = document.getElementById('mathGuideOverlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            this.clearAutoHideTimer();
        }
    }

    toggle() {
        const overlay = document.getElementById('mathGuideOverlay');
        if (overlay) {
            if (overlay.style.display === 'flex') {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    setAutoHideTimer() {
        this.clearAutoHideTimer();
        this.autoHideTimer = setTimeout(() => {
            if (this.isGuideVisible()) {
                this.hide();
                console.log('Auto-hiding guide after 30 seconds');
            }
        }, 30000); // 30 seconds
    }

    clearAutoHideTimer() {
        if (this.autoHideTimer) {
            clearTimeout(this.autoHideTimer);
            this.autoHideTimer = null;
        }
    }

    isGuideVisible() {
        const overlay = document.getElementById('mathGuideOverlay');
        return overlay && overlay.style.display === 'flex';
    }

    autoShowGuide() {
        // Check if this is first visit to any quiz page
        const firstVisitKey = 'mathGuideFirstVisit';
        const hasSeenGuide = localStorage.getItem(firstVisitKey);
        
        if (!hasSeenGuide) {
            // Wait for page to load completely
            setTimeout(() => {
                this.show();
                localStorage.setItem(firstVisitKey, 'true');
                
                // Set timer to auto-hide after 25 seconds on first visit
                setTimeout(() => {
                    if (this.isGuideVisible()) {
                        this.hide();
                    }
                }, 25000); // 25 seconds for first visit
            }, 1500); // Show after 1.5 seconds on first visit
        }
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MathGuideComponent();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+H or Cmd+Shift+H to toggle guide
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        if (window.MathGuide) {
            window.MathGuide.toggle();
        }
    }
    
    // Escape key to close guide
    if (e.key === 'Escape') {
        if (window.MathGuide) {
            window.MathGuide.hide();
        }
    }
    
    // Question mark key (?) to open guide
    if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        if (window.MathGuide) {
            window.MathGuide.show();
        }
    }
    
    // Number keys 1-5 to switch tabs
    if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (document.getElementById('mathGuideOverlay')?.style.display === 'flex') {
            e.preventDefault();
            const tabNames = ['basic', 'intervals', 'sets', 'equations', 'special'];
            const tabIndex = parseInt(e.key) - 1;
            if (window.switchMathTab && tabNames[tabIndex]) {
                window.switchMathTab(tabNames[tabIndex]);
            }
        }
    }
});

// Make the guide accessible even if page loads slowly
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MathGuideComponent();
    });
} else {
    // DOM already loaded
    new MathGuideComponent();
}

// Add click outside to close functionality
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('mathGuideOverlay');
    const bubble = document.querySelector('.info-bubble');
    const guideBtn = document.getElementById('mathGuideBtn');
    
    if (overlay && overlay.style.display === 'flex' && 
        bubble && !bubble.contains(e.target) && 
        e.target !== guideBtn && !guideBtn.contains(e.target)) {
        if (window.MathGuide) {
            window.MathGuide.hide();
        }
    }
});
