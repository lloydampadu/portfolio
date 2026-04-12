"use client";

import React, { useEffect, useState, useRef } from "react";

const ProjectTimeCalculator = () => {
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleCalculate = () => {
    console.log("Starting calculation...");
    // Add your calculation/navigation logic here
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        isDark ? "dark bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <div className="particle-inner"></div>
          </div>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        <span className="theme-toggle-inner">
          {isDark ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Main Content */}
      <div className="content-wrapper">
        <div
          ref={contentRef}
          className="content-container"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="badge-container">
            <span className="badge">
              <span className="badge-dot"></span>
              AI-Powered Estimation
            </span>
          </div>

          <h1 className="main-title">
            <span className="title-line">
              <span className="title-word">Calculate</span>
            </span>
            <span className="title-line">
              <span className="title-word gradient-text">Project Time</span>
            </span>
          </h1>

          <p className="main-description">
            Get intelligent estimates for your next venture. Our advanced
            algorithms analyze project complexity, team resources, and
            historical data to provide accurate timeline projections and budget
            frameworks.
          </p>

          <div className="cta-container">
            <button onClick={handleCalculate} className="cta-button">
              <span className="cta-text">Start Calculation</span>
              <span className="cta-arrow">→</span>
            </button>

            <div className="cta-hint">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Takes only 2 minutes</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">Instant Results</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <div className="feature-text">Data-Driven</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">95% Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeCalculator;
