import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

test('Dropdown is visible', () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId('dropdown-component');
  expect(dropdownElement).toBeVisible();
});

test('Dropdown background color changes when disabled', () => {
  render(<Dropdown disabled={true} />);
  const dropdownElement = screen.getByTestId('dropdown-component');
  expect(dropdownElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});