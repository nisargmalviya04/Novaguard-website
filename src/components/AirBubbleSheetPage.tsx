import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './AirBubbleSheetPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const AirBubbleSheetPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, isIntersecting] = useIntersectionObserver();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const airBubbleSheetVariants = [
    {
      id: 1,
      name: 'Standard Air Bubble Sheet',
      subtitle: 'Versatile Protection',
      description: 'High-quality air bubble sheets providing excellent cushioning and protection for various applications.',
      images: [
        '/images/airbubble1.jpg',
        '/images/airbubble2.jpg',
        '/images/airbubble3.jpg',
      ],
      specifications: {
        thickness: '30GSM to 70GSM',
        bubbleSize: '8-10mm',
        RollSize: '50m to 150m',
        temperature: '-35°C to +75°C',
        certification: 'ISO 9001, RoHS'
      },
      features: ['Excellent Cushioning', 'Flexible', 'Transparent', 'Reusable'],
      applications: ['General Packaging', 'Moving & Storage', 'Fragile Items', 'Void Fill'],
      price: '$2.10/sq ft',
      rating: 4.7,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 2,
      name: 'Premium Air Bubble Sheet',
      subtitle: 'Superior Quality',
      description: 'Premium grade air bubble sheets with enhanced durability and superior cushioning properties.',
      images: [
        '/images/airbubble4.jpg',
        '/images/airbubble5.jpg',
        '/images/airbubble6.jpg',
      ],
      specifications: {
        thickness: '30GSM-70GSM',
        bubbleSize: '8-10mm',
        RollSize: '50m to 150m',
        temperature: '-30°C to +75°C',
        certification: 'ISO 9001, CE, ASTM'
      },
      features: ['Superior Cushioning', 'Tear Resistant', 'Multi-Layer', 'UV Stable'],
      applications: ['Electronics', 'Medical Equipment', 'Precision Instruments', 'Artwork'],
      price: '$3.40/sq ft',
      rating: 4.9,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 3,
      name: 'Industrial Air Bubble Sheet',
      subtitle: 'Heavy-Duty Performance',
      description: 'Industrial-grade air bubble sheets engineered for demanding applications and harsh environments.',
      images: [
        '/images/airbubble7.jpg',
        '/images/airbubble8.jpg',
        '/images/airbubble9.jpg',
      ],
      specifications: {
        thickness: '30GSM-70GSM',
        bubbleSize: '8-15mm',
        RollSize: '600x600mm to 3000x3000mm',
        temperature: '-50°C to +90°C',
        certification: 'ISO 9001, ASTM, FDA'
      },
      features: ['Heavy Duty', 'Chemical Resistant', 'Puncture Resistant', 'Long Lasting'],
      applications: ['Industrial Equipment', 'Automotive Parts', 'Heavy Machinery', 'Construction'],
      price: '$4.80/sq ft',
      rating: 4.8,
      color: 'from-[#ff6600] to-[#0057b8]'
    }
  ];

  const industryApplications = [
    {
      industry: 'Electronics & Technology',
      description: 'Protecting sensitive electronic components and devices',
      icon: '📱',
      useCases: ['Consumer Electronics', 'Computer Hardware', 'Telecommunication Equipment', 'Circuit Boards'],
      benefits: ['Static Protection', 'Shock Absorption', 'Moisture Barrier', 'Temperature Stable']
    },
    {
      industry: 'Healthcare & Medical',
      description: 'Medical equipment and pharmaceutical product protection',
      icon: '🏥',
      useCases: ['Medical Devices', 'Surgical Instruments', 'Laboratory Equipment', 'Pharmaceutical Products'],
      benefits: ['Sterile Packaging', 'Contamination Prevention', 'FDA Compliance', 'Gentle Protection']
    },
    {
      industry: 'Automotive & Transportation',
      description: 'Automotive parts and components protection during transit',
      icon: '🚗',
      useCases: ['Engine Components', 'Body Parts', 'Glass Protection', 'Interior Components'],
      benefits: ['Vibration Dampening', 'Scratch Prevention', 'Chemical Resistance', 'Custom Sizing']
    },
    {
      industry: 'E-commerce & Retail',
      description: 'Online retail packaging and shipping solutions',
      icon: '📦',
      useCases: ['Product Packaging', 'Gift Wrapping', 'Fragile Item Protection', 'Return Packaging'],
      benefits: ['Cost Effective', 'Professional Appearance', 'Easy Application', 'Customer Satisfaction']
    }
  ];

  const qualityAssurance = [
    {
      standard: 'ISO 9001:2015',
      description: 'Quality Management System',
      scope: 'Comprehensive quality control throughout manufacturing',
      icon: '🎯'
    },
    {
      standard: 'ASTM D3575',
      description: 'Flexible Cellular Materials Testing',
      scope: 'Standardized testing for material properties',
      icon: '🔬'
    },
    {
      standard: 'RoHS Compliance',
      description: 'Restriction of Hazardous Substances',
      scope: 'Environmental safety and material compliance',
      icon: '🌿'
    },
    {
      standard: 'FDA Approved',
      description: 'Food and Drug Administration Compliance',
      scope: 'Safe for food contact applications',
      icon: '✅'
    }
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
    <section className="air-bubble-sheet-page premium-hero-section">
      {/* Single Lightbox at root */}
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
              src={airBubbleSheetVariants[selectedVariant].images[mainImageIndex]}
              alt={airBubbleSheetVariants[selectedVariant].name}
              className="hero-main-image premium-animated"
              key={mainImageIndex}
              onClick={() => setLightboxImage(airBubbleSheetVariants[selectedVariant].images[mainImageIndex])}
            />
          </div>
          <div className="hero-thumbnails">
            {airBubbleSheetVariants[selectedVariant].images.map((img, idx) => (
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
          <h1 className="hero-title gradient-text">{airBubbleSheetVariants[selectedVariant].name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#0057b8' }}>{airBubbleSheetVariants[selectedVariant].subtitle}</h2>
          <p className="hero-description">{airBubbleSheetVariants[selectedVariant].description}</p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={handleRequestQuote}>
              <span>Request Quote</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <FadeIn direction="down">
          <div className="page-header">
            <span className="page-badge">🫧 Advanced Cushioning</span>
            <h1 className="page-title">
              Air Bubble <span className="gradient-text">Sheet</span> Solutions
            </h1>
            <p className="page-subtitle">
              Premium air bubble sheet technology delivering superior cushioning and protection for diverse applications
            </p>
          </div>
        </FadeIn>

        <div className="product-showcase" ref={ref}>
          <div className="showcase-tabs">
            <ScaleIn delay={0.2}>
              <div className="tab-buttons">
                {['overview', 'Specifications', 'applications'].map(tab => (
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
                    {airBubbleSheetVariants.map((variant, index) => (
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
                      <div className="main-image-container">
                        <div className="main-image-wrapper glassy-card" onClick={() => setLightboxImage(airBubbleSheetVariants[selectedVariant].images[mainImageIndex])}>
                          <img
                            src={airBubbleSheetVariants[selectedVariant].images[mainImageIndex]}
                            alt={airBubbleSheetVariants[selectedVariant].name}
                            className="gallery-main-image premium-animated"
                            key={mainImageIndex}
                          />
                          <div className="image-overlay">
                            <div className="zoom-icon">🔍</div>
                            <div className="overlay-text">View Details</div>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-thumbnails">
                        {airBubbleSheetVariants[selectedVariant].images.map((img, idx) => (
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
                      <h2>{airBubbleSheetVariants[selectedVariant].name}</h2>
                      <p className="product-subtitle">{airBubbleSheetVariants[selectedVariant].subtitle}</p>
                      <p className="product-description">{airBubbleSheetVariants[selectedVariant].description}</p>

                      <div className="product-features">
                        <h4>Key Features</h4>
                        <div className="features-grid">
                          {airBubbleSheetVariants[selectedVariant].features.map((feature, index) => (
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

          {activeTab === 'Specifications' && (
            <div className="specifications-content">
              <div className="specifications-section">
                <FadeIn direction="up" delay={0.3}>
                  <h3>Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(airBubbleSheetVariants[selectedVariant].specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        <div className="spec-value">{value}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>


              <div className="quality-section">
                <FadeIn direction="up" delay={0.5}>
                  <h3>Quality Assurance</h3>
                  <div className="quality-grid">
                    {qualityAssurance.map((quality, index) => (
                      <ScaleIn key={index} delay={0.1 * index}>
                        <div className="quality-item">
                          <div className="quality-icon">{quality.icon}</div>
                          <h4>{quality.standard}</h4>
                          <p className="quality-description">{quality.description}</p>
                          <div className="quality-scope">{quality.scope}</div>
                        </div>
                      </ScaleIn>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="applications-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="applications-grid">
                  {industryApplications.map((application, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="application-card">
                        <div className="application-icon">{application.icon}</div>
                        <h4>{application.industry}</h4>
                        <p>{application.description}</p>
                        
                        <div className="application-use-cases">
                          <h5>Use Cases</h5>
                          <div className="use-cases-list">
                            {application.useCases.map((useCase, useCaseIndex) => (
                              <span key={useCaseIndex} className="use-case-item">{useCase}</span>
                            ))}
                          </div>
                        </div>

                        <div className="application-benefits">
                          <h5>Benefits</h5>
                          <div className="benefits-list">
                            {application.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="benefit-item">
                                <span className="benefit-icon">✓</span>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          )}

          
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="page-cta">
            <div className="cta-content">
              <h3>Need Custom Air Bubble Sheets?</h3>
              <p>Our engineering team can develop specialized solutions for your unique protection requirements</p>
              <div className="cta-buttons">
                <button className="cta-btn primary" onClick={handleRequestQuote}>
                  <span>Get Custom Quote</span>
                  <span className="btn-shine"></span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AirBubbleSheetPage;