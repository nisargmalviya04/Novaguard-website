import React, { useEffect } from 'react';

interface LightboxProps {
  open: boolean;
  imageSrc: string;
  alt?: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ open, imageSrc, alt, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()} tabIndex={-1}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close image">×</button>
        <img src={imageSrc} alt={alt || ''} className="lightbox-img" />
      </div>
    </div>
  );
};

export default Lightbox; 