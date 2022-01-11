import React from 'react';
import Button, { ButtonProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    theme: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    onClick: { action: 'clicked !!' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  children: 'button',
  theme: 'default',
};
