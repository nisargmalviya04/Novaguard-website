import React from 'react';
import './EnhancedSection.css';

interface EnhancedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedSection: React.FC<EnhancedSectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`enhanced-section ${className}`}>
      {children}
    </section>
  );
};

export default EnhancedSection;