import React from 'react';

export interface HeroImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}
