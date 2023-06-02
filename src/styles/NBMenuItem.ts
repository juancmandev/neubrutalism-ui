import styled from 'styled-components';
import { NBMenuItemProps } from '@/components/NBMenuItem';

export const StyledMenuItem = styled.li<NBMenuItemProps>`
  width: 100%;
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

interface UnstyledButtonProps {
  width?: string;
}

export const UnstyledButton = styled.button<UnstyledButtonProps>`
  width: ${({ width }) => width || '100%'};
  background-color: transparent;
  border: none;
  padding: 4px 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #eee;
  }
  &:focus-within {
    background-color: #eee;
  }
`;
