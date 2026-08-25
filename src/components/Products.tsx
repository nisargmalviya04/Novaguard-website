import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, ScaleIn, StaggeredList, useIntersectionObserver } from './AnimationUtils';
import './Products.css';

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, isIntersecting] = useIntersectionObserver();

  const products = [
    {
      id: 1,
      name: 'Bubble Guard Sheet',
      category: 'Protective Packaging',
      subcategory: 'premium',
      description: 'High-quality bubble guard sheet material for superior protection during shipping and storage.',
      longDescription: 'Our premium Bubble Guard Sheet technology provides unmatched protection for your valuable items. Engineered with advanced polymer technology, these materials offer superior shock absorption and impact resistance.',
      applications: ['Electronics Packaging', 'Furniture Protection', 'Automotive Parts'],
      properties: ['Shock Absorbing', 'Lightweight', 'Reusable'],
      specifications: {
        thickness: '3-10mm',
        density: '40-120 kg/m³',
        temperature: '-40°C to +80°C',
        certification: 'ISO 9001, CE Marked'
      },
      images: ['/images/bubble-guard-.jpg', '/images/hero1.jpg', '/images/hero2.jpg'],
      color: 'from-blue-500 to-cyan-600',
      icon: '🛡️',
      price: 'From $2.50/sq ft',
      rating: 4.9,
      popularity: 95,
      link: '/products/bubble-guard'
    },
    {
      id: 2,
      name: 'Aluminum Insulation Sheet',
      category: 'Insulation Materials',
      subcategory: 'premium',
      description: 'High-performance aluminum insulation sheets providing excellent thermal protection and energy efficiency.',
      longDescription: 'Our Aluminum Insulation Sheets are designed for superior thermal insulation and reflective properties. Perfect for construction, automotive, and industrial applications requiring temperature control.',
      applications: ['Building Insulation', 'Automotive Heat Shields', 'Industrial Applications'],
      properties: ['Thermal Reflective', 'Lightweight', 'Durable', 'Moisture Resistant'],
      specifications: {
        thickness: '2-15mm',
        density: '20-80 kg/m³',
        temperature: '-60°C to +150°C',
        certification: 'ISO 9001, ASTM C518'
      },
      images: ['/images/hero3.jpg', '/images/hero4.jpg', '/images/aluminum1.jpg'],
      color: 'from-gray-400 to-gray-600',
      icon: '🔥',
      price: 'From $3.80/sq ft',
      rating: 4.8,
      popularity: 85,
      link: '/products/aluminum-insulation'
    },
    {
      id: 3,
      name: 'PP Corrugated Sheet',
      category: 'Corrugated Materials',
      subcategory: 'industrial',
      description: 'Versatile polypropylene corrugated sheets for packaging, signage, and construction applications.',
      longDescription: 'Heavy-duty PP Corrugated Sheets engineered for industrial applications. These sheets provide excellent structural strength and chemical resistance for demanding environments.',
      applications: ['Packaging Solutions', 'Signage & Display', 'Construction Panels', 'Protective Barriers'],
      properties: ['Chemical Resistant', 'Lightweight', 'Recyclable', 'Weather Resistant'],
      specifications: {
        thickness: '2-10mm',
        density: '400-800 g/m²',
        temperature: '-20°C to +80°C',
        certification: 'ISO 9001, FDA Approved'
      },
      images: ['/images/hero5.jpg', '/images/facility.jpg', '/images/hero1.jpg'],
      color: 'from-green-500 to-teal-600',
      icon: '📋',
      price: 'From $2.20/sq ft',
      rating: 4.7,
      popularity: 90,
      link: '/products/pp-corrugated'
    },
    {
      id: 4,
      name: 'Air Bubble Sheet',
      category: 'Bubble Protection',
      subcategory: 'standard',
      description: 'Premium air bubble sheets providing excellent cushioning and protection for fragile items.',
      longDescription: 'Our Air Bubble Sheets are designed for maximum cushioning effect while maintaining flexibility. Perfect for wrapping delicate items and providing superior protection during transit.',
      applications: ['Glass Protection', 'Ceramic Packaging', 'Electronics', 'Fragile Items'],
      properties: ['Excellent Cushioning', 'Flexible', 'Transparent', 'Reusable'],
      specifications: {
        thickness: '2-8mm',
        density: '30-100 kg/m³',
        temperature: '-35°C to +75°C',
        certification: 'ISO 9001, RoHS'
      },
      images: ['/images/hero2.jpg', '/images/hero3.jpg', '/images/airbubble1.jpg'],
      color: 'from-cyan-500 to-blue-600',
      icon: '🫧',
      price: 'From $1.80/sq ft',
      rating: 4.7,
      popularity: 88,
      link: '/products/air-bubble-sheet'
    },
  ];

  const categories = ['all', 'Protective Packaging', 'Insulation Materials', 'Corrugated Materials', 'Bubble Protection'];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const ProductCard = ({ product, index }: { product: any; index: number }) => (
    <div
      className="product-card-enhanced"
    >
      <div className="product-image-container">
        <div className={`product-gradient bg-gradient-to-br ${product.color}`}></div>
        <div className="product-images-grid">
          {product.images.map((image: string, index: number) => (
            <div key={index} className="product-image-wrapper">
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="product-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/bubble-guard-.jpg';
                }}
              />
            </div>
          ))}
        </div>
        <div className="product-overlay">
          <div className="product-rating">
            <span className="rating-stars">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
          </div>
          <div className="product-popularity">
            <div className="popularity-bar">
              <div
                className="popularity-fill"
                style={{ width: `${product.popularity}%` }}
              ></div>
            </div>
            <span className="popularity-text">{product.popularity}% Popular</span>
          </div>
        </div>
        <div className="product-badge">
          <span className="badge-icon">{product.icon}</span>
        </div>
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className={`product-category ${product.subcategory}`}>
            {product.category}
          </span>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-price">
          <span className="price-label">Starting from</span>
          <span className="price-value">{product.price}</span>
        </div>

        <div className="product-actions">
          <button className="btn-primary product-btn">
            <span>Get Quote</span>
            <div className="btn-ripple"></div>
          </button>
          <Link to={product.link} className="btn-secondary product-btn-secondary">
            <span>View Details</span>
          </Link>
        </div>
      </div>

      <div className="product-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            {product.icon}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="products" className="section products-section">
      <div className="products-background">
        <div className="background-pattern"></div>
        <div className="floating-elements">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['🔷', '💎', '⭐', '✨', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <FadeIn direction="down">
          <div className="products-header">
            <span className="products-badge">🏆 Premium Products</span>
            <h2 className="section-title products-title">
              Our <span className="gradient-text">Revolutionary</span> Products
            </h2>
            <p className="section-subtitle products-subtitle">
              Discover our comprehensive range of bubble guard and protective packaging solutions
            </p>
          </div>
        </FadeIn>

        <div className="products-controls" ref={ref}>
          <ScaleIn delay={0.2}>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">🔍</div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.3}>
            <div className="filter-container">
              <div className="filter-tabs">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category === 'all' ? 'All Products' : category}
                  </button>
                ))}
              </div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.4}>
            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <span>Grid</span>
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <span>List</span>
              </button>
            </div>
          </ScaleIn>
        </div>

        <div className="products-stats">
          <div className="stats-row">
            {[
              { value: '50+', label: 'Product Variants', icon: '📦' },
              { value: '1M+', label: 'Sq Ft Produced', icon: '🏭' },
              { value: '500+', label: 'Happy Clients', icon: '😊' },
              { value: '25+', label: 'Years Experience', icon: '⏳' }
            ].map((stat, index) => (
              <ScaleIn key={index} delay={0.1 * index}>
                <div className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        <div className={`products-grid-container ${viewMode}`}>
          <StaggeredList delay={100}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </StaggeredList>
        </div>

        <FadeIn direction="up" delay={0.8}>
          <div className="products-cta">
            <div className="cta-content">
              <h3>Need Custom Solutions?</h3>
              <p>Our experts can create tailored packaging solutions for your specific needs</p>
              <div className="cta-buttons">
                <button className="btn-primary cta-btn">
                  <span>Request Custom Quote</span>
                  <div className="btn-shine"></div>
                </button>
                <button className="btn-secondary cta-btn-secondary">
                  <span>Download Catalog</span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Products;