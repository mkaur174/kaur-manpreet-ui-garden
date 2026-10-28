import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is standard paragraph text.',
  disabled: false,
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This is disabled paragraph text.',
  disabled: true,
  size: 'medium',
};