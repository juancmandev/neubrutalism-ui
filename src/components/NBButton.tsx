import {
  StyledButton,
  StyledButtonBg,
  StyStyledButtonContent,
} from '@/styles/NBButton.styles';

export type animationDirectionType = 'top' | 'topLeft' | undefined;

export interface NBButtonProps {
  bgColor?: string;
  debugSafeArea?: boolean;
  children: React.ReactNode;
  animation?: animationDirectionType;
}

export const NBButton = ({
  children,
  bgColor,
  animation,
  debugSafeArea,
}: NBButtonProps) => (
  <StyledButton debugSafeArea={debugSafeArea} animation={animation}>
    <StyledButtonBg id='buttonBg' bgColor={bgColor}>
      <StyStyledButtonContent>{children}</StyStyledButtonContent>
    </StyledButtonBg>
  </StyledButton>
);
