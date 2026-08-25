import { useEffect, useRef, useState } from 'react';

export const useFeatureCardsAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Once animated, keep it animated
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Reduced from 0.2 to 0.1 for faster triggering
        rootMargin: '0px 0px -30px 0px', // Reduced negative margin for earlier triggering
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  return { containerRef, isVisible };
}; 