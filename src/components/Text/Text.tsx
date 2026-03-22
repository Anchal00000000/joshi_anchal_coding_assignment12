import React from 'react';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({
  content,
  color = 'black',
  fontSize = '16px',
  disabled = false,
}) => {
  return (
    <p
      style={{
        color: disabled ? 'grey' : color,
        fontSize,
        cursor: disabled ? 'not-allowed' : 'default',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {content}
    </p>
  );
};

export default Text;
