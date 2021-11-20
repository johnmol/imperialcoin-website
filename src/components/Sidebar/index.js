import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkTwo,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="ecosystem" onClick={toggle}>
            Ecosystem
          </SidebarLink>
          <SidebarLink to="community" onClick={toggle}>
            Community
          </SidebarLink>
          <SidebarLinkTwo
            href="//www.medium.com/@imperialcoin"
            target="_blank"
            aria-label="Medium"
            // onClick={toggle}
          >
            Blog
          </SidebarLinkTwo>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            href="//t.me/imperialcoinOfficial"
            target="_blank"
            aria-label="Telegram"
          >
            Telegram
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
