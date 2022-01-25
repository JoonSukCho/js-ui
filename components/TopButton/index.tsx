import styled, { css } from 'styled-components';
import IconButton from '../IconButton';
import { IoIosArrowUp } from 'react-icons/io';
import { useCallback, useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

export interface TopButtonProps {
  transitionState?: TransitionStatus;
  /** Move Top transition duration (ms) */
  timeout?: number;
  /** ScrollTop의 위치가 해당 값(px)을 기준으로 visible 됨 */
  scrollTopPos?: number;
}

const TopButton = ({ timeout = 150, scrollTopPos = 200 }: TopButtonProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const moveTopHandler = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const toggleVisible = () => {
      const currentScrollPos = document.documentElement.scrollTop;

      if (currentScrollPos > scrollTopPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <Transition unmountOnExit in={visible} timeout={timeout}>
      {(transitionState) => (
        <ButtonContainer transitionState={transitionState} timeout={timeout}>
          <IconButton
            onClick={moveTopHandler}
            icons={IoIosArrowUp}
            color="white"
          />
        </ButtonContainer>
      )}
    </Transition>
  );
};

const ButtonContainer = styled.div<TopButtonProps>`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

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

export default TopButton;
