import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('Img is visible', () => {
  render(<Img alt="Test Image" />);
  const imgElement = screen.getByTestId('img-component');
  expect(imgElement).toBeVisible();
});

test('Img applies grayscale filter when disabled', () => {
  render(<Img alt="Disabled Image" disabled={true} />);
  const imgElement = screen.getByTestId('img-component');
  expect(imgElement).toHaveStyle('filter: grayscale(100%)');
});