import React from 'react';
import { useNavigate } from 'react-router-dom';
import CounterAnimation from './CounterAnimation';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Premium Background Elements */}
      <div className="footer-bg-elements">
        <div className="footer-gradient-overlay"></div>
        <div className="footer-pattern"></div>
        <div className="footer-floating-elements">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="footer-floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <div className="footer-logo-container">
                <img 
                  src="/images/logo.png" 
                  alt="Nova Guard Logo" 
                  className="footer-logo-image"
                />
              </div>
              <p>Bubble Guard & Polymer Solutions</p>
              <div className="footer-logo-line"></div>
            </div>
            <p className="footer-description">
              Decades of material science experience driving cutting-edge product development
              for innovative bubble guard and polymer solutions that protect and perform.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <CounterAnimation 
                  value="25+" 
                  duration={2000} 
                  delay={0}
                  className="stat-number"
                />
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="footer-stat">
                <CounterAnimation 
                  value="50+" 
                  duration={2000} 
                  delay={200}
                  className="stat-number"
                />
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="footer-stat">
                <CounterAnimation 
                  value="1000+" 
                  duration={2000} 
                  delay={400}
                  className="stat-number"
                />
                <div className="stat-label">Solutions Delivered</div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavigation('/products/bubble-guard')}><span>Bubble Guard Sheet</span></button></li>
              <li><button onClick={() => handleNavigation('/products/aluminum-insulation')}><span>Aluminum Insulation Sheet</span></button></li>
              <li><button onClick={() => handleNavigation('/products/pp-corrugated')}><span>PP Corrugated Sheet</span></button></li>
              <li><button onClick={() => handleNavigation('/products/air-bubble-sheet')}><span>Air Bubble Sheet</span></button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavigation('/services')}><span>Manufacturing</span></button></li>
              <li><button onClick={() => handleNavigation('/services')}><span>Global Exports</span></button></li>
              <li><button onClick={() => handleNavigation('/services')}><span>Custom Solutions</span></button></li>
              <li><button onClick={() => handleNavigation('/services')}><span>Material Science</span></button></li>
              <li><button onClick={() => handleNavigation('/services')}><span>Supply Chain</span></button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavigation('/about')}><span>About Us</span></button></li>
              <li><button onClick={() => handleNavigation('/contact')}><span>Contact Us</span></button></li>
              <li><button onClick={() => handleNavigation('/services')}><span>Services</span></button></li>
              <li><button onClick={() => handleNavigation('/')}><span>News & Media</span></button></li>
              <li><button onClick={() => handleNavigation('/')}><span>Privacy Policy</span></button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2024 Nova Guard. All rights reserved.</p>
              <p className="footer-made-with">Crafted with precision and excellence</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#"><span>Terms of Service</span></a>
              <a href="#"><span>Privacy Policy</span></a>
              <a href="#"><span>Cookie Policy</span></a>
            </div>
          </div>
          <div className="footer-designer-credit">
            <p>Designed by <span className="designer-name"> Nisarg&Co. </span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 