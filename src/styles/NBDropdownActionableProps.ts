import styled from 'styled-components';

interface UnstyledButtonProps {
  width?: string;
}

export const UnstyledButton = styled.button<UnstyledButtonProps>`
  width: ${({ width }) => width || '100%'};
  background-color: transparent;
  font-weight: bold;
  font-size: 1.2rem;
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
