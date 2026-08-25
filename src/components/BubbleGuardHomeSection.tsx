import React from 'react';
import { FadeIn, ScaleIn } from './AnimationUtils';
import './BubbleGuardPage.css';
import Lightbox from './Lightbox';

const bubbleGuardVariant = {
  name: 'Standard Bubble Guard Sheet',
  subtitle: 'Reliable Protection',
  description: 'Our standard bubble guard sheet offers excellent protection for everyday packaging needs.',
  images: [
    '/images/bubble-standard-1.jpg',
    '/images/bubble-standard-2.jpg',
    '/images/bubble-standard-3.jpg',
  ],
  features: ['Shock Absorbing', 'Lightweight', 'Cost Effective', 'Recyclable'],
};

const BubbleGuardHomeSection: React.FC = () => {
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);
  const mainImage = bubbleGuardVariant.images[0];

  return (
    <section className="bubble-guard-page premium-hero-section" style={{paddingTop: 0}}>
      <Lightbox
        open={!!lightboxImage}
        imageSrc={lightboxImage || ''}
        alt="Product Image"
        onClose={() => setLightboxImage(null)}
      />
      <div className="hero-background-gradient"></div>
      <div className="container hero-container">
        <div className="hero-image-gallery">
          <div className="main-image-wrapper glassy-card">
            <img
              src={mainImage}
              alt={bubbleGuardVariant.name}
              className="hero-main-image premium-animated"
              onClick={() => setLightboxImage(mainImage)}
            />
          </div>
        </div>
        <div className="hero-info glassy-card">
          <h1 className="hero-title gradient-text">{bubbleGuardVariant.name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#00bfff' }}>{bubbleGuardVariant.subtitle}</h2>
          <p className="hero-description">{bubbleGuardVariant.description}</p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn">
              <span>Request Quote</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-secondary hero-btn">
              <span>Download Specs</span>
              <span className="btn-icon">📄</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <FadeIn direction="down">
          <div className="page-header">
            <span className="page-badge">🛡️ Premium Protection</span>
            <h1 className="page-title">
              Bubble Guard <span className="gradient-text">Sheet</span> Solutions
            </h1>
            <p className="page-subtitle">
              Advanced bubble guard sheet technology providing unmatched protection for your valuable items
            </p>
          </div>
        </FadeIn>
        <div className="product-showcase" style={{marginTop: 0}}>
          <div className="overview-content">
            <div className="product-detail">
              <FadeIn direction="right" delay={0.4}>
                <div className="detail-container">
                  <div className="premium-image-gallery">
                    <div className="main-image-container" onClick={() => setLightboxImage(mainImage)}>
                      <img
                        src={mainImage}
                        alt={bubbleGuardVariant.name}
                        className="gallery-main-image premium-animated"
                      />
                      <div className="image-overlay">
                        <div className="zoom-icon">🔍</div>
                        <div className="overlay-text">View Details</div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <h2>{bubbleGuardVariant.name}</h2>
                    <p className="product-subtitle">{bubbleGuardVariant.subtitle}</p>
                    <p className="product-description">{bubbleGuardVariant.description}</p>
                    <div className="product-features">
                      <h4>Key Features</h4>
                      <div className="features-grid">
                        {bubbleGuardVariant.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="product-actions">
                      <button className="btn-primary">
                        <span>Request Quote</span>
                        <span className="btn-icon">→</span>
                      </button>
                      <button className="btn-secondary">
                        <span>Download Specs</span>
                        <span className="btn-icon">📄</span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BubbleGuardHomeSection; 