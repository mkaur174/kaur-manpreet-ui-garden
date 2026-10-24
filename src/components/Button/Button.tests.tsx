import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('Button is visible', () => {
  render(<Button label="Test Button" />);
  const buttonElement = screen.getByTestId('button-component');
  expect(buttonElement).toBeVisible();
});

test('Button background color changes when disabled', () => {
  render(<Button label="Disabled Button" disabled={true} />);
  const buttonElement = screen.getByTestId('button-component');
  expect(buttonElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});