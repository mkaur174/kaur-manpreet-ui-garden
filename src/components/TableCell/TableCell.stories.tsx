import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableCell } from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TableCell>;

const Template: ComponentStory<typeof TableCell> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Cell Content',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Cell Content',
  disabled: true,
};