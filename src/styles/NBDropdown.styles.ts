import { DropdownProps } from '@/components/NBDropdown';
import styled from 'styled-components';

export const StyledDropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 0%;
  left: calc(100% + 4px);
  padding: 20px 0;
  box-shadow: 4px 4px 0 #000;
  list-style: none;
  background-color: #fff;
  border: 2px solid #000;
`;
