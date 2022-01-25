import React from 'react';
import TopButton, { TopButtonProps } from './index';
import { Story, Meta } from '@storybook/react';
import { AiOutlineSmile } from 'react-icons/ai';
import TemplateContainer from '../Storybook/TemplateContainer';

export default {
  title: 'components/TopButton',
  component: TopButton,
  argTypes: {
    transitionState: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<TopButtonProps> = (args) => {
  return (
    <TemplateContainer>
      <h1>Top</h1>
      <div style={{ width: '100%', height: 2000 }} />
      <TopButton {...args} />
    </TemplateContainer>
  );
};

export const basic = Template.bind({});
basic.args = {
  timeout: 150,
  scrollTopPos: 200,
};
