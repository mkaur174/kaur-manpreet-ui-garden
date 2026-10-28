import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { Table } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </tbody>
    </>
  ),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <>
      <thead>
        <tr>
          <th>Disabled Header 1</th>
          <th>Disabled Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Disabled Data 1</td>
          <td>Disabled Data 2</td>
        </tr>
      </tbody>
    </>
  ),
  disabled: true,
};