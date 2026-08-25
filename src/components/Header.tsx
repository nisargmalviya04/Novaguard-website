import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const closeProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.products-dropdown-container')) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            {/* Modern CSS Logo */}
            <div className="modern-logo">
              <div className="logo-icon">
                <div className="logo-shield">
                  <img src="/images/logo.png" alt="Nova Guard Logo" className="logo-image" />
                </div>
              </div>
              <div className="logo-text-container">
                <span className="logo-text text-gradient">Nova Guard</span>
                <span className="logo-subtitle">Polyplast</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-cogs"></i>
                <span>Services</span>
              </Link>
            </li>
            <li className="nav-item products-dropdown-container">
              <div className="nav-link products-trigger" onClick={toggleProductsDropdown}>
                <i className="fas fa-box"></i>
                <span>Products</span>
                <i className={`fas fa-chevron-down dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`}></i>
              </div>
              <div className={`products-dropdown ${isProductsDropdownOpen ? 'open' : ''}`}>
                <Link to="/products/bubble-guard" className="dropdown-item" onClick={closeProductsDropdown}>
                  <i className="fas fa-shield-alt"></i>
                  <span>Bubble Guard Sheet</span>
                </Link>
                <Link to="/products/aluminum-insulation" className="dropdown-item" onClick={closeProductsDropdown}>
                  <i className="fas fa-fire"></i>
                  <span>Aluminum Insulation Sheet</span>
                </Link>
                <Link to="/products/pp-corrugated" className="dropdown-item" onClick={closeProductsDropdown}>
                  <i className="fas fa-layer-group"></i>
                  <span>PP Corrugated Sheet</span>
                </Link>
                <Link to="/products/air-bubble-sheet" className="dropdown-item" onClick={closeProductsDropdown}>
                  <i className="fas fa-wind"></i>
                  <span>Air Bubble Sheet</span>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="btn btn-primary header-cta"
            onClick={handleBrochureDownload}
            disabled={isDownloading}
          >
            <i className={`fas ${isDownloading ? 'fa-spinner fa-spin' : 'fa-file-download'}`}></i>
            <span>{isDownloading ? 'Downloading...' : 'Get Brochure'}</span>
          </button>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header; 