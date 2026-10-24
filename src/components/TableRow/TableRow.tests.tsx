import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

test('TableRow is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Test Cell</td>
        </TableRow>
      </tbody>
    </table>
  );
  const rowElement = screen.getByTestId('table-row');
  expect(rowElement).toBeVisible();
});

test('TableRow background color changes when disabled', () => {
  render(
    <table>
      <tbody>
        <TableRow disabled={true}>
          <td>Disabled Cell</td>
        </TableRow>
      </tbody>
    </table>
  );
  const rowElement = screen.getByTestId('table-row');
  expect(rowElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});