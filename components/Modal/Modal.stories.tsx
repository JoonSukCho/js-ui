import React, { useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { useArgs } from '@storybook/client-api';
import Modal, { ModalProps } from './Modal';
import Button from '../Button';
import ModalHeader, { ModalHeaderProps } from './ModalHeader';
import ModalFooter from './ModalFooter';
import TemplateContainer from '../Storybook/TemplateContainer';

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  max-width: 480px;
  height: 300px;
  max-height: 620px;
  padding: 8px;
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

const ExampleTemplate: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const handleOpenModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>With Header and Footer Example</h1>
      <br />
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleCloseModal}>
        <ModalHeader title="Modal Header" onClose={handleCloseModal} />
        <ModalContent>Modal Contents</ModalContent>
        <ModalFooter>Footer Button</ModalFooter>
      </Modal>
    </TemplateContainer>
  );
};

export const example = ExampleTemplate.bind({});
example.args = {
  open: false,
  timeout: 150,
};
