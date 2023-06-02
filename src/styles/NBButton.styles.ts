import styled, { keyframes } from 'styled-components';
import { NBButtonProps, animationDirectionType } from '@/components/NBButton';

const animations = (animation: animationDirectionType) => {
  switch (animation) {
    case 'top':
      return {
        in: keyframes`
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, -4px);
        }`,
        out: keyframes`
  0% {
    transform: translate(0, -4px);
  }
  100% {
    transform: translate(0, 0);
  }
        `,
      };
    case 'topLeft':
      return {
        in: keyframes`
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-4px, -4px);
        }`,
        out: keyframes`
  0% {
    transform: translate(-4px, -4px);
  }
  100% {
    transform: translate(0, 0);
  }`,
      };
    default:
      return;
  }
};

export const StyledButton = styled.button<NBButtonProps>`
  padding: 4px;
  border: none;
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  border-color: ${({ debugSafeArea }) => debugSafeArea && 'red'};
  #buttonBg {
    animation: ${({ animation }) => animation && animations(animation)?.out}
      0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:hover #buttonBg {
    animation: ${({ animation }) => animation && animations(animation)?.in} 0.2s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:focus-within #buttonBg {
    animation: ${({ animation }) => animation && animations(animation)?.in} 0.2s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:focus-within {
    outline: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')} solid 2px;
  }
`;

export const StyledButtonBg = styled.div<NBButtonProps>`
  padding: 8px 12px;
  border: 2px solid #000;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
`;

interface ShadowProps {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
}

export const StyledButtonShadow = styled.div<ShadowProps>`
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  background-color: #000;
  position: absolute;
  z-index: -1;
  top: ${({ top }) => top && `${top + 4}px`};
  left: ${({ left }) => left && `${left + 4}px`};
`;

export const StyStyledButtonContent = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
