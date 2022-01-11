import styled, { css } from 'styled-components';

export interface ButtonProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 했을 때 호출할 콜백 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 테마 */
  theme: 'default' | 'primary' | 'secondary';
}

const Button = ({ children, theme, onClick }: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick} theme={theme}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: 'default',
};

const StyledButton = styled.button`
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
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.theme === 'default' &&
    css`
      background-color: #e9ecef;
      color: #343a40;
      &:hover {
        background-color: #f1f3f5;
      }
      &:active {
        background-color: #dee2e6;
      }
    `}

  ${(props) =>
    props.theme === 'primary' &&
    css`
      background-color: #20c997;
      color: white;
      &:hover {
        background-color: #38d9a9;
      }
      &:active {
        background-color: #12b886;
      }
    `}

  ${(props) =>
    props.theme === 'secondary' &&
    css`
      background-color: #3182f6;
      color: white;
      &:hover {
        background-color: #3e82e2;
      }
      &:active {
        background-color: #3e73bd;
      }
    `}
`;

export default Button;
