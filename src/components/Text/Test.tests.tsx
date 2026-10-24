import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

test('Text is visible', () => {
  render(<Text>Visible Text</Text>);
  const textElement = screen.getByTestId('text-component');
  expect(textElement).toBeVisible();
});

test('Text color changes when disabled', () => {
  render(<Text disabled={true}>Disabled Text</Text>);
  const textElement = screen.getByTestId('text-component');
  expect(textElement).toHaveStyle('color: rgb(136, 136, 136)');
});