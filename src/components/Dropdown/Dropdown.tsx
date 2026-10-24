import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : props.backgroundColor || '#fff'};
  color: ${(props) => (props.disabled ? '#888' : '#333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  box-sizing: border-box;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  disabled,
  onChange,
  value,
  backgroundColor,
}) => {
  return (
    <StyledSelect
      data-testid="dropdown-component"
      disabled={disabled}
      value={value || ''}
      backgroundColor={backgroundColor}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
          onChange(e.target.value);
        }
      }}
    >
      <option value="" disabled hidden>
        {placeholder || 'Select an option'}
      </option>
      {options &&
        options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
    </StyledSelect>
  );
};