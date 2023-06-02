import { useState, useEffect, useRef } from 'react';
import { NBDropdown } from './NBDropdown';
import { StyledMenuItem, UnstyledButton } from '@/styles/NBMenuItem';

export interface NBMenuItemProps {
  items?: any;
}

export const NBMenuItem = ({ items }: NBMenuItemProps) => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef<HTMLLIElement | null>(null);

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
    <li
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}>
      <div style={{ maxWidth: 'max-content' }}>
        <UnstyledButton
          type='button'
          aria-haspopup='menu'
          aria-expanded={dropdown ? true : false}
          onClick={() => setDropdown((prev) => !prev)}>
          {items.title}
        </UnstyledButton>
        <NBDropdown dropdown={dropdown}>
          <StyledMenuItem>
            <UnstyledButton>Button</UnstyledButton>
          </StyledMenuItem>
        </NBDropdown>
      </div>
    </li>
  );
};
