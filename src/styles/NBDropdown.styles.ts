import { DropdownProps } from '@/components/NBDropdown';
import styled from 'styled-components';

export const StyledDropdown = styled.ul<DropdownProps>`
  float: right;
  position: absolute;
  top: auto;
  padding: 12px 0;
  box-shadow: 4px 4px 0 #000;
  list-style: none;
  background-color: #fff;
  border: 2px solid #000;
  display: ${({ dropdown }) => (dropdown ? 'block' : 'none')};
`;
