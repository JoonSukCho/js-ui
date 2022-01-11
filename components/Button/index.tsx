import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  /** 버튼 색상 */
  color: 'primary' | 'secondary';
  /** 버튼 모양 */
  variant: 'text' | 'contained' | 'outlined';
}

export interface ButtonProps extends ButtonStyleProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 했을 때 호출할 콜백 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, color, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

const StyledButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  /* color */
  background-color: ${(props) => props.theme.colors[props.color]};
  ${(props) =>
    props.color === 'primary' &&
    css`
      &:hover {
        background-color: #5a9bf7;
      }
      &:active {
        background-color: #377cdd;
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      &:hover {
        background-color: #38d9a9;
      }
      &:active {
        background-color: #12b886;
      }
    `}

  /* variant */
  ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[props.color]};
      &:hover {
        background-color: rgba(25, 118, 210, 0.1);
      }
      &:active {
        background-color: rgba(25, 118, 210, 0.2);
      }
    `}

  ${(props) =>
    props.variant === 'contained' &&
    css`
      background-color: ${({ theme }) => theme.colors[props.color]};
      color: white;
      &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }
    `}

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[props.color]};
      border: 1px solid ${({ theme }) => theme.colors[props.color]};
      &:hover {
        background-color: rgba(25, 118, 210, 0.1);
      }
      &:active {
        background-color: rgba(25, 118, 210, 0.2);
      }
    `}
`;

export default Button;
