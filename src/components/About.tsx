import React from 'react';
import './About.css';
import { FadeIn, StaggeredList, ScaleIn } from './AnimationUtils';

const features = [
  { icon: 'fa-shield-alt', text: 'Superior Protection' },
  { icon: 'fa-balance-scale', text: 'Superior Load Capacity' },
  { icon: 'fa-cubes', text: 'Optimizes Material Usage' },
  { icon: 'fa-feather-alt', text: 'Ultra-Lightweight Design' },
  { icon: 'fa-stream', text: 'Wraps Fast, Works Easy' },
  { icon: 'fa-paint-brush', text: 'Customizable Branding ' },
  { icon: 'fa-tint', text: '100% Water Sealed' },
  { icon: 'fa-recycle', text: '100% Fully Recyclable' },
];

const About: React.FC = () => {
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
      <div className="rival-about-centered-container">
        <FadeIn direction="up" delay={0.2}>
          <div className="rival-about-label centered">
            <span className="rival-about-icon animate-pulse"><i className="fas fa-cog"></i></span>
            ABOUT US
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4}>
          <h2 className="rival-about-title centered">
            Shaping Quality Through<br />
            <span className="rival-about-title-bold">Innovation at NovaGuard</span>
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.6}>
          <p className="rival-about-desc centered">
            At NovaGuard, industrial innovation is the driving force behind everything we do. Our commitment is to craft superior Bubble Guard Sheets by combining advanced technology with smart, efficient processes that lead the industry forward.
          </p>
        </FadeIn>
        
        <StaggeredList delay={150} className="rival-about-features centered">
          {features.map((f, i) => (
            <ScaleIn key={f.text} delay={0.8 + (i * 0.1)}>
              <div className="rival-about-feature hover-lift">
                <span className="rival-about-feature-icon hover-glow">
                  <i className={`fas ${f.icon}`}></i>
                </span>
                <span>{f.text}</span>
              </div>
            </ScaleIn>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
};

export default About; 