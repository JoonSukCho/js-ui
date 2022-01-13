import React, { useEffect, useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Transition, TransitionStatus } from 'react-transition-group';

interface ModalStyleProps {
  /** transition 상태 */
  transitionState?: TransitionStatus;
  /** Modal Open transition duration (ms) */
  timeout?: number;
}

export interface ModalProps extends ModalStyleProps {
  /** Modal의 내용 */
  children: React.ReactNode;
  /** Modal Open Flag */
  open: boolean;
  /** Modal Close Function */
  onClose: () => void;
}

const Modal = ({ children, open, onClose, timeout = 150 }: ModalProps) => {
  return (
    <>
      <Transition unmountOnExit in={open} timeout={timeout}>
        {(transitionState) => (
          <BackDrop
            onClick={onClose}
            transitionState={transitionState}
            timeout={timeout}
          >
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalContainer>
          </BackDrop>
        )}
      </Transition>
    </>
  );
};

const BackDrop = styled.div<ModalStyleProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.5px);

  transition: all ${({ timeout }) => `${timeout}ms`} ease-in-out;
  ${({ transitionState }) =>
    transitionState === 'entering' &&
    css`
      opacity: 0;
    `}
  ${({ transitionState }) =>
    transitionState === 'entered' &&
    css`
      opacity: 1;
    `}
  ${({ transitionState }) =>
    transitionState === 'exiting' &&
    css`
      opacity: 0;
    `}
      ${({ transitionState }) =>
    transitionState === 'exited' &&
    css`
      opacity: 0;
    `}
`;

const ModalContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

export default Modal;
