import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, ScaleIn, TypeWriter } from './AnimationUtils';
import './Services.css';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleBrochureDownload = () => {
    setIsDownloading(true);
    
    try {
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'NovaGuard_Brochure.pdf';
      link.target = '_blank';
      
      // Add to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Show success message
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      
      // Fallback: Open in new tab if download fails
      window.open('/brochure.pdf', '_blank');
    }
  };

  const handleStartProject = () => {
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

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'engineering', name: 'Engineering', icon: '⚙️' },
    { id: 'logistics', name: 'Logistics', icon: '🚚' },
    { id: 'research', name: 'Research', icon: '🔬' }
  ];

  const services = [
    {
      id: 1,
      category: 'manufacturing',
      icon: '🏭',
      title: 'Manufacturing Excellence',
      subtitle: 'Advanced Production Facilities',
      description: 'State-of-the-art manufacturing with cutting-edge technology and precision quality control systems.',
      keyPoints: ['ISO 9001 Certified', '5000+ sq ft Daily Capacity', 'Advanced Automation', 'Quality Assurance'],
      stats: { value: '250,000+', label: 'sq ft daily' },
      color: 'blue',
      certification: 'ISO 9001:2015',
      features: ['24/7 Production', 'Custom Solutions', 'Bulk Orders', 'Quality Control']
    },
    {
      id: 2,
      category: 'logistics',
      icon: '🌍',
      title: 'Global Export Services',
      subtitle: 'Worldwide Market Reach',
      description: 'Comprehensive international trade solutions with reliable logistics and regulatory compliance.',
      keyPoints: ['50+ Countries Served', 'Export Documentation', 'Global Compliance', 'Reliable Shipping'],
      stats: { value: '50+', label: 'countries' },
      color: 'green',
      certification: 'CE Marking',
      features: ['Fast Shipping', 'Documentation', 'Tracking', 'Insurance']
    },
    {
      id: 3,
      category: 'engineering',
      icon: '⚙️',
      title: 'Custom Engineering',
      subtitle: 'Tailored Solutions',
      description: 'Bespoke engineering solutions designed to meet specific industrial requirements and applications.',
      keyPoints: ['Custom Design', 'Technical Consultation', 'Specialized Materials', 'Bulk Production'],
      stats: { value: '100%', label: 'customizable' },
      color: 'orange',
      certification: 'ASTM Standards',
      features: ['Custom Design', 'Technical Support', 'Prototyping', 'Testing']
    },
    {
      id: 4,
      category: 'research',
      icon: '🔬',
      title: 'Material Science',
      subtitle: 'Research & Development',
      description: 'Advanced polymer research and material innovation for next-generation protective packaging.',
      keyPoints: ['R&D Laboratory', 'Material Testing', 'Innovation Center', 'Quality Control'],
      stats: { value: '25+', label: 'years exp' },
      color: 'purple',
      certification: 'FDA Approved',
      features: ['R&D Lab', 'Testing', 'Innovation', 'Patents']
    },
    {
      id: 5,
      category: 'manufacturing',
      icon: '📦',
      title: 'Packaging Solutions',
      subtitle: 'Comprehensive Protection',
      description: 'End-to-end packaging solutions for diverse industries with focus on protection and efficiency.',
      keyPoints: ['Multi-Industry Support', 'Protective Materials', 'Cost-Effective Solutions', 'Technical Support'],
      stats: { value: '1000+', label: 'solutions' },
      color: 'teal',
      certification: 'REACH Compliant',
      features: ['Custom Packaging', 'Protection', 'Efficiency', 'Support']
    },
    {
      id: 6,
      category: 'logistics',
      icon: '🚚',
      title: 'Supply Chain',
      subtitle: 'Logistics Excellence',
      description: 'Integrated supply chain management ensuring timely delivery and consistent quality standards.',
      keyPoints: ['JIT Delivery', 'Quality Assurance', '24/7 Support', 'Inventory Management'],
      stats: { value: '99.9%', label: 'on-time' },
      color: 'indigo',
      certification: 'ISO 14001',
      features: ['JIT Delivery', 'Tracking', 'Support', 'Management']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery & Consultation', 
      desc: 'Understanding your requirements and technical consultation',
      icon: '💬',
      color: '#3b82f6'
    },
    { 
      step: '02', 
      title: 'Design & Engineering', 
      desc: 'Custom solution design and technical engineering',
      icon: '✏️',
      color: '#f26a21'
    },
    { 
      step: '03', 
      title: 'Production & Quality', 
      desc: 'Precision manufacturing with quality control',
      icon: '🏭',
      color: '#3b82f6'
    },
    { 
      step: '04', 
      title: 'Delivery & Support', 
      desc: 'Timely delivery with ongoing technical support',
      icon: '🚀',
      color: '#f26a21'
    }
  ];

  const testimonials = [
    {
      name: "Hindalco",
      role: "Mining Company",
      company: "Hindalco Industries Limited",
      text: "NovaGuard's manufacturing capabilities exceeded our expectations. Their quality control is outstanding.",
      rating: 5
    },
    {
      name: "Mm2mm",
      role: "Manufacturer in Navi Mumbai, Maharashtra", 
      company: "Mm2mm Pvt Ltd",
      text: "The export services are seamless. They handle all documentation and compliance perfectly.",
      rating: 5
    },
    {
      name: "Essen Group",
      role: "Manufacturer in Shapar, Gujarat",
      company: "Essen Speciality Films Limited",
      text: "Their material science expertise helped us develop breakthrough protective solutions.and very good service",
      rating: 5
    }
  ];

  return (
    <section className="services-section">
      <div className="services-bg-vignette" />
      <div className="services-glass-bg" />
      <div className="services-bg-blob services-bg-blob-blue" />
      <div className="services-bg-blob services-bg-blob-orange" />
      <div className="services-bg-blob services-bg-blob-brand" />
      <div className="services-grid-pattern" />
      
      {/* Floating Background Elements */}
      <div className="services-floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      {/* Hero Banner Section - Keeping as requested */}
      <FadeIn direction="up" delay={0.1}>
        <div className="services-hero-banner">
          <div className="services-hero-bg"></div>
          <div className="services-hero-overlay"></div>
          <div className="services-hero-reflection" />
          <div className="services-hero-content">
            <FadeIn direction="up" delay={0.1}>
              <nav className="services-breadcrumb">
                <span>Home</span>
                <span className="breadcrumb-sep">•</span>
                <span className="breadcrumb-active">Services</span>
              </nav>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="services-hero-title mask-reveal">
                <span className="mask-reveal-text">Our <span>Services</span></span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="services-hero-subtitle">
                <TypeWriter text="Discover our world-class industrial solutions and expertise" speed={30} delay={400} />
              </p>
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      {/* SVG Divider */}
      <svg className="services-divider" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 C480,80 960,-20 1440,60 L1440,0 L0,0 Z" fill="#f8fafc" />
      </svg>

      <div className="services-container">
        
        {/* New Services Overview Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="services-overview">
            <div className="overview-header">
              <div className="overview-badge">
                <span className="badge-icon">🚀</span>
                <span>Comprehensive Solutions</span>
              </div>
              <h2 className="overview-title">
                Transforming Industries with <span className="title-accent">Innovation</span>
              </h2>
              <p className="overview-description">
                From manufacturing excellence to global logistics, we provide end-to-end solutions that drive success
              </p>
            </div>

            {/* Service Categories Filter */}
            <div className="service-categories">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* New Services Grid Layout */}
        <FadeIn direction="up" delay={0.3}>
          <div className="services-showcase">
            <div className="services-masonry">
              {filteredServices.map((service, index) => (
                <ScaleIn key={service.id} delay={0.4 + index * 0.1}>
                  <div 
                    className={`service-card ${service.color} ${activeService === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    <div className="service-card-header">
                      <div className="service-card-icon">{service.icon}</div>
                      <div className="service-card-badge">{service.certification}</div>
                    </div>
                    
                    <div className="service-card-body">
                      <h3 className="service-card-title">{service.title}</h3>
                      <p className="service-card-subtitle">{service.subtitle}</p>
                      <p className="service-card-description">{service.description}</p>
                      
                      <div className="service-card-features">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="feature-tag">
                            <span className="feature-dot"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="service-card-footer">
                      <div className="service-stats">
                        <div className="stat-value">{service.stats.value}</div>
                        <div className="stat-label">{service.stats.label}</div>
                      </div>
                    </div>
                    
                    <div className="service-card-overlay"></div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* New Process Timeline */}
        <FadeIn direction="up" delay={0.5}>
          <div className="process-timeline">
            <div className="timeline-header">
              <h2>Our Process</h2>
              <p>Streamlined workflow designed for efficiency and quality</p>
            </div>
            
            <div className="timeline-container">
              {processSteps.map((step, index) => (
                <ScaleIn key={index} delay={0.6 + index * 0.1}>
                  <div className="timeline-item">
                    <div className="timeline-marker" style={{ backgroundColor: step.color }}>
                      <span className="timeline-step">{step.step}</span>
                      <div className="timeline-icon">{step.icon}</div>
                    </div>
                    <div className="timeline-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="timeline-connector" style={{ backgroundColor: step.color }}></div>
                    )}
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* New Testimonials Section */}
        <FadeIn direction="up" delay={0.6}>
          <div className="testimonials-section">
            <div className="testimonials-header">
              <h2>What Our Clients Say</h2>
              <p>Trusted by industry leaders worldwide</p>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <ScaleIn key={index} delay={0.7 + index * 0.1}>
                  <div className="testimonial-card">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                        <span className="company">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* New Call to Action */}
        <FadeIn direction="up" delay={0.7}>
          <div className="services-cta-modern">
            <div className="cta-background">
              <div className="cta-pattern"></div>
            </div>
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our services can drive your success</p>
              <div className="cta-buttons">
                <button 
                  className="cta-btn-primary"
                  onClick={handleStartProject}
                >
                  <span>Start Your Project</span>
                  <span className="btn-arrow">→</span>
                </button>
                <button 
                  className="cta-btn-secondary"
                  onClick={handleBrochureDownload}
                  disabled={isDownloading}
                >
                  <span>{isDownloading ? 'Downloading...' : 'View Brochure'}</span>
                  <span className="btn-icon">{isDownloading ? '⏳' : '📊'}</span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Services;