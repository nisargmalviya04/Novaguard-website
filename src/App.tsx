import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // This will be the simple About section for home
import AboutPremium from './components/AboutPremium'; // This will be the premium About section for /about
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ScrollProgress from './components/ScrollProgress';
import WhatsAppFloat from './components/WhatsAppFloat';
import BubbleGuardPage from './components/BubbleGuardPage';
import AluminumInsulationPage from './components/AluminumInsulationPage';
import PPCorrugatedPage from './components/PPCorrugatedPage';
import AirBubbleSheetPage from './components/AirBubbleSheetPage';
import BubbleGuardHomeSection from './components/BubbleGuardHomeSection';
import BubbleGuardIndustrySection from './components/BubbleGuardIndustrySection';
import OurStorySection from './components/OurStorySection';
import ProcessSection from './components/ProcessSection';
import { useFeatureCardsAnimation } from './components/FeatureCardsAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { containerRef, isVisible } = useFeatureCardsAnimation();

  useEffect(() => {
    // Always show loading screen on page load/refresh
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className={`App ${showContent ? 'app-loaded' : 'app-loading'}`}>
        <ScrollProgress />
        <WhatsAppFloat
          phoneNumber="917698255500"
          message="Hello! I'm interested in your packaging products. Can you help me?"
        />
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top-btn-app"
            style={{
              position: 'fixed',
              bottom: '25px',
              left: '25px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #0072ce 0%, #f26a21 100%)',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
              zIndex: 1000,
              boxShadow: '0 8px 25px rgba(0, 114, 206, 0.3), 0 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <BubbleGuardIndustrySection />
                {/* Features card floating between sections, guaranteed overlap */}
                <div style={{ width: '100%', background: '#fff', position: 'relative', zIndex: 19 }}>
                  <div 
                    ref={containerRef}
                    className="feature-cards-container" 
                    style={{
                      marginTop: -110,
                      marginBottom: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 20,
                      background: 'none',
                    }}
                  >
                    {[
                      {
                        icon: (
                          <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#F26A21" fillOpacity="0.08"/><path d="M13 27V17.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V27" stroke="#F26A21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 22v-2.5" stroke="#F26A21" strokeWidth="2" strokeLinecap="round"/><path d="M16 27v-2.5" stroke="#F26A21" strokeWidth="2" strokeLinecap="round"/><path d="M24 27v-2.5" stroke="#F26A21" strokeWidth="2" strokeLinecap="round"/></svg>
                        ),
                        title: 'Innovation That Stands Apart',
                      },
                      {
                        icon: (
                          <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#0072CE" fillOpacity="0.08"/><path d="M20 12v8l6 3" stroke="#0072CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="20" r="9" stroke="#0072CE" strokeWidth="2"/></svg>
                        ),
                        title: '24/7 Lightning-Fast Delivery',
                      },
                      {
                        icon: (
                          <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#F26A21" fillOpacity="0.08"/><rect x="12" y="16" width="16" height="12" rx="2" stroke="#F26A21" strokeWidth="2"/><path d="M16 16v-2a4 4 0 0 1 8 0v2" stroke="#F26A21" strokeWidth="2"/></svg>
                        ),
                        title: 'Safeguarding Your Product with Advanced Packaging',
                      },
                      {
                        icon: (
                          <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#0072CE" fillOpacity="0.08"/><path d="M20 28c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" stroke="#0072CE" strokeWidth="2"/><path d="M20 16v4l2 2" stroke="#0072CE" strokeWidth="2"/></svg>
                        ),
                        title: 'Eco-Smart Materials',
                      },
                    ].map((f, i, arr) => (
                      <div
                        key={i}
                        className={`feature-card ${isVisible ? 'animate-in' : ''}`}
                        style={{
                          flex: '1 1 220px',
                          minWidth: 220,
                          maxWidth: 320,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRight: i !== arr.length - 1 ? '1px solid #e5e5e5' : 'none',
                          padding: '40px 32px',
                          background: 'linear-gradient(135deg, #fff 80%, #f5f7fa 100%)',
                          borderRadius: 56,
                          boxShadow: '0 4px 24px 0 rgba(0,114,206,0.06)',
                          margin: '0 8px',
                          transition: 'all 0.25s cubic-bezier(.4,2,.3,1)',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'scale(1.045)';
                          e.currentTarget.style.boxShadow = '0 12px 36px 0 rgba(242,106,33,0.12), 0 2px 8px 0 rgba(0,114,206,0.10)';
                          e.currentTarget.style.border = `2px solid ${i % 2 === 0 ? '#F26A21' : '#0072CE'}`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(0,114,206,0.06)';
                          e.currentTarget.style.border = 'none';
                        }}
                      >
                        <div className="feature-card-icon" style={{
                          marginBottom: 18,
                          width: 56,
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 20,
                          background: i % 2 === 0 ? 'rgba(242,106,33,0.10)' : 'rgba(0,114,206,0.10)',
                          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
                          transition: 'box-shadow 0.25s, background 0.25s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow = `0 0 0 8px ${i % 2 === 0 ? 'rgba(242,106,33,0.10)' : 'rgba(0,114,206,0.10)'}`;
                          e.currentTarget.style.background = i % 2 === 0 ? 'rgba(242,106,33,0.18)' : 'rgba(0,114,206,0.18)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.04)';
                          e.currentTarget.style.background = i % 2 === 0 ? 'rgba(242,106,33,0.10)' : 'rgba(0,114,206,0.10)';
                        }}
                        >
                          {f.icon}
                        </div>
                        <div className="feature-card-title" style={{
                          color: i % 2 === 0 ? '#F26A21' : '#0072CE',
                          fontWeight: 700,
                          fontSize: 22,
                          marginTop: 8,
                          marginBottom: 0,
                          letterSpacing: 0.5,
                          transition: 'color 0.25s',
                        }}>{f.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <OurStorySection />
                <ProcessSection />
              </>
            } />
            <Route path="/about" element={<AboutPremium />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/bubble-guard" element={<BubbleGuardPage />} />
            <Route path="/products/aluminum-insulation" element={<AluminumInsulationPage />} />
            <Route path="/products/pp-corrugated" element={<PPCorrugatedPage />} />
            <Route path="/products/air-bubble-sheet" element={<AirBubbleSheetPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;