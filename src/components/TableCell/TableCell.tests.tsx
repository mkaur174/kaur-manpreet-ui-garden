import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

test('TableCell is visible', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Test Cell</TableCell>
        </tr>
      </tbody>
    </table>
  );
  const cellElement = screen.getByTestId('table-cell');
  expect(cellElement).toBeVisible();
});

test('TableCell background color changes when disabled', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell disabled={true}>Disabled Cell</TableCell>
        </tr>
      </tbody>
    </table>
  );
  const cellElement = screen.getByTestId('table-cell');
  expect(cellElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});