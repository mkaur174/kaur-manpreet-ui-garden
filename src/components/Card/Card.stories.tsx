import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Explore Components',
  description: 'Learn how to build reusable React components with Storybook.',
  imageSrc: 'https://via.placeholder.com/300x180',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  description: 'This card is currently disabled and unclickable.',
  imageSrc: 'https://via.placeholder.com/300x180',
  disabled: true,
};