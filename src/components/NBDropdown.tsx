import { useEffect, useRef } from 'react';
import { StyledDropdown } from '@/styles/NBDropdown.styles';

export interface DropdownProps {
  dropdown?: boolean;
  onClickOutside?: () => void;
  children?: React.ReactNode;
}

export const NBDropdown = ({
  dropdown,
  children,
  onClickOutside,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        onClickOutside && onClickOutside();
    };

    document.addEventListener('mousedown', handler, true);
  }, [onClickOutside]);

  if (!dropdown) return null;

  return <StyledDropdown ref={ref}>{children}</StyledDropdown>;
};
