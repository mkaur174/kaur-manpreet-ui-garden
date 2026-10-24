import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean; width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-width: 100%;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = ({ src, alt, width, height, disabled }: ImgProps) => {
  return (
    <StyledImg
      data-testid="img-component"
      src={src || 'https://via.placeholder.com/150'}
      alt={alt || 'Placeholder Image'}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};