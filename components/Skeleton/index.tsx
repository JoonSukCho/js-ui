import styled, { css, keyframes } from 'styled-components';

export interface SkeletonProps {
  /** 스켈레톤의 width */
  width: number;
  /** 스켈레톤의 height */
  height: number;
  /** 스켈레톤 모양 */
  variant: 'text' | 'circle' | 'rect';
}

const Skeleton = ({ width, height, variant }: SkeletonProps) => {
  return <SkeletonContainer width={width} height={height} variant={variant} />;
};

const skeletonGradient = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

const SkeletonContainer = styled.div<SkeletonProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
  -webkit-animation: ${skeletonGradient} 1.8s infinite ease-in-out;

  /* variant */
  ${({ variant }) =>
    variant === 'text' &&
    css`
      border-radius: 8px;
    `}
  ${({ variant }) =>
    variant === 'circle' &&
    css`
      border-radius: 50%;
    `}
`;

export default Skeleton;
