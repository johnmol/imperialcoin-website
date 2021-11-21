import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  /* height: auto;
  width: auto;
  max-height: 72px;
  max-width: 250; */
  justify-self: flex-start;
  cursor: pointer;
  /* object-fit: contain; */
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: hsl(204 100% 54%);
  }

  &.active {
    border-bottom: 3px solid hsl(204 100% 54%);
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: hsl(204 100% 54%);
  font-size: 16px;
  outline: none;
  border: hsl(204 100% 54%) 4px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.25em hsl(204 100% 54%);
  box-shadow: inset 0 0 0.5em 0 hsl(204 100% 54%), 0 0 0.5em 0 hsl(204 100% 54%);

  &:hover, &:focus {
    transition: all 0.2s ease-in-out;
    background: hsl(204 100% 54%);
    color: hsl(204 100% 16%);
    text-shadow: none;
  }
`;
