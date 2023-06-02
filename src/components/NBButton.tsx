import { StyledButton, StyledButtonBg } from '@/styles/NBButton.styles';

export interface NBButtonProps {
  bgColor?: string;
  debugSafeArea?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NBButton = ({
  children,
  bgColor,
  onClick,
  debugSafeArea,
}: NBButtonProps) => (
  <StyledButton
    onClick={onClick}
    debugSafeArea={debugSafeArea}
    bgColor={bgColor}>
    <StyledButtonBg id='buttonBg' bgColor={bgColor}>
      {children}
    </StyledButtonBg>
  </StyledButton>
);
