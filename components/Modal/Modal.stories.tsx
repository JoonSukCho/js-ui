import React, { useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { useArgs } from '@storybook/client-api';
import Modal, { ModalProps } from './Modal';
import Button from '../Button';

const TemplateContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: white;
  border: 1px solid black;
`;

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>Lorem Ipsum</h1>
      <br />
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>
      <br />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleCloseModal} />
    </TemplateContainer>
  );
};

export const basic = Template.bind({});
basic.args = {
  children: <ModalContent>Modal Contents</ModalContent>,
  open: false,
};
