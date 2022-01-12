import React from 'react';
import Skeleton, { SkeletonProps } from './index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'rect', 'circle'],
      },
    },
  },
} as Meta;

const Template: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />;
};

export const basic = Template.bind({});
basic.args = {
  width: 300,
  height: 300,
  variant: 'rect',
};
