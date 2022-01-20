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
  padding: 1rem;
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
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
`;

export default Modal;
