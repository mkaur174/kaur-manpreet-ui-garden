import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('Card is visible', () => {
  render(<Card title="Test Card" />);
  const cardElement = screen.getByTestId('card-component');
  expect(cardElement).toBeVisible();
});

test('Card background color changes when disabled', () => {
  render(<Card title="Disabled Card" disabled={true} />);
  const cardElement = screen.getByTestId('card-component');
  expect(cardElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});