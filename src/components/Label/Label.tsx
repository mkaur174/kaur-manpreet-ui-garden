import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#333333')};
  font-weight: 600;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  display: inline-block;
  margin-bottom: 4px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Label = ({ children, htmlFor, color, disabled }: LabelProps) => {
  return (
    <StyledLabel data-testid="label-component" htmlFor={htmlFor} color={color} disabled={disabled}>
      {children || 'Form Label'}
    </StyledLabel>
  );
};