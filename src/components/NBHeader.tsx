import {
  StyledHeader,
  StyledLogo,
  StyledNavContainer,
  StyledNavItemContainer,
  StyledNavItems,
} from '@/styles/NBHeader.styles';

export interface NBHeaderProps {
  logo?: React.ReactNode;
  navItems?: React.ReactNode[];
  logoBgColor?: string;
  navItemsHoverBgColor?: string;
}

export const NBHeader = (props: NBHeaderProps) => (
  <StyledHeader>
    <StyledLogo bgColor={props.logoBgColor}>{props.logo}</StyledLogo>
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
  </StyledHeader>
);
