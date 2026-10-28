import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as ComponentMeta<typeof HeroImage>;

const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Hero Banner Title',
  subtitle: 'Sub-heading text goes here.',
  bgImage: 'https://via.placeholder.com/1200x400',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Hero Banner',
  subtitle: 'This hero banner is currently disabled.',
  bgImage: 'https://via.placeholder.com/1200x400',
  disabled: true,
};