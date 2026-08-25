import React, { useState } from 'react';
import { FadeIn, ScaleIn, StaggeredList } from './AnimationUtils';
import './PageTransitions.css';
import './PremiumAnimations.css';
import './ProcessSection.css';

const steps = [
  {
    number: '01',
    title: 'Smart Manufacturing Execution',
    desc: 'Automated production for precision and high output.',
    highlight: false,
  },
  {
    number: '02',
    title: 'Performance Testing & Quality Control',
    desc: 'Every sheet is rigorously tested for strength, durability, and performance.',
    highlight: true,
  },
  {
    number: '03',
    title: 'Packaging & Logistics',
    desc: 'Safe, efficient, and timely delivery—locally and globally.',
    highlight: false,
  },
];

const BRAND_ORANGE = '#F26A21';
const BRAND_BLUE = '#0072CE';

const ProcessSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section
      className="gpu-accelerated"
      style={{
        background: 'linear-gradient(135deg, #f7f8fa 0%, #ffffff 50%, #f0f2f5 100%)',
        padding: 'clamp(40px, 8vw, 80px) 0 clamp(30px, 6vw, 60px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.05,
      }}>
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: 'clamp(60px, 8vw, 120px)',
            height: 'clamp(60px, 8vw, 120px)',
            background: 'linear-gradient(45deg, #F26A21, #0072CE)',
            borderRadius: '50%',
            animationDelay: '0s',
          }}
        />
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '8%',
            width: 'clamp(40px, 6vw, 80px)',
            height: 'clamp(40px, 6vw, 80px)',
            background: 'linear-gradient(45deg, #0072CE, #F26A21)',
            borderRadius: '30px',
            animationDelay: '3s',
          }}
        />
      </div>

      <div style={{ 
        maxWidth: 1400, 
        margin: '0 auto', 
        padding: '0 clamp(16px, 4vw, 24px)', 
        position: 'relative', 
        zIndex: 2 
      }}>
        {/* Top Row: Title and Description */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          flexWrap: 'wrap', 
          gap: 'clamp(24px, 4vw, 48px)',
          marginBottom: 'clamp(32px, 6vw, 48px)' 
        }}>
          <FadeIn direction="left" delay={0.2}>
            <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
              <div
                className="shimmer hover-scale"
                style={{
                  color: '#222',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  letterSpacing: 1,
                  marginBottom: 12,
                  display: 'inline-block',
                  padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px)',
                  background: 'linear-gradient(135deg, rgba(242, 106, 33, 0.1), rgba(0, 114, 206, 0.1))',
                  borderRadius: '20px',
                  border: '1px solid rgba(242, 106, 33, 0.2)',
                  cursor: 'pointer',
                }}
              >
                OUR PROCESS
              </div>
              <h2
                className="text-reveal"
                style={{
                  fontSize: 'clamp(32px, 6vw, 54px)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  margin: 0,
                  color: '#2c3e50',
                }}
              >
                Framelined processes{' '}
                <span
                  style={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #F26A21, #0072CE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  className="animate-gradient-x"
                >
                  for<br />optimal efficiency
                </span>
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.4}>
            <div
              className="premium-hover-lift glass-morphism"
              style={{
                flex: '1 1 400px',
                minWidth: '280px',
                maxWidth: '520px',
                color: '#555',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 400,
                lineHeight: 1.6,
                marginTop: 12,
                padding: 'clamp(16px, 3vw, 24px)',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.
            </div>
          </FadeIn>
        </div>

        {/* Main Content: Image + Steps */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'clamp(24px, 4vw, 48px)', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          {/* Left: Image */}
          <ScaleIn delay={0.6}>
            <div
              className="image-zoom premium-card image-reveal"
              style={{
                flex: '1 1 520px',
                minWidth: '280px',
                maxWidth: '600px',
                borderRadius: 'clamp(20px, 4vw, 40px)',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
                minHeight: 'clamp(200px, 40vw, 420px)',
                height: 'clamp(300px, 50vw, 480px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                className="premium-shimmer"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                }}
              />
              <img
                src="/images/ourprocess.jpg"
                alt="Manufacturing process"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  aspectRatio: '4/2.2',
                  transition: 'transform 0.6s ease',
                }}
              />
            </div>
          </ScaleIn>

          {/* Right: Steps */}
          <div style={{ 
            flex: '1 1 520px', 
            minWidth: '280px', 
            maxWidth: '700px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(20px, 3vw, 40px)', 
            justifyContent: 'center' 
          }}>
            <StaggeredList delay={200}>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2.5vw, 32px)',
                    padding: 'clamp(16px, 3vw, 28px) clamp(20px, 3vw, 32px)',
                    borderRadius: 'clamp(20px, 4vw, 40px)',
                    background: '#fff',
                    boxShadow: hovered === i ? '0 8px 32px 0 rgba(0,114,206,0.10), 0 2px 8px 0 rgba(242,106,33,0.10)' : '0 2px 12px 0 rgba(0,0,0,0.04)',
                    border: hovered === i ? `2px solid ${BRAND_ORANGE}` : '2px solid transparent',
                    transform: hovered === i ? 'scale(1.035)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(.4,2,.3,1)',
                    cursor: 'pointer',
                  }}
                >
                  {step.highlight && (
                    <div
                      className="premium-shimmer"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                      }}
                    />
                  )}
                  
                  <div
                    className={step.highlight ? 'animate-pulse' : 'premium-hover-lift'}
                    style={{
                      fontSize: 'clamp(32px, 5vw, 48px)',
                      fontWeight: 700,
                      color: hovered === i ? BRAND_ORANGE : BRAND_BLUE,
                      minWidth: 'clamp(50px, 6vw, 70px)',
                      textAlign: 'left',
                      marginRight: 'clamp(8px, 1.5vw, 12px)',
                      position: 'relative',
                      zIndex: 2,
                      textShadow: step.highlight ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
                    }}
                  >
                    {step.number}
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
                    <div
                      className={step.highlight ? '' : 'premium-gradient-text'}
                      style={{
                        fontWeight: 600,
                        fontSize: 'clamp(18px, 3vw, 26px)',
                        marginBottom: 'clamp(4px, 1vw, 6px)',
                        color: hovered === i ? BRAND_ORANGE : '#222',
                        textShadow: step.highlight ? '0 1px 5px rgba(0,0,0,0.2)' : 'none',
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{
                      fontSize: 'clamp(14px, 2.2vw, 18px)',
                      color: hovered === i ? BRAND_ORANGE : '#555',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>

        {/* Process Flow Indicators */}
        <FadeIn direction="up" delay={1.2}>
          <div style={{
            marginTop: 'clamp(40px, 6vw, 60px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(12px, 2vw, 20px)',
            flexWrap: 'wrap',
          }}>
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className="premium-glow"
                  style={{
                    width: 'clamp(8px, 1.5vw, 12px)',
                    height: 'clamp(8px, 1.5vw, 12px)',
                    borderRadius: '50%',
                    background: index === 1 ? BRAND_ORANGE : BRAND_BLUE,
                    boxShadow: `0 0 15px ${index === 1 ? BRAND_ORANGE : BRAND_BLUE}`,
                    animation: `dotPulse 2s ease-in-out infinite ${index * 0.5}s`,
                  }}
                />
                {index < steps.length - 1 && (
                  <div style={{
                    width: 'clamp(24px, 3vw, 40px)',
                    height: '2px',
                    background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_ORANGE})`,
                    borderRadius: '1px',
                    opacity: 0.6,
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProcessSection; 