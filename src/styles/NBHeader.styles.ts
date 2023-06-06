import styled from 'styled-components';

interface hoverBgColorProps {
  hoverBgColor?: string;
}

interface bgColorProps {
  bgColor?: string;
}

export const StyledHeader = styled.header`
  min-height: 46px;
  border: 2px solid #000;
  border-right: none;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.section<bgColorProps>`
  height: 100%;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    height: 100%;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    border-right: 2px solid #000;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledNavContainer = styled.nav`
  height: 100%;
  border-left: 2px solid #000;
`;

export const MediaMidScreen = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MediaSmallScreen = styled.div<hoverBgColorProps>`
  height: 100%;
  > button {
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 3.5px 12px;
    border: none;
    cursor: pointer;
    border-left: 2px solid #000;
    &:hover {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
    &:focus-within {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
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
    padding: 12px 16px;
    display: flex;
    align-items: center;
    height: 100%;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
    &:focus-within {
      text-decoration: underline;
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
  }
`;

export const StyledSidebar = styled.dialog`
  margin: auto 0;
  overflow-y: auto;
  padding: 0;
  min-width: 120px;
  min-height: 100vh;
  font-family: sans-serif;
  border: 2px solid #000;
  background-color: #fff;
  box-shadow: 4px 4px 0 #000;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledSidebarLogo = styled.section<bgColorProps>`
  margin-bottom: 20px;
  > a {
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px solid #000;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : '#ff5e8c')};
    &:hover {
      text-decoration: underline;
    }
    &:focus-within {
      text-decoration: underline;
    }
  }
`;

export const StyledSidebarNavItems = styled.ul`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const StyledSidebarNavItemContainer = styled.li<hoverBgColorProps>`
  display: flex;
  align-content: center;
  align-items: center;
  font-weight: bold;
  > a {
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #000;
    border-top: 2px solid #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
    &:focus-within {
      text-decoration: underline;
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
  }
  :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    > button {
      width: 100%;
      height: 100%;
      padding: 8px 0;
      cursor: pointer;
      border: none;
      border-radius: 0px;
      background-color: transparent;
    }
    &:hover {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
    &:focus-within {
      background-color: ${({ hoverBgColor }) =>
        hoverBgColor ? hoverBgColor : '#fba979'};
    }
  }
`;
