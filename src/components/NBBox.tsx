import { StyledBox } from '@/styles/NBBox.styles';

export interface NBBoxProps {
  bgColor?: string;
  children: React.ReactNode;
}

export const NBBox = ({ children, bgColor }: NBBoxProps) => (
  <StyledBox bgColor={bgColor}>{children}</StyledBox>
);
