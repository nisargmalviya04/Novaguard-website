import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './PPCorrugatedPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const PPCorrugatedPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, isIntersecting] = useIntersectionObserver();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const ppCorrugatedVariants = [
    {
      id: 1,
      name: 'Standard PP Corrugated Sheet',
      subtitle: 'Versatile Solution',
      description: 'Versatile polypropylene corrugated sheets for packaging, signage, and construction applications.',
      images: [
        '/images/pp1.jpg',
        '/images/pp2.jpg',
        '/images/pp3.jpg',
      ],
      specifications: {
        thickness: '3-10mm',
        sheetSize: '6Ft to 8Ft',
        temperature: '-20°C to +80°C',
        certification: 'ISO 9001, FDA Approved'
      },
      features: ['Lightweight', 'Chemical Resistant', 'Recyclable', 'Easy to Cut'],
      applications: ['Packaging Solutions', 'Signage & Display', 'Protective Barriers', 'Storage Boxes'],
      price: '$1.80/sq ft',
      rating: 4.7,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 2,
      name: 'Heavy-Duty PP Corrugated Sheet',
      subtitle: 'Industrial Strength',
      description: 'Heavy-duty polypropylene corrugated sheets engineered for demanding industrial applications.',
      images: [
        '/images/pp4.jpg',
        '/images/pp5.jpg',
        '/images/pp6.jpg',
      ],
      specifications: {
        thickness: '5-10mm',
        sheetSize: '6Ft to 8Ft',
        temperature: '-30°C to +90°C',
        certification: 'ISO 9001, REACH Compliant'
      },
      features: ['High Strength', 'Impact Resistant', 'Weather Resistant', 'Long Lasting'],
      applications: ['Construction Panels', 'Industrial Packaging', 'Automotive Parts', 'Agricultural Uses'],
      price: '$2.80/sq ft',
      rating: 4.8,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 3,
      name: 'Specialty PP Corrugated Sheet',
      subtitle: 'Custom Solutions',
      description: 'Specialty polypropylene corrugated sheets with enhanced properties for specific applications.',
      images: [
        '/images/pp7.jpg',
        '/images/pp8.jpg',
        '/images/pp9.jpg',
      ],
      specifications: {
        thickness: '5-10mm',
        sheetSize: '6Ft to 8Ft',
        temperature: '-40°C to +100°C',
        certification: 'ISO 9001, UL Listed, RoHS'
      },
      features: ['Anti-Static', 'UV Stabilized', 'Fire Retardant', 'Custom Colors'],
      applications: ['Electronics Packaging', 'Cleanroom Applications', 'Outdoor Signage', 'Specialized Storage'],
      price: '$3.50/sq ft',
      rating: 4.9,
      color: 'from-[#ff6600] to-[#0057b8]'
    }
  ];

  const industries = [
    {
      industry: 'Packaging & Logistics',
      description: 'Efficient packaging solutions for various industries',
      icon: '📦',
      useCases: ['Shipping Boxes', 'Protective Packaging', 'Returnable Containers', 'Dividers & Separators'],
      benefits: ['Cost Effective', 'Lightweight', 'Reusable', 'Custom Printing']
    },
    {
      industry: 'Signage & Advertising',
      description: 'Durable signage solutions for indoor and outdoor use',
      icon: '🪧',
      useCases: ['Outdoor Signs', 'Point of Sale Displays', 'Trade Show Graphics', 'Real Estate Signs'],
      benefits: ['Weather Resistant', 'Printable Surface', 'Easy Installation', 'Professional Appearance']
    },
    {
      industry: 'Construction & Building',
      description: 'Temporary and permanent construction applications',
      icon: '🏗️',
      useCases: ['Temporary Barriers', 'Protection Panels', 'Formwork', 'Insulation Backing'],
      benefits: ['Durable', 'Easy to Handle', 'Cost Effective', 'Weather Resistant']
    },
    {
      industry: 'Agriculture & Horticulture',
      description: 'Agricultural applications and greenhouse solutions',
      icon: '🌱',
      useCases: ['Greenhouse Panels', 'Plant Protection', 'Storage Containers', 'Seedling Trays'],
      benefits: ['UV Resistant', 'Chemical Resistant', 'Easy to Clean', 'Long Lasting']
    },
    {
      industry: 'Automotive & Transportation',
      description: 'Automotive parts and transportation packaging',
      icon: '🚗',
      useCases: ['Parts Packaging', 'Interior Panels', 'Protective Covers', 'Shipping Containers'],
      benefits: ['Lightweight', 'Impact Resistant', 'Chemical Resistant', 'Recyclable']
    },
    {
      industry: 'Electronics & Technology',
      description: 'Electronics packaging and cleanroom applications',
      icon: '💻',
      useCases: ['Anti-Static Packaging', 'Component Storage', 'Cleanroom Panels', 'ESD Protection'],
      benefits: ['Anti-Static Options', 'Clean Manufacturing', 'Precise Dimensions', 'Static Dissipative']
    }
  ];

  const sustainability = [
    {
      aspect: 'Recyclability',
      description: '100% recyclable polypropylene material',
      icon: '♻️',
      benefits: ['Circular Economy', 'Waste Reduction', 'Resource Conservation', 'Environmental Protection']
    },
    {
      aspect: 'Energy Efficiency',
      description: 'Low energy manufacturing process',
      icon: '⚡',
      benefits: ['Reduced Carbon Footprint', 'Energy Savings', 'Efficient Production', 'Lower Emissions']
    },
    {
      aspect: 'Durability',
      description: 'Long-lasting material reduces replacement needs',
      icon: '🛡️',
      benefits: ['Extended Lifespan', 'Reduced Waste', 'Cost Savings', 'Resource Efficiency']
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
    <section className="pp-corrugated-page premium-hero-section">
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
              src={ppCorrugatedVariants[selectedVariant].images[mainImageIndex]}
              alt={ppCorrugatedVariants[selectedVariant].name}
              className="hero-main-image premium-animated"
              key={mainImageIndex}
              onClick={() => setLightboxImage(ppCorrugatedVariants[selectedVariant].images[mainImageIndex])}
            />
          </div>
          <div className="hero-thumbnails">
            {ppCorrugatedVariants[selectedVariant].images.map((img, idx) => (
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
          <h1 className="hero-title gradient-text">{ppCorrugatedVariants[selectedVariant].name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#0057b8' }}>{ppCorrugatedVariants[selectedVariant].subtitle}</h2>
          <p className="hero-description">{ppCorrugatedVariants[selectedVariant].description}</p>
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
            <span className="page-badge">📋 Versatile Material</span>
            <h1 className="page-title">
              PP Corrugated <span className="gradient-text">Sheet</span> Solutions
            </h1>
            <p className="page-subtitle">
              Versatile polypropylene corrugated sheets engineered for packaging, signage, and construction applications
            </p>
          </div>
        </FadeIn>

        <div className="product-showcase" ref={ref}>
          <div className="showcase-tabs">
            <ScaleIn delay={0.2}>
              <div className="tab-buttons">
                {['overview', 'Specifications', 'industries', 'sustainability'].map(tab => (
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
                    {ppCorrugatedVariants.map((variant, index) => (
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
                        <div className="main-image-wrapper glassy-card" onClick={() => setLightboxImage(ppCorrugatedVariants[selectedVariant].images[mainImageIndex])}>
                          <img
                            src={ppCorrugatedVariants[selectedVariant].images[mainImageIndex]}
                            alt={ppCorrugatedVariants[selectedVariant].name}
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
                        {ppCorrugatedVariants[selectedVariant].images.map((img, idx) => (
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
                      <h2>{ppCorrugatedVariants[selectedVariant].name}</h2>
                      <p className="product-subtitle">{ppCorrugatedVariants[selectedVariant].subtitle}</p>
                      <p className="product-description">{ppCorrugatedVariants[selectedVariant].description}</p>

                      <div className="product-features">
                        <h4>Key Features</h4>
                        <div className="features-grid">
                          {ppCorrugatedVariants[selectedVariant].features.map((feature, index) => (
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
                    {Object.entries(ppCorrugatedVariants[selectedVariant].specifications).map(([key, value]) => (
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

          {activeTab === 'industries' && (
            <div className="industries-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="industries-grid">
                  {industries.map((industry, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="industry-card">
                        <div className="industry-icon">{industry.icon}</div>
                        <h4>{industry.industry}</h4>
                        <p>{industry.description}</p>
                        
                        <div className="industry-use-cases">
                          <h5>Use Cases</h5>
                          <div className="use-cases-list">
                            {industry.useCases.map((useCase, useCaseIndex) => (
                              <span key={useCaseIndex} className="use-case-item">{useCase}</span>
                            ))}
                          </div>
                        </div>

                        <div className="industry-benefits">
                          <h5>Benefits</h5>
                          <div className="benefits-list">
                            {industry.benefits.map((benefit, benefitIndex) => (
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

          {activeTab === 'sustainability' && (
            <div className="sustainability-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="sustainability-grid">
                  {sustainability.map((item, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="sustainability-card">
                        <div className="sustainability-icon">{item.icon}</div>
                        <h4>{item.aspect}</h4>
                        <p>{item.description}</p>
                        
                        <div className="sustainability-benefits">
                          <h5>Environmental Benefits</h5>
                          <div className="benefits-list">
                            {item.benefits.map((benefit, benefitIndex) => (
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
              <h3>Need Custom PP Corrugated Solutions?</h3>
              <p>Our engineering team can develop specialized polypropylene corrugated sheets for your unique applications</p>
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

export default PPCorrugatedPage;