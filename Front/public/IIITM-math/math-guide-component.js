// math-guide-component.js
// Reusable Math Formatting Guide for all quiz pages

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
    }

    injectStyles() {
        const styles = `
        /* Math Guide Component Styles */
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
        
        .math-guide-modal {
            width: 800px;
            max-width: 95vw;
            max-height: 85vh;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .math-guide-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .math-guide-header h2 {
            margin: 0;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .math-guide-close {
            background: none;
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
        }
        
        .math-guide-close:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .math-guide-content {
            flex: 1;
            overflow-y: auto;
            padding: 30px;
        }
        
        .guide-section {
            margin-bottom: 30px;
        }
        
        .guide-section h3 {
            color: #667eea;
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 10px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .quick-examples {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
        }
        
        .example-row {
            display: flex;
            align-items: center;
            margin: 10px 0;
            padding: 10px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
        }
        
        .example-input {
            flex: 1;
            font-family: 'Courier New', monospace;
            background: #f1f3f5;
            padding: 8px 12px;
            border-radius: 6px;
            color: #d63384;
        }
        
        .example-arrow {
            margin: 0 15px;
            color: #667eea;
            font-weight: bold;
            font-size: 1.2em;
        }
        
        .example-output {
            flex: 1;
            text-align: center;
            font-size: 1.1em;
        }
        
        .symbols-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        
        .symbol-card {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .symbol-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .symbol-code {
            font-family: 'Courier New', monospace;
            color: #d63384;
            font-size: 1.1em;
            margin-bottom: 5px;
        }
        
        .symbol-result {
            font-size: 1.2em;
            font-weight: 600;
            color: #2c3e50;
        }
        
        .format-types {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .format-type {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 10px;
            padding: 20px;
            border-left: 4px solid #667eea;
        }
        
        .format-type h4 {
            color: #495057;
            margin-top: 0;
            margin-bottom: 15px;
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
        
        @media (max-width: 768px) {
            .math-guide-btn {
                right: 80px;
                width: 45px;
                height: 45px;
            }
            
            .symbols-grid {
                grid-template-columns: 1fr;
            }
            
            .example-row {
                flex-direction: column;
                gap: 10px;
            }
            
            .example-arrow {
                transform: rotate(90deg);
            }
        }
        
        @media print {
            .math-guide-overlay,
            .math-guide-btn {
                display: none !important;
            }
        }
        `;
        
        const styleSheet = document.createElement("style");
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    injectHTML() {
        this.guideHTML = `
        <div id="mathGuideOverlay" class="math-guide-overlay">
            <div class="math-guide-modal">
                <div class="math-guide-header">
                    <h2><span>📘</span> Math Answer Formatting Guide</h2>
                    <button class="math-guide-close" onclick="MathGuide.hide()">×</button>
                </div>
                <div class="math-guide-content">
                    <!-- Quick Examples -->
                    <div class="guide-section">
                        <h3>🚀 Quick Examples</h3>
                        <div class="quick-examples">
                            <div class="example-row">
                                <div class="example-input">Type: <code>(-inf, 3]</code></div>
                                <div class="example-arrow">→</div>
                                <div class="example-output">$(-\\infty, 3]$</div>
                            </div>
                            <div class="example-row">
                                <div class="example-input">Type: <code>sqrt(2)/2</code></div>
                                <div class="example-arrow">→</div>
                                <div class="example-output">$\\frac{\\sqrt{2}}{2}$</div>
                            </div>
                            <div class="example-row">
                                <div class="example-input">Type: <code>{x | x ≠ 0}</code></div>
                                <div class="example-arrow">→</div>
                                <div class="example-output">$\\{x \\mid x \\neq 0\\}$</div>
                            </div>
                            <div class="example-row">
                                <div class="example-input">Type: <code>x = -1/2, sqrt(3)</code></div>
                                <div class="example-arrow">→</div>
                                <div class="example-output">$x = -\\frac{1}{2}, \\sqrt{3}$</div>
                            </div>
                        </div>
                    </div>

                    <!-- Basic Symbols -->
                    <div class="guide-section">
                        <h3>🔤 Basic Symbols</h3>
                        <div class="symbols-grid">
                            <div class="symbol-card">
                                <div class="symbol-code"><code>inf</code> or <code>infty</code></div>
                                <div class="symbol-result">$\\infty$</div>
                                <div class="symbol-desc">Infinity</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>sqrt(x)</code></div>
                                <div class="symbol-result">$\\sqrt{x}$</div>
                                <div class="symbol-desc">Square root</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>1/2</code></div>
                                <div class="symbol-result">$\\frac{1}{2}$</div>
                                <div class="symbol-desc">Fraction</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>x^2</code></div>
                                <div class="symbol-result">$x^2$</div>
                                <div class="symbol-desc">Exponent</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>!=</code></div>
                                <div class="symbol-result">$\\neq$</div>
                                <div class="symbol-desc">Not equal</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code><=</code></div>
                                <div class="symbol-result">$\\leq$</div>
                                <div class="symbol-desc">Less or equal</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>>=</code></div>
                                <div class="symbol-result">$\\geq$</div>
                                <div class="symbol-desc">Greater or equal</div>
                            </div>
                            <div class="symbol-card">
                                <div class="symbol-code"><code>pi</code></div>
                                <div class="symbol-result">$\\pi$</div>
                                <div class="symbol-desc">Pi constant</div>
                            </div>
                        </div>
                    </div>

                    <!-- Format Types -->
                    <div class="guide-section">
                        <h3>🎯 Answer Formats</h3>
                        <div class="format-types">
                            <div class="format-type">
                                <h4>Interval Notation</h4>
                                <div class="example-row">
                                    <div class="example-input"><code>(-inf, 5]</code> → $(-\\infty, 5]$</div>
                                </div>
                                <div class="example-row">
                                    <div class="example-input"><code>[1, 10)</code> → $[1, 10)$</div>
                                </div>
                                <div class="example-row">
                                    <div class="example-input"><code>[0,∞)∪(2,5)</code> → $[0,\\infty)\\cup(2,5)$</div>
                                </div>
                            </div>
                            
                            <div class="format-type">
                                <h4>Set Notation</h4>
                                <div class="example-row">
                                    <div class="example-input"><code>{x | x > 0}</code> → $\\{x \\mid x > 0\\}$</div>
                                </div>
                                <div class="example-row">
                                    <div class="example-input"><code>{1,2,3}</code> → $\\{1,2,3\\}$</div>
                                </div>
                            </div>
                            
                            <div class="format-type">
                                <h4>Equations & Coordinates</h4>
                                <div class="example-row">
                                    <div class="example-input"><code>x = -1/2, sqrt(2)</code> → $x = -\\frac{1}{2}, \\sqrt{2}$</div>
                                </div>
                                <div class="example-row">
                                    <div class="example-input"><code>(2, -1/3)</code> → $(2, -\\frac{1}{3})$</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tips -->
                    <div class="guide-section">
                        <h3>💡 Important Tips</h3>
                        <div class="format-type">
                            <ul>
                                <li><strong>Case-insensitive:</strong> <code>sqrt</code>, <code>SQRT</code>, <code>Sqrt</code> all work</li>
                                <li><strong>Spaces auto-removed:</strong> <code>( - inf , 3 ]</code> becomes $(-\\infty, 3]$</li>
                                <li><strong>Multiple answers:</strong> Separate with commas: <code>x = 2, 3, -1</code></li>
                                <li><strong>Grouping:</strong> Use parentheses for complex expressions</li>
                                <li><strong>Preview:</strong> Always check the preview below input box</li>
                                <li><strong>Decimals:</strong> Round to 3 decimal places if needed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <button id="mathGuideBtn" class="math-guide-btn" onclick="MathGuide.show()">
            <span class="guide-icon">📘</span>
        </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', this.guideHTML);
        
        // Initialize MathJax rendering for the guide
        this.initializeMathJax();
    }

    initializeMathJax() {
        if (window.MathJax) {
            // Wait for DOM to be ready
            setTimeout(() => {
                const modal = document.querySelector('.math-guide-modal');
                if (modal) {
                    MathJax.typesetPromise([modal]).catch(err => 
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
        }
    }

    hide() {
        const overlay = document.getElementById('mathGuideOverlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
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
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MathGuideComponent();
});
