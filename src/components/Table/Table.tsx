import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ backgroundColor?: string; disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const Table = ({ children, backgroundColor, disabled }: TableProps) => {
  return (
    <StyledTable data-testid="table-component" backgroundColor={backgroundColor} disabled={disabled}>
      {children || (
        <tbody>
          <tr>
            <td>Default Table Data</td>
          </tr>
        </tbody>
      )}
    </StyledTable>
  );
};