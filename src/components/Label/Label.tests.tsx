import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('Label is visible', () => {
  render(<Label>Test Label</Label>);
  const labelElement = screen.getByTestId('label-component');
  expect(labelElement).toBeVisible();
});

test('Label color changes when disabled', () => {
  render(<Label disabled={true}>Disabled Label</Label>);
  const labelElement = screen.getByTestId('label-component');
  expect(labelElement).toHaveStyle('color: rgb(136, 136, 136)');
});