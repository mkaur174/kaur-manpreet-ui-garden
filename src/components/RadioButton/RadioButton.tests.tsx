import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

test('RadioButton is visible', () => {
  render(<RadioButton label="Test Radio" />);
  const radioElement = screen.getByTestId('radio-button');
  expect(radioElement).toBeVisible();
});

test('RadioButton wrapper changes opacity/cursor when disabled', () => {
  render(<RadioButton label="Disabled Radio" disabled={true} />);
  const wrapperElement = screen.getByTestId('radio-wrapper');
  expect(wrapperElement).toHaveStyle('cursor: not-allowed');
});