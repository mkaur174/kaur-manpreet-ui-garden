import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.th<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#f4f4f4')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  padding: 12px;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const TableHeader = ({ children, backgroundColor, disabled }: TableHeaderProps) => {
  return (
    <StyledHeader data-testid="table-header" backgroundColor={backgroundColor} disabled={disabled}>
      {children || 'Header'}
    </StyledHeader>
  );
};