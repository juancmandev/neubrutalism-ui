import styled from 'styled-components';

interface hoverBgColorProps {
  hoverBgColor?: string;
}

interface bgColorProps {
  bgColor?: string;
}

export const StyledHeader = styled.header`
  padding: 0;
  border: 2px solid #000;
  border-right: none;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.section<bgColorProps>`
  padding: 12px 16px;
  border-right: 2px solid #000;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
`;

export const StyledNavContainer = styled.nav`
  height: 100%;
  border-left: 2px solid #000;
`;

export const StyledNavItems = styled.ul`
  height: 100%;
  padding: 0;
  display: flex;
  list-style: none;
  > li {
    border-right: 2px solid #000;
  }
`;

export const StyledNavItemContainer = styled.li<hoverBgColorProps>`
  display: flex;
  align-content: center;
  align-items: center;
  font-weight: bold;
  > a {
    margin: 0;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    height: 100%;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#ff5e8c'};
    }
  }
`;
