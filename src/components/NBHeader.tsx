import { useEffect, useRef, useState } from 'react';
import { CloseIcon, HamburgerIcon } from '@/assets/icons';
import {
  MediaMidScreen,
  MediaSmallScreen,
  StyledHeader,
  StyledLogo,
  StyledNavContainer,
  StyledNavItemContainer,
  StyledNavItems,
  StyledSidebar,
  StyledSidebarLogo,
  StyledSidebarNavItemContainer,
  StyledSidebarNavItems,
} from '@/styles/NBHeader.styles';

export interface NBHeaderProps {
  logo?: React.ReactNode;
  navItems?: React.ReactNode[];
  logoBgColor?: string;
  navItemsHoverBgColor?: string;
}

export const NBHeader = (props: NBHeaderProps) => {
  const sideBarRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open ? sideBarRef.current?.showModal() : sideBarRef.current?.close();
  }, [open]);

  const closeDialogOnClick = () => setOpen(false);

  const handleDialogClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (e.currentTarget.tagName !== 'DIALOG') return;

    const rect = e.currentTarget.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) {
      e.currentTarget.close();
      setOpen(false);
    }
  };

  return (
    <StyledHeader>
      <StyledLogo bgColor={props.logoBgColor}>{props.logo}</StyledLogo>
      <MediaMidScreen>
        <StyledNavContainer>
          <StyledNavItems>
            {props.navItems?.map((navItem, index) => (
              <StyledNavItemContainer
                hoverBgColor={props.navItemsHoverBgColor}
                key={index}>
                {navItem}
              </StyledNavItemContainer>
            ))}
          </StyledNavItems>
        </StyledNavContainer>
      </MediaMidScreen>
      <MediaSmallScreen hoverBgColor={props.navItemsHoverBgColor}>
        <button onClick={() => setOpen(true)}>
          <HamburgerIcon />
        </button>
      </MediaSmallScreen>
      <StyledSidebar onClick={handleDialogClick} ref={sideBarRef}>
        <StyledSidebarLogo
          onClick={closeDialogOnClick}
          bgColor={props.logoBgColor}>
          {props.logo}
        </StyledSidebarLogo>
        <StyledSidebarNavItems>
          {props.navItems?.map((navItem, index) => (
            <StyledSidebarNavItemContainer
              onClick={closeDialogOnClick}
              key={index}>
              {navItem}
            </StyledSidebarNavItemContainer>
          ))}
          <StyledSidebarNavItemContainer>
            <button onClick={closeDialogOnClick}>
              <CloseIcon />
            </button>
          </StyledSidebarNavItemContainer>
        </StyledSidebarNavItems>
      </StyledSidebar>
    </StyledHeader>
  );
};
