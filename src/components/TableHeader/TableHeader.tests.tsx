import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

test('TableHeader is visible', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader>Test Header</TableHeader>
        </tr>
      </thead>
    </table>
  );
  const headerElement = screen.getByTestId('table-header');
  expect(headerElement).toBeVisible();
});

test('TableHeader background color changes when disabled', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader disabled={true}>Disabled Header</TableHeader>
        </tr>
      </thead>
    </table>
  );
  const headerElement = screen.getByTestId('table-header');
  expect(headerElement).toHaveStyle('background-color: rgb(224, 224, 224)');
});