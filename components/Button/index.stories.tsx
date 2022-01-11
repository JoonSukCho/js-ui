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
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    onClick: { action: 'click event : ' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const basic = Template.bind({});
basic.args = {
  children: 'BUTTON',
  color: 'primary',
  variant: 'contained',
};
