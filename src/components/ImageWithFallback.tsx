import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  style = {},
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    } else if (!hasError) {
      // Use a colored placeholder based on our brand colors
      const placeholderColor = alt.includes('Business')
        ? '1976BB'
        : alt.includes('Team')
        ? '77D4FC'
        : '677889';
      const encodedAlt = encodeURIComponent(alt);
      setImageSrc(
        `https://via.placeholder.com/800x600/${placeholderColor}/FFFFFF?text=${encodedAlt}`,
      );
      setHasError(true);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading='lazy'
    />
  );
};

export default ImageWithFallback;
