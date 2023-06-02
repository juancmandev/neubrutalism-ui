import { useEffect, useRef, useState } from 'react';
import {
  StyledButton,
  StyledButtonBg,
  StyStyledButtonContent,
  StyledButtonShadow,
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
}: NBButtonProps) => {
  const buttonBgRef = useRef<HTMLDivElement | null>(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    if (buttonBgRef.current) setShowShadow(true);
    else setShowShadow(false);
  }, [buttonBgRef]);

  return (
    <StyledButton
      debugSafeArea={debugSafeArea}
      animation={animation}
      bgColor={bgColor}>
      <StyledButtonBg ref={buttonBgRef} id='buttonBg' bgColor={bgColor}>
        <StyStyledButtonContent>{children}</StyStyledButtonContent>
      </StyledButtonBg>
      {showShadow && (
        <StyledButtonShadow
          aria-hidden
          width={buttonBgRef?.current?.offsetWidth}
          height={buttonBgRef?.current?.offsetHeight}
          top={buttonBgRef?.current?.offsetTop}
          left={buttonBgRef?.current?.offsetLeft}
        />
      )}
    </StyledButton>
  );
};
