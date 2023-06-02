import styled from 'styled-components';
import { NBButtonProps } from '@/components/NBButton';

export const StyledButton = styled.button<NBButtonProps>`
  padding: 2px 0px 0px 2px;
  border: none;
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  border-color: ${({ debugSafeArea }) => debugSafeArea && 'red'};
  #buttonBg {
    transform: translate(0, 0);
    transition: 0.14s ease-out;
  }
  &:hover #buttonBg {
    transform: translate(-4px, -4px);
    transition: 0.14s ease-out;
    box-shadow: 4px 4px 0 #000;
  }
  &:focus-within #buttonBg {
    transform: translate(-4px, -4px);
    transition: 0.14s ease-out;
    box-shadow: 4px 4px 0 #000;
  }
  &:active #buttonBg {
    transform: translate(0, 0);
    transition: 0.14s ease-out;
    box-shadow: none;
  }
`;

export const StyledButtonBg = styled.div<NBButtonProps>`
  padding: 8px 12px;
  border: 2.5px solid #000;
  position: relative;
  font-weight: bold;
  font-size: 1.1rem;
  font-family: sans-serif;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
`;
