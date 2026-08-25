import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

// Brand colors
const BRAND_ORANGE = '#ff6600';
const BRAND_BLUE = '#0057b8';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [letterAnimations, setLetterAnimations] = useState(Array(9).fill(false));

  const phases = [
    'Initializing Systems...',
    'Loading Components...',
    'Securing Connections...',
    'Ready to Launch...'
  ];

  useEffect(() => {
    const duration = 1100; // 
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Update phase based on progress
        if (newProgress > 25 && phase === 0) setPhase(1);
        else if (newProgress > 50 && phase === 1) setPhase(2);
        else if (newProgress > 75 && phase === 2) setPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 1000);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [phase, onLoadingComplete]);

  // Trigger letter animations sequentially
  useEffect(() => {
    const letters = ['N', 'O', 'V', 'A', ' ', 'G', 'U', 'A', 'R', 'D'];
    letters.forEach((_, index) => {
      setTimeout(() => {
        setLetterAnimations(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 + index * 150);
    });
  }, []);

  return (
    <div className={`professional-loader ${isExiting ? 'loader-exit' : ''}`}>
      {/* Premium Background */}
      <div className="premium-bg">
        <div className="gradient-orbs">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`gradient-orb orb-${i + 1}`}
              style={{
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Subtle Particle System */}
        <div className="elegant-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="elegant-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="center-wrapper">
        <div className="professional-content">
          {/* Logo Animation */}
          <div className="brand-showcase">
            <div className="brand-name-container">
              <div className="brand-name">
                {'NOVA GUARD'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className={`brand-letter ${letterAnimations[index] ? 'animate' : ''} ${letter === ' ' ? 'space' : ''}`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
              
              <div className="brand-underline">
                <div className="underline-fill" />
                <div className="underline-glow" />
              </div>
              
              <div className="brand-tagline">
                Bubble Guard & Polymer Solutions
              </div>
            </div>
            
            {/* Rotating Geometric Elements */}
            <div className="geometric-elements">
              <div className="geometric-ring ring-1">
                <div className="ring-segment" />
                <div className="ring-segment" />
                <div className="ring-segment" />
                <div className="ring-segment" />
              </div>
              <div className="geometric-ring ring-2">
                <div className="ring-dot dot-1" />
                <div className="ring-dot dot-2" />
                <div className="ring-dot dot-3" />
                <div className="ring-dot dot-4" />
                <div className="ring-dot dot-5" />
                <div className="ring-dot dot-6" />
              </div>
              <div className="geometric-ring ring-3">
                <div className="ring-line" />
                <div className="ring-line" />
                <div className="ring-line" />
              </div>
            </div>
          </div>

          {/* Professional Progress Section */}
          <div className="progress-section">
            <div className="phase-text">{phases[phase]}</div>
            
            {/* Premium Progress Bar */}
            <div className="premium-progress-container">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                >
                  <div className="progress-shine" />
                </div>
                <div className="progress-markers">
                  {[25, 50, 75, 100].map((marker, index) => (
                    <div
                      key={marker}
                      className={`progress-marker ${progress >= marker ? 'active' : ''}`}
                      style={{ left: `${marker}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="progress-percentage">{Math.round(progress)}%</div>
            </div>
            
            {/* Professional Loading Indicator */}
            <div className="loading-indicator">
              <div className="indicator-dots">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="indicator-dot"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Border Elements */}
      <div className="corner-elements">
        <div className="corner-element top-left" />
        <div className="corner-element top-right" />
        <div className="corner-element bottom-left" />
        <div className="corner-element bottom-right" />
      </div>
    </div>
  );
};

export default LoadingScreen;