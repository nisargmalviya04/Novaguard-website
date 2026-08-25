import React, { useState, useEffect } from 'react';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './BubbleSheetPage.css';
import Lightbox from './Lightbox';
import './Lightbox.css';

const BubbleSheetPage: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const bubbleSheetVariants = [
    {
      id: 1,
      name: 'Standard Bubble Sheet',
      subtitle: 'Versatile Protection',
      description: 'Versatile bubble sheets for wrapping and protecting various products during transit and storage.',
      images: [
        '/images/hero5.jpg',
        '/images/facility.jpg',
        '/images/hero2.jpg',
      ],
      specifications: {
        thickness: '3-8mm',
        density: '40-90 kg/m³',
        bubbleSize: '10-20mm',
        sheetSize: '500x500mm to 2000x2000mm',
        temperature: '-40°C to +75°C',
        certification: 'ISO 9001, FDA Approved'
      },
      features: ['Flexible Sizing', 'Multi-Purpose', 'Tear Resistant', 'Lightweight'],
      applications: ['General Packaging', 'Moving & Storage', 'Retail Display', 'Void Fill'],
      price: '$2.20/sq ft',
      rating: 4.6,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 2,
      name: 'Heavy-Duty Bubble Sheet',
      subtitle: 'Industrial Strength',
      description: 'Industrial-grade bubble sheets engineered for heavy-duty applications and harsh environments.',
      images: [
        '/images/facility.jpg',
        '/images/hero2.jpg',
        '/images/hero5.jpg',
      ],
      specifications: {
        thickness: '5-12mm',
        density: '60-130 kg/m³',
        bubbleSize: '15-25mm',
        sheetSize: '600x600mm to 3000x3000mm',
        temperature: '-50°C to +85°C',
        certification: 'ISO 9001, ASTM D3575'
      },
      features: ['Heavy Duty', 'Puncture Resistant', 'Chemical Resistant', 'UV Stable'],
      applications: ['Industrial Equipment', 'Machinery Parts', 'Construction', 'Automotive'],
      price: '$3.80/sq ft',
      rating: 4.8,
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 3,
      name: 'Perforated Bubble Sheet',
      subtitle: 'Easy Application',
      description: 'Pre-perforated bubble sheets for easy tearing and custom sizing applications.',
      images: [
        '/images/hero2.jpg',
        '/images/hero5.jpg',
        '/images/facility.jpg',
      ],
      specifications: {
        thickness: '3-6mm',
        density: '35-75 kg/m³',
        bubbleSize: '8-15mm',
        sheetSize: '300x300mm to 1500x1500mm',
        temperature: '-35°C to +65°C',
        certification: 'ISO 9001, REACH Compliant'
      },
      features: ['Perforated Lines', 'Easy Tear', 'Customizable', 'Quick Application'],
      applications: ['Small Items', 'Retail Packaging', 'Gift Wrapping', 'Craft Projects'],
      price: '$2.60/sq ft',
      rating: 4.5,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const industries = [
    {
      name: 'Automotive',
      description: 'Protecting automotive parts and components during manufacturing and shipping',
      icon: '🚗',
      applications: ['Engine Components', 'Body Parts', 'Glass Protection', 'Interior Parts'],
      benefits: ['Scratch Prevention', 'Moisture Barrier', 'Chemical Resistance', 'Custom Fit']
    },
    {
      name: 'Electronics',
      description: 'Safeguarding sensitive electronic equipment and components',
      icon: '📱',
      applications: ['Consumer Electronics', 'Computer Hardware', 'Telecommunications', 'Medical Devices'],
      benefits: ['Static Protection', 'Shock Absorption', 'Dust Barrier', 'Temperature Stable']
    },
    {
      name: 'Furniture',
      description: 'Protecting furniture during manufacturing, storage, and delivery',
      icon: '🛋️',
      applications: ['Upholstery', 'Wood Surfaces', 'Glass Tops', 'Metal Hardware'],
      benefits: ['Scratch Prevention', 'Moisture Protection', 'Easy Handling', 'Reusable']
    },
    {
      name: 'Construction',
      description: 'Construction materials and equipment protection on job sites',
      icon: '🏗️',
      applications: ['Building Materials', 'Tools & Equipment', 'Fixtures', 'Architectural Elements'],
      benefits: ['Weather Resistance', 'Impact Protection', 'Dust Barrier', 'Heavy Duty']
    },
    {
      name: 'Healthcare',
      description: 'Medical equipment and pharmaceutical product protection',
      icon: '🏥',
      applications: ['Medical Devices', 'Pharmaceutical Products', 'Laboratory Equipment', 'Surgical Instruments'],
      benefits: ['Sterile Packaging', 'Contamination Prevention', 'Regulatory Compliance', 'Gentle Protection']
    },
    {
      name: 'Aerospace',
      description: 'Critical aerospace components requiring highest protection standards',
      icon: '✈️',
      applications: ['Aircraft Components', 'Satellite Equipment', 'Precision Instruments', 'Composite Materials'],
      benefits: ['Precision Protection', 'Cleanroom Compatible', 'Traceability', 'High Performance']
    }
  ];

  const qualityStandards = [
    {
      standard: 'ISO 9001:2015',
      description: 'Quality Management System',
      scope: 'Manufacturing processes and quality control',
      benefits: ['Consistent Quality', 'Process Optimization', 'Customer Satisfaction', 'Continuous Improvement']
    },
    {
      standard: 'ASTM D3575',
      description: 'Standard Test Methods for Flexible Cellular Materials',
      scope: 'Material properties and performance testing',
      benefits: ['Standardized Testing', 'Performance Validation', 'Material Consistency', 'Reliability Assurance']
    },
    {
      standard: 'REACH Compliance',
      description: 'European Chemical Regulation',
      scope: 'Chemical safety and environmental protection',
      benefits: ['Safe Materials', 'Environmental Protection', 'Regulatory Compliance', 'Market Access']
    },
    {
      standard: 'FDA Approval',
      description: 'Food and Drug Administration Compliance',
      scope: 'Food contact and medical applications',
      benefits: ['Food Safety', 'Medical Grade', 'Regulatory Approval', 'Consumer Protection']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Wong',
      company: 'Pacific Manufacturing',
      text: 'The heavy-duty bubble sheets have transformed our packaging operations. Exceptional protection for our industrial equipment.',
      rating: 5
    },
    {
      name: 'Mark Stevens',
      company: 'AutoParts Direct',
      text: 'Perfect solution for our automotive parts. The chemical resistance and durability are exactly what we needed.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      company: 'MedTech Solutions',
      text: 'FDA approved sheets give us confidence in our medical device packaging. Outstanding quality and reliability.',
      rating: 5
    }
  ];

  useEffect(() => {
    setMainImageIndex(0);
  }, [selectedVariant]);

  return (
    <section className="bubble-sheet-page">
      {/* Single Lightbox at root */}
      <Lightbox
        open={!!lightboxImage}
        imageSrc={lightboxImage || ''}
        alt="Product Image"
        onClose={() => setLightboxImage(null)}
      />
      <div className="container">
        <FadeIn direction="down">
          <div className="page-header">
            <span className="page-badge">📋 Industrial Grade</span>
            <h1 className="page-title">
              Bubble <span className="gradient-text">Sheet</span> Solutions
            </h1>
            <p className="page-subtitle">
              Versatile bubble sheets engineered for industrial applications and demanding environments
            </p>
          </div>
        </FadeIn>

        <div className="product-showcase" ref={ref}>
          <div className="showcase-tabs">
            <ScaleIn delay={0.2}>
              <div className="tab-buttons">
                {['overview', 'industries', 'quality', 'testimonials'].map(tab => (
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
                    {bubbleSheetVariants.map((variant, index) => (
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
                        <div className="main-image-wrapper glassy-card" onClick={() => setLightboxImage(bubbleSheetVariants[selectedVariant].images[mainImageIndex])}>
                          <img
                            src={bubbleSheetVariants[selectedVariant].images[mainImageIndex]}
                            alt={bubbleSheetVariants[selectedVariant].name}
                            className="hero-main-image premium-animated"
                            key={mainImageIndex}
                          />
                          <div className="image-overlay">
                            <div className="zoom-icon">🔍</div>
                            <div className="overlay-text">View Details</div>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-thumbnails">
                        {bubbleSheetVariants[selectedVariant].images.map((img, idx) => (
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
                      <h2>{bubbleSheetVariants[selectedVariant].name}</h2>
                      <p className="product-subtitle">{bubbleSheetVariants[selectedVariant].subtitle}</p>
                      <p className="product-description">{bubbleSheetVariants[selectedVariant].description}</p>

                      <div className="product-features">
                        <h4>Key Features</h4>
                        <div className="features-grid">
                          {bubbleSheetVariants[selectedVariant].features.map((feature, index) => (
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
          )}

          {activeTab === 'industries' && (
            <div className="industries-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="industries-grid">
                  {industries.map((industry, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="industry-card">
                        <div className="industry-icon">{industry.icon}</div>
                        <h4>{industry.name}</h4>
                        <p>{industry.description}</p>
                        
                        <div className="industry-applications">
                          <h5>Applications</h5>
                          <div className="applications-list">
                            {industry.applications.map((app, appIndex) => (
                              <span key={appIndex} className="application-item">{app}</span>
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

          {activeTab === 'quality' && (
            <div className="quality-content">
              <FadeIn direction="up" delay={0.3}>
                <div className="quality-grid">
                  {qualityStandards.map((standard, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="quality-card">
                        <div className="quality-header">
                          <div className="quality-badge">🏆</div>
                          <h4>{standard.standard}</h4>
                        </div>
                        <p className="quality-description">{standard.description}</p>
                        <div className="quality-scope">
                          <h5>Scope</h5>
                          <p>{standard.scope}</p>
                        </div>
                        <div className="quality-benefits">
                          <h5>Benefits</h5>
                          <div className="benefits-grid">
                            {standard.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="benefit-tag">
                                {benefit}
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
              <h3>Ready for Industrial-Grade Protection?</h3>
              <p>Contact our engineering team for custom bubble sheet solutions tailored to your industry</p>
              <div className="cta-buttons">
                <button className="cta-btn primary">
                  <span>Get Custom Quote</span>
                  <span className="btn-shine"></span>
                </button>
                <button className="cta-btn secondary">
                  <span>Engineering Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BubbleSheetPage;