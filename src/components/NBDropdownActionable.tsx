import { useState } from 'react';
import { NBDropdown } from './NBDropdown';
import { UnstyledButton } from '@/styles/NBDropdownActionable.styles';

export interface NBDropdownActionableProps {
  children?: React.ReactNode;
  dropdownContent: React.ReactNode;
}

export const NBDropdownActionable = ({
  children,
  dropdownContent,
}: NBDropdownActionableProps) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div style={{ width: 'max-content', position: 'relative' }}>
      <UnstyledButton
        type='button'
        aria-haspopup='menu'
        aria-expanded={dropdown}
        onClick={() => setDropdown(true)}>
        {children}
      </UnstyledButton>
      <NBDropdown dropdown={dropdown} onClickOutside={() => setDropdown(false)}>
        {dropdownContent}
      </NBDropdown>
    </div>
  );
};
