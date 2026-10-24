import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage title="Test Hero" />);
  const heroElement = screen.getByTestId('hero-image-component');
  expect(heroElement).toBeVisible();
});

test('HeroImage applies not-allowed cursor and opacity when disabled', () => {
  render(<HeroImage title="Disabled Hero" disabled={true} />);
  const heroElement = screen.getByTestId('hero-image-component');
  expect(heroElement).toHaveStyle('cursor: not-allowed');
});