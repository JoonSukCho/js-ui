import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <CloseButton onClick={onClose}>
        <CgClose size={20} color="#9e9e9e" />
      </CloseButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const HeaderText = styled.h6`
  display: flex;
  padding: 8px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: 0px;
  margin: 0px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export default ModalHeader;
