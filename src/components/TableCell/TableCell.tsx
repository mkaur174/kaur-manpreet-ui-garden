import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  padding: 10px 12px;
  border-bottom: 1px solid #ddd;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 14px;
  }
`;

export const TableCell = ({ children, backgroundColor, disabled }: TableCellProps) => {
  return (
    <StyledCell data-testid="table-cell" backgroundColor={backgroundColor} disabled={disabled}>
      {children || 'Cell Data'}
    </StyledCell>
  );
};