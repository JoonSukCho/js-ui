import React from 'react';
import Button, { ButtonProps } from './index';
import { Story, Meta } from '@storybook/react';

/**
 * Controls에 대한 정보는 해당 컴포넌트의 interface에서 어느정도 정의 할 수 있다.
 * Docs에 description은 아래 export default 객체에서 설정하거나,
 * interface에 주석으로 설정할 수 있다.
 */
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
