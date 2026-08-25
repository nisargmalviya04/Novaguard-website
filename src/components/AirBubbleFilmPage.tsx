import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './AirBubbleFilmPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const AirBubbleFilmPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, isIntersecting] = useIntersectionObserver();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const airBubbleVariants = [
    {
      id: 1,
      name: 'Standard Air Bubble Film',
      subtitle: 'Reliable Cushioning',
      description: 'Premium air bubble film providing excellent cushioning and protection for fragile items during transit.',
      images: [
        '/images/hero3.jpg',
        '/images/hero4.jpg',
        '/images/hero5.jpg',
      ],
      specifications: {
        thickness: '2-5mm',
        density: '30-70 kg/m³',
        bubbleSize: '8-15mm',
        rollWidth: '400-1200mm',
        temperature: '-30°C to +70°C',
        certification: 'ISO 14001, RoHS'
      },
      features: ['Excellent Cushioning', 'Flexible', 'Cost Effective', 'Transparent'],
      applications: ['Glass Protection', 'Ceramic Items', 'Electronics', 'Artwork'],
      price: '$1.80/sq ft',
      rating: 4.7,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 2,
      name: 'Anti-Static Air Bubble Film',
      subtitle: 'Electronics Protection',
      description: 'Specialized anti-static air bubble film designed specifically for sensitive electronic components.',
      images: [
        '/images/hero4.jpg',
        '/images/hero5.jpg',
        '/images/hero3.jpg',
      ],
      specifications: {
        thickness: '2-4mm',
        density: '25-60 kg/m³',
        bubbleSize: '6-12mm',
        rollWidth: '300-1000mm',
        temperature: '-20°C to +60°C',
        certification: 'ESD S20.20, IEC 61340'
      },
      features: ['Anti-Static Properties', 'ESD Protection', 'Conductive', 'Pink Tinted'],
      applications: ['Circuit Boards', 'Electronic Components', 'Computer Parts', 'Semiconductors'],
      price: '$3.50/sq ft',
      rating: 4.9,
      color: 'from-[#ff6600] to-[#0057b8]'
    },
    {
      id: 3,
      name: 'Heavy-Duty Air Bubble Film',
      subtitle: 'Maximum Protection',
      description: 'Industrial-grade air bubble film with enhanced durability for heavy-duty applications.',
      images: [
        '/images/hero5.jpg',
        '/images/hero3.jpg',
        '/images/hero4.jpg',
      ],
      specifications: {
        thickness: '4-8mm',
        density: '50-100 kg/m³',
        bubbleSize: '12-20mm',
        rollWidth: '500-1500mm',
        temperature: '-40°C to +80°C',
        certification: 'ISO 9001, ASTM D3575'
      },
      features: ['Heavy Duty', 'Puncture Resistant', 'Multi-Layer', 'UV Stabilized'],
      applications: ['Industrial Parts', 'Heavy Equipment', 'Machinery', 'Construction Materials'],
      price: '$2.90/sq ft',
      rating: 4.8,
      color: 'from-[#ff6600] to-[#0057b8]'
    }
  ];

  useEffect(() => {
    setMainImageIndex(0);
  }, [selectedVariant]);

  const useCases = [
    {
      title: 'E-commerce Packaging',
      description: 'Perfect for online retailers shipping fragile items worldwide.',
      icon: '📦',
      benefits: ['Reduces damage claims', 'Lightweight shipping', 'Professional appearance', 'Cost effective']
    },
    {
      title: 'Moving & Storage',
      description: 'Ideal for protecting household items during relocation.',
      icon: '🏠',
      benefits: ['Easy to wrap', 'Reusable material', 'Space efficient', 'Moisture resistant']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial applications for protecting finished products.',
      icon: '🏭',
      benefits: ['Bulk availability', 'Custom sizing', 'Quality consistency', 'Fast delivery']
    },
    {
      title: 'Art & Antiques',
      description: 'Museum-grade protection for valuable collectibles.',
      icon: '🎨',
      benefits: ['Archival quality', 'Non-reactive', 'Transparent view', 'Gentle cushioning']
    }
  ];

  const technicalData = [
    {
      parameter: 'Burst Strength',
      value: '15-45 kPa',
      description: 'Pressure resistance of individual bubbles'
    },
    {
      parameter: 'Puncture Resistance',
      value: '2-8 N',
      description: 'Force required to puncture the film'
    },
    {
      parameter: 'Tear Strength',
      value: '25-75 N/mm',
      description: 'Resistance to tearing in both directions'
    },
    {
      parameter: 'Transparency',
      value: '85-95%',
      description: 'Light transmission for content visibility'
    },
    {
      parameter: 'Shelf Life',
      value: '5+ years',
      description: 'Storage life under normal conditions'
    },
    {
      parameter: 'Recyclability',
      value: '100%',
      description: 'Fully recyclable polyethylene material'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Pacific Electronics',
      text: 'The anti-static air bubble film has been a game-changer for our electronics shipping. Zero damage claims in 6 months!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Artisan Gallery',
      text: 'Transparent and gentle protection for our valuable artwork. Perfect for both storage and shipping.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Industrial Solutions Inc.',
      text: 'Heavy-duty film handles our toughest packaging challenges. Excellent quality and reliable supply.',
      rating: 5
    }
  ];

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
    <section className="air-bubble-page premium-hero-section">
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
          <div className="main-image-wrapper glassy-card" onClick={() => setLightboxImage(airBubbleVariants[selectedVariant].images[mainImageIndex])}>
            <img
              src={airBubbleVariants[selectedVariant].images[mainImageIndex]}
              alt={airBubbleVariants[selectedVariant].name}
              className="hero-main-image premium-animated"
              key={mainImageIndex}
            />
            {/* overlay etc. if present */}
          </div>
          <div className="hero-thumbnails">
            {airBubbleVariants[selectedVariant].images.map((img, idx) => (
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
          <h1 className="hero-title gradient-text">{airBubbleVariants[selectedVariant].name}</h1>
          <h2 className="hero-subtitle" style={{ color: '#0057b8' }}>{airBubbleVariants[selectedVariant].subtitle}</h2>
          <p className="hero-description">{airBubbleVariants[selectedVariant].description}</p>
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
            <span className="page-badge">💨 Advanced Cushioning</span>
            <h1 className="page-title">
              Air Bubble <span className="gradient-text">Film</span> Solutions
            </h1>
            <p className="page-subtitle">
              Premium air bubble film technology providing superior cushioning and protection for delicate items
            </p>
          </div>
        </FadeIn>

        <div className="product-showcase" ref={ref}>
          <div className="showcase-tabs">
            <ScaleIn delay={0.2}>
              <div className="tab-buttons">
                {['overview', 'technical', 'use-cases', 'testimonials'].map(tab => (
                  <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'use-cases' ? 'Use Cases' : tab.charAt(0).toUpperCase() + tab.slice(1)}
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
                    {airBubbleVariants.map((variant, index) => (
                      <div
                        key={variant.id}
                        className={`variant-card ${selectedVariant === index ? 'selected' : ''}`}
                        onClick={() => setSelectedVariant(index)}
                      >
                        <div className={`variant-gradient bg-gradient-to-br ${variant.color}`}></div>
                        <div className="variant-content">
                          <h3>{variant.name}</h3>
                          <p>{variant.subtitle}</p>
                          <div className="variant-price">{variant.price}</div>
                          <div className="variant-rating">
                            <span className="rating-stars">{'★'.repeat(Math.floor(variant.rating))}</span>
                            <span>{variant.rating}</span>
                          </div>
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
                        <img
                          src={airBubbleVariants[selectedVariant].images[mainImageIndex]}
                          alt={airBubbleVariants[selectedVariant].name}
                          className="gallery-main-image premium-animated"
                          key={mainImageIndex}
                        />
                        <div className="image-overlay">
                          <div className="zoom-icon">🔍</div>
                          <div className="overlay-text">View Details</div>
                        </div>
                      </div>
                      <div className="gallery-thumbnails">
                        {airBubbleVariants[selectedVariant].images.map((img, idx) => (
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
                      <h2>{airBubbleVariants[selectedVariant].name}</h2>
                      <p className="product-subtitle">{airBubbleVariants[selectedVariant].subtitle}</p>
                      <p className="product-description">{airBubbleVariants[selectedVariant].description}</p>

                      <div className="product-features">
                        <h4>Key Features</h4>
                        <div className="features-grid">
                          {airBubbleVariants[selectedVariant].features.map((feature, index) => (
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

          {activeTab === 'technical' && (
            <div className="technical-content">
              <div className="specifications-section">
                <FadeIn direction="up" delay={0.3}>
                  <h3>Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(airBubbleVariants[selectedVariant].specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <div className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        <div className="spec-value">{value}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              <div className="technical-data-section">
                <FadeIn direction="up" delay={0.4}>
                  <h3>Performance Data</h3>
                  <div className="technical-grid">
                    {technicalData.map((data, index) => (
                      <ScaleIn key={index} delay={0.1 * index}>
                        <div className="technical-item">
                          <div className="tech-header">
                            <div className="tech-parameter">{data.parameter}</div>
                            <div className="tech-value">{data.value}</div>
                          </div>
                          <div className="tech-description">{data.description}</div>
                        </div>
                      </ScaleIn>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          )}

          {activeTab === 'use-cases' && (
            <div className="use-cases-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="use-cases-grid">
                  {useCases.map((useCase, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="use-case-card">
                        <div className="use-case-icon">{useCase.icon}</div>
                        <h4>{useCase.title}</h4>
                        <p>{useCase.description}</p>
                        <div className="benefits-list">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="benefit-item">
                              <span className="benefit-icon">✓</span>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="testimonials-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="testimonials-grid">
                  {testimonials.map((testimonial, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="testimonial-card">
                        <div className="testimonial-rating">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="testimonial-author">
                          <div className="author-name">{testimonial.name}</div>
                          <div className="author-company">{testimonial.company}</div>
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
              <h3>Need Custom Air Bubble Film?</h3>
              <p>Our engineering team can create specialized solutions for your unique requirements</p>
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

export default AirBubbleFilmPage;