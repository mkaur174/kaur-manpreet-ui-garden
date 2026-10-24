import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || 'transparent')};
  color: ${(props) => (props.disabled ? '#888888' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#f9f9f9')};
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const TableRow = ({ children, backgroundColor, disabled }: TableRowProps) => {
  return (
    <StyledRow data-testid="table-row" backgroundColor={backgroundColor} disabled={disabled}>
      {children || <td>Row Content</td>}
    </StyledRow>
  );
};