import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavElements";
import { Button } from "../ButtonElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Imperial Coin
              {/* <img src={require('../../assets/Logo2.png').default} alt="logo"/> */}
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="ecosystem"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Ecosystem
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="community"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Community
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  href="//www.twitter.com/ImperialCoin_"
                  target="_blank"
                  aria-label="Twitter"
                  // to="signup"
                  // smooth={true}
                  // duration={500}
                  // spy={true}
                  // exact="true"
                  // offset={-80}
                >
                  Blog
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <Button
                href="//t.me/imperialcoinOfficial"
                target="_blank"
                aria-label="Telegram"
              >
                Airdrop
              </Button>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
