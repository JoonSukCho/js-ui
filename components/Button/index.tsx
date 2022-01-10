import styled from 'styled-components';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭 했을 때 호출할 콜백 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 테마 */
  theme: 'primary' | 'secondary';
};

const Button = ({ children, theme, onClick }: ButtonProps) => {
  if (theme === 'primary') {
    return (
      <PrimaryButton type="button" onClick={onClick}>
        {children}
      </PrimaryButton>
    );
  }

  if (theme === 'secondary') {
    return (
      <SecondaryButton type="button" onClick={onClick}>
        {children}
      </SecondaryButton>
    );
  }

  return (
    <PrimaryButton type="button" onClick={onClick}>
      {children}
    </PrimaryButton>
  );
};

Button.defaultProps = {
  theme: 'primary',
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
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #20c997;
  color: white;
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;

const SecondaryButton = styled(StyledButton)`
  background-color: #e9ecef;
  color: #343a40;
  &:hover {
    background: #f1f3f5;
  }
  &:active {
    background: #dee2e6;
  }
`;

export default Button;
