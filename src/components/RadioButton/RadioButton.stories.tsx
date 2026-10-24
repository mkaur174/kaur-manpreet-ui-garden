import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'radioGroup',
  disabled: false,
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Option',
  name: 'radioGroup',
  disabled: true,
  checked: false,
};