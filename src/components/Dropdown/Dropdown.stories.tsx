import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Choose an item',
  disabled: false,
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled Dropdown',
  disabled: true,
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ],
};