import { StyledDropdown } from '@/styles/NBDropdown.styles';

export interface DropdownProps {
  dropdown?: boolean;
  submenus?: string[];
  depthLevel?: number;
  children?: React.ReactNode;
}

export const NBDropdown = ({ dropdown, children }: DropdownProps) => {
  return <StyledDropdown dropdown={dropdown}>{children}</StyledDropdown>;
};
