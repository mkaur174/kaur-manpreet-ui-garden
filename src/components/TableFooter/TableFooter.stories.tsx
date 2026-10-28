import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TableFooter>;

const Template: ComponentStory<typeof TableFooter> = (args) => (
  <table>
    <TableFooter {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <tr>
      <td>Footer Summary Data</td>
    </tr>
  ),
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: (
    <tr>
      <td>Disabled Footer Data</td>
    </tr>
  ),
  disabled: true,
};