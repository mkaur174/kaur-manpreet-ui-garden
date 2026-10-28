import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Img } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Sample Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Disabled Image',
  disabled: true,
};