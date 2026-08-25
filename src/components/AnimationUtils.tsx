import React, { useEffect, useRef, useState } from 'react';

// Hook for intersection observer animations
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once animated, keep it animated
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Reduced from 0.1 to 0.05 for faster triggering
        rootMargin: '0px 0px -30px 0px', // Reduced negative margin for earlier triggering
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
};

// Hook for staggered animations
export const useStaggeredAnimation = (
  itemCount: number,
  delay: number = 50 // Reduced from 100ms to 50ms for faster staggered animations
): [React.RefObject<HTMLDivElement>, boolean[]] => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    if (isIntersecting) {
      const timeouts: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * delay);
        timeouts.push(timeout);
      }

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [isIntersecting, itemCount, delay]);

  return [ref, animatedItems];
};

// Hook for scroll-triggered parallax effect
export const useParallax = (speed: number = 0.5): [React.RefObject<HTMLDivElement>, number] => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setOffset(rate);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};

// Component for fade-in animations
interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.4, // Reduced from 0.6s to 0.4s for faster animations
  className = ''
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(60px)';
      case 'down': return 'translateY(-60px)';
      case 'left': return 'translateX(60px)';
      case 'right': return 'translateX(-60px)';
      default: return 'translateY(60px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`fade-in-container ${className}`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translate(0)' : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Component for scale-in animations
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.4, // Reduced from 0.6s to 0.4s for faster animations
  className = ''
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`scale-in-container ${className}`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'scale(1)' : 'scale(0.8)',
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Component for typing animation
interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting && !started) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
  }, [isIntersecting, started, delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <span ref={ref} className={`typewriter ${className}`}>
      {displayText}
    </span>
  );
};

// Component for staggered list animations
interface StaggeredListProps {
  children: React.ReactNode[];
  delay?: number;
  className?: string;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  delay = 100,
  className = ''
}) => {
  const [ref, animatedItems] = useStaggeredAnimation(children.length, delay);

  return (
    <div ref={ref} className={`staggered-list ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: animatedItems[index] ? 1 : 0,
            transform: animatedItems[index] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Component for parallax sections
interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const [ref, offset] = useParallax(speed);

  return (
    <div
      ref={ref}
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};