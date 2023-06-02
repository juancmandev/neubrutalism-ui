import { StyledContent } from '@/styles/Globals';
import { StyledBox } from '@/styles/NBBox.styles';

export interface NBBoxProps {
  children: React.ReactNode;
  bgColor?: string;
}

export const NBBox = ({ children }: NBBoxProps) => (
  <StyledBox>
    <StyledContent>{children}</StyledContent>
  </StyledBox>
);
