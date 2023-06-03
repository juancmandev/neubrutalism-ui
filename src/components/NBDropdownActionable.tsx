import { useState, useEffect, useRef } from 'react';
import { NBDropdown } from './NBDropdown';
import { UnstyledButton } from '@/styles/NBDropdownActionableProps';

export interface NBDropdownActionableProps {
  children?: React.ReactNode;
  dropdownContent: React.ReactNode;
}

export const NBDropdownActionable = ({
  children,
  dropdownContent,
}: NBDropdownActionableProps) => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: any): any => {
      if (dropdown && ref.current && !ref.current.contains(event.currentTarget))
        setDropdown(false);
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => window.innerWidth > 960 && setDropdown(true);

  const onMouseLeave = () => window.innerWidth > 960 && setDropdown(false);

  const closeDropdown = () => dropdown && setDropdown(false);

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
      style={{ maxWidth: 'max-content' }}>
      <UnstyledButton
        type='button'
        aria-haspopup='menu'
        aria-expanded={dropdown ? true : false}
        onClick={() => setDropdown((prev) => !prev)}>
        {children}
      </UnstyledButton>
      <NBDropdown dropdown={dropdown}>{dropdownContent}</NBDropdown>
    </div>
  );
};
