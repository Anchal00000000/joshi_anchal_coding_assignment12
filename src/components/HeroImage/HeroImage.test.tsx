import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage renders', () => {
  render(<HeroImage src="test.jpg" />);
  expect(screen.getByRole('img')).toBeVisible();
});

test('HeroImage disabled style', () => {
  render(<HeroImage src="test.jpg" disabled />);
  const img = screen.getByRole('img');
  expect(img).toHaveStyle('opacity: 0.6');
});
