import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './AluminumInsulationPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const AluminumInsulationPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, isIntersecting] = useIntersectionObserver();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const aluminumInsulationVariants = [
    {
      id: 1,
      name: 'Standard Aluminum Insulation Sheet',
      subtitle: 'Thermal Protection',
      description: 'High-performance aluminum insulation sheets providing excellent thermal protection and energy efficiency.',
      images: [
        '/images/aluminum1.jpg',
        '/images/aluminum2.jpg',
        '/images/aluminum3.jpg',
      ],
      specifications: {
        thickness: '4-16mm',
        reflectivity: '95-97%',
        RollSize: '50m to 150m',
        temperature: '+150°C',
        certification: 'ISO 9001, ASTM C518'
      },
      features: ['Thermal Reflective', 'Lightweight', 'Moisture Resistant', 'Easy Installation'],
      applications: ['Building Insulation', 'HVAC Systems', 'Automotive', 'Industrial Equipment'],
      price: '$3.20/sq ft',
      rating: 4.8,
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 2,
      name: 'Premium Aluminum Insulation Sheet',
      subtitle: 'Superior Performance',
      description: 'Premium grade aluminum insulation with enhanced durability and superior thermal properties.',
      images: [
        '/images/aluminum4.jpg',
        '/images/aluminum5.jpg',
        '/images/aluminum6.jpg',
      ],
      specifications: {
        thickness: '8-16mm',
        reflectivity: '97-99%',
        RollSize: '50m to 100m',
        temperature: '-50°C to +150°C',
        certification: 'ISO 9001, ASTM C518, CE'
      },
      features: ['High Reflectivity', 'Fire Resistant', 'UV Stable', 'Long Lasting'],
      applications: ['Aerospace', 'High-Temperature Applications', 'Solar Reflectors', 'Marine'],
      price: '$5.80/sq ft',
      rating: 4.9,
      color: 'from-silver-400 to-gray-500'
    },
    {
      id: 3,
      name: 'Industrial Aluminum Insulation Sheet',
      subtitle: 'Heavy-Duty Insulation',
      description: 'Industrial-grade aluminum insulation designed for extreme environments and demanding applications.',
      images: [
        '/images/aluminum7.jpg',
        '/images/aluminum8.jpg',
        '/images/aluminum9.jpg',
      ],
      specifications: {
        thickness: '12-19mm',
        reflectivity: '96-98%',
        RollSize: '50m to 100m',
        temperature: '-50°C to +150°C',
        certification: 'ISO 9001, ASTM C518, UL Listed'
      },
      features: ['Extreme Temperature', 'Chemical Resistant', 'Puncture Resistant', 'Vapor Barrier'],
      applications: ['Chemical Plants', 'Power Generation', 'Oil & Gas', 'Cryogenic Applications'],
      price: '$8.50/sq ft',
      rating: 4.8,
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const applications = [
    {
      industry: 'Construction & Building',
      description: 'Energy-efficient building insulation solutions',
      icon: '🏗️',
      useCases: ['Roof Insulation', 'Wall Systems', 'Floor Insulation', 'Ductwork'],
      benefits: ['Energy Savings', 'Moisture Control', 'Easy Installation', 'Long Lifespan']
    },
    {
      industry: 'Automotive & Transportation',
      description: 'Thermal management for vehicles and transportation',
      icon: '🚗',
      useCases: ['Heat Shields', 'Engine Bay Insulation', 'Exhaust Systems', 'Cabin Insulation'],
      benefits: ['Heat Protection', 'Weight Reduction', 'Noise Dampening', 'Fuel Efficiency']
    },
    {
      industry: 'Industrial & Manufacturing',
      description: 'High-temperature industrial insulation applications',
      icon: '🏭',
      useCases: ['Furnace Insulation', 'Pipe Wrapping', 'Equipment Covers', 'Process Insulation'],
      benefits: ['Energy Efficiency', 'Safety Protection', 'Process Control', 'Cost Reduction']
    },
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
    <section className="aluminum-insulation-page premium-hero-section">
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
              src={aluminumInsulationVariants[selectedVariant].images[mainImageIndex]}
              alt={aluminumInsulationVariants[selectedVariant].name}
              className="hero-main-image premium-animated"
              key={mainImageIndex}
              onClick={() => setLightboxImage(aluminumInsulationVariants[selectedVariant].images[mainImageIndex])}
            />
          </div>
          <div className="hero-thumbnails">
            {aluminumInsulationVariants[selectedVariant].images.map((img, idx) => (
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
          <h1 className="hero-title gradient-text">{aluminumInsulationVariants[selectedVariant].name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#0057b8' }}>{aluminumInsulationVariants[selectedVariant].subtitle}</h2>
          <p className="hero-description">{aluminumInsulationVariants[selectedVariant].description}</p>
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
            <span className="page-badge">🔥 Thermal Protection</span>
            <h1 className="page-title">
              Aluminum Insulation <span className="gradient-text">Sheet</span> Solutions
            </h1>
            <p className="page-subtitle">
              High-performance aluminum insulation sheets providing superior thermal protection and energy efficiency
            </p>
          </div>
        </FadeIn>

        <div className="product-showcase" ref={ref}>
          <div className="showcase-tabs">
            <ScaleIn delay={0.2}>
              <div className="tab-buttons">
                {['overview', 'thermal', 'applications'].map(tab => (
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
                    {aluminumInsulationVariants.map((variant, index) => (
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
                        <div className="main-image-wrapper glassy-card" onClick={() => setLightboxImage(aluminumInsulationVariants[selectedVariant].images[mainImageIndex])}>
                          <img
                            src={aluminumInsulationVariants[selectedVariant].images[mainImageIndex]}
                            alt={aluminumInsulationVariants[selectedVariant].name}
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
                        {aluminumInsulationVariants[selectedVariant].images.map((img, idx) => (
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
                      <h2>{aluminumInsulationVariants[selectedVariant].name}</h2>
                      <p className="product-subtitle">{aluminumInsulationVariants[selectedVariant].subtitle}</p>
                      <p className="product-description">{aluminumInsulationVariants[selectedVariant].description}</p>

                      <div className="product-features">
                        <h4>Key Features</h4>
                        <div className="features-grid">
                          {aluminumInsulationVariants[selectedVariant].features.map((feature, index) => (
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

          {activeTab === 'thermal' && (
            <div className="thermal-content">
              <div className="specifications-section">
                <FadeIn direction="up" delay={0.3}>
                  <h3>Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(aluminumInsulationVariants[selectedVariant].specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        <div className="spec-value">{value}</div>
                      </div>
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
                  {applications.map((application, index) => (
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
              <h3>Need Custom Thermal Solutions?</h3>
              <p>Our engineering team can develop specialized aluminum insulation solutions for your unique requirements</p>
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

export default AluminumInsulationPage;