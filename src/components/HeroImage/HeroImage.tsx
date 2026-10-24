import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ bgImage?: string; disabled?: boolean }>`
  position: relative;
  background-image: ${(props) =>
    props.disabled
      ? 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://via.placeholder.com/1200x400")'
      : `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${props.bgImage || 'https://via.placeholder.com/1200x400'}")`};
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 250px;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroImage = ({ bgImage, title, subtitle, disabled }: HeroImageProps) => {
  return (
    <StyledHero data-testid="hero-image-component" bgImage={bgImage} disabled={disabled}>
      <Title>{title || 'Welcome to Our Site'}</Title>
      <Subtitle>{subtitle || 'Discover amazing web components and tools.'}</Subtitle>
    </StyledHero>
  );
};