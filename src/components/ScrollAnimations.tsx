import React, { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'parallax' | 'morph';
  delay?: number;
  threshold?: number;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  threshold = 0.05 // Reduced from 0.1 to 0.05 for faster triggering
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add animation class based on type
            element.classList.add('animate');
            
            // Add specific animation classes with faster duration
            switch (animationType) {
              case 'slideUp':
                element.style.animation = `slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
                break;
              case 'slideLeft':
                element.style.animation = `slideLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
                break;
              case 'slideRight':
                element.style.animation = `slideRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
                break;
              case 'scale':
                element.style.animation = `scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
                break;
              case 'rotate':
                element.style.animation = `rotateIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
                break;
              case 'parallax':
                element.classList.add('parallax');
                break;
              case 'morph':
                element.classList.add('morphing-bg');
                break;
              default:
                element.style.animation = `fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s both`;
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -20px 0px' // Reduced negative margin for earlier triggering
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationType, delay, threshold]);

  return (
    <div ref={elementRef} className={`scroll-animation ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimations; 