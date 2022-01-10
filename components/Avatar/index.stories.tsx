import React from 'react';
import Avatar from './index';

export default {
  title: 'components/Avatar',
  component: Avatar,
};

export const button = () => {
  return <Avatar>BUTTON</Avatar>;
};

button.story = {
  name: 'Default',
};

export const newAvatar = () => {
  return <Avatar>PRIMARY</Avatar>;
};
