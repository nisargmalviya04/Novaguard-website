import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #0072ce 0%, #f26a21 100%)',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          cursor: 'pointer',
          display: isVisible ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0, 114, 206, 0.3)',
          transition: 'all 0.3s ease'
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default ScrollToTop; 