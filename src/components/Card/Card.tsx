import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 320px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const Card = ({ title, description, imageSrc, backgroundColor, disabled }: CardProps) => {
  return (
    <StyledCard data-testid="card-component" backgroundColor={backgroundColor} disabled={disabled}>
      <CardImage
        disabled={disabled}
        src={imageSrc || 'https://via.placeholder.com/300x180'}
        alt={title || 'Card image'}
      />
      <CardContent>
        <CardTitle>{title || 'Card Title'}</CardTitle>
        <CardDescription>{description || 'This is a description of the card content.'}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};