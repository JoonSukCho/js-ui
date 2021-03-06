import React from 'react';
import IconButton, { IconButtonProps } from './index';
import { Story, Meta } from '@storybook/react';
import { AiOutlineSmile } from 'react-icons/ai';
import TemplateContainer from '../Storybook/TemplateContainer';

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    onClick: { action: 'click event : ' },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => {
  return (
    <TemplateContainer>
      <h1>
        아이콘은&nbsp;
        <a
          style={{ fontWeight: 'bold', color: 'blue' }}
          rel="noreferrer"
          href="https://react-icons.github.io/react-icons"
          target="_blank"
        >
          react-icons
        </a>
        를 사용할 것.
      </h1>
      <br />
      <IconButton {...args} />
    </TemplateContainer>
  );
};

export const basic = Template.bind({});
basic.args = {
  icons: AiOutlineSmile,
  color: '#9e9e9e',
  size: 20,
};
