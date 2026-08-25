import React, { useState, useEffect, useRef } from 'react';
import { FadeIn, ScaleIn, useIntersectionObserver, TypeWriter } from './AnimationUtils';
import './Contact.css';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();
  
  // Animation refs for scroll-triggered effects
  const heroRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const additionalInfoRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);
  
  // Animation states
  const [heroInView, setHeroInView] = useState(false);
  const [infoCardsInView, setInfoCardsInView] = useState(false);
  const [formSectionInView, setFormSectionInView] = useState(false);
  const [additionalInfoInView, setAdditionalInfoInView] = useState(false);
  const [mapSectionInView, setMapSectionInView] = useState(false);

  // Professional entrance animation state
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      setState: React.Dispatch<React.SetStateAction<boolean>>,
      threshold: number = 0.2
    ) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setState(true);
              observer.unobserve(entry.target);
            }
          },
          { threshold, rootMargin: '-50px' }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(heroRef, setHeroInView, 0.1);
    createObserver(infoCardsRef, setInfoCardsInView, 0.15);
    createObserver(formSectionRef, setFormSectionInView, 0.1);
    createObserver(additionalInfoRef, setAdditionalInfoInView, 0.2);
    createObserver(mapSectionRef, setMapSectionInView, 0.1);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData object for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New Contact Form Submission - NovaGuard');
      
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mzzverpe', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success - show success message and reset form
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        // Error handling
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setIsSubmitting(false);
      // You can add error state handling here if needed
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };



  const contactInfo = [
    {
      title: 'Phone',
      value: [
        { label: '+91 76982 55500', href: 'tel:+917698255500' },
        { label: '+91 76981 55500', href: 'tel:+917698155500' }
      ],
      description: 'Mon-Fri 9AM-6PM',
      type: 'phone'
    },
    {
      title: 'Email',
      value: 'novaguardpolyplast2025@gmail.com',
      description: 'We reply within 24 hours',
      type: 'email'
    },
    {
      title: 'Address',
      value: [
        { label: 'Shreenathji industrial, 58 Gundasara', href: 'https://www.google.com/maps/search/?api=1&query=Shreenathji+industrial,+58+Gundasara,+Gujarat+360311' },
      ],
      description: 'Gundasara, Gujarat 360311',
      type: 'location'
    }
  ];

  const industries = [
    'Electronics',
    'Automotive',
    'Furniture',
    'Healthcare',
    'Aerospace',
    'Construction',
    'Food & Beverage',
    'Other'
  ];

  const inquiryTypes = [
    'Product Information',
    'Custom Solutions',
    'Technical Support',
    'Partnership Opportunities',
    'Bulk Orders',
    'Quality Certification',
    'Other'
  ];

  return (
    <section id="contact" className="contact-modern-section">
      <div className="contact-bg-vignette" />
      <div className="contact-glass-bg" />
      <div className="contact-bg-blob contact-bg-blob-blue" />
      <div className="contact-bg-blob contact-bg-blob-orange" />
      <div className="contact-bg-blob contact-bg-blob-brand" />
      <div className="contact-grid-pattern" />
      
      {/* Floating Background Elements */}
      <div className="contact-floating-elements">
        <div className="contact-floating-element"></div>
        <div className="contact-floating-element"></div>
        <div className="contact-floating-element"></div>
        <div className="contact-floating-element"></div>
      </div>
      
      <div className={`contact-fadein${showContent ? ' visible' : ''}`}> 
        {/* Hero Banner Section */}
        <div 
          ref={heroRef}
          className={`contact-hero-banner scroll-reveal ${heroInView ? 'reveal-active' : ''}`}
        >
          <div className="contact-hero-bg"></div>
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-content">
            <FadeIn direction="up" delay={0.1}>
              <nav className="contact-breadcrumb">
                <span>Home</span>
                <span className="breadcrumb-sep">•</span>
                <span className="breadcrumb-active">Contact Us</span>
              </nav>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="contact-hero-title mask-reveal">
                <span className="mask-reveal-text">Contact <span>Us</span></span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="contact-hero-subtitle">
                <TypeWriter text="We're here to assist with smart, sustainable material solutions tailored to your needs." speed={30} delay={400} />
              </p>
            </FadeIn>
          </div>
        </div>
        {/* Main Content */}
        <div className="contact-main-content">
          <div className="container">
            {/* Contact Information Cards */}
            <div 
              ref={infoCardsRef}
              className={`contact-info-section scroll-stagger-container ${infoCardsInView ? 'stagger-active' : ''}`}
            >
              {/* Decorative Brand Blobs Background */}
              <div className="brand-blobs-bg">
                <svg width="100%" height="180" viewBox="0 0 1200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="180" cy="90" rx="120" ry="60" fill="#3b82f6" fillOpacity="0.18"/>
                  <ellipse cx="600" cy="60" rx="90" ry="40" fill="#f26a21" fillOpacity="0.13"/>
                  <ellipse cx="1050" cy="120" rx="100" ry="50" fill="#3b82f6" fillOpacity="0.12"/>
                  <ellipse cx="900" cy="40" rx="60" ry="30" fill="#f26a21" fillOpacity="0.18"/>
                </svg>
              </div>
              
              <FadeIn direction="up" delay={0.2}>
                <div className="contact-info-header">
                  <div className="info-header-badge">
                    <span className="badge-icon">📞</span>
                    <span>Get In Touch</span>
                  </div>
                  <h2 className="info-header-title">
                    Ready to <span className="title-accent">Connect</span>?
                  </h2>
                  <p className="info-header-description">
                    Reach out to our team for expert consultation and personalized solutions
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="contact-info-grid-enhanced">
                  {contactInfo.map((info, index) => (
                    <ScaleIn key={index} delay={0.1 * index}>
                      <div className="contact-info-card-enhanced">
                        <div className="card-header">
                          <div className={`icon-container ${info.type}`}>
                            <div className="icon-background"></div>
                            <div className="icon-symbol">
                              {info.type === 'phone' && '📞'}
                              {info.type === 'email' && '✉️'}
                              {info.type === 'location' && '📍'}
                            </div>
                          </div>
                          <div className="card-title-section">
                            <h3 className="card-title">{info.title}</h3>
                            <div className="title-underline"></div>
                          </div>
                        </div>
                        
                        <div className="card-content">
                          {info.type === 'phone' && Array.isArray(info.value) ? (
                            <div className="phone-numbers">
                              {info.value.map((phone, i) => (
                                <div key={i} className="phone-item">
                                  <a href={phone.href} className="contact-link phone-link">
                                    <span className="link-icon">📱</span>
                                    <span className="link-text">{phone.label}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          ) : info.type === 'email' && typeof info.value === 'string' ? (
                            <div className="email-container">
                              <a href={`mailto:${info.value}`} className="contact-link email-link">
                                <span className="link-icon">✉️</span>
                                <span className="link-text">{info.value}</span>
                              </a>
                            </div>
                          ) : info.type === 'location' && Array.isArray(info.value) ? (
                            <div className="address-container">
                              <a href={info.value[0].href} target="_blank" rel="noopener noreferrer" className="contact-link address-link">
                                <span className="link-icon">📍</span>
                                <span className="link-text">{info.value[0].label}</span>
                              </a>
                            </div>
                          ) : null}
                          
                          <div className="card-description">
                            <span className="description-text">{info.description}</span>
                          </div>
                        </div>
                        
                        <div className="card-footer">
                          <div className="action-button">
                            {info.type === 'phone' && (
                              <a href="tel:+917698255500" className="action-link">
                                <span>Call Now</span>
                                <span className="action-icon">→</span>
                              </a>
                            )}
                            {info.type === 'email' && (
                              <a href="mailto:novaguardpolyplast2025@gmail.com" className="action-link">
                                <span>Send Email</span>
                                <span className="action-icon">→</span>
                              </a>
                            )}
                            {info.type === 'location' && (
                              <a href="https://maps.app.goo.gl/fB4HuGcmih3kNT7s7" target="_blank" rel="noopener noreferrer" className="action-link">
                                <span>View on Map</span>
                                <span className="action-icon">→</span>
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <div className="card-overlay"></div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Form Section */}
            <FadeIn direction="up" delay={0.4}>
              <div 
                className="nova-contact-form-wrapper"
                style={{
                  backgroundImage: `url('/images/about-bg.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {submitSuccess && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <div className="success-text">
                      <h3>Message Sent Successfully!</h3>
                      <p>Thank you for contacting NovaGuard. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                <form className="nova-contact-form" onSubmit={handleSubmit}>
                  <div className="form-brand-header">
                    <div className="brand-logo-circle">
                      <img src="/images/logo.png" alt="Nova Guard Logo" className="form-logo-image" />
                    </div>
                    <div className="form-animated-title">
                      <span className="title-nova">Nova</span>
                      <span className="title-guard">Guard</span>
                      <div className="title-underline"></div>
                    </div>
                    <p className="form-brand-subtitle">Premium Polymer Solutions</p>
                  </div>

                  <div className="nova-form-grid">
                    <div className="nova-field-group">
                      <div className="floating-label-field">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`nova-input ${focusedField === 'firstName' || formData.firstName ? 'has-value' : ''}`}
                          id="firstName"
                        />
                        <label htmlFor="firstName" className="floating-label">
                          <span className="label-text">First Name</span>
                          <span className="label-icon">👤</span>
                        </label>
                        <div className="field-border"></div>
                      </div>
                    </div>

                    <div className="nova-field-group">
                      <div className="floating-label-field">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`nova-input ${focusedField === 'lastName' || formData.lastName ? 'has-value' : ''}`}
                          id="lastName"
                        />
                        <label htmlFor="lastName" className="floating-label">
                          <span className="label-text">Last Name</span>
                          <span className="label-icon">👤</span>
                        </label>
                        <div className="field-border"></div>
                      </div>
                    </div>

                    <div className="nova-field-group">
                      <div className="floating-label-field">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`nova-input ${focusedField === 'email' || formData.email ? 'has-value' : ''}`}
                          id="email"
                        />
                        <label htmlFor="email" className="floating-label">
                          <span className="label-text">Email Address</span>
                          <span className="label-icon">✉️</span>
                        </label>
                        <div className="field-border"></div>
                      </div>
                    </div>

                    <div className="nova-field-group">
                      <div className="floating-label-field">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`nova-input ${focusedField === 'phone' || formData.phone ? 'has-value' : ''}`}
                          id="phone"
                        />
                        <label htmlFor="phone" className="floating-label">
                          <span className="label-text">Phone Number</span>
                          <span className="label-icon">📱</span>
                        </label>
                        <div className="field-border"></div>
                      </div>
                    </div>

                    <div className="nova-field-group full-width">
                      <div className="floating-label-field">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={4}
                          className={`nova-input nova-textarea ${focusedField === 'message' || formData.message ? 'has-value' : ''}`}
                          id="message"
                        />
                        <label htmlFor="message" className="floating-label">
                          <span className="label-text">Your Message</span>
                          <span className="label-icon">💬</span>
                        </label>
                        <div className="field-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="nova-form-actions">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`nova-submit-btn ${isSubmitting ? 'submitting' : ''} ${submitSuccess ? 'success' : ''}`}
                    >
                      <div className="btn-content">
                        {isSubmitting ? (
                          <>
                            <div className="btn-spinner"></div>
                            <span>Sending...</span>
                          </>
                        ) : submitSuccess ? (
                          <>
                            <div className="btn-success-icon">✓</div>
                            <span>Message Sent!</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <div className="btn-arrow-nova">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="btn-glow"></div>
                      <div className="btn-particles">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={`particle particle-${i + 1}`}></div>
                        ))}
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>

            {/* Additional Info Section */}
            <div 
              ref={additionalInfoRef}
              className={`contact-additional-info scroll-info-section ${additionalInfoInView ? 'info-reveal-active' : ''}`}
            >
              {/* Decorative Brand Blobs Background */}
              <div className="brand-blobs-bg">
                <svg width="100%" height="120" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="200" cy="60" rx="90" ry="40" fill="#3b82f6" fillOpacity="0.13"/>
                  <ellipse cx="600" cy="40" rx="60" ry="30" fill="#f26a21" fillOpacity="0.12"/>
                  <ellipse cx="1000" cy="80" rx="80" ry="35" fill="#3b82f6" fillOpacity="0.10"/>
                  <ellipse cx="850" cy="30" rx="40" ry="18" fill="#f26a21" fillOpacity="0.15"/>
                </svg>
              </div>
              <FadeIn direction="up" delay={0.5}>
                <div className="additional-info-grid">
                  <div className="info-block">
                    <div className="info-block-icon">
                      <div className="icon-circle">
                        <div className="clock-icon"></div>
                      </div>
                    </div>
                    <h3>Quick Response</h3>
                    <p>We respond to all inquiries within 24 hours during business days.</p>
                  </div>

                  <div className="info-block">
                    <div className="info-block-icon">
                      <div className="icon-circle">
                        <div className="expert-icon"></div>
                      </div>
                    </div>
                    <h3>Expert Consultation</h3>
                    <p>Get personalized advice from our packaging solution experts.</p>
                  </div>

                  <div className="info-block">
                    <div className="info-block-icon">
                      <div className="icon-circle">
                        <div className="support-icon"></div>
                      </div>
                    </div>
                    <h3>Ongoing Support</h3>
                    <p>Comprehensive support throughout your project lifecycle.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Premium Factory Location Map Section */}
            <div 
              ref={mapSectionRef}
              className={`factory-location-section scroll-map-section ${mapSectionInView ? 'map-reveal-active' : ''}`}
            >
              <div className="factory-location-flex">
                <div className="factory-map-and-features">
                  <FadeIn direction="up" delay={0.6}>
                    <div className="location-header">
                      <div className="premium-badge">
                        <span className="badge-icon">🏭</span>
                        <span className="badge-text">Manufacturing Excellence</span>
                      </div>
                      <h2 className="location-title">
                        <span className="title-main">Visit Our</span>
                        <span className="title-highlight">Nova Guard Factory</span>
                      </h2>
                      <p className="location-description">
                        Experience innovation at our cutting-edge manufacturing facility in Gujarat.
                        Witness world-class production capabilities, advanced machinery, and sustainable practices
                        that set industry standards.
                      </p>
                      {/* Premium Stats */}
                      <div className="facility-stats">
                        <div className="stat-item">
                          <div className="stat-number">250,000</div>
                          <div className="stat-label">Sq Ft Facility</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">24/7</div>
                          <div className="stat-label">Production</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">ISO</div>
                          <div className="stat-label">Certified</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">50+</div>
                          <div className="stat-label">Expert Team</div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                  
                  {/* Desktop Map */}
                  <FadeIn direction="up" delay={0.8}>
                    <div className="premium-map-container desktop-map">
                      {/* Map Frame with Premium Border */}
                      <div className="map-frame">
                        <div className="map-border-glow"></div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7026.725827156713!2d70.79466270684452!3d22.11643051348846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395837000aa50ce7%3A0x12b33422ee3b28aa!2sNova%20Guard%20Polyplast!5e1!3m2!1sen!2sin!4v1753174434907!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="NovaGuard Factory Location"
                          className="premium-map-iframe"
                        />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>

            {/* Mobile Map Section - Full Width */}
            <div className="mobile-map-section">
              <div className="premium-map-container">
                {/* Map Frame with Premium Border */}
                <div className="map-frame">
                  <div className="map-border-glow"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7026.725827156713!2d70.79466270684452!3d22.11643051348846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395837000aa50ce7%3A0x12b33422ee3b28aa!2sNova%20Guard%20Polyplast!5e1!3m2!1sen!2sin!4v1753174434907!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NovaGuard Factory Location"
                    className="premium-map-iframe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;