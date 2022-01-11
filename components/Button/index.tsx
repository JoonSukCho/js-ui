import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  /** 버튼 색상 */
  color: 'primary' | 'secondary';
  /** 버튼 모양 */
  variant: 'text' | 'contained' | 'outlined';
  /** 버튼 크기 */
  size: 'small' | 'medium' | 'large';
}

export interface ButtonProps extends ButtonStyleProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 했을 때 호출할 콜백 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, color, variant, size, onClick }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: 'BUTTON',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
} as ButtonProps;

const StyledButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  /* color */
  background-color: ${({ theme, color }) => theme.colors[color]};
  ${({ color }) =>
    color === 'primary' &&
    css`
      &:hover {
        background-color: #5a9bf7;
      }
      &:active {
        background-color: #377cdd;
      }
    `}

  ${({ color }) =>
    color === 'secondary' &&
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
  ${({ variant, color }) =>
    variant === 'text' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[color]};
      &:hover {
        background-color: rgba(25, 118, 210, 0.1);
      }
      &:active {
        background-color: rgba(25, 118, 210, 0.2);
      }
    `}

  ${({ variant, color }) =>
    variant === 'contained' &&
    css`
      background-color: ${({ theme }) => theme.colors[color]};
      color: white;
      &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }
    `}

  ${({ variant, color }) =>
    variant === 'outlined' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[color]};
      border: 1px solid ${({ theme }) => theme.colors[color]};
      &:hover {
        background-color: rgba(25, 118, 210, 0.1);
      }
      &:active {
        background-color: rgba(25, 118, 210, 0.2);
      }
    `}

  /* size */
  ${({ size }) =>
    size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.75rem;
      padding: 0 0.875rem;
    `}
  ${({ size }) =>
    size === 'medium' &&
    css`
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 1rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.125rem;
      padding: 0 1.5rem;
    `}
`;

export default Button;
