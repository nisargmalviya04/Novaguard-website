import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { FadeIn, TypeWriter, ParallaxSection, useParallax } from './AnimationUtils';

// Hero images with proper public URL
const heroImages = [
  `${process.env.PUBLIC_URL}/images/hero1.jpg`,
  `${process.env.PUBLIC_URL}/images/hero2.jpg`,
  `${process.env.PUBLIC_URL}/images/hero3.jpg`,
  `${process.env.PUBLIC_URL}/images/hero4.jpg`,
  `${process.env.PUBLIC_URL}/images/hero5.jpg`,
];

const TRANSITION_DURATION = 2000; // ms (slower, more premium)
const SLIDE_DURATION = 6000; // ms (slightly faster for better engagement)

const Hero: React.FC = () => {
  const navigate = useNavigate();
  // State for the current hero image index
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationType, setAnimationType] = useState<'liquid' | 'cube' | 'particle' | 'cinematic' | 'prism'>('liquid');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debug: Log the hero images to make sure they're correct
  console.log('Hero Images:', heroImages);
  console.log('Current Image:', heroImages[currentImage]);
  console.log('Next Image:', heroImages[nextImage]);

  // Auto-advance hero image every 5 seconds
  useEffect(() => {
    if (isTransitioning) return;
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(nextImage);
        setNextImage((nextImage + 1) % heroImages.length);
        setIsTransitioning(false);
        // Cycle through different animation types for variety
        const animations: Array<'liquid' | 'cube' | 'particle' | 'cinematic' | 'prism'> =
          ['liquid', 'cube', 'particle', 'cinematic', 'prism'];
        setAnimationType(animations[nextImage % animations.length]);
      }, TRANSITION_DURATION);
    }, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, nextImage, isTransitioning]);

  // Get animation class based on type
  const getAnimationClass = (type: 'in' | 'out') => {
    return `${animationType}-${type}`;
  };

  const handleExploreProducts = () => {
    navigate('/products/bubble-guard');
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <section className="hero rival-hero">
      {/* Animated Gradient Overlay */}
      <div className="hero-animated-gradient" />
      
      {/* Background Images */}
      <div
        className={`hero-image-slider-bg hero-image-current${isTransitioning ? ' ' + getAnimationClass('out') : ''}`}
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      />
      
      <div
        className={`hero-image-slider-bg hero-image-next${isTransitioning ? ' ' + getAnimationClass('in') : ''}`}
        style={{ backgroundImage: `url(${heroImages[nextImage]})` }}
      />
      
      {/* Premium Animation Overlays */}
      {isTransitioning && (
        <>
          {animationType === 'particle' && (
            <div className="particle-explosion">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="explosion-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 50}ms`,
                    animationDuration: `${1000 + Math.random() * 500}ms`
                  }}
                />
              ))}
            </div>
          )}
          
          {animationType === 'cinematic' && (
            <div className="cinematic-bars">
              <div className="cinematic-bar cinematic-bar-top"></div>
              <div className="cinematic-bar cinematic-bar-bottom"></div>
            </div>
          )}
          
          {animationType === 'prism' && (
            <div className="prism-overlay">
              <div className="prism-face prism-face-1"></div>
              <div className="prism-face prism-face-2"></div>
              <div className="prism-face prism-face-3"></div>
            </div>
          )}
        </>
      )}
      
      {/* Floating Particles */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`hero-particle animate-particle animate-delay-${i * 200}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Content with Animations */}
      <div className="rival-hero-content">
        <FadeIn direction="up" delay={0.3}>
          <h1 className="rival-hero-title">
            <TypeWriter
              text="Smart Shield"
              speed={150}
              delay={500}
              className="rival-hero-title-main"
            />
            <br />
            <FadeIn direction="left" delay={1.8}>
              <span className="rival-hero-title-bold">Guard Solutions</span>
            </FadeIn>
          </h1>
        </FadeIn>
        
        <FadeIn direction="up" delay={2.5}>
          <p className="rival-hero-desc">
            Smart Shield Guard Solutions deliver durable, lightweight, and high-impact protective performance.
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={3.0}>
          <div className="hero-cta-buttons">
            <button 
              className="hero-btn primary morph-button hover-glow"
              onClick={handleExploreProducts}
            >
              <span>Explore Products</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button 
              className="hero-btn secondary morph-button hover-lift"
              onClick={handleLearnMore}
            >
              <span>Learn More</span>
              <i className="fas fa-play"></i>
            </button>
          </div>
        </FadeIn>
      </div>
      
      {/* Scroll Indicator */}
      <FadeIn direction="up" delay={3.5}>
        <div className="scroll-indicator animate-bounce">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
          <span className="scroll-text">Scroll to discover</span>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero; 