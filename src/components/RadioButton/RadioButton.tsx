import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: 14px;
  color: #333;
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton = ({ label, name, checked, disabled, onChange }: RadioButtonProps) => {
  return (
    <Wrapper data-testid="radio-component" disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label || 'Radio Option'}
    </Wrapper>
  );
};