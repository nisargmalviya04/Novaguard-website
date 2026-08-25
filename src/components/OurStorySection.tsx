import React from 'react';
import { FadeIn, ScaleIn, StaggeredList } from './AnimationUtils';
import CounterAnimation from './CounterAnimation';
import './OurStorySection.css';

const BRAND_ORANGE = '#F26A21';
const BRAND_BLUE = '#0072CE';

const stats = [
  { value: '250k Sq. Ft+', label: 'Daily Production Capacity' },
  { value: '7+', label: 'Global Exports' },
  { value: '100+', label: 'Cross-Sector Utility' },
];

const OurStorySection: React.FC = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #fff 0%, #fafbfc 100%)',
        padding: '100px 0 0 0',
        minHeight: 600,
        position: 'relative',
      }}
    >


      {/* Premium Floating Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: i % 2 === 0 ? BRAND_ORANGE : BRAND_BLUE,
              borderRadius: '50%',
              opacity: 0.3,
              animation: `float-${i} 8s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        {/* Animated Badge */}
        <FadeIn direction="right" delay={0.2}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            <span 
              className="premium-badge"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                background: 'linear-gradient(135deg, #ffe5d1 0%, #fff5f0 100%)', 
                color: BRAND_ORANGE, 
                fontWeight: 600, 
                borderRadius: 24, 
                padding: '8px 20px', 
                fontSize: 18, 
                marginRight: 16,
                border: '1px solid rgba(242, 106, 33, 0.2)',
                boxShadow: '0 4px 15px rgba(242, 106, 33, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(242, 106, 33, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(242, 106, 33, 0.1)';
              }}
            >
              <div
                className="badge-shimmer"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transition: 'left 0.6s ease',
                }}
              />
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ marginRight: 8, transition: 'transform 0.3s ease' }}>
                <circle cx="12" cy="12" r="10" fill={BRAND_ORANGE} fillOpacity="0.15"/>
                <path d="M12 7v5l4 2" stroke={BRAND_ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              OUR STORY
            </span>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32 }}>
          {/* Left: Heading and Large Image */}
          <div style={{ flex: '1 1 600px', minWidth: 340, maxWidth: 700 }}>
            <FadeIn direction="up" delay={0.4}>
              <h1
                className="premium-heading"
                style={{
                  fontSize: 56,
                  fontWeight: 400,
                  lineHeight: 1.1,
                  marginBottom: 32,
                  color: '#2c3e50',
                  position: 'relative',
                }}
              >
                <span
                  className="text-reveal-line"
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <span style={{ display: 'inline-block', animation: 'slideInLeft 0.8s ease-out 0.6s both' }}>
                    Redefining Protection
                  </span>
                </span>
                <br />
                <span
                  className="gradient-text-premium"
                  style={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #F26A21, #0072CE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    position: 'relative',
                    animation: 'slideInRight 0.8s ease-out 0.8s both',
                  }}
                >
                  Through Innovation
                </span>
                <div
                
                />
              </h1>
            </FadeIn>

            <ScaleIn delay={0.8}>
              <div
                className="premium-glass-image"
                style={{
                  borderRadius: 48,
                  overflow: 'hidden',
                  marginBottom: 0,
                  marginTop: 40,
                  width: '100%',
                  maxWidth: 600,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03) translateY(-12px) rotateX(5deg)';
                  e.currentTarget.style.boxShadow = '0 30px 100px rgba(242, 106, 33, 0.25), 0 20px 60px rgba(0, 114, 206, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.backdropFilter = 'blur(15px)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.backdropFilter = 'blur(10px)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                }}
              >
                <div
                  className="glass-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(242, 106, 33, 0.15), rgba(0, 114, 206, 0.15))',
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    zIndex: 2,
                    backdropFilter: 'blur(5px)',
                  }}
                />
                <div
                  className="glass-shimmer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transition: 'left 0.8s ease',
                    zIndex: 3,
                  }}
                />
                <img
                  src="/images/ourstory3.jpg"
                  alt="NovaGuard logo and products"
                  style={{
                    width: '100%',
                    display: 'block',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    minHeight: 480,
                    maxHeight: 600,
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: 'brightness(0.9)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                    const overlay = e.currentTarget.parentElement?.querySelector('.glass-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                    const shimmer = e.currentTarget.parentElement?.querySelector('.glass-shimmer') as HTMLElement;
                    if (shimmer) shimmer.style.left = '100%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'brightness(0.9)';
                    const overlay = e.currentTarget.parentElement?.querySelector('.glass-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                    const shimmer = e.currentTarget.parentElement?.querySelector('.glass-shimmer') as HTMLElement;
                    if (shimmer) shimmer.style.left = '-100%';
                  }}
                />
              </div>
            </ScaleIn>
          </div>

          {/* Right: Top Images and Text */}
          <div style={{ flex: '1 1 520px', minWidth: 320, maxWidth: 700, display: 'flex', flexDirection: 'column', gap: 32 }}>
            <StaggeredList delay={150}>
              {[
                <div key="images" style={{ display: 'flex', gap: 32, marginBottom: 16, justifyContent: 'flex-start' }}>
                  <div
                    className="premium-glass-small"
                    style={{
                      borderRadius: 40,
                      overflow: 'hidden',
                      width: 220,
                      height: 160,
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04) translateY(-8px) rotateX(3deg)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(242, 106, 33, 0.2), 0 12px 35px rgba(0, 114, 206, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.backdropFilter = 'blur(12px)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backdropFilter = 'blur(8px)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                    }}
                  >
                    <div
                      className="glass-small-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(242, 106, 33, 0.12), rgba(0, 114, 206, 0.12))',
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        zIndex: 2,
                        backdropFilter: 'blur(3px)',
                      }}
                    />
                    <div
                      className="glass-small-shimmer"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'left 0.8s ease',
                        zIndex: 3,
                      }}
                    />
                    <img
                      src="/images/hero1.jpg"
                      alt="Product rolls"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.85)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.filter = 'brightness(1.05)';
                        const overlay = e.currentTarget.parentElement?.querySelector('.glass-small-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '1';
                        const shimmer = e.currentTarget.parentElement?.querySelector('.glass-small-shimmer') as HTMLElement;
                        if (shimmer) shimmer.style.left = '100%';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'brightness(0.85)';
                        const overlay = e.currentTarget.parentElement?.querySelector('.glass-small-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '0';
                        const shimmer = e.currentTarget.parentElement?.querySelector('.glass-small-shimmer') as HTMLElement;
                        if (shimmer) shimmer.style.left = '-100%';
                      }}
                    />
                  </div>
                  <div
                    className="premium-glass-small"
                    style={{
                      borderRadius: 40,
                      overflow: 'hidden',
                      width: 220,
                      height: 160,
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04) translateY(-8px) rotateX(3deg)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 114, 206, 0.2), 0 12px 35px rgba(242, 106, 33, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.backdropFilter = 'blur(12px)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backdropFilter = 'blur(8px)';
                      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                    }}
                  >
                    <div
                      className="glass-small-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0, 114, 206, 0.12), rgba(242, 106, 33, 0.12))',
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        zIndex: 2,
                        backdropFilter: 'blur(3px)',
                      }}
                    />
                    <div
                      className="glass-small-shimmer"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'left 0.8s ease',
                        zIndex: 3,
                      }}
                    />
                    <img
                      src="/images/hero2.jpg"
                      alt="Bubble guard sheets"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: 'brightness(0.85)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.filter = 'brightness(1.05)';
                        const overlay = e.currentTarget.parentElement?.querySelector('.glass-small-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '1';
                        const shimmer = e.currentTarget.parentElement?.querySelector('.glass-small-shimmer') as HTMLElement;
                        if (shimmer) shimmer.style.left = '100%';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'brightness(0.85)';
                        const overlay = e.currentTarget.parentElement?.querySelector('.glass-small-overlay') as HTMLElement;
                        if (overlay) overlay.style.opacity = '0';
                        const shimmer = e.currentTarget.parentElement?.querySelector('.glass-small-shimmer') as HTMLElement;
                        if (shimmer) shimmer.style.left = '-100%';
                      }}
                    />
                  </div>
                </div>,
                
                <div
                  key="description1"
                  className="premium-text-card"
                  style={{
                    fontSize: 20,
                    color: '#555',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    marginBottom: 12,
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(242, 106, 33, 0.03) 0%, rgba(242, 106, 33, 0.06) 100%)',
                    borderRadius: '20px',
                    borderLeft: '4px solid #F26A21',
                    boxShadow: '0 8px 25px rgba(242, 106, 33, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(242, 106, 33, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(242, 106, 33, 0.08) 0%, rgba(242, 106, 33, 0.12) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(242, 106, 33, 0.1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(242, 106, 33, 0.03) 0%, rgba(242, 106, 33, 0.06) 100%)';
                  }}
                >
                  <div
                    className="card-shimmer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      transition: 'left 0.8s ease',
                    }}
                  />
                  At NovaGuard Polyplast, our journey began with a vision — to revolutionize industries through smarter, stronger, and more sustainable solutions powered by advanced Bubble Guard Sheet technology.
                </div>,
                
                <div
                  key="description2"
                  className="premium-text-card"
                  style={{
                    fontSize: 20,
                    color: '#555',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(0, 114, 206, 0.03) 0%, rgba(0, 114, 206, 0.06) 100%)',
                    borderRadius: '20px',
                    borderLeft: '4px solid #0072CE',
                    boxShadow: '0 8px 25px rgba(0, 114, 206, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 114, 206, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 114, 206, 0.08) 0%, rgba(0, 114, 206, 0.12) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 114, 206, 0.1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 114, 206, 0.03) 0%, rgba(0, 114, 206, 0.06) 100%)';
                  }}
                >
                  <div
                    className="card-shimmer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      transition: 'left 0.8s ease',
                    }}
                  />
                  At NovaGuard Polyplast, we specialize in crafting innovative protective materials designed to enhance efficiency, minimize waste, and streamline operations across industries such as packaging, construction, signage, and beyond. Backed by advanced manufacturing, precision engineering, and a strong commitment to sustainability, we are redefining performance and reliability standards.
                </div>
              ]}
            </StaggeredList>
          </div>
        </div>

        {/* Enhanced Stats Row */}
        <FadeIn direction="up" delay={1.2}>
          <div className="stats-row-container">
            {stats.map((stat, i) => (
              <div key={i} className="stats-item">
                <CounterAnimation
                  value={stat.value}
                  duration={2500}
                  delay={i * 200}
                  className="stats-number"
                  style={{ 
                    color: i === 0 ? BRAND_ORANGE : i === 1 ? BRAND_BLUE : BRAND_ORANGE
                  }}
                />
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default OurStorySection; 