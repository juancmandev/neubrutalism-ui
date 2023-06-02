import { StyledButton, StyledButtonBg } from '@/styles/NBButton.styles';

export interface NBButtonProps {
  bgColor?: string;
  debugSafeArea?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaHaspopup?:
    | boolean
    | 'dialog'
    | 'menu'
    | 'false'
    | 'true'
    | 'listbox'
    | 'tree'
    | 'grid'
    | undefined;
}

export const NBButton = ({
  children,
  bgColor,
  onClick,
  type,
  ariaHaspopup,
  debugSafeArea,
}: NBButtonProps) => (
  <StyledButton
    type={type}
    aria-haspopup={ariaHaspopup}
    onClick={onClick}
    debugSafeArea={debugSafeArea}
    bgColor={bgColor}>
    <StyledButtonBg id='buttonBg' bgColor={bgColor}>
      {children}
    </StyledButtonBg>
  </StyledButton>
);
