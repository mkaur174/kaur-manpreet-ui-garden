import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

test('Table is visible', () => {
  render(<Table />);
  const tableElement = screen.getByTestId('table-component');
  expect(tableElement).toBeVisible();
});

test('Table background color changes when disabled', () => {
  render(<Table disabled={true} />);
  const tableElement = screen.getByTestId('table-component');
  expect(tableElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});