import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label renders', () => {
  render(<Label text="My Label" />);
  expect(screen.getByText('My Label')).toBeVisible();
});

test('Label changes color when disabled', () => {
  render(<Label text="Disabled Label" disabled />);
  const label = screen.getByText('Disabled Label');
  expect(label).toHaveStyle('color: grey');
});
