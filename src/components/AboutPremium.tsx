import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const features = [
  { icon: 'fa-shield-alt', text: 'Superior Impact Protection', color: '#0072ce' },
  { icon: 'fa-balance-scale', text: 'Superior Load Capacity', color: '#f26a21' },
  { icon: 'fa-cubes', text: 'Optimizes Material Usage', color: '#7ecb6c' },
  { icon: 'fa-feather-alt', text: 'Ultra-Lightweight Design', color: '#e74c3c' },
  { icon: 'fa-stream', text: 'Wraps Fast, Works Easy', color: '#9b59b6' },
  { icon: 'fa-paint-brush', text: 'Customizable Branding Options', color: '#f39c12' },
  { icon: 'fa-tint', text: '100% Water Sealed', color: '#3498db' },
  { icon: 'fa-recycle', text: '100% Fully Recyclable', color: '#2ecc71' },
];

// Floating particles component
const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Morphing shapes component
const MorphingShapes: React.FC = () => {
  return (
    <div className="morphing-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
    </div>
  );
};

// Typewriter effect component
const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
          setIsTyping(false);
        }
      }, 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className="typewriter-text">
      {displayedText}
      {isTyping && <span className="cursor">|</span>}
    </span>
  );
};

const AboutHero: React.FC = () => (
  <div className="about-hero">
    <FloatingParticles />
    <MorphingShapes />
    <div className="about-hero-content">
      <h1 className="about-hero-title">
        <TypewriterText text="About Us" delay={500} />
      </h1>
      <p className="about-hero-subtitle animate-subtitle">
        <TypewriterText text="Shaping Quality Through Innovation at NovaGuard" delay={1500} />
      </p>
    </div>
  </div>
);

const AboutImageCollage: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [mainStyle, setMainStyle] = useState({});
  const [sideStyle, setSideStyle] = useState({});

  // 3D tilt effect handler
  const handleMouseMove = (e: React.MouseEvent, type: 'main' | 'side') => {
    const target = e.currentTarget as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    const style = {
      transform: `scale(1.06) rotate(${type === 'main' ? 3 : -3}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `0 0 32px 0 #0072ce55, 0 12px 48px rgba(20,40,60,0.18)`,
      zIndex: 10,
    };
    if (type === 'main') setMainStyle(style);
    else setSideStyle(style);
  };
  const handleMouseLeave = (type: 'main' | 'side') => {
    if (type === 'main') setMainStyle({});
    else setSideStyle({});
  };

  return (
    <div className="about-collage">
      <div className="about-collage-glow" />
      <div className="about-collage-glass" />
      <img
        src="/images/aboutus.jpg"
        alt="About NovaGuard 1"
        className={`about-collage-img about-collage-img-main${inView ? ' in-view' : ''}`}
        style={mainStyle}
        onMouseMove={e => handleMouseMove(e, 'main')}
        onMouseLeave={() => handleMouseLeave('main')}
      />
      <img
        src="/images/aboutus1.jpg"
        alt="About NovaGuard 2"
        className={`about-collage-img about-collage-img-side${inView ? ' in-view' : ''}`}
        style={sideStyle}
        onMouseMove={e => handleMouseMove(e, 'side')}
        onMouseLeave={() => handleMouseLeave('side')}
      />
    </div>
  );
};

const AboutPremium: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="about-section rival-about-section rival-about-centered"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <AboutHero />
      <div className="about-unified-card">
        <div className="about-unified-images about-unified-images-centered">
          <AboutImageCollage inView={inView} />
        </div>
        <div className="about-unified-divider" />
        <div className="about-unified-content" ref={sectionRef}>
          <div className={`about-unified-heading about-anim about-anim-label${inView ? ' in-view' : ''}`}>
            <span className="rival-about-icon"><i className="fas fa-cog"></i></span>
            ABOUT US
          </div>
          <h2 className={`about-unified-title about-anim about-anim-heading${inView ? ' in-view' : ''}`}>
            Shaping Quality Through<br />
            <span className="about-unified-title-bold">Innovation at NovaGuard</span>
          </h2>
          <p className={`about-unified-desc about-anim about-anim-desc${inView ? ' in-view' : ''}`}>
            At NovaGuard, industrial innovation is the driving force behind everything we do. Our commitment is to craft superior Bubble Guard Sheets by combining advanced technology with smart, efficient processes that lead the industry forward.
          </p>
        </div>
      </div>
      {/* Premium Features Section */}
      <div className="about-features-card">
        <div className="about-features-accent magical-accent" />
        <h3 className="about-features-title glowing-title">
          <TypewriterText text="Our Key Features" delay={2000} />
        </h3>
        <div className="about-features-grid">
          {features.map((f, i) => (
            <div
              className={`about-feature-card about-anim magical-card${inView ? ' in-view' : ''}`}
              style={{
                transitionDelay: inView ? `${0.2 + i * 0.09}s` : '0s',
                '--feature-color': f.color
              } as React.CSSProperties}
              key={f.text}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('--hover-color', f.color);
              }}
            >
              <div className="feature-icon-container">
                <span className="about-feature-icon magical-icon">
                  <i className={`fas ${f.icon}`}></i>
                </span>
                <div className="icon-ripple"></div>
              </div>
              <span className="about-feature-text">{f.text}</span>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="rival-about-bg-illustration" aria-hidden="true"></div>
    </section>
  );
};

export default AboutPremium; 