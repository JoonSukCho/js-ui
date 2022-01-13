import React, { useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { useArgs } from '@storybook/client-api';
import Modal, { ModalProps } from './Modal';
import Button from '../Button';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

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
`;

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    children: {
      table: { disable: true },
    },
    transitionState: {
      table: { disable: true },
    },
    onClose: {
      action: 'close Event',
    },
  },
} as Meta;

// Basic
const BasicTemplate: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>Basic Modal</h1>
      <br />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleCloseModal}>
        <ModalContent>Modal Contents</ModalContent>
      </Modal>
    </TemplateContainer>
  );
};

export const basic = BasicTemplate.bind({});
basic.args = {
  open: false,
  timeout: 150,
};

// With Header
const WithHeaderTemplate: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>Modal With Header</h1>
      <br />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleCloseModal}>
        <ModalHeader />
        <ModalContent>Modal Contents</ModalContent>
      </Modal>
    </TemplateContainer>
  );
};
export const withHeader = WithHeaderTemplate.bind({});
withHeader.args = {
  open: false,
  timeout: 150,
};

// With Footer
const WithFooterTemplate: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>Modal With Footer</h1>
      <br />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleCloseModal}>
        <ModalContent>Modal Contents</ModalContent>
        <ModalFooter />
      </Modal>
    </TemplateContainer>
  );
};
export const withFooter = WithFooterTemplate.bind({});
withFooter.args = {
  open: false,
  timeout: 150,
};
