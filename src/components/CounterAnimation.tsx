import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  value, 
  duration = 2000, 
  delay = 0,
  className = '',
  style = {}
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    const match = val.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || ''
      };
    }
    return { number: 0, suffix: val };
  };

  const { number: targetNumber, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2, // Reduced from 0.5 to 0.2 for faster triggering
        rootMargin: '0px 0px -30px 0px' // Added rootMargin for earlier triggering
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
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = targetNumber * easeOutQuart;
        
        // Format the number based on the original value
        let formattedNumber: string;
        if (targetNumber >= 1000) {
          formattedNumber = Math.floor(currentNumber).toLocaleString();
        } else if (targetNumber % 1 !== 0) {
          formattedNumber = currentNumber.toFixed(1);
        } else {
          formattedNumber = Math.floor(currentNumber).toString();
        }
        
        setDisplayValue(formattedNumber + suffix);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, targetNumber, suffix, duration, delay]);

  return (
    <div 
      ref={elementRef}
      className={className}
      style={style}
    >
      {displayValue}
    </div>
  );
};

export default CounterAnimation; 