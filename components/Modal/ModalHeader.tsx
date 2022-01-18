import React, { useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton';
import { CgClose } from 'react-icons/cg';

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <IconButton onClick={onClose} icons={CgClose} />
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

export default ModalHeader;
