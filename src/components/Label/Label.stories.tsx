import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Username',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Label',
  disabled: true,
};