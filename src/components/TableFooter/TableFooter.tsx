import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#f1f1f1')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const TableFooter = ({ children, backgroundColor, disabled }: TableFooterProps) => {
  return (
    <StyledFooter data-testid="table-footer" backgroundColor={backgroundColor} disabled={disabled}>
      {children || <tr><td>Footer Content</td></tr>}
    </StyledFooter>
  );
};