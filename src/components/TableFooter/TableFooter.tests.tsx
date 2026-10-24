import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

test('TableFooter is visible', () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Test Footer</td>
        </tr>
      </TableFooter>
    </table>
  );
  const footerElement = screen.getByTestId('table-footer');
  expect(footerElement).toBeVisible();
});

test('TableFooter background color changes when disabled', () => {
  render(
    <table>
      <TableFooter disabled={true}>
        <tr>
          <td>Disabled Footer</td>
        </tr>
      </TableFooter>
    </table>
  );
  const footerElement = screen.getByTestId('table-footer');
  expect(footerElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});