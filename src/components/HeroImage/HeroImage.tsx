import React from 'react';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt = 'Hero Image',
  width = '100%',
  height = 'auto',
  style = {},
  disabled = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        height,
        cursor: disabled ? 'not-allowed' : 'default',
        opacity: disabled ? 0.6 : 1,
        filter: disabled ? 'grayscale(100%)' : 'none',
        ...style,
      }}
    />
  );
};

export default HeroImage;
