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
  border: ${({ debugSafeArea }) => debugSafeArea && '2px solid red'};
  #buttonBg {
    animation: ${({ animation }) => animation && animations(animation)?.out}
      0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:hover #buttonBg {
    animation: ${({ animation }) => animation && animations(animation)?.in} 0.2s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

export const StyledButtonBg = styled.div<NBButtonProps>`
  padding: 8px 12px;
  border: 2px solid #000;
  box-shadow: 4px 4px 0px #000;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
`;

export const StyStyledButtonContent = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
