import styled from 'styled-components';
import { NBBoxProps } from '@/components/NBBox';

export const StyledBox = styled.div<NBBoxProps>`
  font-weight: bold;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
`;
