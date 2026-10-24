import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableRow } from './TableRow';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args) => (
  <table>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: <td>Sample Row Data</td>,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <td>Disabled Row Data</td>,
  disabled: true,
};