import React, { useEffect, useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface ModalProps {
  /** Modal의 내용 */
  children: React.ReactNode;
  /** Modal Open Flag */
  open: boolean;
  /** Modal Close Function */
  onClose?: () => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <>
      {open && (
        <ModalContainer onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default Modal;
