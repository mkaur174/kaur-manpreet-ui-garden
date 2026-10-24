import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableHeader } from './TableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Table Header',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Header',
  disabled: true,
};