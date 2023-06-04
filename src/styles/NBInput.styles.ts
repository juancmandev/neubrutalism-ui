import styled from 'styled-components';
import { InputWrapperProps } from '@/components/NBInput';

export const StyledInputWrapper = styled.section<InputWrapperProps>`
  width: 50%;
  border: 2px solid;
  border-color: ${({ hasError }) => (hasError ? 'red' : '#000')};
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.1rem;
`;

export const StyledErrorText = styled.span`
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
  :empty::before {
    display: inline-block;
    content: ' ';
  }
`;
