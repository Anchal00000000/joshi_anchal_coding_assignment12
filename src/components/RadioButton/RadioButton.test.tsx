import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('Radio buttons render', () => {
  render(<RadioButton options={['A', 'B']} />);
  expect(screen.getAllByRole('radio').length).toBe(2);
});

test('Radio buttons disabled', () => {
  render(<RadioButton options={['A', 'B']} disabled />);
  expect(screen.getAllByRole('radio')[0]).toBeDisabled();
});
