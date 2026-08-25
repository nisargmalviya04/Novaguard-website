import React from 'react';
import { FadeIn, ScaleIn, ParallaxSection } from './AnimationUtils';
import './BubbleGuardPage.css'; // Reuse for base styles
import './PageTransitions.css';
import './PremiumAnimations.css';

const features = [
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#7BA23F" fillOpacity="0.08"/><path d="M13 27V17.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V27" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 22v-2.5" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round"/><path d="M16 27v-2.5" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round"/><path d="M24 27v-2.5" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Innovation That Stands Apart',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#7BA23F" fillOpacity="0.08"/><path d="M20 12v8l6 3" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="20" r="9" stroke="#7BA23F" strokeWidth="2"/></svg>
    ),
    title: '24/7 Lightning-Fast Delivery',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#7BA23F" fillOpacity="0.08"/><rect x="12" y="16" width="16" height="12" rx="2" stroke="#7BA23F" strokeWidth="2"/><path d="M16 16v-2a4 4 0 0 1 8 0v2" stroke="#7BA23F" strokeWidth="2"/></svg>
    ),
    title: 'Safeguarding Your Product with Advanced Packaging',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#7BA23F" fillOpacity="0.08"/><path d="M20 28c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" stroke="#7BA23F" strokeWidth="2"/><path d="M20 16v4l2 2" stroke="#7BA23F" strokeWidth="2"/></svg>
    ),
    title: 'Eco-Smart Materials',
  },
];

const BubbleGuardIndustrySection: React.FC = () => {
  const handleExploreSolutions = () => {
    // Scroll to Our Story section
    const ourStorySection = document.querySelector('.our-story-section');
    if (ourStorySection) {
      ourStorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="bubble-guard-industry-section gpu-accelerated"
      style={{
        background: `url('/images/workers.jpg') center/cover no-repeat`,
        position: 'relative',
        minHeight: '900px',
        marginBottom: '0',
        padding: 0,
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Overlay */}
      <div
        className="animate-gradient-xy"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 30, 40, 0.8), rgba(123, 162, 63, 0.1), rgba(20, 30, 40, 0.9), rgba(123, 162, 63, 0.05))',
          width: '100%',
          minHeight: '800px',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Floating Particles */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}>
          {[...Array(6)].map((_, i) => (  
            <div
              key={i}
              className="animate-particle"
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(123, 162, 63, 0.4)',
                borderRadius: '50%',
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>

        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: 600,
          gap: '32px',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            {/* Animated Badge */}
            <FadeIn direction="down" delay={0.3}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, justifyContent: 'center', width: '100%' }}>
                <span
                  className="shimmer hover-scale"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #eaf6e2, #f5faf0)',
                    color: '#7BA23F',
                    fontWeight: 600,
                    borderRadius: 24,
                    padding: '8px 20px',
                    fontSize: 18,
                    border: '1px solid rgba(123, 162, 63, 0.2)',
                    boxShadow: '0 4px 15px rgba(123, 162, 63, 0.2)',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{ marginRight: 8 }}
                    className="animate-spin"
                  >
                    <circle cx="12" cy="12" r="10" fill="#7BA23F" fillOpacity="0.15"/>
                    <path d="M12 7v5l4 2" stroke="#7BA23F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Our Products Uses
                </span>
              </div>
            </FadeIn>

            {/* Animated Main Heading */}
            <FadeIn direction="up" delay={0.6}>
              <h1
                className="text-reveal"
                style={{
                  color: '#fff',
                  fontSize: 48,
                  fontWeight: 600,
                  lineHeight: 1.1,
                  marginBottom: 16,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                Complete Solutions for the <br />
                <span
                  style={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #fff, #7BA23F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  className="animate-gradient-x"
                >
                  Bubble Guard Industry
                </span>
              </h1>
            </FadeIn>

            {/* Animated Description */}
            <FadeIn direction="up" delay={1.0}>
              <div
                className="hover-lift"
                style={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  marginTop: 24,
                  maxWidth: 700,
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                At Nova Guard Polyplast, we offer end-to-end services designed to elevate industrial performance. Our expertise spans precision manufacturing of Bubble Guard Sheets, advanced automation processes, customized product solutions, and streamlined logistics. Every service is built to deliver unmatched quality, efficiency, and reliability—ensuring our partners receive comprehensive support from concept to completion.
              </div>
            </FadeIn>

            {/* Call-to-Action Button */}
            <FadeIn direction="up" delay={1.4}>
              <button
                className="btn-animate morph-button hover-glow"
                style={{
                  marginTop: '40px',
                  padding: '15px 35px',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #7BA23F, #6A9A1F)',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(123, 162, 63, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                onClick={handleExploreSolutions}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(123, 162, 63, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(123, 162, 63, 0.4)';
                }}
              >
                Explore Our Solutions
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
      {/* Features card removed from here. Only exists in App.tsx now. */}
      {/* Responsive tweaks */}
      <style>{`
        @media (max-width: 1200px) {
          .bubble-guard-industry-section .container > div[style*='background: #fff'] {
            max-width: 98vw !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
        }
        @media (max-width: 900px) {
          .bubble-guard-industry-section .container > div[style*='background: #fff'] {
            flex-direction: column !important;
            border-radius: 36px !important;
            min-width: 0 !important;
            max-width: 99vw !important;
            padding: 24px 4px !important;
          }
          .bubble-guard-industry-section .container > div[style*='background: #fff'] > div {
            border-right: none !important;
            border-bottom: 1px solid #e5e5e5 !important;
            padding-bottom: 18px !important;
            margin-bottom: 18px !important;
          }
          .bubble-guard-industry-section .container > div[style*='background: #fff'] > div:last-child {
            border-bottom: none !important;
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BubbleGuardIndustrySection;