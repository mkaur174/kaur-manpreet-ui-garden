import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; disabled?: boolean; size?: string }>`
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#333333')};
  font-size: ${(props) => {
    if (props.size === 'small') return '12px';
    if (props.size === 'large') return '18px';
    return '14px';
  }};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  margin: 8px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: ${(props) => {
      if (props.size === 'small') return '10px';
      if (props.size === 'large') return '16px';
      return '12px';
    }};
  }
`;

export const Text = ({ children, color, disabled, size }: TextProps) => {
  return (
    <StyledText data-testid="text-component" color={color} disabled={disabled} size={size}>
      {children || 'Sample Text Content'}
    </StyledText>
  );
};