import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';

interface IconButtonStyleProps {
  /** 버튼 색상 */
  color?: string;
}

export interface IconButtonProps extends IconButtonStyleProps {
  /** 버튼 아이콘 */
  icons: React.ComponentType<IconBaseProps>;
  /** 버튼 사이즈 */
  size?: number;
  /** 클릭 했을 때 호출할 콜백 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
  icons: Icon,
  color = '#9e9e9e',
  size = 20,
  onClick,
}: IconButtonProps) => {
  return (
    <Button type="button" onClick={onClick} color={color}>
      <Icon size={size} />
    </Button>
  );
};

const Button = styled.button<IconButtonStyleProps>`
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
  color: ${({ color }) => color};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

export default IconButton;
