import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './BubbleGuardPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const BubbleGuardPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, isIntersecting] = useIntersectionObserver();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const productImg = process.env.PUBLIC_URL + '/images/bubble-guard-sheet-500x500.webp';

  const bubbleGuardVariants = [
    {
      id: 1,
      name: 'Standard Bubble Guard Sheet',
      subtitle: 'Reliable Protection',
      description: 'Our standard bubble guard sheet offers excellent protection for everyday packaging needs.',
      images: [
        '/images/bubble-standard-1.jpg',
        '/images/bubble-standard-2.jpg',
        '/images/bubble-standard-3.jpg',
      ],
      specifications: {
        thickness: '1.5-5mm',
        Sheetsize: '4-8 Ft',
        bubbleSize: '8-10mm',
        rollWidth: '1220mm',
        temperature: '-40°C to +80°C',
        certification: 'ISO 9001'
      },
      features: ['Shock Absorbing', 'Lightweight', 'Cost Effective', 'Recyclable'],
      applications: ['Electronics', 'Glassware', 'Furniture', 'Automotive Parts'],
      price: '$2.50/sq ft',
      rating: 4.8,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 2,
      name: 'Premium Bubble Guard Sheet',
      subtitle: 'Maximum Protection',
      description: 'Premium grade bubble guard sheet for high-value items requiring superior protection.',
      images: [
        '/images/bubble-premium-1.jpg',
        '/images/bubble-premium-2.jpg',
        '/images/bubble-premium-3.jpg',
      ],
      specifications: {
        thickness: '2.5-5mm',
        Sheetsize: '4-8 Ft',
        bubbleSize: '8-10mm',
        rollWidth: '1220mm',
        temperature: '-50°C to +90°C',
        certification: 'ISO 9001, CE'
      },
      features: ['Superior Cushioning', 'Tear Resistant', 'Multi-Layer', 'UV Resistant'],
      applications: ['Medical Equipment', 'High-End Electronics', 'Artwork', 'Precision Instruments'],
      price: '$4.20/sq ft',
      rating: 4.9,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 3,
      name: 'Industrial Bubble Guard Sheet',
      subtitle: 'Heavy-Duty Protection',
      description: 'Industrial-grade bubble guard sheet designed for harsh environments and heavy items.',
      images: [
        '/images/bubble-industrial-1.jpg',
        '/images/bubble-industrial-2.jpg',
        '/images/bubble-industrial-3.jpg',
      ],
      specifications: {
        thickness: '3-6mm',
        density: '80-150 kg/m³',
        bubbleSize: '8-10mm',
        rollWidth: '1220mm',
        temperature: '-60°C to +100°C',
        certification: 'ISO 9001, ASTM'
      },
      features: ['Heavy Duty', 'Chemical Resistant', 'Extreme Temperature', 'Long Lasting'],
      applications: ['Heavy Machinery', 'Chemical Equipment', 'Aerospace', 'Marine Equipment'],
      price: '$6.80/sq ft',
      rating: 4.7,
      color: 'from-[#ff6600] to-[#0057b8]'
    }
  ];



  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'CE Marking', description: 'European Conformity' },
    { name: 'ASTM Standards', description: 'Material Testing' },
    { name: 'FDA Approved', description: 'Food Safe Materials' }
  ];

  useEffect(() => {
    setMainImageIndex(0);
  }, [selectedVariant]);

  const handleRequestQuote = () => {
    navigate('/contact');
    // Scroll to contact form after navigation with better timing
    setTimeout(() => {
      // Try multiple selectors to find the contact form
      const contactForm = document.getElementById('contact') || 
                         document.querySelector('.contact-modern-section') ||
                         document.querySelector('.contact-main-content');
      
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } else {
        // Fallback: scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 800); // Increased timeout to ensure page loads
  };

  return (
    <div className="bubble-guard-page premium-hero-section">
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
              src={bubbleGuardVariants[selectedVariant].images[mainImageIndex]}
              alt={bubbleGuardVariants[selectedVariant].name}
              className="hero-main-image premium-animated"
              key={mainImageIndex}
              onClick={() => setLightboxImage(bubbleGuardVariants[selectedVariant].images[mainImageIndex])}
            />
          </div>
          <div className="hero-thumbnails">
            {bubbleGuardVariants[selectedVariant].images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`hero-thumbnail ${mainImageIndex === idx ? 'active' : ''}`}
                onClick={() => setMainImageIndex(idx)}
              />
            ))}
          </div>
        </div>
        <div className="hero-info glassy-card">
          <h1 className="hero-title gradient-text">{bubbleGuardVariants[selectedVariant].name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#0057b8' }}>{bubbleGuardVariants[selectedVariant].subtitle}</h2>
          <p className="hero-description">{bubbleGuardVariants[selectedVariant].description}</p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={handleRequestQuote}>
              <span>Request Quote</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="product-showcase" ref={ref}>
        <div className="showcase-tabs">
          <ScaleIn delay={0.2}>
                          <div className="tab-buttons">
                {['overview', 'specifications', 'applications'].map(tab => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </ScaleIn>
        </div>

        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="variant-selector">
              <FadeIn direction="left" delay={0.3}>
                <div className="variant-list">
                  {bubbleGuardVariants.map((variant, index) => (
                    <div
                      key={variant.id}
                      className={`variant-card ${selectedVariant === index ? 'selected' : ''}`}
                      onClick={() => setSelectedVariant(index)}
                    >
                      <div className={`variant-gradient bg-gradient-to-br ${variant.color}`}></div>
                      <div className="variant-content">
                        <h3>{variant.name}</h3>
                        <p>{variant.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="product-detail">
              <FadeIn direction="right" delay={0.4}>
                <div className="detail-container">
                  <div className="premium-image-gallery">
                    <div className="main-image-container" onClick={() => setLightboxImage(bubbleGuardVariants[selectedVariant].images[mainImageIndex])}>
                      <img
                        src={bubbleGuardVariants[selectedVariant].images[mainImageIndex]}
                        alt={bubbleGuardVariants[selectedVariant].name}
                        className="gallery-main-image premium-animated"
                        key={mainImageIndex}
                      />
                      <div className="image-overlay">
                        <div className="zoom-icon">🔍</div>
                        <div className="overlay-text">View Details</div>
                      </div>
                    </div>
                    <div className="gallery-thumbnails">
                      {bubbleGuardVariants[selectedVariant].images.map((img, idx) => (
                        <div
                          key={img}
                          className={`gallery-thumbnail-wrapper ${mainImageIndex === idx ? 'active' : ''}`}
                          onClick={() => setMainImageIndex(idx)}
                        >
                          <img
                            src={img}
                            alt={`Product view ${idx + 1}`}
                            className="gallery-thumbnail"
                          />
                          <div className="thumbnail-overlay">
                            <span className="thumbnail-number">{idx + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="product-info">
                    <h2>{bubbleGuardVariants[selectedVariant].name}</h2>
                    <p className="product-subtitle">{bubbleGuardVariants[selectedVariant].subtitle}</p>
                    <p className="product-description">{bubbleGuardVariants[selectedVariant].description}</p>

                    <div className="product-features">
                      <h4>Key Features</h4>
                      <div className="features-grid">
                        {bubbleGuardVariants[selectedVariant].features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="product-actions">
                      <button className="btn-primary" onClick={handleRequestQuote}>
                        <span>Request Quote</span>
                        <span className="btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="specifications-content">
            <FadeIn direction="up" delay={0.3}>
              <div className="specs-grid">
                {Object.entries(bubbleGuardVariants[selectedVariant].specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    <div className="spec-value">{value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="certifications-section">
                <h3>Certifications & Standards</h3>
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <div className="cert-icon">🏆</div>
                      <div className="cert-info">
                        <h4>{cert.name}</h4>
                        <p>{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="applications-content">
            <FadeIn direction="up" delay={0.3}>
              <div className="applications-grid">
                {bubbleGuardVariants[selectedVariant].applications.map((app, index) => (
                  <ScaleIn key={index} delay={0.1 * index}>
                    <div className="application-card">
                      <div className="app-icon">📦</div>
                      <h4>{app}</h4>
                      <p>Perfect protection for {app.toLowerCase()} during shipping and storage.</p>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </FadeIn>
          </div>
        )}


      </div>
    </div>
  );
};

export default BubbleGuardPage;